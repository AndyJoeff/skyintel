// Aircraft comparison handling
class AircraftComparison {
    constructor() {
        this.primaryAircraftId = this.getAircraftIdFromUrl();
        this.comparedAircraft = new Set();
        this.maxComparisons = 3;
        this.compareIds = this.getCompareIdsFromUrl();
        this.init();
        this.initializeActionButtons();
        this.initializeBookmarkState();

        const showBookmarksBtn = document.querySelector('.comp-show-bookmarks');
        if (showBookmarksBtn) {
            showBookmarksBtn.addEventListener('click', () => this.showBookmarks());
        }
    }

    // Add this method to handle compare parameter:
    getCompareIdsFromUrl() {
        const params = new URLSearchParams(window.location.search);
        const compareIds = params.getAll('compare').map(Number);
        return compareIds.filter(id => !isNaN(id));
    }


    initializeActionButtons() {
        const exportBtn = document.querySelector('.comp-export');
        const bookmarkBtn = document.querySelector('.comp-bookmark');

        if (exportBtn) {
            exportBtn.addEventListener('click', () => this.showExportOptions());
        }

        if (bookmarkBtn) {
            bookmarkBtn.addEventListener('click', () => this.handleBookmark());
        }
    }

    showExportOptions() {
        // Create export menu if it doesn't exist
        let exportMenu = document.querySelector('.comp-export-menu');

        if (!exportMenu) {
            exportMenu = document.createElement('div');
            exportMenu.className = 'comp-export-menu';
            exportMenu.innerHTML = `
                <button class="comp-export-option" data-format="pdf">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <path d="M14 2v6h6"/>
                        <path d="M16 13H8"/>
                        <path d="M16 17H8"/>
                        <path d="M10 9H8"/>
                    </svg>
                    Export as PDF
                </button>
                <button class="comp-export-option" data-format="csv">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <path d="M14 2v6h6"/>
                        <path d="M16 13H8"/>
                        <path d="M16 17H8"/>
                    </svg>
                    Export as CSV
                </button>
            `;

            document.querySelector('.comp-options').appendChild(exportMenu);

            // Add click handlers for export options
            exportMenu.querySelectorAll('.comp-export-option').forEach(option => {
                option.addEventListener('click', (e) => {
                    const format = e.currentTarget.dataset.format;
                    this.exportComparison(format);
                    exportMenu.classList.remove('active');
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.comp-export-menu') &&
                    !e.target.closest('.comp-export')) {
                    exportMenu.classList.remove('active');
                }
            });
        }

        exportMenu.classList.toggle('active');
    }

    exportComparison(format) {
        const comparisonData = this.getComparisonData();

        switch (format) {
            case 'csv':
                this.exportToCSV(comparisonData);
                break;
            case 'pdf':
                this.exportToPDF(comparisonData);
                break;
        }
    }

    getComparisonData() {
        return Array.from(this.comparedAircraft).map(id => {
            const aircraft = mockDatabase.aircraft.find(a => a.id === id);
            return {
                model: aircraft.model,
                manufacturer: aircraft.manufacturer,
                safetyScore: aircraft.safetyScore,
                incidentRate: aircraft.incidentRate,
                totalFlights: aircraft.totalFlights,
                reliabilityRate: aircraft.operationalMetrics.reliabilityMetrics.targetDispatchReliability
            };
        });
    }

    exportToCSV(data) {
        const headers = 'Model,Manufacturer,Safety Score,Incident Rate,Total Flights,Reliability Rate\n';
        const rows = data.map(item =>
            `${item.model},${item.manufacturer},${item.safetyScore},${item.incidentRate},${item.totalFlights},${item.reliabilityRate}`
        ).join('\n');

        const content = headers + rows;
        this.downloadFile(content, 'aircraft-comparison.csv', 'text/csv');
    }

    exportToPDF(data) {
        // Initialize jsPDF with window.jsPDF
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Add title
        doc.setFontSize(16);
        doc.text('Aircraft Safety Comparison Report', 20, 20);

        // Add date
        doc.setFontSize(10);
        doc.text(`Generated: ${new Date().toLocaleString()}`, 20, 30);

        // Add comparison data
        let yPos = 40;
        data.forEach((aircraft, index) => {
            // Aircraft header
            doc.setFontSize(14);
            doc.setFont(undefined, 'bold');
            doc.text(`Aircraft ${index + 1}: ${aircraft.model}`, 20, yPos);
            yPos += 10;

            // Aircraft details
            doc.setFontSize(10);
            doc.setFont(undefined, 'normal');

            // Format each metric
            const metrics = [
                `Manufacturer: ${aircraft.manufacturer}`,
                `Safety Score: ${aircraft.safetyScore}`,
                `Incident Rate: ${aircraft.incidentRate}%`,
                `Total Flights: ${aircraft.totalFlights.toLocaleString()}`,
                `Reliability Rate: ${aircraft.reliabilityRate}%`
            ];

            metrics.forEach(metric => {
                doc.text(metric, 30, yPos);
                yPos += 8;
            });

            yPos += 10; // Add space between aircraft
        });

        // Add footer
        doc.setFontSize(8);
        doc.text('Generated by Aircraft Safety Analyzer', 20, doc.internal.pageSize.height - 10);

        // Save the PDF
        doc.save('aircraft-comparison.pdf');
    }
    downloadFile(content, fileName, contentType) {
        const blob = new Blob([content], { type: contentType });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        link.click();
        URL.revokeObjectURL(url);
    }

    initializeBookmarkState() {
        // Check if current comparison is bookmarked
        const bookmarks = this.getBookmarks();
        const currentIds = Array.from(this.comparedAircraft).sort().join(',');
        const isBookmarked = bookmarks.some(b =>
            b.aircraftIds.sort().join(',') === currentIds
        );

        this.updateBookmarkButton(isBookmarked);
    }

    handleBookmark() {
        const bookmarks = this.getBookmarks();
        const currentIds = Array.from(this.comparedAircraft).sort().join(',');
        const existingIndex = bookmarks.findIndex(b =>
            b.aircraftIds.sort().join(',') === currentIds
        );

        if (existingIndex >= 0) {
            // Show confirmation popup before removing
            this.showBookmarkPopup({
                isExisting: true,
                name: bookmarks[existingIndex].name,
                timestamp: bookmarks[existingIndex].timestamp
            });
        } else {
            // Show add bookmark popup
            this.showBookmarkPopup({
                isExisting: false,
                name: this.getAircraftNames().join(' vs '),
                timestamp: new Date().toISOString()
            });
        }
    }

    showBookmarkPopup({ isExisting, name, timestamp }) {
        let bookmarkPopup = document.querySelector('.comp-bookmark-popup');

        if (!bookmarkPopup) {
            bookmarkPopup = document.createElement('div');
            bookmarkPopup.className = 'comp-bookmark-popup';
        }

        bookmarkPopup.innerHTML = `
            <div class="comp-bookmark-popup-content">
                <div class="comp-bookmark-popup-header">
                    <h3>${isExisting ? 'Edit Bookmark' : 'Add Bookmark'}</h3>
                    <button class="comp-bookmark-popup-close">×</button>
                </div>
                <div class="comp-bookmark-popup-body">
                    <div class="comp-bookmark-form">
                        <label for="bookmarkName">Name</label>
                        <input type="text" 
                               id="bookmarkName" 
                               class="comp-bookmark-name-input" 
                               value="${name}"
                               placeholder="Enter bookmark name">
                    </div>
                    <div class="comp-bookmark-popup-actions">
                        <button class="comp-bookmark-save">Done</button>
                        ${isExisting ? `
                            <button class="comp-bookmark-remove">Remove</button>
                        ` : ''}
                        <button class="comp-show-all-bookmarks">My Bookmarks</button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(bookmarkPopup);
        setTimeout(() => bookmarkPopup.classList.add('active'), 0);

        // Event Listeners
        const closeBtn = bookmarkPopup.querySelector('.comp-bookmark-popup-close');
        const saveBtn = bookmarkPopup.querySelector('.comp-bookmark-save');
        const removeBtn = bookmarkPopup.querySelector('.comp-bookmark-remove');
        const showAllBtn = bookmarkPopup.querySelector('.comp-show-all-bookmarks');
        const nameInput = bookmarkPopup.querySelector('#bookmarkName');

        closeBtn.addEventListener('click', () => this.closeBookmarkPopup(bookmarkPopup));

        saveBtn.addEventListener('click', () => {
            const newName = nameInput.value.trim();
            if (newName) {
                this.saveBookmark(newName, timestamp, isExisting);
                this.closeBookmarkPopup(bookmarkPopup);
            }
        });

        if (removeBtn) {
            removeBtn.addEventListener('click', () => {
                this.removeBookmark(timestamp);
                this.closeBookmarkPopup(bookmarkPopup);
            });
        }

        showAllBtn.addEventListener('click', () => {
            this.closeBookmarkPopup(bookmarkPopup);
            this.showBookmarks();
        });
    }

    saveBookmark(name, timestamp, isExisting) {
        const bookmarks = this.getBookmarks();
        const comparisonState = {
            aircraftIds: Array.from(this.comparedAircraft),
            timestamp: timestamp,
            name: name
        };

        if (isExisting) {
            const index = bookmarks.findIndex(b => b.timestamp === timestamp);
            bookmarks[index] = comparisonState;
        } else {
            bookmarks.push(comparisonState);
        }

        localStorage.setItem('aircraftComparisons', JSON.stringify(bookmarks));
        this.updateBookmarkButton(true);
    }

    removeBookmark(timestamp) {
        const bookmarks = this.getBookmarks();
        const updatedBookmarks = bookmarks.filter(b => b.timestamp !== timestamp);
        localStorage.setItem('aircraftComparisons', JSON.stringify(updatedBookmarks));
        this.updateBookmarkButton(false);
    }

    closeBookmarkPopup(popup) {
        popup.classList.remove('active');
        setTimeout(() => popup.remove(), 300);
    }

    getBookmarks() {
        return JSON.parse(localStorage.getItem('aircraftComparisons') || '[]');
    }

    getAircraftNames() {
        return Array.from(this.comparedAircraft).map(id => {
            const aircraft = mockDatabase.aircraft.find(a => a.id === id);
            return aircraft.model;
        });
    }

    updateBookmarkButton(isBookmarked) {
        const bookmarkBtn = document.querySelector('.comp-bookmark');
        if (isBookmarked) {
            bookmarkBtn.classList.add('bookmarked');
            bookmarkBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                Bookmarked
            `;
        } else {
            bookmarkBtn.classList.remove('bookmarked');
            bookmarkBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                Bookmark
            `;
        }
    }

    async init() {
        try {
            // Clear any existing state
            this.comparedAircraft.clear();

            if (this.primaryAircraftId) {
                // Load primary aircraft if ID exists in URL
                const primaryAircraft = await this.loadPrimaryAircraft();
                if (!primaryAircraft) throw new Error('Failed to load primary aircraft');

                // Set up event listeners and initialize slots
                this.setupEventListeners();
                this.initializeComparisonSlots();

                // Load comparison aircraft if any
                if (this.compareIds.length > 0) {
                    for (const id of this.compareIds) {
                        const comparisonAircraft = await this.addAircraftToComparison(id);
                        if (!comparisonAircraft) {
                            console.warn(`Failed to load comparison aircraft ${id}`);
                        }
                    }
                }

                this.updateComparison();
            } else {
                // Show empty state when no aircraft ID in URL
                this.showEmptyState();
                this.setupEmptyStateEventListeners();
            }

        } catch (error) {
            console.error('Error during initialization:', error);
            this.handleError(error);
        }
    }

    showEmptyState() {
        const mainContent = document.querySelector('.comp-main');
        mainContent.innerHTML = `
            <div class="comp-empty-state">
                <div class="comp-empty-icon">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                        <path d="M3.3 7L12 12l8.7-5M12 22V12"/>
                    </svg>
                </div>
                <h2>Start Aircraft Comparison</h2>
                <p>Select an aircraft to begin comparing specifications, safety features, and performance metrics.</p>
                <button class="comp-btn comp-primary-btn" id="startComparison">
                    Select First Aircraft
                </button>
            </div>
        `;
    }

    setupEmptyStateEventListeners() {
        const startButton = document.getElementById('startComparison');
        if (startButton) {
            startButton.addEventListener('click', () => {
                this.renderAircraftSelector(true);
            });
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

    renderAircraftSelector(isFirstSelection = false) {

        const existingSelector = document.querySelector('.comp-selector-container');
        if (existingSelector) {
            existingSelector.remove();
        }

        const availableAircraft = mockDatabase.aircraft.filter(
            aircraft => !this.comparedAircraft.has(aircraft.id)
        );

        const selectorHtml = `
            <div class="comp-selector">
                <div class="comp-selector-header">
                    <h3>${isFirstSelection ? 'Select First Aircraft' : 'Select Aircraft to Compare'}</h3>
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
        selectorContainer.className = 'comp-selector-container'; // Remove 'active' class from here
        selectorContainer.innerHTML = selectorHtml;
        document.body.appendChild(selectorContainer);

        if (isFirstSelection) {
            selectorContainer.classList.add('active'); // Only add active for first selection
            this.setupFirstSelectionEvents(selectorContainer);
        }

        this.setupSelectorEvents();
    }

    setupFirstSelectionEvents(selectorContainer) {
        // Remove previous event listeners
        const oldItems = document.querySelectorAll('.comp-selector-item');
        oldItems.forEach(item => {
            item.replaceWith(item.cloneNode(true));
        });

        // Add click handlers to all items
        const addClickHandler = () => {
            const items = selectorContainer.querySelectorAll('.comp-selector-item');
            items.forEach(item => {
                item.addEventListener('click', () => {
                    const aircraftId = parseInt(item.dataset.id);
                    // Update URL with selected aircraft ID
                    window.history.pushState({}, '', `?id=${aircraftId}`);
                    // Reload page to initialize with new aircraft
                    window.location.reload();
                });
            });
        };

        // Initial click handlers
        addClickHandler();

        // Re-add click handlers after filtering
        const filterBtns = selectorContainer.querySelectorAll('.comp-filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Wait for DOM to update after filtering
                setTimeout(addClickHandler, 100);
            });
        });

        // Re-add click handlers after search
        const searchBox = selectorContainer.querySelector('.comp-search-box');
        if (searchBox) {
            searchBox.addEventListener('input', () => {
                // Wait for DOM to update after search
                setTimeout(addClickHandler, 100);
            });
        }

        // Close button for first selection
        const closeBtn = selectorContainer.querySelector('.comp-selector-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                selectorContainer.remove();
            });
        }
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

    updateComparison() {
        this.updateMetricsSection();
        this.updateSpecsSection();
        this.updateSafetySection();
        this.updateOperationsSection();
    }


    updateMetricsSection() {
        const metricsSection = document.getElementById('metrics');
        const aircraftData = Array.from(this.comparedAircraft).map(id =>
            mockDatabase.aircraft.find(a => a.id === id)
        );

        metricsSection.innerHTML = `
            <div class="comp-metrics-header">
            <h2>Key Safety Metrics</h2>
            <div class="comp-metrics-timeframe">
                <div class="comp-timeframe-desktop">
                    <button class="comp-timeframe-btn active">All Time</button>
                    <button class="comp-timeframe-btn">Last 5 Years</button>
                    <button class="comp-timeframe-btn">Last Year</button>
                </div>
                <div class="comp-timeframe-mobile">
                    <select class="comp-timeframe-select">
                        <option value="all">All Time</option>
                        <option value="5year">Last 5 Years</option>
                        <option value="1year">Last Year</option>
                    </select>
                </div>
            </div>
        </div>
            
            <div class="comp-metrics-grid">
                ${this.renderSafetyScoreCard(aircraftData)}
                ${this.renderIncidentRateCard(aircraftData)}
                ${this.renderMTBCECard(aircraftData)}
                ${this.renderReliabilityCard(aircraftData)}
            </div>

            <div class="comp-metrics-trends">
                <div class="comp-trend-chart">
                    ${this.renderSafetyTrendChart(aircraftData)}
                </div>
            </div>
        `;

        this.initializeMetricsInteractions();

    }

    renderSafetyScoreCard(aircraftData) {
        return `
            <div class="comp-metric-card">
            <div class="metric-header">
                <h3>Safety Score</h3>
                 <div class="comp-tooltip" data-tooltip="Overall safety rating based on design, features, and historical performance. Scores range from 0-100, with higher scores indicating better safety records.">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                    </svg>
                </div>
            </div>    
                <div class="comp-metric-comparison">
                    ${aircraftData.map(aircraft => `
                        <div class="comp-metric-value ${this.getScoreClass(aircraft.safetyScore)}">
                            <span class="comp-score">${aircraft.safetyScore}</span>
                            <span class="comp-model">${aircraft.model}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="comp-metric-scale"></div>
            </div>
        `;
    }

    renderIncidentRateCard(aircraftData) {
        return `
            <div class="comp-metric-card">
            <div class="metric-header">
                <h3>Incident Rate</h3>
                 <div class="comp-tooltip" data-tooltip="Percentage of flights involving reportable incidents per 100,000 flights. Lower percentages indicate better safety performance.">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                    </svg>
                </div>
            </div>    
                <div class="comp-metric-comparison">
                    ${aircraftData.map(aircraft => `
                        <div class="comp-metric-value ${this.getIncidentRateClass(aircraft.incidentRate)}">
                            <span class="comp-rate">${(aircraft.incidentRate * 100).toFixed(3)}%</span>
                            <span class="comp-model">${aircraft.model}</span>
                        </div>
                    `).join('')}
                </div>
        
            </div>
        `;
    }

    renderReliabilityCard(aircraftData) {
        return `
            <div class="comp-metric-card">
            <div class="metric-header">
                <h3>Reliability Rate</h3>
                <div class="comp-tooltip" data-tooltip="The probability that an aircraft will perform its intended functions without failure under specific conditions or over a specified period of time">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                    </svg>
                </div>
            </div>    
                <div class="comp-metric-comparison">
                    ${aircraftData.map(aircraft => `
                        <div class="comp-metric-value ${this.getReliabilityClass(aircraft.operationalMetrics.reliabilityMetrics.targetDispatchReliability)}">
                            <span class="comp-reliability">${aircraft.operationalMetrics.reliabilityMetrics.targetDispatchReliability}%</span>
                            <span class="comp-model">${aircraft.model}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderMTBCECard(aircraftData) {
        return `
            <div class="comp-metric-card">
            <div class="metric-header">
                <h3>MTBCE</h3>
                <div class="comp-tooltip" data-tooltip="Mean Time Between Critical Events: Average flight hours between significant safety-related events, including mechanical issues, emergency landings, and system failures. Higher hours indicate better reliability.">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                    </svg>
                </div>
            </div>    
                <div class="comp-metric-comparison">
                    ${aircraftData.map(aircraft => {
            // Calculate MTBCE: total flight hours / number of critical events
            const flightHours = aircraft.totalFlights * 3; // Assuming average 3 hours per flight
            const criticalEvents = Math.ceil(aircraft.totalFlights * aircraft.incidentRate * 1.5); // Including non-incident critical events
            const mtbce = Math.floor(flightHours / criticalEvents);

            return `
                            <div class="comp-metric-value ${this.getMTBCEClass(mtbce)}">
                                <span class="comp-mtbce">${mtbce.toLocaleString()} hrs</span>
                                <span class="comp-model">${aircraft.model}</span>
                            </div>
                        `;
        }).join('')}
                </div>
                
            </div>
        `;
    }

    // Add this method for MTBCE classification
    getMTBCEClass(hours) {
        if (hours >= 50000) return 'excellent';
        if (hours >= 30000) return 'good';
        if (hours >= 15000) return 'fair';
        return 'poor';
    }
    renderSafetyTrendChart(aircraftData) {
        const chartData = aircraftData.map(aircraft => ({
            model: aircraft.model,
            trends: aircraft.operationalMetrics.safetyTrend.yearlyTrend
        }));

        return `
            <div class="comp-trend-header">
            <h3 class="comp-trend-title">Safety Score Trends</h3>
            <p class="comp-trend-description">Historical safety performance comparison across selected aircraft models</p>
        </div>
        <canvas id="safetyTrendChart"></canvas>
    `;
    }

    getScoreClass(score) {
        if (score >= 90) return 'excellent';
        if (score >= 80) return 'good';
        if (score >= 70) return 'fair';
        return 'poor';
    }

    getIncidentRateClass(rate) {
        if (rate < 0.001) return 'excellent';
        if (rate < 0.005) return 'good';
        if (rate < 0.01) return 'fair';
        return 'poor';
    }

    getReliabilityClass(reliability) {
        if (reliability >= 99.5) return 'excellent';
        if (reliability >= 98) return 'good';
        if (reliability >= 95) return 'fair';
        return 'poor';
    }

    initializeMetricsInteractions() {
        // Initialize safety trend chart
        const ctx = document.getElementById('safetyTrendChart').getContext('2d');
        const aircraftData = Array.from(this.comparedAircraft).map(id =>
            mockDatabase.aircraft.find(a => a.id === id)
        );

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: aircraftData[0].operationalMetrics.safetyTrend.yearlyTrend.years,
                datasets: aircraftData.map(aircraft => ({
                    label: aircraft.model,
                    data: aircraft.operationalMetrics.safetyTrend.yearlyTrend.safetyScores,
                    borderColor: this.getAircraftColor(aircraft.id),
                    tension: 0.4,
                    fill: false
                }))
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 60,
                        max: 100
                    }
                }
            }
        });
    }

    getAircraftColor(id) {
        const colors = ['#3182ce', '#805ad5', '#38a169'];
        return colors[Array.from(this.comparedAircraft).indexOf(id)];
    }

    updateSpecsSection() {
        const specsSection = document.getElementById('specs');
        const aircraftData = Array.from(this.comparedAircraft).map(id =>
            mockDatabase.aircraft.find(a => a.id === id)
        );

        specsSection.innerHTML = `
            <div class="comp-specs-header">
                <h2>Technical Specifications</h2>
                <div class="comp-specs-controls">
                    <button class="comp-specs-btn active" data-view="details">Detailed View</button>
                    <button class="comp-specs-btn" data-view="visual">Visual Comparison</button>
                </div>
            </div>

            <div class="comp-specs-content">
                <div class="comp-specs-details active">
                    ${this.renderSpecsTable(aircraftData)}
                </div>
                <div class="comp-specs-visual">
                    ${this.renderVisualComparison(aircraftData)}
                </div>
            </div>

            <div class="comp-certifications">
                <h3>Certifications & Compliance</h3>
                ${this.renderCertifications(aircraftData)}
            </div>
        `;

        this.initializeSpecsInteractions();
    }

    // Update the renderSpecsTable method in your AircraftComparison class

    renderSpecsTable(aircraftData) {
        const specs = [
            { key: 'length', label: 'Length', unit: 'm' },
            { key: 'wingspan', label: 'Wingspan', unit: 'm' },
            { key: 'height', label: 'Height', unit: 'm' },
            { key: 'maxSpeed', label: 'Maximum Speed', unit: 'km/h' },
            { key: 'range', label: 'Range', unit: 'km' },
            { key: 'seatingCapacity', label: 'Seating Capacity', unit: 'passengers' },
            { key: 'engineType', label: 'Engine Type', unit: '' },
            { key: 'engineCount', label: 'Number of Engines', unit: '' }
        ];

        return `
        <div class="comp-specs-table">
            <table>
                <thead>
                    <tr>
                        <th class="DHT">Specification</th>
                        ${aircraftData.map(aircraft => `
                            <th>${aircraft.model}</th>
                        `).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${specs.map(spec => `
                        <tr>
                            <td>${spec.label}</td>
                            ${aircraftData.map(aircraft => `
                                <td data-label="${aircraft.model}">
                                    <span class="comp-value">
                                        ${aircraft.specifications[spec.key]}
                                        ${spec.unit ? `<span class="comp-unit">${spec.unit}</span>` : ''}
                                    </span>
                                </td>
                            `).join('')}
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
    }

    renderVisualComparison(aircraftData) {
        const maxLength = Math.max(...aircraftData.map(a =>
            parseFloat(a.specifications.length)
        ));

        return `
            <div class="comp-visual-specs">
                ${aircraftData.map(aircraft => {
            const length = parseFloat(aircraft.specifications.length);
            const widthPercent = (length / maxLength) * 100;

            return `
                        <div class="comp-aircraft-visual">
                            <div class="comp-aircraft-name">${aircraft.model}</div>
                            <div class="comp-aircraft-diagram">
                                <div class="comp-aircraft-length" 
                                     style="width: ${widthPercent}%">
                                    <span class="comp-dimension">${aircraft.specifications.length}</span>
                                </div>
                                <div class="comp-aircraft-wings">
                                    <span class="comp-dimension">${aircraft.specifications.wingspan}</span>
                                </div>
                            </div>
                        </div>
                    `;
        }).join('')}
                <div class="comp-scale-indicator">Scale: Relative to largest aircraft</div>
            </div>
        `;
    }

    renderCertifications(aircraftData) {
        const allCertifications = new Set(
            aircraftData.flatMap(aircraft =>
                Object.keys(aircraft.specifications.certifications)
            )
        );

        return `
            <div class="comp-cert-grid">
                ${Array.from(allCertifications).map(cert => `
                    <div class="comp-cert-item">
                        <div class="comp-cert-header">
                            <span class="comp-cert-name">${cert.toUpperCase()}</span>
                        </div>
                        <div class="comp-cert-status">
                            ${aircraftData.map(aircraft => `
                                <div class="comp-cert-aircraft">
                                    <span class="comp-model">${aircraft.model}</span>
                                    <span class="comp-cert-check ${aircraft.specifications.certifications[cert] ? 'certified' : ''}">
                                        ${aircraft.specifications.certifications[cert] ? '✓' : '–'}
                                    </span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    initializeSpecsInteractions() {
        const viewButtons = document.querySelectorAll('.comp-specs-btn');
        const views = {
            details: document.querySelector('.comp-specs-details'),
            visual: document.querySelector('.comp-specs-visual')
        };

        viewButtons.forEach(button => {
            button.addEventListener('click', () => {
                const view = button.dataset.view;

                // Update buttons
                viewButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Update views
                Object.values(views).forEach(v => v.classList.remove('active'));
                views[view].classList.add('active');
            });
        });
    }

    updateSafetySection() {
        const safetySection = document.getElementById('safety');
        const aircraftData = Array.from(this.comparedAircraft).map(id =>
            mockDatabase.aircraft.find(a => a.id === id)
        );

        safetySection.innerHTML = `
            <div class="comp-safety-header">
                <h2>Safety Analysis</h2>
                <div class="comp-safety-filters">
                    <select class="comp-safety-period">
                        <option value="all">All Time</option>
                        <option value="5year">Last 5 Years</option>
                        <option value="1year">Last Year</option>
                    </select>
                </div>
            </div>

            <div class="comp-safety-grid">
                ${this.renderSafetyFeatureComparison(aircraftData)}
                ${this.renderIncidentAnalysis(aircraftData)}
            </div>

            <div class="comp-safety-features">
                <h3>Safety Features Comparison</h3>
                ${this.renderFeatureMatrix(aircraftData)}
            </div>

            <div class="comp-reliability-trends">
                <h3>Reliability Trends</h3>
                ${this.renderReliabilityChart(aircraftData)}
            </div>
        `;

        this.initializeSafetyCharts();
        this.initializeSafetyInteractions();
    }

    renderSafetyFeatureComparison(aircraftData) {
        return `
            <div class="comp-safety-card full-width">
                <div class="comp-safety-summary">
                    ${aircraftData.map(aircraft => `
                        <div class="comp-aircraft-safety">
                            <h4>${aircraft.model}</h4>
                            <div class="comp-safety-stats">
                                <div class="comp-stat">
                                    <span class="comp-stat-label">Total Flights</span>
                                    <span class="comp-stat-value">${aircraft.totalFlights.toLocaleString()}</span>
                                </div>
                                <div class="comp-stat">
                                    <span class="comp-stat-label">Last Incident</span>
                                    <span class="comp-stat-value">${this.formatDate(aircraft.lastIncidentDate)}</span>
                                </div>
                                <div class="comp-stat">
                                    <span class="comp-stat-label">Safety Rating</span>
                                    <span class="comp-stat-value ${this.getScoreClass(aircraft.safetyScore)}">
                                        ${aircraft.safetyScore}/100
                                    </span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderIncidentAnalysis(aircraftData) {
        return `
            <div class="comp-safety-card">
                <h3>Incident Analysis</h3>
                <div class="comp-incident-chart">
                    <canvas id="incidentChart"></canvas>
                </div>
            </div>
        `;
    }

    renderFeatureMatrix(aircraftData) {
        const allFeatures = new Set(
            aircraftData.flatMap(aircraft =>
                aircraft.safetyFeatures.map(feature => feature.name)
            )
        );

        return `
            <div class="comp-feature-matrix">
                <table>
                    <thead>
                        <tr>
                            <th class="DHT">Safety Feature</th>
                            ${aircraftData.map(aircraft => `
                                <th>${aircraft.model}</th>
                            `).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        ${Array.from(allFeatures).map(featureName => `
                            <tr>
                                <td class="comp-feature-name">${featureName}</td>
                                ${aircraftData.map(aircraft => {
            const feature = aircraft.safetyFeatures.find(f => f.name === featureName);
            return `
                                        <td class="comp-feature-status">
                                            <div class="comp-feature-indicator ${feature ? 'present' : 'absent'}">
                                                ${feature ? '✓' : '–'}
                                                ${feature ?
                    `<span class="comp-feature-date">Since ${this.formatDate(feature.certificationDate)}</span>`
                    : ''
                }
                                            </div>
                                        </td>
                                    `;
        }).join('')}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }

    renderReliabilityChart(aircraftData) {
        return `
            <div class="comp-reliability-chart">
                <canvas id="reliabilityChart"></canvas>
            </div>
        `;
    }

    initializeSafetyCharts() {
        this.initializeIncidentChart();
        this.initializeReliabilityChart();
    }

    initializeIncidentChart() {
        const ctx = document.getElementById('incidentChart').getContext('2d');
        const aircraftData = Array.from(this.comparedAircraft).map(id =>
            mockDatabase.aircraft.find(a => a.id === id)
        );

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: aircraftData.map(a => a.model),
                datasets: [{
                    label: 'Incident Rate per 100,000 flights',
                    data: aircraftData.map(a => a.incidentRate * 100000),
                    backgroundColor: aircraftData.map(aircraft => this.getAircraftColor(aircraft.id)),
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Incidents per 100,000 flights'
                        }
                    }
                }
            }
        });
    }

    initializeReliabilityChart() {
        const ctx = document.getElementById('reliabilityChart').getContext('2d');
        const aircraftData = Array.from(this.comparedAircraft).map(id =>
            mockDatabase.aircraft.find(a => a.id === id)
        );

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: aircraftData[0].operationalMetrics.safetyTrend.monthlyData.flights.map((_, i) => `Month ${i + 1}`),
                datasets: aircraftData.map((aircraft, index) => ({
                    label: aircraft.model,
                    data: aircraft.operationalMetrics.safetyTrend.monthlyData.reliability,
                    borderColor: this.getAircraftColor(index),
                    tension: 0.4,
                    fill: false
                }))
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                },
                scales: {
                    y: {
                        min: 95,
                        max: 100,
                        title: {
                            display: true,
                            text: 'Reliability Rate (%)'
                        }
                    }
                }
            }
        });
    }

    initializeSafetyInteractions() {
        const safetyPeriodSelect = document.querySelector('.comp-safety-period');
        safetyPeriodSelect.addEventListener('change', () => {
            // Update charts based on selected period
            this.updateSafetyCharts(safetyPeriodSelect.value);
        });
    }

    formatDate(dateString) {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }

    updateOperationsSection() {
        const operationsSection = document.getElementById('operations');
        const aircraftData = Array.from(this.comparedAircraft).map(id =>
            mockDatabase.aircraft.find(a => a.id === id)
        );

        operationsSection.innerHTML = `
            <div class="comp-ops-header">
                <h2>Operational Performance</h2>
            </div>

            <div class="comp-ops-grid">
                ${this.renderFleetMetrics(aircraftData)}
                ${this.renderUtilizationChart(aircraftData)}
            </div>

            <div class="comp-maintenance-comparison">
                <h3>Maintenance Requirements</h3>
                ${this.renderMaintenanceSchedule(aircraftData)}
            </div>

            <div class="comp-ops-reliability">
                <h3>Reliability Metrics</h3>
                ${this.renderReliabilityMetrics(aircraftData)}
            </div>
        `;

        this.initializeOperationsCharts();
    }

    renderFleetMetrics(aircraftData) {
        return `
            <div class="comp-ops-card">
                <h3>Fleet Statistics</h3>
                <div class="comp-fleet-metrics">
                    ${aircraftData.map(aircraft => {
            const stats = aircraft.operationalMetrics.fleetStatistics;
            const utilizationRate = ((stats.unitsInService / stats.totalUnitsProduced) * 100).toFixed(1);

            return `
                            <div class="comp-fleet-block">
                                <div class="comp-fleet-header">
                                    <h4>${aircraft.model}</h4>
                                    <span class="comp-fleet-age">Avg. Age: ${stats.averageFleetAge} years</span>
                                </div>
                                <div class="comp-fleet-stats">
                                    <div class="comp-stat-item">
                                        <span class="comp-stat-label">Total Produced</span>
                                        <span class="comp-stat-value">${stats.totalUnitsProduced.toLocaleString()}</span>
                                    </div>
                                    <div class="comp-stat-item">
                                        <span class="comp-stat-label">In Service</span>
                                        <span class="comp-stat-value">${stats.unitsInService.toLocaleString()}</span>
                                    </div>
                                    <div class="comp-stat-item">
                                        <span class="comp-stat-label">Utilization Rate</span>
                                        <span class="comp-stat-value">${utilizationRate}%</span>
                                    </div>
                                </div>
                            </div>
                        `;
        }).join('')}
                </div>
            </div>
        `;
    }

    renderUtilizationChart(aircraftData) {
        return `
            <div class="comp-ops-card">
                <h3>Monthly Utilization Trends</h3>
                <div class="comp-chart-container">
                    <canvas id="utilizationChart"></canvas>
                </div>
            </div>
        `;
    }

    renderMaintenanceSchedule(aircraftData) {
        return `
            <div class="comp-maintenance-grid">
                ${aircraftData.map(aircraft => {
            const checks = aircraft.maintenanceRequirements.standardChecks;
            return `
                        <div class="comp-maintenance-block">
                            <div class="comp-maintenance-header">
                                <h4>${aircraft.model}</h4>
                            </div>
                            <div class="comp-checks-timeline">
                                ${Object.entries(checks).map(([checkType, check]) => `
                                    <div class="comp-check-item">
                                        <div class="comp-check-header">
                                            <span class="comp-check-type">${checkType.toUpperCase()}</span>
                                            <span class="comp-check-interval">${check.interval}</span>
                                        </div>
                                        <div class="comp-check-details">
                                            <span class="comp-check-duration">${check.estimatedDuration}</span>
                                            <p class="comp-check-desc">${check.description}</p>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
        }).join('')}
            </div>
        `;
    }

    renderReliabilityMetrics(aircraftData) {
        return `
            <div class="comp-reliability-grid">
                ${aircraftData.map(aircraft => {
            const metrics = aircraft.operationalMetrics.reliabilityMetrics;
            return `
                        <div class="comp-reliability-block">
                            <div class="comp-reliability-header">
                                <h4>${aircraft.model}</h4>
                            </div>
                            <div class="comp-reliability-stats">
                                <div class="comp-reliability-item">
                                    <span class="comp-reliability-label">Design Lifespan</span>
                                    <span class="comp-reliability-value">${metrics.designLifespan}</span>
                                </div>
                                <div class="comp-reliability-item">
                                    <span class="comp-reliability-label">Target Dispatch Reliability</span>
                                    <span class="comp-reliability-value">${metrics.targetDispatchReliability}%</span>
                                </div>
                                <div class="comp-reliability-item">
                                    <span class="comp-reliability-label">Average Flight Hours</span>
                                    <span class="comp-reliability-value">${metrics.averageFlightHours}</span>
                                </div>
                            </div>
                        </div>
                    `;
        }).join('')}
            </div>
        `;
    }

    initializeOperationsCharts() {
        const aircraftData = Array.from(this.comparedAircraft).map(id =>
            mockDatabase.aircraft.find(a => a.id === id)
        );

        // Initialize utilization chart
        const utilizationCtx = document.getElementById('utilizationChart').getContext('2d');
        new Chart(utilizationCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: aircraftData.map((aircraft, index) => ({
                    label: aircraft.model,
                    data: aircraft.operationalMetrics.safetyTrend.monthlyData.reliability,
                    borderColor: this.getAircraftColor(aircraft.id),
                    tension: 0.4,
                    fill: false
                }))
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 90,
                        max: 100,
                        title: {
                            display: true,
                            text: 'Utilization Rate (%)'
                        }
                    }
                }
            }
        });
    }

    showBookmarks() {
        let bookmarksMenu = document.querySelector('.comp-bookmarks-menu');
        const bookmarks = this.getBookmarks();

        if (!bookmarksMenu) {
            bookmarksMenu = document.createElement('div');
            bookmarksMenu.className = 'comp-bookmarks-menu';
        }

        bookmarksMenu.innerHTML = `
            <div class="comp-bookmarks-header">
                <h3>Saved Comparisons</h3>
                <button class="comp-bookmarks-close">×</button>
            </div>
            <div class="comp-bookmarks-content">
                ${bookmarks.length === 0 ?
                '<p class="comp-no-bookmarks">No saved comparisons</p>' :
                bookmarks.map(bookmark => `
                        <div class="comp-bookmark-item">
                            <div class="comp-bookmark-info">
                                <span class="comp-bookmark-name">${bookmark.name}</span>
                                <span class="comp-bookmark-date">
                                    ${new Date(bookmark.timestamp).toLocaleDateString()}
                                </span>
                            </div>
                            <div class="comp-bookmark-actions">
                                <button class="comp-bookmark-view" 
                                        data-aircraft-ids="${bookmark.aircraftIds.join(',')}">
                                    View
                                </button>
                                <button class="comp-bookmark-delete" 
                                        data-timestamp="${bookmark.timestamp}">
                                    Delete
                                </button>
                            </div>
                        </div>
                    `).join('')
            }
            </div>
        `;

        document.body.appendChild(bookmarksMenu);

        // Show menu
        setTimeout(() => bookmarksMenu.classList.add('active'), 0);

        // Add event listeners
        bookmarksMenu.querySelector('.comp-bookmarks-close').addEventListener('click', () => {
            bookmarksMenu.classList.remove('active');
            setTimeout(() => bookmarksMenu.remove(), 300);
        });

        bookmarksMenu.addEventListener('click', (e) => {
            if (e.target.classList.contains('comp-bookmark-view')) {
                const aircraftIds = e.target.dataset.aircraftIds.split(',').map(Number);
                this.loadBookmarkedComparison(aircraftIds);
                bookmarksMenu.classList.remove('active');
            }

            if (e.target.classList.contains('comp-bookmark-delete')) {
                const timestamp = e.target.dataset.timestamp;
                this.deleteBookmark(timestamp);
                this.showBookmarks(); // Refresh the menu
            }
        });
    }

    loadBookmarkedComparison(aircraftIds) {
        try {
            // Always redirect when loading a bookmarked comparison
            // This ensures clean state initialization
            const queryParams = new URLSearchParams();

            // First ID becomes the primary aircraft
            queryParams.set('id', aircraftIds[0]);

            // Rest become compare parameters
            aircraftIds.slice(1).forEach(id => {
                queryParams.append('compare', id);
            });

            // Redirect to new URL with all parameters
            window.location.href = `comparison.html?${queryParams.toString()}`;

        } catch (error) {
            console.error('Error loading bookmarked comparison:', error);
            this.showNotification('Error loading comparison. Please try again.');
        }
    }


    clearComparisonSlots() {
        // Remove all comparison slots except primary and empty slot
        const slots = document.querySelectorAll('.comp-aircraft-slot');
        slots.forEach(slot => {
            if (!slot.id.includes('primary-aircraft') && !slot.classList.contains('empty')) {
                slot.remove();
            }
        });
        this.comparedAircraft.clear();
        this.comparedAircraft.add(Number(this.primaryAircraftId));
    }




    deleteBookmark(timestamp) {
        const bookmarks = this.getBookmarks();
        const updatedBookmarks = bookmarks.filter(b => b.timestamp !== timestamp);
        localStorage.setItem('aircraftComparisons', JSON.stringify(updatedBookmarks));
        this.showNotification('Bookmark deleted');
    }

    // Add these methods to your AircraftComparison class

    initializeMetricsInteractions() {
        // Add timeframe event listeners
        document.querySelectorAll('.comp-timeframe-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.comp-timeframe-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.updateMetrics(e.target.textContent.toLowerCase());
            });
        });

        document.querySelector('.comp-timeframe-select').addEventListener('change', (e) => {
            this.updateMetrics(e.target.value);
        });

        // Initialize safety trend chart
        const ctx = document.getElementById('safetyTrendChart')?.getContext('2d');
        if (ctx) {
            const aircraftData = Array.from(this.comparedAircraft).map(id =>
                mockDatabase.aircraft.find(a => a.id === id)
            );

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: aircraftData[0].operationalMetrics.safetyTrend.yearlyTrend.years,
                    datasets: aircraftData.map(aircraft => ({
                        label: aircraft.model,
                        data: aircraft.operationalMetrics.safetyTrend.yearlyTrend.safetyScores,
                        borderColor: this.getAircraftColor(aircraft.id),
                        tension: 0.4,
                        fill: false
                    }))
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: false,
                            min: 60,
                            max: 100
                        }
                    }
                }
            });
        }
    }

    updateMetrics(timeframe) {
        const aircraftData = Array.from(this.comparedAircraft).map(id =>
            mockDatabase.aircraft.find(a => a.id === id)
        );

        const metrics = this.calculateTimeframedMetrics(aircraftData, timeframe);

        // Update each card with new metrics
        document.querySelector('.comp-metrics-grid').innerHTML = `
        ${this.renderSafetyScoreCard(metrics)}
        ${this.renderIncidentRateCard(metrics)}
        ${this.renderMTBCECard(metrics)}
        ${this.renderReliabilityCard(metrics)}
    `;
    }

    calculateTimeframedMetrics(aircraftData, timeframe) {
        return aircraftData.map(aircraft => {
            const trends = aircraft.operationalMetrics.safetyTrend.yearlyTrend;
            let metrics = { ...aircraft };

            switch (timeframe) {
                case 'last year':
                case '1year':
                    metrics.safetyScore = trends.safetyScores[trends.safetyScores.length - 1];
                    metrics.incidentRate *= 0.95;
                    break;
                case 'last 5 years':
                case '5year':
                    const last5Years = trends.safetyScores.slice(-5);
                    metrics.safetyScore = last5Years.reduce((a, b) => a + b) / last5Years.length;
                    metrics.incidentRate *= 0.97;
                    break;
            }
            return metrics;
        });
    }

    updateChartResponsive() {
        const chart = document.getElementById('safetyTrendChart');
        const parent = chart.parentElement;

        if (window.innerWidth <= 768) {
            // Mobile optimizations for chart
            Chart.defaults.font.size = 10;

            if (this.chart) {
                this.chart.options.plugins.legend.display = false;
                this.chart.options.scales.x.ticks.maxRotation = 45;
                this.chart.options.scales.x.ticks.minRotation = 45;
                this.chart.options.maintainAspectRatio = false;
                this.chart.update();
            }
        } else {
            // Desktop chart settings
            Chart.defaults.font.size = 12;

            if (this.chart) {
                this.chart.options.plugins.legend.display = true;
                this.chart.options.scales.x.ticks.maxRotation = 0;
                this.chart.options.maintainAspectRatio = true;
                this.chart.update();
            }
        }
    }

}

document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.comp-nav-item');
    const sections = document.querySelectorAll('.comp-section');
    const navList = document.querySelector('.comp-nav-list');
    let isScrollingProgrammatically = false;
    let scrollTimeout;

      document.querySelector('.comp-add-btn').addEventListener('click', () => {
        document.body.style.overflow = 'hidden';
    });

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('comp-primary-btn')) {
            document.body.style.overflow = 'hidden';
        }
    });

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('comp-selector-item')) {
            document.body.style.overflow = 'auto';
        }
    });

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('comp-selector-close')) {
            document.body.style.overflow = 'auto';
        }
    });
    // Function to update the sliding indicator
    const updateIndicator = (activeItem) => {
        const itemRect = activeItem.getBoundingClientRect();
        const listRect = navList.getBoundingClientRect();

        navList.style.setProperty('--indicator-width', `${itemRect.width}px`);
        navList.style.setProperty('--indicator-left', `${itemRect.left - listRect.left}px`);
    };

    // Handle click navigation
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));

            // Add active class to clicked item
            item.classList.add('active');

            // Update indicator position
            updateIndicator(item);

            // Set flag before scrolling
            isScrollingProgrammatically = true;

            // Smooth scroll to section
            const targetId = item.querySelector('a').getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Reset flag after scrolling animation (roughly 1 second)
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                isScrollingProgrammatically = false;
            }, 1000);
        });
    });

    // Handle scroll-based navigation
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -79% 0px',
        threshold: 0
    };

    const observerCallback = (entries) => {
        // Don't process if we're programmatically scrolling
        if (isScrollingProgrammatically) return;

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all nav items
                navItems.forEach(item => item.classList.remove('active'));

                // Add active class to corresponding nav item
                const targetId = entry.target.id;
                const correspondingNav = document.querySelector(`.comp-nav-item a[href="#${targetId}"]`)
                    .parentElement;
                correspondingNav.classList.add('active');

                // Update indicator position
                updateIndicator(correspondingNav);
            }
        });
    };

    // Create and activate the Intersection Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach(section => observer.observe(section));

    // Initial indicator position
    const activeItem = document.querySelector('.comp-nav-item.active') || navItems[0];
    updateIndicator(activeItem);

    // Update indicator position on window resize
    window.addEventListener('resize', () => {
        const activeItem = document.querySelector('.comp-nav-item.active') || navItems[0];
        updateIndicator(activeItem);
    });
});

// Initialize comparison
document.addEventListener('DOMContentLoaded', () => {
    const comparison = new AircraftComparison();
});
