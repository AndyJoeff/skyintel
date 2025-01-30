// Aircraft comparison handling
class AircraftComparison {
    constructor() {
        this.primaryAircraftId = this.getAircraftIdFromUrl();
        this.comparedAircraft = new Set();
        this.maxComparisons = 3;
        this.compareIds = this.getCompareIdsFromUrl();
        this.init();
    }

    // Add this method to handle compare parameter:
    getCompareIdsFromUrl() {
        const params = new URLSearchParams(window.location.search);
        const compareIds = params.getAll('compare').map(Number);
        return compareIds.filter(id => !isNaN(id));
    }

    async init() {
        try {
            // Clear any existing state
            this.comparedAircraft.clear();

            // Load primary aircraft first
            const primaryAircraft = await this.loadPrimaryAircraft();
            if (!primaryAircraft) throw new Error('Failed to load primary aircraft');

            // Set up event listeners early
            this.setupEventListeners();
            this.initializeComparisonSlots();

            // Load comparison aircraft sequentially
            if (this.compareIds.length > 0) {
                for (const id of this.compareIds) {
                    const comparisonAircraft = await this.addAircraftToComparison(id);
                    if (!comparisonAircraft) {
                        console.warn(`Failed to load comparison aircraft ${id}`);
                    }
                }
            }

            // Final update after all aircraft are loaded
            this.updateComparison();

        } catch (error) {
            console.error('Error during initialization:', error);
            this.handleError(error);
        }
    }

    async loadPrimaryAircraft() {
        try {
            // In production, this would be an API call
            const aircraft = mockDatabase.aircraft.find(
                a => a.id === parseInt(this.primaryAircraftId)
            );

            if (!aircraft) {
                throw new Error('Aircraft not found');
            }

            this.renderAircraftSlot(aircraft, 'primary-aircraft');
            this.comparedAircraft.add(parseInt(this.primaryAircraftId));

            // Ensure the primary aircraft data is immediately visible
            this.updateComparison();

            return aircraft;
        } catch (error) {
            console.error('Error loading aircraft:', error);
            this.handleError(error);
            throw error; // Re-throw to be caught by init()
        }
    }

    getAircraftIdFromUrl() {
        const params = new URLSearchParams(window.location.search);
        return params.get('id');
    }

    renderAircraftSlot(aircraft, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = `
            <div class="comp-thumbnail">
                <img src="images/aircraft/${aircraft.images[0].url}" 
                     alt="${aircraft.model}" 
                     class="comp-aircraft-img">
            </div>
            <div class="comp-info">
                <h3 class="comp-model">${aircraft.model}</h3>
                <p class="comp-manufacturer">${aircraft.manufacturer}</p>
            </div>
            ${containerId !== 'primary-aircraft' ?
                '<button class="comp-remove-btn">×</button>' : ''}
        `;
    }

    initializeComparisonSlots() {
        this.renderAircraftSelector();
    }

    renderAircraftSelector() {
        const availableAircraft = mockDatabase.aircraft.filter(
            aircraft => !this.comparedAircraft.has(aircraft.id)
        );

        const selectorHtml = `
            <div class="comp-selector">
                <div class="comp-selector-header">
                    <h3>Select Aircraft to Compare</h3>
                    <button class="comp-selector-close">×</button>
                </div>
                <div class="comp-selector-filters">
                <input type="text" 
                       class="comp-search-box" 
                       placeholder="Search aircraft by model or manufacturer">
                <div class="comp-filter-options">
                    <button class="comp-filter-btn active" data-filter="all">All</button>
                    <button class="comp-filter-btn" data-filter="Commercial">Commercial</button>
                    <button class="comp-filter-btn" data-filter="Private">Private</button>
                    <button class="comp-filter-btn" data-filter="Military">Military</button>
                </div>
            </div>
                <div class="comp-selector-content">
                    ${availableAircraft.map(aircraft => `
                        <div class="comp-selector-item" data-id="${aircraft.id}">
                            <img src="images/aircraft/${aircraft.images[0].url}" 
                                 alt="${aircraft.model}" 
                                 class="comp-selector-thumb">
                            <div class="comp-selector-info">
                                <h4>${aircraft.model}</h4>
                                <p>${aircraft.manufacturer}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        const selectorContainer = document.createElement('div');
        selectorContainer.className = 'comp-selector-container';
        selectorContainer.innerHTML = selectorHtml;
        document.body.appendChild(selectorContainer);
        this.setupSelectorEvents();
    }

    setupSelectorEvents() {
        const searchBox = document.querySelector('.comp-search-box');
        const filterBtns = document.querySelectorAll('.comp-filter-btn');

        searchBox.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            this.filterAircraft(searchTerm, this.currentFilter);
        });

        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentFilter = btn.dataset.filter;
                this.filterAircraft(searchBox.value.toLowerCase(), this.currentFilter);
            });
        });
    }

    filterAircraft(searchTerm, filterType) {
        const filteredAircraft = mockDatabase.aircraft.filter(aircraft => {
            const matchesSearch = (
                aircraft.model.toLowerCase().includes(searchTerm) ||
                aircraft.manufacturer.toLowerCase().includes(searchTerm)
            );
            const matchesFilter = filterType === 'all' || aircraft.type === filterType;
            return matchesSearch && matchesFilter && !this.comparedAircraft.has(aircraft.id);
        });

        this.renderFilteredAircraft(filteredAircraft);
    }

    renderFilteredAircraft(aircraft) {
        const container = document.querySelector('.comp-selector-content');
        container.innerHTML = aircraft.length ? aircraft.map(a => `
            <div class="comp-selector-item" data-id="${a.id}">
                <img src="images/aircraft/${a.images[0].url}" alt="${a.model}" class="comp-selector-thumb">
                <div class="comp-selector-info">
                    <h4>${a.model}</h4>
                    <p>${a.manufacturer}</p>
                </div>
            </div>
        `).join('') : '<p class="comp-no-results">No aircraft found matching your criteria</p>';
    }

    setupEventListeners() {
        // Add aircraft button
        document.querySelector('.comp-add-btn').addEventListener('click', () => {
            if (this.comparedAircraft.size >= this.maxComparisons) {
                this.showNotification('Maximum comparison limit reached');
                return;
            }
            document.querySelector('.comp-selector-container').classList.add('active');
        });

        // Aircraft selection
        document.addEventListener('click', (e) => {
            const selectorItem = e.target.closest('.comp-selector-item');
            if (selectorItem) {
                const aircraftId = parseInt(selectorItem.dataset.id);
                this.addAircraftToComparison(aircraftId);
            }
        });

        // Remove aircraft
        document.addEventListener('click', (e) => {
            if (e.target.matches('.comp-remove-btn')) {
                const slot = e.target.closest('.comp-aircraft-slot');
                this.removeAircraftFromComparison(slot);
            }
        });

        // Close selector
        document.addEventListener('click', (e) => {
            if (e.target.matches('.comp-selector-close')) {
                document.querySelector('.comp-selector-container').classList.remove('active');
            }
        });
    }

    addAircraftToComparison(aircraftId) {

        const aircraft = mockDatabase.aircraft.find(a => a.id === aircraftId);
        if (!aircraft) return;

        // Create new slot
        const newSlot = document.createElement('div');
        newSlot.className = 'comp-aircraft-slot';
        newSlot.dataset.aircraftId = aircraftId;

        // Add the HTML content directly to the new slot
        newSlot.innerHTML = `
        <div class="comp-thumbnail">
            <img src="images/aircraft/${aircraft.images[0].url}" 
                 alt="${aircraft.model}" 
                 class="comp-aircraft-img">
        </div>
        <div class="comp-info">
            <h3 class="comp-model">${aircraft.model}</h3>
            <p class="comp-manufacturer">${aircraft.manufacturer}</p>
        </div>
        <button class="comp-remove-btn">×</button>
    `;

        // Insert before the empty slot
        const emptySlot = document.querySelector('.comp-aircraft-slot.empty');
        emptySlot.parentNode.insertBefore(newSlot, emptySlot);

        this.comparedAircraft.add(aircraftId);
        document.querySelector('.comp-selector-container').classList.remove('active');

        // Hide empty slot if max comparisons reached
        if (this.comparedAircraft.size >= this.maxComparisons) {
            emptySlot.style.display = 'none';
        }

        // Update the comparison immediately
        this.updateComparison();
    }

    removeAircraftFromComparison(slot) {
        const aircraftId = parseInt(slot.dataset.aircraftId);
        this.comparedAircraft.delete(aircraftId);
        slot.remove();
        // Show empty slot when we're below max comparisons
        const emptySlot = document.querySelector('.comp-aircraft-slot.empty');
        if (emptySlot) {
            emptySlot.style.display = 'flex';
        }

        this.updateComparison();
    }

    showNotification(message) {
        // Simple notification implementation
        alert(message); // Replace with custom notification in production
    }

    handleError(error) {
        // Error handling implementation
        console.error(error);
        this.showNotification('An error occurred while loading aircraft data');
    }


    // more codes...

}