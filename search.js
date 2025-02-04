document.addEventListener('DOMContentLoaded', () => {
    // Existing elements
    const searchToggle = document.querySelector('.search-toggle');
    const searchPanel = document.querySelector('.search-panel');
    const searchSidebar = document.querySelector('.search-sidebar');
    const overlay = document.getElementById('overlay');
    const closeBtns = document.querySelector('.close-sidebar');
    const closeBtn = document.querySelector('.closex');
    const mainContent = document.querySelector('body');
    const mobileSearchResults = document.querySelector('.mobile-search-results');
    const desktopSearchToggle = document.querySelector('.desktop-search-toggle');


    // Store the scroll position
    let scrollPosition = 0;

    // Search elements
    const searchInput = document.getElementById('search-input');
    const mobileSearchInput = document.getElementById('mobile-search-input');
    const clearButtons = document.querySelectorAll('.clear-search');

    // Search state
    let recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];

    function handleSearch(input, resultsContainer) {
        const query = input.value.toLowerCase().trim();
        const results = mockDatabase.aircraft.filter(aircraft =>
            aircraft.model.toLowerCase().includes(query) ||
            aircraft.manufacturer.toLowerCase().includes(query) ||
            aircraft.type.toLowerCase().includes(query)
        );

        displayResults(results, resultsContainer);
    }

    function displayResults(results, container) {
        const resultsList = container.querySelector('.results-list');
        resultsList.innerHTML = '';

        if (results.length === 0) {
            resultsList.innerHTML = '<div class="no-results">No matches found</div>';
            return;
        }

        results.forEach(result => {
            const resultItem = document.createElement('a');
            resultItem.href = `details.html?id=${result.id}`;
            resultItem.className = 'result-item';
            resultItem.innerHTML = `
                <div class="result-info">
                    <div class="result-model">${result.model}</div>
                    <div class="result-details">${result.manufacturer} · ${result.type} · ${result.year}</div>
                </div>
                <div class="safety-badge" style="background: ${getSafetyColor(result.safetyScore)}">
                    ${result.safetyScore}%
                </div>
            `;
            resultsList.appendChild(resultItem);
        });
    }

    function getSafetyColor(score) {
        if (score >= 90) return '#4CAF50';
        if (score >= 70) return '#FFC107';
        return '#F44336';
    }

    function updateRecentSearches(query) {
        recentSearches = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
        localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
        displayRecentSearches();
    }

    function displayRecentSearches() {
        document.querySelectorAll('.recent-list').forEach(container => {
            container.innerHTML = recentSearches.map(search => `
                <div class="result-item recent-search">
                    <i class="fas fa-history"></i>
                    <span>${search}</span>
                </div>
            `).join('');
        });
    }

    // Event Listeners
    searchToggle.addEventListener('click', () => {
        if (window.innerWidth > 768) {
            searchPanel.classList.remove('active');
            searchInput.focus();
        } else {
            searchSidebar.classList.add('active');
            overlay.classList.remove('hidden');
            mobileSearchInput.focus();
            // Store current scroll position
            scrollPosition = window.pageYOffset;
            // Apply fixed position to body and adjust top position
            mainContent.style.position = 'fixed';
            mainContent.style.top = `-${scrollPosition}px`;
            mainContent.style.width = '100%';
        }
    });

      overlay.addEventListener('click', () => {
        searchSidebar.classList.remove('active');
    });

    closeBtns.addEventListener('click', () => {
        searchSidebar.classList.remove('active');

        // Restore normal scrolling
        mainContent.style.position = '';
        mainContent.style.top = '';
        mainContent.style.width = '';
        window.scrollTo(0, scrollPosition);

    });

    closeBtn.addEventListener('click', () => {
        searchPanel.classList.remove('active')

    });

    [searchInput, mobileSearchInput].forEach(input => {
        input.addEventListener('input', (e) => {
            const clearButton = e.target.parentElement.querySelector('.clear-search');
            clearButton.classList.toggle('hidden', !e.target.value);
            handleSearch(e.target, e.target.closest('.search-panel, .search-sidebar'));
        });
    });

    clearButtons.forEach(button => {
        button.addEventListener('click', () => {
            const input = button.parentElement.querySelector('input');
            input.value = '';
            input.focus();
            button.classList.add('hidden');
            displayRecentSearches();
        });
    });

    // Function to toggle desktop search panel
    const toggleDesktopSearch = () => {
        searchPanel.classList.toggle('active');
        if (!searchPanel.classList.contains('hidden')) {
            document.getElementById('search-input').focus();
        }
    };

    // Add event listener for desktop search toggle
    desktopSearchToggle.addEventListener('click', toggleDesktopSearch);

    // Close search panel when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchPanel.classList.contains('hidden') &&
            !searchPanel.contains(e.target) &&
            !desktopSearchToggle.contains(e.target)) {
            searchPanel.classList.remove('active');
        }
    });

    desktopSearchToggle.addEventListener('click', () => {
        desktopSearchToggle.classList.toggle('active');
        // Your existing search panel toggle code
    });

    // Remove active state when search panel is closed
    document.querySelector('.closex').addEventListener('click', () => {
        desktopSearchToggle.classList.remove('active');
    });

    // Remove active state when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-panel') &&
            !e.target.closest('.desktop-search-toggle')) {
            desktopSearchToggle.classList.remove('active');
        }
    });

    function setSearchResultsHeight() {
        const sidebarHeight = searchSidebar.offsetHeight;
        mobileSearchResults.style.maxHeight = `${sidebarHeight - 200}px`;
    }

    setSearchResultsHeight();
    window.addEventListener('resize', setSearchResultsHeight);



    // Initial display of recent searches
    displayRecentSearches();
});
