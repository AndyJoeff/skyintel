// details.js
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const aircraftId = parseInt(urlParams.get("id"));
    const aircraft = mockDatabase.aircraft.find((item) => item.id === aircraftId);

    if (!aircraft) {
        document.getElementById("details-container").innerHTML = `
            <div class="error-container">
                <h2>Aircraft Not Found</h2>
                <p>The requested aircraft information could not be found.</p>
                <a href="index.html" class="back-button">Return to Search</a>
            </div>`;
        return;
    }

    // Create charts using Chart.js
    function createSafetyTrendChart(data) {
        const ctx = document.getElementById("safetyTrendChart").getContext("2d");
        return new Chart(ctx, {
            type: "line",
            data: {
                labels: data.yearlyTrend.years,
                datasets: [
                    {
                        label: "Safety Score Trend",
                        data: data.yearlyTrend.safetyScores,
                        borderColor: "#2196F3",
                        tension: 0.4,
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: "Safety Score Trend Over Years",
                    },
                },
            },
        });
    }

    function createReliabilityChart(data) {
        const ctx = document.getElementById("reliabilityChart").getContext("2d");
        return new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [
                    {
                        label: "Monthly Reliability Rate (%)",
                        data: data.monthlyData.reliability,
                        backgroundColor: "#4CAF50",
                    },
                ],
            },
        });
    }

    // Main content rendering
    const detailsContainer = document.getElementById("details-container");
    detailsContainer.innerHTML = `
        <div class="aircraft-header">
    <div class="image-carousel">
        <div class="carousel-container">
            <div class="carousel-track" id="carouselTrack">
                ${aircraft.images.map((image, index) => `
                    <div class="carousel-slide ${index === 0 ? 'active' : ''}">
    <img src="images/aircraft/${image.url}" 
         alt="${aircraft.model} - ${image.caption}"
         onerror="this.src='images/placeholder-aircraft.jpg'">
    <p class="image-caption">${image.caption}</p>
</div>

                 
                `).join('')}
            </div>
            <button class="carousel-button prev" id="prevButton">
                <span class="arrow">←</span>
            </button>
            <button class="carousel-button next" id="nextButton">
                <span class="arrow">→</span>
            </button>
        </div>
        <div class="carousel-indicators">
            ${aircraft.images.map((_, index) => `
                <button class="indicator ${index === 0 ? 'active' : ''}" 
                        data-index="${index}"></button>
            `).join('')}
        </div>
    </div>

    <div class="aircraft-details">
        <div class="aircraft-top-header">
            <div class="aircraft-title">
                <h1>${aircraft.model}</h1>
                <div class="manufacturer">
                    <span class="label">Manufacturer:</span>
                    <span class="value">${aircraft.manufacturer}</span>
                </div>
            </div>
            <div class="safety-score-check" style="background-color: ${getSafetyScorebgColor(aircraft.safetyScore)}; color: ${getSafetyScoreColor(aircraft.safetyScore)}">
                ${aircraft.safetyScore}%
                <span class="safety-label">Safety Score</span>
            </div>
        </div>
        <div class="quick-stats">
            <div class="key-stat">
                <span class="stat-value">${aircraft.year}</span>
                <span class="stat-label">Year</span>
            </div>
            <div class="key-stat">
                <span class="stat-value">${aircraft.totalFlights.toLocaleString()}</span>
                <span class="stat-label">Total Flights</span>
            </div>
            <div class="key-stat">
                <span class="stat-value">${aircraft.incidentRate}</span>
                <span class="stat-label">Incident Rate</span>
            </div>
        </div>
    </div>
</div>

        <div class="details-grid">
            <section class="specifications-card">
    <h2>Aircraft Specifications</h2>
    <div class="specs-grid">
        ${Object.entries(aircraft.specifications)
            .filter(([key]) => key !== "certifications")
            .map(
                ([key, value]) => `
                <div class="spec-item">
                    <span class="spec-label">${key
                        .replace(/([A-Z])/g, " $1")
                        .trim()}</span>
                    <span class="spec-value">${value}</span>
                </div>
            `
            )
            .join("")}
        
        ${aircraft.specifications.certifications
            ? `<div class="spec-certifications">
                <span class="spec-label">Certifications</span>
                <div class="certification-list">
                    ${Object.entries(aircraft.specifications.certifications)
                .map(
                    ([key, value]) => `
                            <span class="certification-item certification-${key}">
                                ${value}
                            </span>
                        `
                )
                .join("")}
                </div>
            </div>`
            : ""
        }
    </div>
</section>

            <section class="safety-features-card">
                <h2>Safety Features</h2>
                <div class="features-list">
                    ${aircraft.safetyFeatures
            .map(
                (feature) => `
                        <div class="feature-item">
                            <h3>${feature.name}</h3>
                            <p>${feature.description}</p>
                        </div>
                    `
            )
            .join("")}
                </div>
            </section>

<section class="safety-featuress-card">
    <div class="maintenance-card">
        <div class="maintenance-header">
            <h3>Maintenance Requirements</h3>
        </div>
        
        <div class="check-timeline">
            ${Object.entries(aircraft.maintenanceRequirements.standardChecks)
            .map(([checkType, checkDetails], index) => {
                const colors = {
                    aCheck: "#4CAF50",
                    bCheck: "#2196F3",
                    cCheck: "#FF9800",
                    dCheck: "#F44336",
                };

                return `
                    <div class="check-item">
                        <div class="check-badge">
                            <span class="check-icon" style="background: ${colors[checkType]
                    }">
                                <svg fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                                </svg>
                            </span>
                        </div>
                        <div class="check-details">
                            <h4>${checkType.charAt(0).toUpperCase() + " Check"
                    }</h4>
                            <div class="check-stats">
                                <div class="stat">
                                    <i class="fas fa-clock"></i>
                                    <span>${checkDetails.interval}</span>
                                </div>
                                <div class="stat">
                                    <i class="fas fa-tools"></i>
                                    <span>${checkDetails.estimatedDuration
                    }</span>
                                </div>
                            </div>
                            <p>${checkDetails.description}</p>
                        </div>
                    </div>
                    `;
            })
            .join("")}
        </div>

        <div class="required-inspections">
            <h4>Required Inspection Items</h4>
            <ul>
                ${aircraft.maintenanceRequirements.requiredInspectionItems
            .map((item) => `<li>${item}</li>`)
            .join("")}
            </ul>
        </div>
    </div>
</section>

            <section class="charts-card">
                <h2>Performance Analytics</h2>
                <div class="charts-container">
                    <div class="chart">
                    <div class="chart-container">
                        <canvas id="safetyTrendChart" style="height: 220px;"></canvas>
                          </div>
                    </div>
                    <div class="chart">
                     <div class="chart-container">
                        <canvas id="reliabilityChart" style="height: 220px;"></canvas>
                    </div>
                      </div>
                </div>
            </section>
        </div>

        <div class="coming-soon-notice">
            <p>More detailed analysis and historical data coming soon...</p>
        </div>

        <div class="action-buttons">
            <a href="index.html" class="back-button">Back to Search</a>
            <button class="print-button" onclick="window.print()">Print Report</button>
        </div>
    `;

    // Initialize charts
    createSafetyTrendChart(aircraft.operationalMetrics.safetyTrend);
    createReliabilityChart(aircraft.operationalMetrics.safetyTrend);
});

function getSafetyScorebgColor(score) {
    if (score >= 90) return "#4CAF50";
    if (score >= 70) return "#ffd3b6";
    return "#F44336";
}

function getSafetyScoreColor(score) {
    if (score >= 90) return "#4CAF50";
    if (score >= 70) return "#7d4e1d";
    return "#F44336";
}

// Carousel functionality
function initializeCarousel() {
    const track = document.getElementById('carouselTrack');
    const slides = track.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    let currentIndex = 0;

    function updateCarousel() {
        // Update slide positions
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });

        // Update slide active states
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentIndex);
        });

        // Update button states
        prevButton.style.opacity = currentIndex === 0 ? '0.5' : '1';
        nextButton.style.opacity = currentIndex === slides.length - 1 ? '0.5' : '1';
    }

    function moveToSlide(index) {
        currentIndex = Math.max(0, Math.min(index, slides.length - 1));
        updateCarousel();
    }

    // Event Listeners
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) moveToSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) moveToSlide(currentIndex + 1);
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => moveToSlide(index));
    });

    // Touch support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });

    track.addEventListener('touchmove', (e) => {
        touchEndX = e.touches[0].clientX;
    });

    track.addEventListener('touchend', () => {
        const difference = touchStartX - touchEndX;
        if (Math.abs(difference) > 50) { // Minimum swipe distance
            if (difference > 0) {
                // Swipe left
                if (currentIndex < slides.length - 1) moveToSlide(currentIndex + 1);
            } else {
                // Swipe right
                if (currentIndex > 0) moveToSlide(currentIndex - 1);
            }
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            if (currentIndex > 0) moveToSlide(currentIndex - 1);
        } else if (e.key === 'ArrowRight') {
            if (currentIndex < slides.length - 1) moveToSlide(currentIndex + 1);
        }
    });

    // Auto-advance timer (optional)
    let autoAdvanceTimer;

    function startAutoAdvance() {
        autoAdvanceTimer = setInterval(() => {
            if (currentIndex < slides.length - 1) {
                moveToSlide(currentIndex + 1);
            } else {
                moveToSlide(0);
            }
        }, 5000); // Change slide every 5 seconds
    }

    function stopAutoAdvance() {
        clearInterval(autoAdvanceTimer);
    }

    // Start auto-advance and handle pause on hover
    startAutoAdvance();
    track.addEventListener('mouseenter', stopAutoAdvance);
    track.addEventListener('mouseleave', startAutoAdvance);

    // Initial setup
    updateCarousel();
}

// Initialize carousel when the details page loads
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const aircraftId = parseInt(urlParams.get("id"));
    const aircraft = mockDatabase.aircraft.find((item) => item.id === aircraftId);

    if (aircraft) {
        // Render your content first
        // ... your existing rendering code ...

        // Then initialize the carousel
        initializeCarousel();
    }
});