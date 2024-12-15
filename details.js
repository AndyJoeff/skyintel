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
            <div class="aircraft-image">
                <img src="images/aircraft/${aircraft.model
                  .replace(/\s+/g, "-")
                  .toLowerCase()}.jpg" 
                     alt="${aircraft.model}"
                     onerror="this.src='images/placeholder-aircraft.jpg'">
            </div>
            <div class="aircraft-details">
            <div class="aircraft-top-header"">
             <div class="aircraft-title">
                <h1>${aircraft.model}</h1>
               
                <div class="manufacturer">
                    <span class="label">Manufacturer:</span>
                    <span class="value">${aircraft.manufacturer}</span>
                    </div>
                     </div>
                <div class="safety-score-check" style="background-color: ${getSafetyScorebgColor(
                  aircraft.safetyScore
                )}; color: ${getSafetyScoreColor(aircraft.safetyScore)}">
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
        
        ${
          aircraft.specifications.certifications
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
                            <span class="check-icon" style="background: ${
                              colors[checkType]
                            }">
                                <svg fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                                </svg>
                            </span>
                        </div>
                        <div class="check-details">
                            <h4>${
                              checkType.charAt(0).toUpperCase() + " Check"
                            }</h4>
                            <div class="check-stats">
                                <div class="stat">
                                    <i class="fas fa-clock"></i>
                                    <span>${checkDetails.interval}</span>
                                </div>
                                <div class="stat">
                                    <i class="fas fa-tools"></i>
                                    <span>${
                                      checkDetails.estimatedDuration
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
                        <canvas id="safetyTrendChart"></canvas>
                    </div>
                    <div class="chart">
                        <canvas id="reliabilityChart"></canvas>
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
