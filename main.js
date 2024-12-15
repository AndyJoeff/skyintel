
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
});
// main.js

document.addEventListener('DOMContentLoaded', function () {
    // Elements
    const toggleFiltersBtn = document.getElementById('toggle-filters');
    const filterOptions = document.querySelector('.filter-options');
    const filterActions = document.querySelector('.filter-actions');
    const searchInput = document.getElementById('search-input');
    const searchSuggestions = document.getElementById('search-suggestions');
    const searchButton = document.getElementById('search-button');
    const applyFiltersButton = document.getElementById('apply-filters'); // New Apply Filters button
    const resetFiltersButton = document.getElementById('reset-filters'); // New Reset Filters button
    const aircraftTypeSelect = document.getElementById('aircraft-type');
    const manufacturerSelect = document.getElementById('manufacturer');
    const yearMinSlider = document.getElementById('year-min');
    const yearMaxSlider = document.getElementById('year-max');
    const yearMinValue = document.getElementById('year-min-value');
    const yearMaxValue = document.getElementById('year-max-value');
    const safetyScoreSlider = document.getElementById('safety-score');
    const safetyScoreValue = document.getElementById('safety-score-value');

    // Toggle advanced filters
    toggleFiltersBtn.addEventListener('click', function () {
        filterOptions.style.display = filterOptions.style.display === 'none' ? 'grid' : 'none';
        toggleFiltersBtn.textContent = filterOptions.style.display === 'none' ? 'Advanced Filters' : 'Hide Filters';
        filterActions.style.display = filterActions.style.display === 'none' ? 'flex' : 'none';
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
        const aircraftSuggestions = mockDatabase.aircraft
            .filter(aircraft => aircraft.model.toLowerCase().includes(input.toLowerCase()))
            .map(aircraft => ({ type: 'Aircraft', name: aircraft.model }));

        const airlineSuggestions = mockDatabase.airlines
            .filter(airline => airline.name.toLowerCase().includes(input.toLowerCase()))
            .map(airline => ({ type: 'Airline', name: airline.name }));

        return [...aircraftSuggestions, ...airlineSuggestions];
    }

    searchInput.addEventListener('input', function () {
        const suggestions = getSuggestions(this.value);
        displaySuggestions(suggestions);
    });

    function displaySuggestions(suggestions) {
        searchSuggestions.innerHTML = '';
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

    // Hide suggestions when clicking outside
    document.addEventListener('click', function (event) {
        if (!searchSuggestions.contains(event.target) && event.target !== searchInput) {
            searchSuggestions.style.display = 'none';
        }
    });

    // Search and filter event listeners
    searchButton.addEventListener('click', performSearch);
    applyFiltersButton.addEventListener('click', performSearch); // Trigger search on Apply Filters click
    resetFiltersButton.addEventListener('click', resetFilters);  // Trigger reset on Reset Filters click

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const aircraftType = aircraftTypeSelect.value;
        const manufacturer = manufacturerSelect.value;
        const yearMin = parseInt(yearMinSlider.value);
        const yearMax = parseInt(yearMaxSlider.value);
        const minSafetyScore = parseInt(safetyScoreSlider.value);

        const aircraftResults = mockDatabase.aircraft.filter(aircraft =>
            (aircraft.model.toLowerCase().includes(searchTerm) ||
                aircraft.manufacturer.toLowerCase().includes(searchTerm)) &&
            (aircraftType === '' || aircraft.type === aircraftType) &&
            (manufacturer === '' || aircraft.manufacturer === manufacturer) &&
            aircraft.year >= yearMin && aircraft.year <= yearMax &&
            aircraft.safetyScore >= minSafetyScore
        );

        const airlineResults = mockDatabase.airlines.filter(airline =>
            airline.name.toLowerCase().includes(searchTerm) &&
            airline.safetyScore >= minSafetyScore
        );

        const allResults = [...aircraftResults, ...airlineResults];
        const sortedResults = allResults.sort((a, b) => b.safetyScore - a.safetyScore);

        displayResults(sortedResults);
    }

    function resetFilters() {
        aircraftTypeSelect.value = '';
        manufacturerSelect.value = '';
        yearMinSlider.value = yearMinSlider.min;
        yearMaxSlider.value = yearMaxSlider.max;
        safetyScoreSlider.value = safetyScoreSlider.min;

        // Update displayed values
        yearMinValue.textContent = yearMinSlider.min;
        yearMaxValue.textContent = yearMaxSlider.max;
        safetyScoreValue.textContent = safetyScoreSlider.min;

        // Perform a new search with reset filters
        performSearch();
    }

    // Remove the event listeners that were automatically updating the search
    aircraftTypeSelect.removeEventListener('change', performSearch);
    manufacturerSelect.removeEventListener('change', performSearch);
    yearMinSlider.removeEventListener('input', performSearch);
    yearMaxSlider.removeEventListener('input', performSearch);
    safetyScoreSlider.removeEventListener('input', performSearch);

    // Continue to Part 2...
    // Part 2

    function displayResults(results) {
        const resultsContainer = document.createElement('div');
        resultsContainer.classList.add('search-results');

        if (results.length === 0) {
            resultsContainer.innerHTML = '<p class="no-results">No results found. Please try different search criteria.</p>';
        } else {
            results.forEach(result => {
                const resultCard = document.createElement('div');
                resultCard.classList.add('result-card');

                if ('model' in result) {
                    // Aircraft result
                    resultCard.innerHTML = `
                        <h3>${result.model}</h3>
                        <div class="safety-score" style="background-color: ${getSafetyScoreColor(result.safetyScore)}">
                            ${result.safetyScore}%
                        </div>
                        <p><strong>Manufacturer:</strong> ${result.manufacturer}</p>
                        <p><strong>Type:</strong> ${result.type}</p>
                        <p><strong>Year:</strong> ${result.year}</p>
                        <p><strong>Total Flights:</strong> ${result.totalFlights.toLocaleString()}</p>
                        <p><strong>Incident Rate:</strong> ${(result.incidentRate * 100).toFixed(4)}%</p>
                        <p><strong>Last Incident:</strong> ${result.lastIncidentDate}</p>
                    `;
                } else {
                    // Airline result
                    resultCard.innerHTML = `
                        <h3>${result.name}</h3>
                        <div class="safety-score" style="background-color: ${getSafetyScoreColor(result.safetyScore)}">
                            ${result.safetyScore}%
                        </div>
                        <p><strong>Fleet:</strong> ${result.fleet.join(', ')}</p>
                        <p><strong>Total Flights:</strong> ${result.totalFlights.toLocaleString()}</p>
                        <p><strong>Incident Rate:</strong> ${(result.incidentRate * 100).toFixed(4)}%</p>
                        <p><strong>Last Incident:</strong> ${result.lastIncidentDate}</p>
                    `;
                }

                const viewDetailsBtn = document.createElement('button');
                viewDetailsBtn.textContent = 'View Details';
                viewDetailsBtn.classList.add('view-details-btn');
                viewDetailsBtn.addEventListener('click', () => showDetailedView(result));

                resultCard.appendChild(viewDetailsBtn);
                resultsContainer.appendChild(resultCard);
            });
        }

        // Replace any existing results
        const existingResults = document.querySelector('.search-results');
        if (existingResults) {
            existingResults.remove();
        }
        document.querySelector('.main-tool').appendChild(resultsContainer);
    }

    function showDetailedView(item) {
        const detailedView = document.createElement('div');
        detailedView.classList.add('detailed-view', 'fade-in');

        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'X';
        closeBtn.classList.add('close-btn');
        closeBtn.addEventListener('click', () => {
            detailedView.classList.add('fade-out');
            detailedView.addEventListener('animationend', () => detailedView.remove());
        });

        const content = document.createElement('div');
        content.classList.add('detailed-content');

        if ('model' in item) {
            // Aircraft details
            content.innerHTML = `
                <h2>${item.model}</h2>
                <div class="safety-score" style="background-color: ${getSafetyScoreColor(item.safetyScore)}">
                    ${item.safetyScore}%
                </div>
                <p><strong>Manufacturer:</strong> ${item.manufacturer}</p>
                <p><strong>Type:</strong> ${item.type}</p>
                <p><strong>Year:</strong> ${item.year}</p>
                <p><strong>Total Flights:</strong> ${item.totalFlights.toLocaleString()}</p>
                <p><strong>Incident Rate:</strong> ${(item.incidentRate * 100).toFixed(4)}%</p>
                <p><strong>Last Incident:</strong> ${item.lastIncidentDate}</p>
                <h3>Safety Features:</h3>
                <ul>
                    <li>Advanced avionics system</li>
                    <li>Enhanced ground proximity warning system</li>
                    <li>Traffic collision avoidance system</li>
                </ul>
                <h3>Maintenance History:</h3>
                <p>Last major overhaul: ${new Date().getFullYear() - 2}</p>
                <p>Regular maintenance schedule: Every 600 flight hours</p>
            `;
        } else {
            // Airline details
            content.innerHTML = `
                <h2>${item.name}</h2>
                <div class="safety-score" style="background-color: ${getSafetyScoreColor(item.safetyScore)}">
                    ${item.safetyScore}%
                </div>
                <p><strong>Fleet:</strong> ${item.fleet.join(', ')}</p>
                <p><strong>Total Flights:</strong> ${item.totalFlights.toLocaleString()}</p>
                <p><strong>Incident Rate:</strong> ${(item.incidentRate * 100).toFixed(4)}%</p>
                <p><strong>Last Incident:</strong> ${item.lastIncidentDate}</p>
                <h3>Safety Initiatives:</h3>
                <ul>
                    <li>Comprehensive pilot training program</li>
                    <li>Regular safety audits and inspections</li>
                    <li>Advanced maintenance tracking system</li>
                </ul>
                <h3>Awards and Certifications:</h3>
                <p>IATA Operational Safety Audit (IOSA) certified</p>
                <p>Skytrax 5-Star Airline Rating</p>
            `;
        }

        detailedView.appendChild(closeBtn);
        detailedView.appendChild(content);
        document.body.appendChild(detailedView);
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

function updateRangeSlider(minSlider, maxSlider, track) {
    const percent1 = ((minSlider.value - minSlider.min) / (minSlider.max - minSlider.min)) * 100;
    const percent2 = ((maxSlider.value - minSlider.min) / (minSlider.max - minSlider.min)) * 100;
    track.style.left = percent1 + "%";
    track.style.width = (percent2 - percent1) + "%";
}

const yearMinSlider = document.getElementById('year-min');
const yearMaxSlider = document.getElementById('year-max');
const yearTrack = yearMinSlider.parentElement.querySelector('.range-slider-track');

yearMinSlider.addEventListener('input', () => updateRangeSlider(yearMinSlider, yearMaxSlider, yearTrack));
yearMaxSlider.addEventListener('input', () => updateRangeSlider(yearMinSlider, yearMaxSlider, yearTrack));

// Similar setup for the safety score slider
const safetyScoreSlider = document.getElementById('safety-score');
const safetyScoreValue = document.getElementById('safety-score-value');
const safetyScoreTrack = safetyScoreSlider.parentElement.querySelector('.range-slider-track');

function updateSafetyScoreSlider() {
    const value = safetyScoreSlider.value;
    const max = safetyScoreSlider.max;
    const percentage = (value / max) * 100;

    // Update the displayed value
    safetyScoreValue.textContent = value;

    // Calculate color based on the value
    let color;
    if (value < 33) {
        color = interpolateColor('#ff4e50', '#fc913a', value / 33);
    } else if (value < 66) {
        color = interpolateColor('#fc913a', '#4caf50', (value - 33) / 33);
    } else {
        color = '#4caf50';
    }

    // Update the track width and color
    safetyScoreTrack.style.width = `${percentage}%`;
    safetyScoreTrack.style.backgroundColor = color;

    // Update the thumb color
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