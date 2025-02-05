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

    function createScrollAnimations() {
        setTimeout(() => {
            const chartContainers = document.querySelectorAll('.chart-container');

            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const chartAnimator = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const canvas = entry.target.querySelector('canvas');
                        const chartInstance = Chart.getChart(canvas);

                        if (canvas && chartInstance) {
                            // Recreate the chart with full original animation settings
                            const chartConfig = chartInstance.config;

                            // Preserve the original dataset and options
                            chartConfig.data.datasets[0].animation = {
                                duration: 1500,
                                easing: 'easeOutQuart'
                            };

                            // Restore specific animation options
                            if (chartConfig.type === 'line') {
                                // Restore the dash animation for line chart
                                chartConfig.options.animation = {
                                    onProgress: function (animation) {
                                        const chartInstance = animation.chart;
                                        const ctx = chartInstance.ctx;
                                        ctx.save();
                                        ctx.strokeStyle = '#6CA6C1';
                                        ctx.lineWidth = 3;
                                        ctx.setLineDash([10, 5]);
                                        ctx.lineDashOffset = animation.currentStep / animation.numSteps * 100;
                                        chartInstance.data.datasets.forEach(function (dataset) {
                                            ctx.strokeRect(
                                                chartInstance.chartArea.left,
                                                chartInstance.chartArea.top,
                                                chartInstance.chartArea.right - chartInstance.chartArea.left,
                                                chartInstance.chartArea.bottom - chartInstance.chartArea.top
                                            );
                                        });
                                        ctx.restore();
                                    }
                                };
                            }

                            if (chartConfig.type === 'bar') {
                                // Restore staggered bar animation
                                chartConfig.options.animation = {
                                    delay: (context) => {
                                        return context.dataIndex * 200; // Staggered animation for bars
                                    }
                                };
                            }

                            // Destroy and recreate the chart
                            chartInstance.destroy();
                            new Chart(canvas, chartConfig);

                            // Trigger the canvas animation
                            canvas.classList.add('chart-animate');

                            // REMOVE the line that stops observing the element
                            // This allows the animation to happen every time the chart enters the viewport
                        }
                    }
                });
            }, observerOptions);

            chartContainers.forEach(container => {
                chartAnimator.observe(container);
            });
        }, 200);
    }

    function initializeCharts(aircraft) {
        // Safety Trend Chart (keep the original implementation)
        const safetyCtx = document.getElementById('safetyTrendChart').getContext('2d');
        const safetyChart = new Chart(safetyCtx, {
            type: 'line',
            data: {
                labels: aircraft.operationalMetrics.safetyTrend.yearlyTrend.years,
                datasets: [{
                    label: 'Safety Score',
                    data: aircraft.operationalMetrics.safetyTrend.yearlyTrend.safetyScores,
                    borderColor: '#6CA6C1',
                    backgroundColor: 'rgba(108, 166, 193, 0.1)',
                    tension: 0.4,
                    fill: true,
                    animation: {
                        duration: 1500,
                        easing: 'easeOutQuart'
                    }
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 70,
                        max: 100
                    }
                },
                animation: {
                    duration: 0, // Initially disable animation
                    onProgress: function (animation) {
                        const chartInstance = animation.chart;
                        const ctx = chartInstance.ctx;
                        ctx.save();
                        ctx.strokeStyle = '#6CA6C1';
                        ctx.lineWidth = 3;
                        ctx.setLineDash([10, 5]);
                        ctx.lineDashOffset = animation.currentStep / animation.numSteps * 100;
                        chartInstance.data.datasets.forEach(function (dataset) {
                            ctx.strokeRect(
                                chartInstance.chartArea.left,
                                chartInstance.chartArea.top,
                                chartInstance.chartArea.right - chartInstance.chartArea.left,
                                chartInstance.chartArea.bottom - chartInstance.chartArea.top
                            );
                        });
                        ctx.restore();
                    }
                }
            }
        });

        // Reliability Chart (keep the original implementation)
        const reliabilityCtx = document.getElementById('reliabilityChart').getContext('2d');
        const reliabilityChart = new Chart(reliabilityCtx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Reliability (%)',
                    data: aircraft.operationalMetrics.safetyTrend.monthlyData.reliability,
                    backgroundColor: '#0A2342',
                    animation: {
                        duration: 1500,
                        easing: 'easeOutQuart'
                    }
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 98,
                        max: 100
                    }
                },
                animation: {
                    duration: 0, // Initially disable animation
                    delay: (context) => {
                        return context.dataIndex * 200; // Staggered animation for bars
                    }
                }
            }
        });

        // Trigger scroll animations
        createScrollAnimations();
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
                <h1 title="${aircraft.model}">${aircraft.model}</h1>
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


<nav class="details-nav">
    <ul class="details-nav-list">
        <li class="details-nav-item active">
            <a href="#specifications">
                <span class="nav-full">Specifications</span>
                <span class="nav-short">Specs</span>
            </a>
        </li>
        <li class="details-nav-item">
            <a href="#safety">
                <span class="nav-full">Safety Features</span>
                <span class="nav-short">Safety</span>
            </a>
        </li>
        <li class="details-nav-item">
            <a href="#maintenance">
                <span class="nav-full">Maintenance</span>
                <span class="nav-short">Maint.</span>
            </a>
        </li>
        <li class="details-nav-item">
            <a href="#performance">
                <span class="nav-full">Performance</span>
                <span class="nav-short">Perf.</span>
            </a>
        </li>
        <li class="details-nav-item details-nav-compare">
            <a href="comparison.html?id=${aircraft.id}" style="display: flex; align-items: center; gap: 0.5rem;">
                <span class="nav-full">Compare</span>
                <span class="nav-short">Compare</span>
                <i class="fas fa-arrow-up-right-from-square"></i>
            </a>
        </li>
    </ul>
</nav>



<div class="details-grid">
    <div class="specifications-card" id="specifications" >
        <div class="card-header">
            <h2>Aircraft Specifications</h2>
            <div class="header-subtitle">Technical specifications and performance metrics</div>
        </div>

        <div class="specs-content">
            <!-- Main Specifications Grid -->
            <div class="specs-grid">
                <!-- Dimensions -->
                <div class="spec-group">
                    <h3>Dimensions</h3>
                    <div class="spec-items">
                        <div class="spec-item">
                            <span class="spec-icon">📏</span>
                            <div class="spec-details">
                                <div class="spec-label">Length</div>
                                <div class="spec-value">${aircraft.specifications.length}</div>
                            </div>
                        </div>
                        <div class="spec-item">
                            <span class="spec-icon">↔️</span>
                            <div class="spec-details">
                                <div class="spec-label">Wingspan</div>
                                <div class="spec-value">${aircraft.specifications.wingspan}</div>
                            </div>
                        </div>
                        <div class="spec-item">
                            <span class="spec-icon">↕️</span>
                            <div class="spec-details">
                                <div class="spec-label">Height</div>
                                <div class="spec-value">${aircraft.specifications.height}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Performance -->
                <div class="spec-group">
                    <h3>Performance</h3>
                    <div class="spec-items">
                        <div class="spec-item">
                            <span class="spec-icon">🚀</span>
                            <div class="spec-details">
                                <div class="spec-label">Maximum Speed</div>
                                <div class="spec-value">${aircraft.specifications.maxSpeed}</div>
                            </div>
                        </div>
                        <div class="spec-item">
                            <span class="spec-icon">🛫</span>
                            <div class="spec-details">
                                <div class="spec-label">Range</div>
                                <div class="spec-value">${aircraft.specifications.range}</div>
                            </div>
                        </div>
                        <div class="spec-item">
                            <span class="spec-icon">👥</span>
                            <div class="spec-details">
                                <div class="spec-label">Seating Capacity</div>
                                <div class="spec-value">${aircraft.specifications.seatingCapacity} passengers</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Engine & Reliability -->
                <div class="spec-group">
                    <h3>Engine & Reliability</h3>
                    <div class="spec-items">
                        <div class="spec-item engine-item">
                            <span class="spec-icon">⚡</span>
                            <div class="spec-details">
                                <div class="spec-label">Engine Type</div>
                                <div class="spec-value">${aircraft.specifications.engineCount}× ${aircraft.specifications.engineType}</div>
                            </div>
                        </div>
                        <div class="spec-item">
                            <span class="spec-icon">⏳</span>
                            <div class="spec-details">
                                <div class="spec-label">Design Lifespan</div>
                                <div class="spec-value">${aircraft.operationalMetrics.reliabilityMetrics.designLifespan}</div>
                            </div>
                        </div>
                        <div class="spec-item">
                            <span class="spec-icon">📊</span>
                            <div class="spec-details">
                                <div class="spec-label">Target Reliability</div>
                                <div class="spec-value">${aircraft.operationalMetrics.reliabilityMetrics.targetDispatchReliability}%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Certifications -->
            <div class="certifications-section">
                <h3>Certifications</h3>
                <div class="cert-badges">
                    ${Object.entries(aircraft.specifications.certifications)
            .map(([key, value]) => `
                            <div class="cert-badge">
                                <span class="cert-icon">✓</span>
                                <span class="cert-text">${value}</span>
                            </div>
                        `).join('')}
                </div>
            </div>
        </div>
    </div>
    <div class="safety-features-card" id="safety">
    <div class="card-header">
        <h2>Safety Features & Systems</h2>
        <div class="header-subtitle">Advanced safety features and certification details</div>
    </div>

    <div class="safety-features-grid">
        ${aircraft.safetyFeatures.map((feature, index) => `
            <div class="safety-feature-item">
                <div class="feature-header">
                    <div class="feature-icon">🛡️</div>
                    <h3>${feature.name}</h3>
                </div>
                <div class="feature-content">
                    <p class="feature-description">${feature.description}</p>
                    <div class="feature-certification">
                        <span class="cert-icon">✓</span>
                        <span class="cert-date">Certified: ${new Date(feature.certificationDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            })}</span>
                    </div>
                </div>
            </div>
        `).join('')}
    </div>

</div>

<div class="maintenance-card" id="maintenance">
<div class="card-header">
    <h2>Maintenance Requirements</h2>
    <div class="header-subtitle">Standard maintenance checks and inspection schedules</div>
</div>

<div class="maintenance-content">
    <!-- Standard Checks -->
    <div class="maintenance-checks">
        <h3>Standard Maintenance Checks</h3>
        <div class="checks-grid">
            ${Object.entries(aircraft.maintenanceRequirements.standardChecks)
            .map(([checkType, check]) => `
                    <div class="check-item">
                        <div class="check-header">
                            <span class="check-type">Type ${checkType.charAt(0)}</span>
                            <span class="check-interval">${check.interval}</span>
                        </div>
                        <div class="check-details">
                            <div class="check-duration">
                                <span class="duration-icon">⏱️</span>
                                <span class="duration-text">${check.estimatedDuration}</span>
                            </div>
                            <p class="check-description">${check.description}</p>
                        </div>
                    </div>
                `).join('')}
        </div>
    </div>

    <!-- Required Inspections -->
    <div class="required-inspections">
        <h3>Required Inspection Items</h3>
        <div class="inspection-list">
            ${aircraft.maintenanceRequirements.requiredInspectionItems
            .map(item => `
                    <div class="inspection-item">
                        <span class="inspection-icon">✓</span>
                        <span class="inspection-text">${item}</span>
                    </div>
                `).join('')}
        </div>
    </div>
</div>

</div>

<div class="charts-card" id="performance">
    <h2>Performance Analytics</h2>
    <div class="charts-grid">
    <div class="chart-trends">
        <div class="chart-container">
            <h3>Safety Score Trend</h3>
            <canvas id="safetyTrendChart"></canvas>
        </div>
    </div>
    <div class="chart-trends">
        <div class="chart-container">
            <h3>Monthly Reliability Metrics</h3>
            <canvas id="reliabilityChart"></canvas>
        </div>
    </div>
    </div>
    <div class="metrics-summary">
        <div class="summary-item">
            <span class="summary-label">Design Lifespan</span>
            <span class="summary-value">${aircraft.operationalMetrics.reliabilityMetrics.designLifespan}</span>
        </div>
        <div class="summary-item">
            <span class="summary-label">Target Dispatch Reliability</span>
            <span class="summary-value">${aircraft.operationalMetrics.reliabilityMetrics.targetDispatchReliability}%</span>
        </div>
        <div class="summary-item">
            <span class="summary-label">Average Flight Hours/Year</span>
            <span class="summary-value">${aircraft.operationalMetrics.reliabilityMetrics.averageFlightHours}</span>
        </div>
    </div>
</div>

        <div class="coming-soon-notice">
            <p>More detailed analysis and historical data coming soon...</p>
        </div>

        <div class="action-buttons">
            <a href="index.html" class="back-button">Back to Search</a>
            <button class="print-button" onclick="window.print()">Print Report</button>
        </div>
    `;

    // Initialize navigation
    function initializeNavigation() {
        const navItems = document.querySelectorAll('.details-nav-item');
        const navList = document.querySelector('.details-nav-list');
        const sections = document.querySelectorAll('[id]');
        let isScrollingProgrammatically = false;
        let scrollTimeout;

        // Function to update the sliding indicator
        const updateIndicator = (activeItem) => {
            const itemRect = activeItem.getBoundingClientRect();
            const listRect = navList.getBoundingClientRect();

            navList.style.setProperty('--indicator-width', `${itemRect.width}px`);
            navList.style.setProperty('--indicator-left', `${itemRect.left - listRect.left}px`);
        };

        // Handle click navigation
        navItems.forEach(item => {
            if (item.classList.contains('details-nav-compare')) return;

            item.addEventListener('click', (e) => {
                e.preventDefault();

                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
                updateIndicator(item);

                isScrollingProgrammatically = true;

                const targetId = item.querySelector('a').getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }

                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    isScrollingProgrammatically = false;
                }, 1000);
            });
        });

        // Handle scroll-based navigation
        const observerCallback = (entries) => {
            if (isScrollingProgrammatically) return;

            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const targetId = entry.target.id;
                    const correspondingNav = document.querySelector(`.details-nav-item a[href="#${targetId}"]`)?.parentElement;

                    if (correspondingNav) {
                        navItems.forEach(item => item.classList.remove('active'));
                        correspondingNav.classList.add('active');
                        updateIndicator(correspondingNav);
                    }
                }
            });
        };

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -79% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe sections
        sections.forEach(section => {
            if (section.id && ['specifications', 'safety', 'maintenance', 'performance'].includes(section.id)) {
                observer.observe(section);
            }
        });

        // Set initial indicator position
        const activeItem = document.querySelector('.details-nav-item.active') || navItems[0];
        updateIndicator(activeItem);

        // Update indicator on resize
        window.addEventListener('resize', () => {
            const activeItem = document.querySelector('.details-nav-item.active') || navItems[0];
            updateIndicator(activeItem);
        });
    }

    // Initialize navigation after content is rendered
    setTimeout(initializeNavigation, 100);


    // Call this function after loading the aircraft data
    initializeCharts(aircraft);


});


function getSafetyScorebgColor(score) {
    if (score >= 90) return "#4CAF50";
    if (score >= 70) return "#ffd3b6";
    return "#F44336";
}

function getSafetyScoreColor(score) {
    if (score >= 90) return "#ffff";
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





