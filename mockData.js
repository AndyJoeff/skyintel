// mockData.js enhancement
/*const mockDatabase = {
    aircraft: [
        {
            id: 1,
            model: "Boeing 737 MAX",
            manufacturer: "Boeing",
            type: "commercial",
            year: 2017,
            safetyScore: 85,
            totalFlights: 500000,
            incidentRate: 0.001,
            lastIncidentDate: "2019-03-10",
            specifications: {
                length: "39.52 m",
                wingspan: "35.9 m",
                height: "12.3 m",
                maxSpeed: "839 km/h",
                range: "6,570 km",
                seatingCapacity: "230",
                engineType: "LEAP-1B",
                maxAltitude: "41,000 ft"
            },
            safetyFeatures: [
                {
                    name: "Enhanced Ground Proximity Warning System (EGPWS)",
                    description: "Advanced terrain awareness system that prevents controlled flight into terrain"
                },
                {
                    name: "Traffic Collision Avoidance System (TCAS)",
                    description: "Monitors airspace for other aircraft equipped with transponders and provides collision avoidance"
                },
                {
                    name: "Advanced Flight Control System",
                    description: "State-of-the-art fly-by-wire system with enhanced safety features"
                }
            ],
            maintenanceHistory: {
                lastMajorOverhaul: "2023-08-15",
                nextScheduledMaintenance: "2024-02-15",
                maintenanceInterval: "600 flight hours",
                reliabilityRate: 99.7,
                technicalIncidents: [
                    {
                        date: "2023-11-20",
                        type: "Minor",
                        description: "Routine sensor replacement"
                    },
                    {
                        date: "2023-09-05",
                        type: "Regular",
                        description: "Software update implementation"
                    }
                ]
            },
            operationalMetrics: {
                monthlyData: {
                    flights: [1200, 1150, 1300, 1250, 1400, 1350],
                    incidents: [0, 1, 0, 0, 1, 0],
                    reliability: [99.8, 99.7, 99.9, 99.8, 99.7, 99.9]
                },
                yearlyTrend: {
                    safetyScores: [83, 84, 85, 85, 86, 85],
                    years: [2019, 2020, 2021, 2022, 2023, 2024]
                }
            }
        }
        // Add similar detailed data for other aircraft...
    ]
};

*/

const mockDatabase = {
  aircraft: [
    {
      id: 1,
      model: "Boeing 737 MAX",
      manufacturer: "Boeing",
      type: "Commercial",
      year: 2017, // Year model was introduced
      safetyScore: 85, // Global safety rating based on design, features, and overall model performance
      totalFlights: 500000, // Cumulative flights across all units of this model globally
      incidentRate: 0.001, // Global incident rate for this aircraft model
      lastIncidentDate: "2019-03-10", // Date of last significant incident for this model type
      images: {
        primary: "path/to/737max-main.jpg", // Standard manufacturer promotional image
        gallery: [
          "path/to/737max-1.jpg", // Technical diagram
          "path/to/737max-2.jpg", // Safety feature highlights
          "path/to/737max-3.jpg", // Interior configuration
        ],
      },
      specifications: {
        // Manufacturer specifications - same for all aircraft of this model
        length: "39.52 m",
        wingspan: "35.9 m",
        height: "12.3 m",
        maxSpeed: "839 km/h",
        range: "6,570 km",
        seatingCapacity: "230", // Maximum certified capacity
        engineType: "CFM LEAP-1B",
        engineCount: 2,
        certifications: {
          // Global certifications obtained by the model
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC",
        },
      },
      safetyFeatures: [
        // Standard safety features included in all units of this model
        {
          name: "Enhanced Ground Proximity Warning System (EGPWS)",
          description:
            "Advanced terrain awareness system that prevents controlled flight into terrain.",
          certificationDate: "2016-08-15", // When this feature was certified for the model
        },
        {
          name: "Traffic Collision Avoidance System (TCAS)",
          description:
            "Monitors airspace for other aircraft and provides collision avoidance guidance.",
          certificationDate: "2016-08-15",
        },
        {
          name: "Advanced Flight Control System",
          description:
            "State-of-the-art fly-by-wire system with enhanced safety protocols.",
          certificationDate: "2016-08-15",
        },
      ],
      maintenanceRequirements: {
        // Changed from maintenanceHistory to reflect manufacturer requirements
        standardChecks: {
          aCheck: {
            interval: "600 flight hours",
            estimatedDuration: "10 hours",
            description: "Basic inspection and servicing",
          },
          bCheck: {
            interval: "3000 flight hours",
            estimatedDuration: "3 days",
            description: "Detailed inspection of systems and components",
          },
          cCheck: {
            interval: "7500 flight hours",
            estimatedDuration: "2 weeks",
            description: "Extensive structural inspection",
          },
          dCheck: {
            interval: "30000 flight hours",
            estimatedDuration: "2 months",
            description: "Complete overhaul",
          },
        },
        requiredInspectionItems: [
          "Engine visual inspection every 100 hours",
          "Landing gear check every 200 hours",
          "Flight control systems check every 300 hours",
        ],
      },
      operationalMetrics: {
        // Global statistics for all units of this model
        fleetStatistics: {
          totalUnitsProduced: 1500,
          unitsInService: 1200,
          averageFleetAge: 3.5, // years
          globalUtilization: 85, // percentage
        },
        safetyTrend: {
          // Industry-wide safety scores for this model
          monthlyData: {
            flights: [1200, 1150, 1300, 1250, 1400, 1350],
            incidents: [0, 1, 0, 0, 1, 0],
            reliability: [99.8, 99.7, 99.9, 99.8, 99.7, 99.9],
          },
          yearlyTrend: {
            safetyScores: [83, 84, 85, 85, 86, 85],
            years: [2019, 2020, 2021, 2022, 2023, 2024],
          },
        },
        reliabilityMetrics: {
          designLifespan: "27 years",
          targetDispatchReliability: 99.5, // Manufacturer's target percentage
          averageFlightHours: "3000 hours/year", // Expected utilization
        },
      },
    },
    {
      id: 2,
      model: "Airbus A320neo",
      manufacturer: "Airbus",
      type: "Commercial",
      year: 2016, // Year model was introduced
      safetyScore: 88, // Global safety rating based on design, features, and overall model performance
      totalFlights: 600000, // Cumulative flights across all units of this model globally
      incidentRate: 0.0009, // Global incident rate for this aircraft model
      lastIncidentDate: "2022-07-25", // Date of last significant incident for this model type
      images: {
        primary: "path/to/a320neo-main.jpg", // Standard manufacturer promotional image
        gallery: [
          "path/to/a320neo-1.jpg", // Technical diagram
          "path/to/a320neo-2.jpg", // Safety feature highlights
          "path/to/a320neo-3.jpg", // Interior configuration
        ],
      },
      specifications: {
        length: "37.57 m",
        wingspan: "35.8 m",
        height: "11.76 m",
        maxSpeed: "871 km/h",
        range: "6,300 km",
        seatingCapacity: "244", // Maximum certified capacity
        engineType: "Pratt & Whitney PW1100G-JM",
        maxAltitude: "41,000 ft",
        engineCount: 2,
        certifications: [
          "EASA Certification",
          "FAA Type Certification",
          "CAAC Certification",
        ],
      },
      safetyFeatures: [
        {
          name: "Runway Overrun Prevention System (ROPS)",
          description: "Reduces runway excursion risks during landing.",
          certificationDate: "2015-06-01",
        },
        {
          name: "Advanced Traffic Collision Avoidance System (TCAS)",
          description:
            "Provides airspace monitoring and collision avoidance guidance.",
          certificationDate: "2015-06-01",
        },
        {
          name: "Enhanced Fly-by-Wire Control System",
          description:
            "Advanced system ensuring precise and safe flight control.",
          certificationDate: "2015-06-01",
        },
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "700 flight hours",
            estimatedDuration: "8 hours",
            description: "Basic inspection and servicing",
          },
          bCheck: {
            interval: "3500 flight hours",
            estimatedDuration: "4 days",
            description: "Detailed inspection of systems and components",
          },
          cCheck: {
            interval: "7500 flight hours",
            estimatedDuration: "2 weeks",
            description: "Extensive structural inspection",
          },
          dCheck: {
            interval: "25000 flight hours",
            estimatedDuration: "2 months",
            description: "Complete overhaul",
          },
        },
        requiredInspectionItems: [
          "Fuel system inspection every 150 hours",
          "Hydraulic system check every 300 hours",
          "Cabin pressurization check every 500 hours",
        ],
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 1700,
          unitsInService: 1500,
          averageFleetAge: 3, // years
          globalUtilization: 87, // percentage
        },
        safetyTrend: {
          scores: [85, 86, 87, 88, 88, 88],
          years: [2018, 2019, 2020, 2021, 2022, 2023],
          industryRank: 2,
        },
        reliabilityMetrics: {
          designLifespan: "30 years",
          targetDispatchReliability: 99.7, // Manufacturer's target percentage
          averageFlightHours: "3200 hours/year",
        },
      },
    },
    {
      id: 3,
      model: "Embraer E175",
      manufacturer: "Embraer",
      type: "Regional",
      year: 2004, // Year model was introduced
      safetyScore: 90, // Global safety rating based on design, features, and overall model performance
      totalFlights: 400000, // Cumulative flights across all units of this model globally
      incidentRate: 0.0005, // Global incident rate for this aircraft model
      lastIncidentDate: "2023-02-18", // Date of last significant incident for this model type
      images: {
        primary: "path/to/e175-main.jpg", // Standard manufacturer promotional image
        gallery: [
          "path/to/e175-1.jpg", // Technical diagram
          "path/to/e175-2.jpg", // Safety feature highlights
          "path/to/e175-3.jpg", // Interior configuration
        ],
      },
      specifications: {
        length: "31.68 m",
        wingspan: "28.65 m",
        height: "9.85 m",
        maxSpeed: "890 km/h",
        range: "3,704 km",
        seatingCapacity: "88", // Maximum certified capacity
        engineType: "GE CF34-8E",
        maxAltitude: "41,000 ft",
        engineCount: 2,
        certifications: ["FAA Certification", "EASA Certification"],
      },
      safetyFeatures: [
        {
          name: "Integrated Avionics Suite",
          description:
            "Modern avionics ensuring optimal safety and performance.",
          certificationDate: "2003-11-15",
        },
        {
          name: "Runway Awareness and Advisory System (RAAS)",
          description:
            "Provides alerts to prevent runway incursions and excursions.",
          certificationDate: "2003-11-15",
        },
        {
          name: "Enhanced Turbulence Detection System",
          description:
            "Improves situational awareness and safety during adverse conditions.",
          certificationDate: "2003-11-15",
        },
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "650 flight hours",
            estimatedDuration: "9 hours",
            description: "Basic inspection and servicing",
          },
          bCheck: {
            interval: "3000 flight hours",
            estimatedDuration: "3 days",
            description: "Detailed inspection of systems and components",
          },
          cCheck: {
            interval: "7500 flight hours",
            estimatedDuration: "2 weeks",
            description: "Extensive structural inspection",
          },
          dCheck: {
            interval: "30000 flight hours",
            estimatedDuration: "2 months",
            description: "Complete overhaul",
          },
        },
        requiredInspectionItems: [
          "Wingtip lighting inspection every 200 hours",
          "Engine lubrication every 150 hours",
          "Control surface inspections every 400 hours",
        ],
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 1000,
          unitsInService: 900,
          averageFleetAge: 5, // years
          globalUtilization: 82, // percentage
        },
        safetyTrend: {
          scores: [88, 89, 90, 90, 91, 90],
          years: [2018, 2019, 2020, 2021, 2022, 2023],
          industryRank: 1,
        },
        reliabilityMetrics: {
          designLifespan: "25 years",
          targetDispatchReliability: 99.8, // Manufacturer's target percentage
          averageFlightHours: "2800 hours/year",
        },
      },
    },
    {
      id: 4,
      model: "Bombardier Challenger 350",
      manufacturer: "Bombardier",
      type: "Business Jet",
      year: 2014,
      safetyScore: 92,
      totalFlights: 250000,
      incidentRate: 0.0004,
      lastIncidentDate: "2021-11-05",
      images: {
        primary: "path/to/challenger350-main.jpg",
        gallery: [
          "path/to/challenger350-1.jpg",
          "path/to/challenger350-2.jpg",
          "path/to/challenger350-3.jpg",
        ],
      },
      specifications: {
        length: "20.92 m",
        wingspan: "21.01 m",
        height: "6.10 m",
        maxSpeed: "850 km/h",
        range: "5,926 km",
        seatingCapacity: "10",
        engineType: "Honeywell HTF7350",
        maxAltitude: "45,000 ft",
        engineCount: 2,
        certifications: [
          "FAA Certification",
          "EASA Certification",
          "Transport Canada Certification",
        ],
      },
      safetyFeatures: [
        {
          name: "Synthetic Vision System (SVS)",
          description:
            "Provides a clear view of terrain and obstacles in low visibility.",
          certificationDate: "2013-09-10",
        },
        {
          name: "Automatic Thrust Control System",
          description: "Maintains optimal thrust for safe flight performance.",
          certificationDate: "2013-09-10",
        },
        {
          name: "Integrated Avionics Suite",
          description:
            "Advanced cockpit systems for enhanced safety and efficiency.",
          certificationDate: "2013-09-10",
        },
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "500 flight hours",
            estimatedDuration: "8 hours",
            description: "Basic inspection and servicing",
          },
          bCheck: {
            interval: "2500 flight hours",
            estimatedDuration: "4 days",
            description: "Detailed inspection of systems and components",
          },
          cCheck: {
            interval: "7500 flight hours",
            estimatedDuration: "2 weeks",
            description: "Extensive structural inspection",
          },
          dCheck: {
            interval: "24000 flight hours",
            estimatedDuration: "2 months",
            description: "Complete overhaul",
          },
        },
        requiredInspectionItems: [
          "Cabin pressure system check every 150 hours",
          "Fuel pump inspection every 200 hours",
          "Landing gear hydraulic check every 500 hours",
        ],
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 800,
          unitsInService: 750,
          averageFleetAge: 4,
          globalUtilization: 90,
        },
        safetyTrend: {
          scores: [90, 91, 92, 93, 92, 92],
          years: [2018, 2019, 2020, 2021, 2022, 2023],
          industryRank: 2,
        },
        reliabilityMetrics: {
          designLifespan: "20 years",
          targetDispatchReliability: 99.8,
          averageFlightHours: "1200 hours/year",
        },
      },
    },
    {
      id: 5,
      model: "Cessna Citation X",
      manufacturer: "Cessna",
      type: "Business Jet",
      year: 1996,
      safetyScore: 89,
      totalFlights: 300000,
      incidentRate: 0.0006,
      lastIncidentDate: "2020-09-15",
      images: {
        primary: "path/to/citationx-main.jpg",
        gallery: [
          "path/to/citationx-1.jpg",
          "path/to/citationx-2.jpg",
          "path/to/citationx-3.jpg",
        ],
      },
      specifications: {
        length: "22.00 m",
        wingspan: "19.38 m",
        height: "5.64 m",
        maxSpeed: "972 km/h",
        range: "6,762 km",
        seatingCapacity: "12",
        engineType: "Rolls-Royce AE3007C",
        maxAltitude: "51,000 ft",
        engineCount: 2,
        certifications: ["FAA Certification", "EASA Certification"],
      },
      safetyFeatures: [
        {
          name: "Enhanced Weather Radar",
          description:
            "Provides real-time weather updates for safer navigation.",
          certificationDate: "1995-07-12",
        },
        {
          name: "Auto-Throttle System",
          description:
            "Automatically adjusts throttle for optimal flight performance.",
          certificationDate: "1995-07-12",
        },
        {
          name: "Traffic Alert and Collision Avoidance System (TCAS II)",
          description:
            "Monitors nearby aircraft to prevent mid-air collisions.",
          certificationDate: "1995-07-12",
        },
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "600 flight hours",
            estimatedDuration: "7 hours",
            description: "Basic inspection and servicing",
          },
          bCheck: {
            interval: "3000 flight hours",
            estimatedDuration: "5 days",
            description: "Detailed inspection of systems and components",
          },
          cCheck: {
            interval: "10000 flight hours",
            estimatedDuration: "3 weeks",
            description: "Extensive structural inspection",
          },
          dCheck: {
            interval: "25000 flight hours",
            estimatedDuration: "3 months",
            description: "Complete overhaul",
          },
        },
        requiredInspectionItems: [
          "Avionics system check every 200 hours",
          "Engine performance analysis every 400 hours",
          "Landing gear visual inspection every 300 hours",
        ],
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 340,
          unitsInService: 320,
          averageFleetAge: 8,
          globalUtilization: 85,
        },
        safetyTrend: {
          scores: [87, 88, 89, 89, 90, 89],
          years: [2018, 2019, 2020, 2021, 2022, 2023],
          industryRank: 3,
        },
        reliabilityMetrics: {
          designLifespan: "25 years",
          targetDispatchReliability: 99.7,
          averageFlightHours: "1100 hours/year",
        },
      },
    },
    {
      id: 6,
      model: "Boeing B-52 Stratofortress",
      manufacturer: "Boeing",
      type: "Military",
      year: 1955,
      safetyScore: 92,
      totalFlights: 350000,
      incidentRate: 0.0008,
      lastIncidentDate: "2016-05-19",
      images: {
        primary: "path/to/b52-main.jpg",
        gallery: [
          "path/to/b52-1.jpg",
          "path/to/b52-2.jpg",
          "path/to/b52-3.jpg",
        ],
      },
      specifications: {
        length: "48.5 m",
        wingspan: "56.4 m",
        height: "12.4 m",
        maxSpeed: "1,046 km/h",
        range: "16,000 km",
        seatingCapacity: "5 crew members",
        engineType: "Pratt & Whitney TF33-P-3/103",
        maxAltitude: "50,000 ft",
        engineCount: 8,
        certifications: ["USAF Operational Certification"],
      },
      safetyFeatures: [
        {
          name: "Defensive Avionics System",
          description: "Electronic countermeasures for jamming and deception.",
          certificationDate: "1980-10-01",
        },
        {
          name: "Upgraded Ejection Seats",
          description: "Ensures crew survivability during emergencies.",
          certificationDate: "1975-06-15",
        },
        {
          name: "Enhanced Structural Reinforcement",
          description: "Improves durability for long-range missions.",
          certificationDate: "1982-04-10",
        },
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "500 flight hours",
            estimatedDuration: "12 hours",
            description: "Basic inspection and servicing",
          },
          bCheck: {
            interval: "2500 flight hours",
            estimatedDuration: "5 days",
            description: "Detailed inspection of systems and components",
          },
          cCheck: {
            interval: "10000 flight hours",
            estimatedDuration: "3 weeks",
            description: "Extensive structural inspection",
          },
          dCheck: {
            interval: "20000 flight hours",
            estimatedDuration: "2 months",
            description: "Complete overhaul",
          },
        },
        requiredInspectionItems: [
          "Structural integrity check every 300 hours",
          "Avionics systems update every 500 hours",
          "Landing gear inspection every 700 hours",
        ],
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 744,
          unitsInService: 76,
          averageFleetAge: 50,
          globalUtilization: 75,
        },
        safetyTrend: {
          scores: [90, 91, 92, 92, 93, 92],
          years: [2018, 2019, 2020, 2021, 2022, 2023],
          industryRank: 1,
        },
        reliabilityMetrics: {
          designLifespan: "60 years",
          targetDispatchReliability: 99.2,
          averageFlightHours: "2000 hours/year",
        },
      },
    },
    {
      id: 7,
      model: "Lockheed Martin F-22 Raptor",
      manufacturer: "Lockheed Martin",
      type: "Military",
      year: 2005,
      safetyScore: 95,
      totalFlights: 200000,
      incidentRate: 0.0004,
      lastIncidentDate: "2021-08-30",
      images: {
        primary: "path/to/f22-main.jpg",
        gallery: [
          "path/to/f22-1.jpg",
          "path/to/f22-2.jpg",
          "path/to/f22-3.jpg",
        ],
      },
      specifications: {
        length: "18.9 m",
        wingspan: "13.6 m",
        height: "5.08 m",
        maxSpeed: "2,414 km/h",
        range: "2,960 km",
        seatingCapacity: "1 pilot",
        engineType: "Pratt & Whitney F119-PW-100",
        maxAltitude: "65,000 ft",
        engineCount: 2,
        certifications: ["USAF Operational Certification"],
      },
      safetyFeatures: [
        {
          name: "Integrated Stealth Technology",
          description:
            "Reduces radar cross-section for enhanced survivability.",
          certificationDate: "2004-12-01",
        },
        {
          name: "Advanced Radar and Avionics Suite",
          description: "Provides superior situational awareness and targeting.",
          certificationDate: "2004-12-01",
        },
        {
          name: "Emergency Escape System",
          description:
            "Includes advanced ejection seat with life-support systems.",
          certificationDate: "2004-12-01",
        },
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "300 flight hours",
            estimatedDuration: "8 hours",
            description: "Basic inspection and servicing",
          },
          bCheck: {
            interval: "1500 flight hours",
            estimatedDuration: "4 days",
            description: "Detailed inspection of systems and components",
          },
          cCheck: {
            interval: "5000 flight hours",
            estimatedDuration: "3 weeks",
            description: "Extensive structural inspection",
          },
          dCheck: {
            interval: "15000 flight hours",
            estimatedDuration: "1.5 months",
            description: "Complete overhaul",
          },
        },
        requiredInspectionItems: [
          "Radar system calibration every 200 hours",
          "Stealth coating inspection every 500 hours",
          "Engine performance test every 300 hours",
        ],
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 195,
          unitsInService: 186,
          averageFleetAge: 15,
          globalUtilization: 88,
        },
        safetyTrend: {
          scores: [93, 94, 95, 95, 96, 95],
          years: [2018, 2019, 2020, 2021, 2022, 2023],
          industryRank: 1,
        },
        reliabilityMetrics: {
          designLifespan: "30 years",
          targetDispatchReliability: 99.7,
          averageFlightHours: "1500 hours/year",
        },
      },
    },
  ],
};

/*

const mockDatabase = {
    aircraft: [
        {
            id: 1,
            model: "Boeing 737 MAX",
            manufacturer: "Boeing",
            type: "commercial",
            year: 2017,
            safetyScore: 85,
            totalFlights: 500000,
            incidentRate: 0.001,
            lastIncidentDate: "2019-03-10"
        },
        {
            id: 2,
            model: "Airbus A320neo",
            manufacturer: "Airbus",
            type: "commercial",
            year: 2016,
            safetyScore: 92,
            totalFlights: 750000,
            incidentRate: 0.0005,
            lastIncidentDate: "2020-01-15"
        },
        {
            id: 3,
            model: "Embraer E175",
            manufacturer: "Embraer",
            type: "commercial",
            year: 2004,
            safetyScore: 88,
            totalFlights: 1000000,
            incidentRate: 0.0008,
            lastIncidentDate: "2018-07-22"
        },
        {
            id: 4,
            model: "Bombardier Challenger 350",
            manufacturer: "Bombardier",
            type: "private",
            year: 2014,
            safetyScore: 90,
            totalFlights: 100000,
            incidentRate: 0.0002,
            lastIncidentDate: "2021-11-30"
        },
        {
            id: 5,
            model: "Cessna Citation X",
            manufacturer: "Cessna",
            type: "private",
            year: 1996,
            safetyScore: 87,
            totalFlights: 75000,
            incidentRate: 0.0003,
            lastIncidentDate: "2022-05-20"
        },
        {
            id: 6,
            model: "Boeing B-52 Stratofortress",
            manufacturer: "Boeing",
            type: "military",
            year: 1955,
            safetyScore: 82,
            totalFlights: 450000,
            incidentRate: 0.002,
            lastIncidentDate: "2017-12-18"
        },
        {
            id: 7,
            model: "Lockheed Martin F-22 Raptor",
            manufacturer: "Lockheed Martin",
            type: "military",
            year: 2005,
            safetyScore: 89,
            totalFlights: 120000,
            incidentRate: 0.0004,
            lastIncidentDate: "2021-09-10"
        },
        {
            id: 8,
            model: "Airbus A380",
            manufacturer: "Airbus",
            type: "commercial",
            year: 2007,
            safetyScore: 94,
            totalFlights: 400000,
            incidentRate: 0.0001,
            lastIncidentDate: "2020-02-22"
        },
        {
            id: 9,
            model: "Dassault Falcon 7X",
            manufacturer: "Dassault Aviation",
            type: "private",
            year: 2007,
            safetyScore: 91,
            totalFlights: 80000,
            incidentRate: 0.0002,
            lastIncidentDate: "2021-06-15"
        },
        {
            id: 10,
            model: "Boeing 777",
            manufacturer: "Boeing",
            type: "commercial",
            year: 1995,
            safetyScore: 93,
            totalFlights: 1200000,
            incidentRate: 0.0002,
            lastIncidentDate: "2022-04-10"
        },
        {
            id: 11,
            model: "Sukhoi Su-57",
            manufacturer: "Sukhoi",
            type: "military",
            year: 2010,
            safetyScore: 88,
            totalFlights: 60000,
            incidentRate: 0.0007,
            lastIncidentDate: "2020-10-12"
        },
        {
            id: 12,
            model: "Gulfstream G650",
            manufacturer: "Gulfstream Aerospace",
            type: "private",
            year: 2013,
            safetyScore: 92,
            totalFlights: 95000,
            incidentRate: 0.0001,
            lastIncidentDate: "2022-12-05"
        },
        {
            id: 13,
            model: "Cessna 172 Skyhawk",
            manufacturer: "Cessna",
            type: "private",
            year: 1955,
            safetyScore: 80,
            totalFlights: 2000000,
            incidentRate: 0.001,
            lastIncidentDate: "2023-03-18"
        },
        {
            id: 14,
            model: "Northrop Grumman B-2 Spirit",
            manufacturer: "Northrop Grumman",
            type: "military",
            year: 1997,
            safetyScore: 86,
            totalFlights: 35000,
            incidentRate: 0.0006,
            lastIncidentDate: "2018-08-20"
        },
        {
            id: 15,
            model: "Airbus A330neo",
            manufacturer: "Airbus",
            type: "commercial",
            year: 2018,
            safetyScore: 93,
            totalFlights: 200000,
            incidentRate: 0.0003,
            lastIncidentDate: "2022-07-19"
        },
        {
            id: 16,
            model: "Lockheed C-130 Hercules",
            manufacturer: "Lockheed",
            type: "military",
            year: 1956,
            safetyScore: 83,
            totalFlights: 1500000,
            incidentRate: 0.0018,
            lastIncidentDate: "2021-03-30"
        },
        {
            id: 17,
            model: "Beechcraft King Air 350",
            manufacturer: "Beechcraft",
            type: "private",
            year: 2009,
            safetyScore: 90,
            totalFlights: 30000,
            incidentRate: 0.0004,
            lastIncidentDate: "2023-02-28"
        },
        {
            id: 18,
            model: "Boeing 747-8",
            manufacturer: "Boeing",
            type: "commercial",
            year: 2011,
            safetyScore: 90,
            totalFlights: 400000,
            incidentRate: 0.0004,
            lastIncidentDate: "2022-03-14"
        },
        {
            id: 19,
            model: "Airbus A310",
            manufacturer: "Airbus",
            type: "commercial",
            year: 1983,
            safetyScore: 78,
            totalFlights: 700000,
            incidentRate: 0.002,
            lastIncidentDate: "2019-09-11"
        },
        {
            id: 20,
            model: "Lockheed SR-71 Blackbird",
            manufacturer: "Lockheed",
            type: "military",
            year: 1966,
            safetyScore: 85,
            totalFlights: 30000,
            incidentRate: 0.0005,
            lastIncidentDate: "1998-10-09"
        },
        {
            id: 21,
            model: "Cessna Citation CJ4",
            manufacturer: "Cessna",
            type: "private",
            year: 2010,
            safetyScore: 91,
            totalFlights: 25000,
            incidentRate: 0.0001,
            lastIncidentDate: "2023-07-10"
        },
        {
            id: 22,
            model: "McDonnell Douglas DC-10",
            manufacturer: "McDonnell Douglas",
            type: "commercial",
            year: 1970,
            safetyScore: 75,
            totalFlights: 800000,
            incidentRate: 0.003,
            lastIncidentDate: "2015-06-22"
        },
        {
            id: 23,
            model: "Dassault Rafale",
            manufacturer: "Dassault Aviation",
            type: "military",
            year: 2001,
            safetyScore: 89,
            totalFlights: 50000,
            incidentRate: 0.0007,
            lastIncidentDate: "2021-04-17"
        },
        {
            id: 24,
            model: "Boeing 787 Dreamliner",
            manufacturer: "Boeing",
            type: "commercial",
            year: 2011,
            safetyScore: 92,
            totalFlights: 600000,
            incidentRate: 0.0002,
            lastIncidentDate: "2023-01-09"
        },
        {
            id: 25,
            model: "Gulfstream G550",
            manufacturer: "Gulfstream Aerospace",
            type: "private",
            year: 2003,
            safetyScore: 94,
            totalFlights: 90000,
            incidentRate: 0.0001,
            lastIncidentDate: "2023-05-05"
        },
        {
            id: 26,
            model: "Airbus A220",
            manufacturer: "Airbus",
            type: "commercial",
            year: 2016,
            safetyScore: 93,
            totalFlights: 120000,
            incidentRate: 0.0002,
            lastIncidentDate: "2022-10-18"
        },
        {
            id: 27,
            model: "Beechcraft Baron 58",
            manufacturer: "Beechcraft",
            type: "private",
            year: 1969,
            safetyScore: 88,
            totalFlights: 50000,
            incidentRate: 0.0008,
            lastIncidentDate: "2021-08-25"
        },
        {
            id: 28,
            model: "Antonov An-225 Mriya",
            manufacturer: "Antonov",
            type: "commercial",
            year: 1988,
            safetyScore: 79,
            totalFlights: 25000,
            incidentRate: 0.0004,
            lastIncidentDate: "2022-02-24"
        },
        {
            id: 29,
            model: "Bombardier Global 7500",
            manufacturer: "Bombardier",
            type: "private",
            year: 2018,
            safetyScore: 95,
            totalFlights: 15000,
            incidentRate: 0.0001,
            lastIncidentDate: "2023-04-12"
        },
        {
            id: 30,
            model: "Concorde",
            manufacturer: "Aérospatiale/BAC",
            type: "commercial",
            year: 1976,
            safetyScore: 70,
            totalFlights: 50000,
            incidentRate: 0.002,
            lastIncidentDate: "2000-07-25"
        },
        {
            id: 31,
            model: "Piper PA-28 Cherokee",
            manufacturer: "Piper Aircraft",
            type: "private",
            year: 1960,
            safetyScore: 81,
            totalFlights: 300000,
            incidentRate: 0.0012,
            lastIncidentDate: "2023-06-01"
        },
        {
            id: 32,
            model: "Fokker 100",
            manufacturer: "Fokker",
            type: "commercial",
            year: 1988,
            safetyScore: 77,
            totalFlights: 400000,
            incidentRate: 0.0025,
            lastIncidentDate: "2018-03-16"
        },
        {
            id: 33,
            model: "Lockheed P-3 Orion",
            manufacturer: "Lockheed",
            type: "military",
            year: 1962,
            safetyScore: 83,
            totalFlights: 950000,
            incidentRate: 0.001,
            lastIncidentDate: "2020-08-22"
        },
        {
            id: 34,
            model: "Cirrus SR22",
            manufacturer: "Cirrus Aircraft",
            type: "private",
            year: 2001,
            safetyScore: 92,
            totalFlights: 40000,
            incidentRate: 0.0005,
            lastIncidentDate: "2023-03-05"
        },
        {
            id: 35,
            model: "Douglas DC-3",
            manufacturer: "Douglas Aircraft Company",
            type: "commercial",
            year: 1935,
            safetyScore: 72,
            totalFlights: 2000000,
            incidentRate: 0.003,
            lastIncidentDate: "2017-11-05"
        },
        {
            id: 36,
            model: "Beechcraft King Air 350i",
            manufacturer: "Beechcraft",
            type: "private",
            year: 2009,
            safetyScore: 89,
            totalFlights: 120000,
            incidentRate: 0.0004,
            lastIncidentDate: "2023-02-19"
        },
        {
            id: 37,
            model: "Tupolev Tu-154",
            manufacturer: "Tupolev",
            type: "commercial",
            year: 1972,
            safetyScore: 65,
            totalFlights: 1020000,
            incidentRate: 0.005,
            lastIncidentDate: "2016-12-25"
        },
        {
            id: 39,
            model: "Boeing C-17 Globemaster III",
            manufacturer: "Boeing",
            type: "military",
            year: 1991,
            safetyScore: 89,
            totalFlights: 240000,
            incidentRate: 0.0004,
            lastIncidentDate: "2020-05-18"
        },
        {
            id: 40,
            model: "Grumman F-14 Tomcat",
            manufacturer: "Grumman",
            type: "military",
            year: 1974,
            safetyScore: 84,
            totalFlights: 400000,
            incidentRate: 0.001,
            lastIncidentDate: "2006-09-22"
        },
        {
            id: 41,
            model: "De Havilland Canada DHC-6 Twin Otter",
            manufacturer: "De Havilland Canada",
            type: "commercial",
            year: 1965,
            safetyScore: 82,
            totalFlights: 750000,
            incidentRate: 0.0008,
            lastIncidentDate: "2022-05-10"
        },
        {
            id: 42,
            model: "Mikoyan MiG-29",
            manufacturer: "Mikoyan",
            type: "military",
            year: 1983,
            safetyScore: 80,
            totalFlights: 120000,
            incidentRate: 0.0014,
            lastIncidentDate: "2020-10-10"
        },
        {
            id: 43,
            model: "Airbus A350 XWB",
            manufacturer: "Airbus",
            type: "commercial",
            year: 2015,
            safetyScore: 94,
            totalFlights: 550000,
            incidentRate: 0.0002,
            lastIncidentDate: "2023-06-22"
        },
        {
            id: 44,
            model: "Boeing KC-135 Stratotanker",
            manufacturer: "Boeing",
            type: "military",
            year: 1957,
            safetyScore: 84,
            totalFlights: 750000,
            incidentRate: 0.0008,
            lastIncidentDate: "2021-12-05"
        },
        {
            id: 45,
            model: "Bombardier CRJ700",
            manufacturer: "Bombardier",
            type: "commercial",
            year: 1999,
            safetyScore: 89,
            totalFlights: 650000,
            incidentRate: 0.0007,
            lastIncidentDate: "2022-08-29"
        },
        {
            id: 46,
            model: "Piaggio P.180 Avanti",
            manufacturer: "Piaggio Aerospace",
            type: "private",
            year: 1990,
            safetyScore: 87,
            totalFlights: 45000,
            incidentRate: 0.0009,
            lastIncidentDate: "2022-05-03"
        },
        {
            id: 47,
            model: "Airbus A310 MRTT",
            manufacturer: "Airbus",
            type: "military",
            year: 1993,
            safetyScore: 85,
            totalFlights: 200000,
            incidentRate: 0.0006,
            lastIncidentDate: "2021-11-10"
        },
        {
            id: 48,
            model: "Boeing 727",
            manufacturer: "Boeing",
            type: "commercial",
            year: 1963,
            safetyScore: 76,
            totalFlights: 700000,
            incidentRate: 0.0021,
            lastIncidentDate: "2018-07-15"
        },
        {
            id: 49,
            model: "Learjet 75",
            manufacturer: "Learjet",
            type: "private",
            year: 2013,
            safetyScore: 92,
            totalFlights: 30000,
            incidentRate: 0.0003,
            lastIncidentDate: "2023-04-30"
        }

    ]

};
*/
