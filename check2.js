document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const navToggle = document.querySelector('.nav-toggle');
    const userToggle = document.querySelector('.user-toggle');
    const searchToggle = document.querySelector('.search-toggle');
    const navSidebar = document.querySelector('.nav-sidebar');
    const authSidebar = document.querySelector('.auth-sidebar');
    const overlay = document.getElementById('overlay');
    const closeBtns = document.querySelectorAll('.close-sidebar');

    // Functions
    const openSidebar = (sidebar) => {
        closeAllSidebars(); // Close any open sidebar first
        sidebar.classList.add('active');
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    const closeAllSidebars = () => {
        navSidebar.classList.remove('active');
        authSidebar.classList.remove('active');
        overlay.classList.add('hidden');
        document.body.style.overflow = '';
    };

    // Event Listeners
    navToggle.addEventListener('click', () => {
        openSidebar(navSidebar);
    });

    userToggle.addEventListener('click', () => {
        openSidebar(authSidebar);
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', closeAllSidebars);
    });

    overlay.addEventListener('click', closeAllSidebars);

    // Close sidebars on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAllSidebars();
    });


});

//Progress bar
const progressBar = {
    element: null,

    initialize() {
        this.element = document.getElementById('progress-bar');
    },

    start() {
        if (!this.element) this.initialize();
        this.element.style.width = '0%';
        this.element.style.display = 'block';

        // Move to 30% quickly
        setTimeout(() => {
            this.element.style.width = '30%';
        }, 50);

        // Then to 70%
        setTimeout(() => {
            this.element.style.width = '70%';
        }, 300);
    },

    finish() {
        if (!this.element) this.initialize();
        this.element.style.width = '100%';

        // Reset after animation
        setTimeout(() => {
            this.element.style.width = '0%';
        }, 500);
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    progressBar.initialize();
});

const clearSearchBtn = document.getElementById('clear-search');
const RESULTS_PER_PAGE = 6; // Number of results per page
let currentPage = 1;
let currentResults = []; // Store the current search results

// Alert box
document.addEventListener('DOMContentLoaded', function () {
    const demoNotice = document.getElementById('demo-notice');
    const acknowledgeBtn = document.getElementById('acknowledge-btn');

    // Check if user has already acknowledged the notice
    if (!localStorage.getItem('demoNoticeAcknowledged')) {
        demoNotice.style.display = 'flex';
    } else {
        demoNotice.style.display = 'none';
    }

    acknowledgeBtn.addEventListener('click', function () {
        demoNotice.style.display = 'none';
        localStorage.setItem('demoNoticeAcknowledged', 'true');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
});

function getRandomFeaturedItems(count) {
    return mockDatabase.aircraft.sort(() => 0.5 - Math.random()).slice(0, count);
}

document.addEventListener('DOMContentLoaded', function () {
    // Elements
    const toggleFiltersBtn = document.getElementById('toggle-filters');
    const filterOptions = document.querySelector('.filter-options');
    const filterActions = document.querySelector('.filter-actions');
    const searchInput = document.getElementById('search-input');
    const searchSuggestions = document.getElementById('search-suggestions');
    const searchButton = document.getElementById('search-button');
    const resultsHeader = document.querySelector('.trending-results-header');
    const applyFiltersButton = document.getElementById('apply-filters');
    const resetFiltersButton = document.getElementById('reset-filters');
    const aircraftTypeSelect = document.getElementById('aircraft-type');
    const manufacturerSelect = document.getElementById('manufacturer');
    const yearMinSlider = document.getElementById('year-min');
    const yearMaxSlider = document.getElementById('year-max');
    const yearMinValue = document.getElementById('year-min-value');
    const yearMaxValue = document.getElementById('year-max-value');
    const safetyScoreSlider = document.getElementById('safety-score');
    const safetyScoreValue = document.getElementById('safety-score-value');
    const advancedfilter = document.querySelector('.advanced-filters');


    // Toggle advanced filters
    toggleFiltersBtn.addEventListener('click', function () {
        filterOptions.style.display = filterOptions.style.display === 'none' ? 'grid' : 'none';
        toggleFiltersBtn.textContent = filterOptions.style.display === 'none' ? 'Advanced Filters' : 'Hide Filters';
        filterActions.style.display = filterActions.style.display === 'none' ? 'flex' : 'none';

        // Apply background color only when filters are showing
        if (filterOptions.style.display !== 'none') {
            advancedfilter.style.backgroundColor = "#f8f9fa"; // Correct property syntax
        } else {
            advancedfilter.style.backgroundColor = ""; // Reset to default or no color
        }
    });

    // Update range slider values
    function updateYearRange() {
        yearMinValue.textContent = yearMinSlider.value;
        yearMaxValue.textContent = yearMaxSlider.value;
    }

    yearMinSlider.addEventListener('input', updateYearRange);
    yearMaxSlider.addEventListener('input', updateYearRange);

    safetyScoreSlider.addEventListener('input', function () {
        safetyScoreValue.textContent = this.value;
    });

    // Search suggestions
    function getSuggestions(input) {
        return mockDatabase.aircraft
            .filter(aircraft => aircraft.model.toLowerCase().includes(input.toLowerCase()))
            .map(aircraft => ({ type: 'Aircraft', name: aircraft.model }));
    }

    searchInput.addEventListener('input', function () {
        clearSearchBtn.style.display = this.value ? 'block' : 'none';
        const suggestions = getSuggestions(this.value);
        displaySuggestions(suggestions);
    });

    clearSearchBtn.addEventListener('click', function () {
        searchInput.value = '';
        searchSuggestions.style.display = 'none';
        clearSearchBtn.style.display = 'none';

        displayResults(getRandomFeaturedItems(3), true);
        resultsHeader.style.display = 'block';

        /* // Clear any existing results
         const existingResults = document.querySelector('.search-results');
         if (existingResults) {
             existingResults.remove();
         }*/
    });

    function displaySuggestions(suggestions) {
        searchSuggestions.innerHTML = '';
        // Add check for empty input
        if (searchInput.value.trim() === '') {
            searchSuggestions.style.display = 'none';
            return;
        }

        if (suggestions.length > 0) {
            suggestions.forEach(suggestion => {
                const div = document.createElement('div');
                div.textContent = `${suggestion.type}: ${suggestion.name}`;
                div.classList.add('suggestion-item');
                div.addEventListener('click', function () {
                    searchInput.value = suggestion.name;
                    searchSuggestions.style.display = 'none';
                });
                searchSuggestions.appendChild(div);
            });
            searchSuggestions.style.display = 'block';
        } else {
            searchSuggestions.style.display = 'none';
        }
    }

    // Search and filter event listeners

    // For filter change events
    applyFiltersButton.addEventListener('click', performSearch);

    resetFiltersButton.addEventListener('click', () => {
        resetFilters().catch(console.error);
    });


    // For search button click (keep as is)
    searchButton.addEventListener('click', () => performSearch(false));

    // Display featured items on page load
    displayResults(getRandomFeaturedItems(3), true);

    async function performSearch(triggeredByFilter = false) {


        // First, check if search input is empty
        const searchTerm = searchInput.value.trim().toLowerCase();

        // Only show tooltip if search button was clicked with empty search
        // and it wasn't triggered by filter changes
        if (!searchTerm && !triggeredByFilter) {
            const searchBox = document.querySelector('.search-container');
            const existingTooltip = searchBox.querySelector('.search-tooltip');

            // Remove existing tooltip if any
            if (existingTooltip) {
                existingTooltip.remove();
            }

            // Create new tooltip
            const tooltip = document.createElement('div');
            tooltip.className = 'search-tooltip';
            tooltip.textContent = 'Please enter an aircraft name or manufacturer to search';
            searchBox.appendChild(tooltip);

            // Remove tooltip after 3 seconds
            setTimeout(() => {
                tooltip.remove();
            }, 3000);

            return; // Exit function early if search is empty and not filter-triggered
        }


        // Show both progress bar and loading spinner for search
        progressBar.start();
        const loadingSpinner = document.getElementById('loading-spinner');
        loadingSpinner.style.display = 'flex';

        try {
            if (resultsHeader) {
                resultsHeader.style.display = 'none';
            }

            // hide search suggestions when search is performed
            searchSuggestions.style.display = 'none';
            currentPage = 1;

            const aircraftType = aircraftTypeSelect.value.toLowerCase();
            const manufacturer = manufacturerSelect.value.toLowerCase();
            const yearMin = parseInt(yearMinSlider.value);
            const yearMax = parseInt(yearMaxSlider.value);
            const minSafetyScore = parseInt(safetyScoreSlider.value);

            // Add a small delay to make the progress visible
            await new Promise(resolve => setTimeout(resolve, 500));

            const aircraftResults = mockDatabase.aircraft.filter(aircraft => {
                // If triggered by filter and no search term, skip search term matching
                const matchesSearch = !searchTerm ||
                    aircraft.model.toLowerCase().includes(searchTerm) ||
                    aircraft.manufacturer.toLowerCase().includes(searchTerm);

                const matchesType = aircraftType === '' ||
                    aircraft.type.toLowerCase() === aircraftType;

                const matchesManufacturer = manufacturer === '' ||
                    aircraft.manufacturer.toLowerCase() === manufacturer;

                const matchesYear = aircraft.year >= yearMin && aircraft.year <= yearMax;

                const matchesSafetyScore = aircraft.safetyScore >= minSafetyScore;


                // For debugging
                console.log({
                    aircraft: aircraft.model,
                    searchTerm,
                    aircraftType,
                    manufacturer,
                    yearMin,
                    yearMax,
                    minSafetyScore,
                    matchesSearch,
                    matchesType,
                    matchesManufacturer,
                    matchesYear,
                    matchesSafetyScore
                });

                return matchesSearch &&
                    matchesType &&
                    matchesManufacturer &&
                    matchesYear &&
                    matchesSafetyScore;
            });

            const sortedResults = aircraftResults.sort((a, b) => b.safetyScore - a.safetyScore);
            displayResults(sortedResults, false);


            // Preload images before displaying results
            await preloadImages(sortedResults);

            // Display results
            await displayResults(sortedResults, false);

        } catch (error) {
            console.error('Error during search:', error);
        } finally {
            // Hide both progress bar and spinner
            progressBar.finish();
            loadingSpinner.style.display = 'none';
        }
    }

    // Function to preload images
    function preloadImages(results) {
        const imagePromises = results.map(result => {
            if (result.imageUrl) { // Assuming you have image URLs in your data
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.onload = resolve;
                    img.onerror = resolve; // Resolve anyway to prevent hanging
                    img.src = result.imageUrl;
                });
            }
            return Promise.resolve();
        });

        return Promise.all(imagePromises);
    }

    // Trigger search on Enter key press
    searchInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission if it's inside a form
            performSearch(); // Call the search function
        }
    });


    async function resetFilters() {
        // Start progress bar
        progressBar.start();

        try {
            currentPage = 1;
            aircraftTypeSelect.value = '';
            manufacturerSelect.value = '';

            // Reset year sliders
            yearMinSlider.value = yearMinSlider.min;
            yearMaxSlider.value = yearMaxSlider.max;
            yearMinValue.textContent = yearMinSlider.min;
            yearMaxValue.textContent = yearMaxSlider.max;
            yearTrack.style.backgroundColor = 'transparent';
            yearTrack.style.left = "0%";
            yearTrack.style.width = "100%";

            // Reset safety score slider
            safetyScoreSlider.value = safetyScoreSlider.min;
            safetyScoreValue.textContent = safetyScoreSlider.min;
            safetyScoreTrack.style.backgroundColor = 'transparent';
            safetyScoreTrack.style.width = "0%";
            safetyScoreSlider.style.setProperty('--thumb-color', '#ff4e50');

            // Add a small delay to make the progress bar visible
            await new Promise(resolve => setTimeout(resolve, 300));

            // Get featured items
            const featuredItems = getRandomFeaturedItems(3);

            // Preload images before displaying
            await preloadImages(featuredItems);

            // Display results after preloading
            await displayResults(featuredItems, true);
            resultsHeader.style.display = 'block';

        } catch (error) {
            console.error('Error resetting filters:', error);
        } finally {
            // Complete the progress bar
            progressBar.finish();
        }
    }

    function displayResults(results, isFeatured = false) {
        currentResults = results; // Store the full results

        // Create container for result cards
        const resultsContainer = document.createElement('div');
        resultsContainer.classList.add('search-results');

        // Add an additional class if this is not a featured display
        if (!isFeatured) {
            // Add search results header only for non-featured results
            const searchHeader = document.createElement('div');
            searchHeader.classList.add('search-header');

            const headerTitle = document.createElement('h2');
            headerTitle.textContent = `Search Results (${results.length} aircraft found)`;
            headerTitle.classList.add('search-title');

            searchHeader.appendChild(headerTitle);
            resultsContainer.appendChild(searchHeader);
            resultsContainer.classList.add('search-results-margin');
        }

        if (results.length === 0) {
            resultsContainer.innerHTML += '<p class="no-results">No results found. Please try different search criteria.</p>';
        } else {
            // Calculate pagination
            const totalPages = Math.ceil(results.length / RESULTS_PER_PAGE);
            const startIndex = (currentPage - 1) * RESULTS_PER_PAGE;
            const endIndex = Math.min(startIndex + RESULTS_PER_PAGE, results.length);

            // Display current page results
            const currentPageResults = results.slice(startIndex, endIndex);

            currentPageResults.forEach(result => {
                const resultCard = document.createElement('div');
                resultCard.classList.add('result-card');

                const imageSrc = `images/aircraft/${result.model.replace(/\s+/g, '-').toLowerCase()}.jpg`;
                const safetyScore = result.safetyScore;
                const svgHTML = `
                <svg viewBox="0 0 36 36" class="top-circular-chart">
                    <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                    <path class="circle" stroke-dasharray="${safetyScore}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                    <span class="score">${safetyScore}%</span>
                </svg>
            `;

                resultCard.innerHTML = `
                <div class="card-image">
                <img src="${imageSrc}">
           
            <div class="safety-score-badge">
                ${svgHTML}
            </div>
                </div>
                <div class="card-content">
                 <div class="card-header">
                    <h3 class="aircraft-name">${result.model}</h3>
                    <div class="aircraft-meta">
                    <span class="manufacturer"><i class="fa-regular fa-industry"></i>${result.manufacturer} </span>
                     <span class="meta-separator">•</span>
                    <span class="type"><i class="fa-regular fa-plane"></i>${result.type}</span>
                     <span class="meta-separator">•</span>
                    <span class="year"><i class="fa-regular fa-calendar-days"></i>${result.year} </span>
                    </div>
                        </div>
            <div class="stats-grid">
                <div class="stat-item">
                <i class="fa-regular fa-plane-departure"></i>
                    <span class="stat-label">Total Flights: </span>
                     <span class="stat-value">${result.totalFlights.toLocaleString()}</span>
                </div>
                <div class="stat-item">
                <i class="fa-regular fa-triangle-exclamation"></i>
                    <span class="stat-label">Incident Rate: </span>
                     <span class="stat-value">${(result.incidentRate * 100).toFixed(4)}%</span>
                </div>
                <div class="stat-item">
                  <i class="fa-regular fa-clock"></i>
                    <span class="stat-label">Last Incident</span>
                     <span class="stat-value">${result.lastIncidentDate}</span>
                </div>
            </div>
            <button class="view-report">
            </i><a href="details.html?id=${result.id}">View Full Report</a></button>
                   
                </div>
            `;

                resultsContainer.appendChild(resultCard);
            });

            // Add pagination if there are multiple pages
            if (totalPages > 1) {
                resultsContainer.appendChild(createPagination(totalPages));
            }
        }

        const existingResults = document.querySelector('.search-results');
        if (existingResults) {
            existingResults.remove();
        }
        document.querySelector('.main-tool').appendChild(resultsContainer);
    }

    function createPagination(totalPages) {
        const pagination = document.createElement('div');
        pagination.classList.add('pagination');

        // Previous button
        const prevButton = document.createElement('button');
        prevButton.textContent = '←';
        prevButton.classList.add('pagination-btn');
        prevButton.disabled = currentPage === 1;
        prevButton.addEventListener('click', async () => {
            if (currentPage > 1) {
                await handlePageChange(currentPage - 1);
            }
        });
        pagination.appendChild(prevButton);

        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            pageButton.classList.add('pagination-btn');
            if (i === currentPage) {
                pageButton.classList.add('active');
            }
            pageButton.addEventListener('click', async () => {
                await handlePageChange(i);
            });
            pagination.appendChild(pageButton);
        }

        // Next button
        const nextButton = document.createElement('button');
        nextButton.textContent = '→';
        nextButton.classList.add('pagination-btn');
        nextButton.disabled = currentPage === totalPages;
        nextButton.addEventListener('click', async () => {
            if (currentPage < totalPages) {
                await handlePageChange(currentPage + 1);
            }
        });
        pagination.appendChild(nextButton);

        return pagination;
    }

    async function handlePageChange(newPage) {
        progressBar.start();

        try {
            // Add a small delay to make the progress bar visible
            await new Promise(resolve => setTimeout(resolve, 300));

            currentPage = newPage;
            const start = (currentPage - 1) * RESULTS_PER_PAGE;
            const end = start + RESULTS_PER_PAGE;
            const paginatedResults = currentResults.slice(start, end);

            // Preload images for the new page
            await preloadImages(paginatedResults);
            await displayResults(currentResults, false); // Keeping currentResults for pagination calculation
            // Scroll to results with offset
            const resultsContainer = document.querySelector('.search-results');
            const headerHeight = document.querySelector('header').offsetHeight;
            const scrollPosition = resultsContainer.offsetTop - headerHeight - 20; // 20px extra padding
            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });

        } catch (error) {
            console.error('Error during pagination:', error);
        } finally {
            progressBar.finish();
        }


    }


    function getSafetyScoreColor(score) {
        if (score >= 90) return '#4CAF50';
        if (score >= 70) return '#FFC107';
        return '#F44336';
    }

    // Add back to top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.textContent = '↑';
    backToTopBtn.classList.add('back-to-top');
    document.body.appendChild(backToTopBtn);

    // Show button when scrolled down
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    // Scroll back to top when button clicked
    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Initial update of range values
    updateYearRange();
    safetyScoreValue.textContent = safetyScoreSlider.value;
});

// Range slider functionality
function updateRangeSlider(minSlider, maxSlider, track) {
    const percent1 = ((minSlider.value - minSlider.min) / (minSlider.max - minSlider.min)) * 100;
    const percent2 = ((maxSlider.value - minSlider.min) / (minSlider.max - minSlider.min)) * 100;
    // Only apply color and position if the sliders aren't at their default positions
    if (minSlider.value > minSlider.min || maxSlider.value < maxSlider.max) {
        track.style.backgroundColor = '#fca311'; // Original color from CSS
        track.style.left = percent1 + "%";
        track.style.width = (percent2 - percent1) + "%";
    } else {
        track.style.backgroundColor = 'transparent';
        track.style.left = "0%";
        track.style.width = "100%";
    }
}

const yearMinSlider = document.getElementById('year-min');
const yearMaxSlider = document.getElementById('year-max');
const yearTrack = yearMinSlider.parentElement.querySelector('.range-slider-track');

yearMinSlider.addEventListener('input', () => updateRangeSlider(yearMinSlider, yearMaxSlider, yearTrack));
yearMaxSlider.addEventListener('input', () => updateRangeSlider(yearMinSlider, yearMaxSlider, yearTrack));

// Safety score slider functionality
const safetyScoreSlider = document.getElementById('safety-score');
const safetyScoreValue = document.getElementById('safety-score-value');
const safetyScoreTrack = safetyScoreSlider.parentElement.querySelector('.range-slider-track');

function updateSafetyScoreSlider() {
    const value = safetyScoreSlider.value;
    const max = safetyScoreSlider.max;
    const percentage = (value / max) * 100;

    safetyScoreValue.textContent = value;

    let color;
    if (value < 35) {
        color = '#ff4e50'; // Red for low safety scores
    } else if (value < 70) {
        color = '#fc913a'; // Orange for medium safety scores
    } else {
        color = '#4caf50'; // Green for high safety scores
    }

    safetyScoreTrack.style.width = `${percentage}%`;
    safetyScoreTrack.style.backgroundColor = color;
    safetyScoreSlider.style.setProperty('--thumb-color', color);
}

function interpolateColor(color1, color2, factor) {
    const result = color1.slice(1).match(/.{2}/g).map((hex, i) => {
        const rgb1 = parseInt(hex, 16);
        const rgb2 = parseInt(color2.slice(1).match(/.{2}/g)[i], 16);
        const interpolatedValue = Math.round(rgb1 + (rgb2 - rgb1) * factor);
        return interpolatedValue.toString(16).padStart(2, '0');
    }).join('');

    return `#${result}`;
}

safetyScoreSlider.addEventListener('input', updateSafetyScoreSlider);

// Initial call to set the correct state on page load
updateSafetyScoreSlider();

// featured insight section
document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.insight-card');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth;
    const maxIndex = cards.length - Math.floor(track.offsetWidth / cardWidth);

    function updateCarousel() {
        // Only apply transform if not on mobile
        if (window.innerWidth > 768) {
            track.style.transform = `translateX(-${currentIndex * (cardWidth + 32)}px)`;

            // Update button states
            prevButton.disabled = currentIndex === 0;
            nextButton.disabled = currentIndex >= maxIndex;

            // Update button opacity based on state
            prevButton.style.opacity = prevButton.disabled ? '0.5' : '1';
            nextButton.style.opacity = nextButton.disabled ? '0.5' : '1';
        }
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Initialize carousel
    updateCarousel();

    // Update on window resize
    window.addEventListener('resize', () => {
        currentIndex = 0;
        updateCarousel();
    });
});
// Testiminial section
document.addEventListener('DOMContentLoaded', function () {
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    testimonialCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

