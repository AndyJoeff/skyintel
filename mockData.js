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
      images: [
        {
          url: "boeing-737-max-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "boeing-737-max.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "boeing-737-max-detail-2.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "boeing-737-max-detail-3.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
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
      year: 2016,
      safetyScore: 88,
      totalFlights: 600000,
      incidentRate: 0.0008,
      lastIncidentDate: "2022-05-15",
      images: [
        {
          url: "airbus-a320neo-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "airbus-a320neo-detail-2.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "airbus-a320neo-detail-3.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "airbus-a320neo-detail-4.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "37.57 m",
        wingspan: "35.8 m",
        height: "11.76 m",
        maxSpeed: "871 km/h",
        range: "6,300 km",
        seatingCapacity: "244",
        engineType: "Pratt & Whitney PW1100G",
        engineCount: 2,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Runway Overrun Prevention System (ROPS)",
          description: "Prevents runway overrun incidents during landing.",
          certificationDate: "2015-09-30"
        },
        {
          name: "Fly-by-Wire Control System",
          description: "Electronic flight control for enhanced safety.",
          certificationDate: "2015-09-30"
        },
        {
          name: "Traffic Collision Avoidance System (TCAS)",
          description: "Provides real-time collision avoidance guidance.",
          certificationDate: "2015-09-30"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "700 flight hours",
            estimatedDuration: "12 hours",
            description: "Routine inspection and basic servicing."
          },
          bCheck: {
            interval: "3500 flight hours",
            estimatedDuration: "4 days",
            description: "In-depth systems inspection."
          },
          cCheck: {
            interval: "8000 flight hours",
            estimatedDuration: "3 weeks",
            description: "Comprehensive structural inspection."
          },
          dCheck: {
            interval: "32000 flight hours",
            estimatedDuration: "3 months",
            description: "Complete overhaul and component replacement."
          }
        },
        requiredInspectionItems: [
          "Engine health check every 150 hours",
          "Avionics diagnostics every 300 hours",
          "Hydraulic system inspection every 500 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 1800,
          unitsInService: 1600,
          averageFleetAge: 4.2,
          globalUtilization: 87
        },
        safetyTrend: {
          monthlyData: {
            flights: [1300, 1250, 1400, 1350, 1450, 1380],
            incidents: [0, 0, 1, 0, 1, 0],
            reliability: [99.9, 99.8, 99.7, 99.9, 99.8, 99.9]
          },
          yearlyTrend: {
            safetyScores: [86, 87, 88, 88, 89, 88],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "30 years",
          targetDispatchReliability: 99.6,
          averageFlightHours: "3200 hours/year"
        }
      }
    },
    {
      id: 3,
      model: "Embraer E175",
      manufacturer: "Embraer",
      type: "Commercial",
      year: 2005, // Year model was introduced
      safetyScore: 88, // Global safety rating based on design, features, and overall model performance
      totalFlights: 400000, // C umulative flights across all units of this model globally
      incidentRate: 0.0008, // Global incident rate for this aircraft model
      lastIncidentDate: "2022-06-15", // Date of last significant incident for this model type
      images: [
        {
          url: "embraer-e175-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "embraer-e175.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "embraer-e175-detail-2.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "embraer-e175-detail-3.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "31.68 m",
        wingspan: "26.00 m",
        height: "9.73 m",
        maxSpeed: "870 km/h",
        range: "3,889 km",
        seatingCapacity: "88", // Maximum certified capacity
        engineType: "GE CF34-8E",
        engineCount: 2,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          anac: "ANAC",
        },
      },
      safetyFeatures: [
        {
          name: "Fly-by-Wire Control System",
          description: "Improved flight precision and safety through digital flight controls.",
          certificationDate: "2004-11-12",
        },
        {
          name: "Traffic Collision Avoidance System (TCAS)",
          description: "Monitors nearby aircraft and provides collision avoidance guidance.",
          certificationDate: "2004-11-12",
        },
        {
          name: "Enhanced Ground Proximity Warning System (EGPWS)",
          description: "Advanced terrain awareness and warning capabilities.",
          certificationDate: "2004-11-12",
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "600 flight hours",
            estimatedDuration: "8 hours",
            description: "Basic inspection and servicing",
          },
          bCheck: {
            interval: "3000 flight hours",
            estimatedDuration: "2 days",
            description: "Detailed inspection of systems and components",
          },
          cCheck: {
            interval: "7500 flight hours",
            estimatedDuration: "10 days",
            description: "Extensive structural inspection",
          },
          dCheck: {
            interval: "25000 flight hours",
            estimatedDuration: "6 weeks",
            description: "Complete overhaul",
          },
        },
        requiredInspectionItems: [
          "Engine inspection every 120 hours",
          "Landing gear check every 250 hours",
          "Avionics systems check every 500 hours",
        ],
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 800,
          unitsInService: 750,
          averageFleetAge: 7.2, // years
          globalUtilization: 88, // percentage
        },
        safetyTrend: {
          monthlyData: {
            flights: [900, 950, 980, 940, 970, 960],
            incidents: [0, 0, 1, 0, 0, 0],
            reliability: [99.9, 99.8, 99.7, 99.8, 99.9, 99.8],
          },
          yearlyTrend: {
            safetyScores: [87, 88, 89, 89, 90, 88],
            years: [2019, 2020, 2021, 2022, 2023, 2024],
          },
        },
        reliabilityMetrics: {
          designLifespan: "25 years",
          targetDispatchReliability: 99.4, // Manufacturer's target percentage
          averageFlightHours: "2800 hours/year", // Expected utilization
        },
      },
    },
    {
      id: 4,
      model: "Bombardier Challenger 350",
      manufacturer: "Bombardier",
      type: "Private",
      year: 2014,
      safetyScore: 92,
      totalFlights: 150000,
      incidentRate: 0.0005,
      lastIncidentDate: "2022-07-14",
      images: [
        {
          url: "challenger-350-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "bombardier-challenger-350.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "challenger-350-detail-2.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "challenger-350-detail-3.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "20.92 m",
        wingspan: "21 m",
        height: "6.1 m",
        maxSpeed: "870 km/h",
        range: "5,926 km",
        seatingCapacity: "10",
        engineType: "Honeywell HTF7350",
        engineCount: 2,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Synthetic Vision System (SVS)",
          description: "Improved situational awareness during all phases of flight.",
          certificationDate: "2013-11-20"
        },
        {
          name: "Traffic Collision Avoidance System (TCAS II)",
          description: "Collision avoidance with real-time alerts.",
          certificationDate: "2013-11-20"
        },
        {
          name: "Enhanced Weather Radar System",
          description: "Real-time weather updates and hazard avoidance.",
          certificationDate: "2013-11-20"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "500 flight hours",
            estimatedDuration: "8 hours",
            description: "Basic inspection and minor servicing"
          },
          bCheck: {
            interval: "2500 flight hours",
            estimatedDuration: "2 days",
            description: "Systematic inspection of critical components"
          },
          cCheck: {
            interval: "5000 flight hours",
            estimatedDuration: "1 week",
            description: "In-depth structural checks"
          },
          dCheck: {
            interval: "20000 flight hours",
            estimatedDuration: "1 month",
            description: "Comprehensive overhaul"
          }
        },
        requiredInspectionItems: [
          "Avionics check every 200 hours",
          "Landing gear retraction test every 400 hours",
          "Fuel system inspection every 600 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 900,
          unitsInService: 850,
          averageFleetAge: 4.2,
          globalUtilization: 88
        },
        safetyTrend: {
          monthlyData: {
            flights: [600, 650, 700, 720, 750, 770],
            incidents: [0, 0, 0, 1, 0, 0],
            reliability: [99.9, 99.9, 99.8, 99.7, 99.9, 99.8]
          },
          yearlyTrend: {
            safetyScores: [91, 91, 92, 92, 93, 92],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "25 years",
          targetDispatchReliability: 99.7,
          averageFlightHours: "2500 hours/year"
        }
      }
    },
    {
      id: 5,
      model: "Cessna Citation X",
      manufacturer: "Cessna",
      type: "Private",
      year: 1996,
      safetyScore: 89,
      totalFlights: 300000,
      incidentRate: 0.0008,
      lastIncidentDate: "2021-09-05",
      images: [
        {
          url: "cessna-citation-x-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "cessna-citation-x.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "cessna-citation-x-detail-2.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "cessna-citation-x-detail-3.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "22.04 m",
        wingspan: "19.4 m",
        height: "5.9 m",
        maxSpeed: "972 km/h",
        range: "5,956 km",
        seatingCapacity: "12",
        engineType: "Rolls-Royce AE3007C",
        engineCount: 2,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Terrain Awareness and Warning System (TAWS)",
          description: "Enhanced situational awareness to prevent terrain collisions.",
          certificationDate: "1995-11-15"
        },
        {
          name: "Traffic Collision Avoidance System (TCAS II)",
          description: "Provides real-time collision avoidance alerts.",
          certificationDate: "1995-11-15"
        },
        {
          name: "Autothrottle System",
          description: "Automated engine throttle management for optimized performance.",
          certificationDate: "1995-11-15"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "400 flight hours",
            estimatedDuration: "6 hours",
            description: "Routine inspection and basic servicing"
          },
          bCheck: {
            interval: "2000 flight hours",
            estimatedDuration: "2 days",
            description: "Comprehensive system inspection"
          },
          cCheck: {
            interval: "6000 flight hours",
            estimatedDuration: "10 days",
            description: "Thorough structural and system checks"
          },
          dCheck: {
            interval: "24000 flight hours",
            estimatedDuration: "1 month",
            description: "Full structural and system overhaul"
          }
        },
        requiredInspectionItems: [
          "Hydraulic system check every 200 hours",
          "Landing gear inspection every 400 hours",
          "Avionics software update every 1000 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 350,
          unitsInService: 300,
          averageFleetAge: 10.5,
          globalUtilization: 80
        },
        safetyTrend: {
          monthlyData: {
            flights: [400, 420, 450, 470, 490, 510],
            incidents: [0, 0, 1, 0, 0, 0],
            reliability: [99.7, 99.8, 99.6, 99.7, 99.8, 99.7]
          },
          yearlyTrend: {
            safetyScores: [88, 88, 89, 90, 90, 89],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "30 years",
          targetDispatchReliability: 99.6,
          averageFlightHours: "2200 hours/year"
        }
      }
    },
    {
      id: 6,
      model: "Boeing B-52 Stratofortress",
      manufacturer: "Boeing",
      type: "Military",
      year: 1955,
      safetyScore: 78,
      totalFlights: 150000,
      incidentRate: 0.002,
      lastIncidentDate: "2021-04-19",
      images: [
        {
          url: "b52-stratofortress-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "b52-stratofortress-detail-2.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "b52-stratofortress-detail-3.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "b52-stratofortress-detail-4.jpg",
          caption: "Bomb Bay Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "48.5 m",
        wingspan: "56.4 m",
        height: "12.4 m",
        maxSpeed: "1,046 km/h",
        range: "14,080 km",
        seatingCapacity: "5 (Crew Members)",
        engineType: "Pratt & Whitney TF33-P-3/103 turbofans",
        engineCount: 8,
        certifications: {
          faa: "N/A",
          easa: "N/A",
          caac: "N/A"
        }
      },
      safetyFeatures: [
        {
          name: "Electronic Warfare Suite",
          description: "Advanced radar jamming and countermeasure systems.",
          certificationDate: "1980-09-15"
        },
        {
          name: "Terrain Following Radar",
          description: "Automatic low-level flight guidance system.",
          certificationDate: "1975-05-20"
        },
        {
          name: "Redundant Hydraulic Systems",
          description: "Backup systems for critical flight controls.",
          certificationDate: "1960-02-10"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "300 flight hours",
            estimatedDuration: "12 hours",
            description: "Basic inspection and servicing"
          },
          bCheck: {
            interval: "1500 flight hours",
            estimatedDuration: "5 days",
            description: "Systematic inspection of key systems"
          },
          cCheck: {
            interval: "4000 flight hours",
            estimatedDuration: "3 weeks",
            description: "Detailed structural inspection"
          },
          dCheck: {
            interval: "16000 flight hours",
            estimatedDuration: "3 months",
            description: "Full overhaul of systems and structure"
          }
        },
        requiredInspectionItems: [
          "Engine performance check every 150 hours",
          "Avionics calibration every 300 hours",
          "Bomb bay mechanism inspection every 500 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 744,
          unitsInService: 76,
          averageFleetAge: 60.5,
          globalUtilization: 70
        },
        safetyTrend: {
          monthlyData: {
            flights: [300, 280, 310, 290, 320, 310],
            incidents: [1, 0, 1, 0, 1, 1],
            reliability: [98.5, 98.7, 98.6, 98.4, 98.5, 98.3]
          },
          yearlyTrend: {
            safetyScores: [77, 78, 78, 79, 80, 78],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "80 years",
          targetDispatchReliability: 98.0,
          averageFlightHours: "1200 hours/year"
        }
      }
    },
    {
      id: 7,
      model: "Lockheed Martin F-22 Raptor",
      manufacturer: "Lockheed Martin",
      type: "Military",
      year: 2005,
      safetyScore: 89,
      totalFlights: 120000,
      incidentRate: 0.002,
      lastIncidentDate: "2023-04-15",
      images: [
        {
          url: "f22-raptor-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "lockheed-martin-f-22-raptor.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "f22-raptor-detail-2.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "f22-raptor-detail-3.jpg",
          caption: "Weapon Bay",
          type: "interior"
        }
      ],
      specifications: {
        length: "18.9 m",
        wingspan: "13.6 m",
        height: "5.1 m",
        maxSpeed: "2,414 km/h",
        range: "3,000 km",
        seatingCapacity: "1",
        engineType: "Pratt & Whitney F119-PW-100",
        engineCount: 2,
        certifications: {
          faa: "Military Exempt",
          easa: "N/A",
          caac: "N/A"
        }
      },
      safetyFeatures: [
        {
          name: "Stealth Technology",
          description: "Radar-evading design reduces detection by enemy systems.",
          certificationDate: "2004-12-15"
        },
        {
          name: "Advanced Avionics Suite",
          description: "Integrated sensor fusion for enhanced situational awareness.",
          certificationDate: "2004-12-15"
        },
        {
          name: "Automatic Ground Collision Avoidance System (AGCAS)",
          description: "Prevents crashes by automatic corrective maneuvers.",
          certificationDate: "2010-06-10"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "400 flight hours",
            estimatedDuration: "12 hours",
            description: "Routine inspection and minor adjustments"
          },
          bCheck: {
            interval: "1500 flight hours",
            estimatedDuration: "5 days",
            description: "System diagnostics and component replacement"
          },
          cCheck: {
            interval: "4000 flight hours",
            estimatedDuration: "3 weeks",
            description: "Extensive inspection and maintenance"
          },
          dCheck: {
            interval: "15000 flight hours",
            estimatedDuration: "2 months",
            description: "Full structural overhaul"
          }
        },
        requiredInspectionItems: [
          "Radar system calibration every 300 hours",
          "Stealth coating inspection every 500 hours",
          "Avionics system test every 1,000 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 195,
          unitsInService: 183,
          averageFleetAge: 12.5,
          globalUtilization: 75
        },
        safetyTrend: {
          monthlyData: {
            flights: [400, 420, 430, 410, 390, 405],
            incidents: [0, 1, 0, 0, 1, 0],
            reliability: [99.5, 99.4, 99.6, 99.5, 99.4, 99.6]
          },
          yearlyTrend: {
            safetyScores: [88, 89, 90, 89, 90, 89],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "20 years",
          targetDispatchReliability: 99.3,
          averageFlightHours: "2000 hours/year"
        }
      }
    },
    {
      id: 8,
      model: "Airbus A380",
      manufacturer: "Airbus",
      type: "Commercial",
      year: 2007,
      safetyScore: 89,
      totalFlights: 800000,
      incidentRate: 0.0008,
      lastIncidentDate: "2023-05-12",
      images: [
        {
          url: "airbus-a380-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "airbus-a380.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "airbus-a380-detail-2.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "airbus-a380-detail-3.jpg",
          caption: "First-Class Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "72.7 m",
        wingspan: "79.8 m",
        height: "24.1 m",
        maxSpeed: "1,020 km/h",
        range: "15,200 km",
        seatingCapacity: "853",
        engineType: "Rolls-Royce Trent 900",
        engineCount: 4,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Brake-to-Vacate System (BTV)",
          description: "Optimizes runway usage by automating braking efficiency.",
          certificationDate: "2006-09-15"
        },
        {
          name: "Fly-by-Wire Technology",
          description: "Digitally controlled flight surfaces for precision and safety.",
          certificationDate: "2006-09-15"
        },
        {
          name: "Advanced Weather Radar",
          description: "Enhanced radar system for real-time weather hazard detection.",
          certificationDate: "2006-09-15"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "750 flight hours",
            estimatedDuration: "12 hours",
            description: "Routine inspection and servicing"
          },
          bCheck: {
            interval: "3500 flight hours",
            estimatedDuration: "4 days",
            description: "Detailed inspection of essential systems"
          },
          cCheck: {
            interval: "10000 flight hours",
            estimatedDuration: "3 weeks",
            description: "Extensive system and structural checks"
          },
          dCheck: {
            interval: "36000 flight hours",
            estimatedDuration: "3 months",
            description: "Complete structural and component overhaul"
          }
        },
        requiredInspectionItems: [
          "Engine health monitoring every 200 hours",
          "Hydraulic system check every 500 hours",
          "Avionics diagnostics every 700 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 251,
          unitsInService: 230,
          averageFleetAge: 8.5,
          globalUtilization: 82
        },
        safetyTrend: {
          monthlyData: {
            flights: [1500, 1400, 1550, 1600, 1650, 1700],
            incidents: [1, 0, 0, 1, 0, 0],
            reliability: [99.7, 99.8, 99.7, 99.6, 99.8, 99.7]
          },
          yearlyTrend: {
            safetyScores: [88, 89, 89, 90, 90, 89],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "30 years",
          targetDispatchReliability: 99.4,
          averageFlightHours: "2800 hours/year"
        }
      }
    },
    {
      id: 9,
      model: "Dassault Falcon 7X",
      manufacturer: "Dassault Aviation",
      type: "Private",
      year: 2007,
      safetyScore: 94,
      totalFlights: 200000,
      incidentRate: 0.0003,
      lastIncidentDate: "2021-05-18",
      images: [
        {
          url: "falcon-7x-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "dassault-falcon-7x.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "falcon-7x-detail-2.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "falcon-7x-detail-3.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "23.19 m",
        wingspan: "26.21 m",
        height: "7.83 m",
        maxSpeed: "953 km/h",
        range: "11,019 km",
        seatingCapacity: "16",
        engineType: "Pratt & Whitney Canada PW307A",
        engineCount: 3,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Digital Flight Control System (DFCS)",
          description: "Fly-by-wire technology for enhanced stability and safety.",
          certificationDate: "2005-12-15"
        },
        {
          name: "Enhanced Vision System (EVS)",
          description: "Infrared imaging for better visibility in low-light conditions.",
          certificationDate: "2005-12-15"
        },
        {
          name: "Traffic Collision Avoidance System (TCAS II)",
          description: "Provides alerts to avoid potential mid-air collisions.",
          certificationDate: "2005-12-15"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "600 flight hours",
            estimatedDuration: "9 hours",
            description: "Routine inspection and servicing"
          },
          bCheck: {
            interval: "3000 flight hours",
            estimatedDuration: "3 days",
            description: "Comprehensive system inspection"
          },
          cCheck: {
            interval: "7500 flight hours",
            estimatedDuration: "2 weeks",
            description: "Thorough structural inspection"
          },
          dCheck: {
            interval: "30000 flight hours",
            estimatedDuration: "2 months",
            description: "Complete overhaul and refurbishment"
          }
        },
        requiredInspectionItems: [
          "Engine performance review every 200 hours",
          "Hydraulic system inspection every 500 hours",
          "Landing gear overhaul every 1000 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 300,
          unitsInService: 280,
          averageFleetAge: 6.8,
          globalUtilization: 87
        },
        safetyTrend: {
          monthlyData: {
            flights: [400, 450, 500, 520, 550, 580],
            incidents: [0, 0, 0, 0, 1, 0],
            reliability: [99.9, 99.8, 99.9, 99.8, 99.7, 99.9]
          },
          yearlyTrend: {
            safetyScores: [93, 93, 94, 94, 95, 94],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "30 years",
          targetDispatchReliability: 99.6,
          averageFlightHours: "2800 hours/year"
        }
      }
    },
    {
      id: 10,
      model: "Boeing 777",
      manufacturer: "Boeing",
      type: "Commercial",
      year: 1995,
      safetyScore: 90,
      totalFlights: 600000,
      incidentRate: 0.0008,
      lastIncidentDate: "2022-02-20",
      images: [
        {
          url: "boeing-777-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "boeing-777.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "boeing-777-detail-2.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "boeing-777-detail-3.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "63.7 m",
        wingspan: "60.9 m",
        height: "18.5 m",
        maxSpeed: "905 km/h",
        range: "15,843 km",
        seatingCapacity: "396",
        engineType: "GE90-115B",
        engineCount: 2,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Electronic Flight Instrument System (EFIS)",
          description: "Advanced digital flight deck display system for improved pilot awareness.",
          certificationDate: "1994-05-10"
        },
        {
          name: "Enhanced Ground Proximity Warning System (EGPWS)",
          description: "Reduces risk of controlled flight into terrain through advanced alerts.",
          certificationDate: "1994-05-10"
        },
        {
          name: "Traffic Collision Avoidance System (TCAS II)",
          description: "Provides real-time collision avoidance guidance.",
          certificationDate: "1994-05-10"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "600 flight hours",
            estimatedDuration: "10 hours",
            description: "Routine inspection and maintenance"
          },
          bCheck: {
            interval: "3000 flight hours",
            estimatedDuration: "3 days",
            description: "Systematic component inspection"
          },
          cCheck: {
            interval: "7500 flight hours",
            estimatedDuration: "2 weeks",
            description: "Detailed structural analysis and repair"
          },
          dCheck: {
            interval: "30000 flight hours",
            estimatedDuration: "2 months",
            description: "Extensive structural overhaul"
          }
        },
        requiredInspectionItems: [
          "Hydraulic system check every 500 hours",
          "Avionics systems test every 1000 hours",
          "Landing gear inspection every 1500 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 1600,
          unitsInService: 1450,
          averageFleetAge: 9.5,
          globalUtilization: 87
        },
        safetyTrend: {
          monthlyData: {
            flights: [1400, 1350, 1500, 1450, 1550, 1520],
            incidents: [0, 1, 0, 1, 0, 0],
            reliability: [99.8, 99.7, 99.9, 99.8, 99.7, 99.8]
          },
          yearlyTrend: {
            safetyScores: [88, 89, 90, 90, 91, 90],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "30 years",
          targetDispatchReliability: 99.6,
          averageFlightHours: "3500 hours/year"
        }
      }
    },
    {
      id: 11,
      model: "Sukhoi Su-57",
      manufacturer: "Sukhoi",
      type: "Military",
      year: 2020,
      safetyScore: 88,
      totalFlights: 12000,
      incidentRate: 0.002,
      lastIncidentDate: "2023-05-18",
      images: [
        {
          url: "sukhoi-su-57-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "sukhoi-su-57.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "sukhoi-su-57-detail-2.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "sukhoi-su-57-detail-3.jpg",
          caption: "Weapon Bay",
          type: "interior"
        }
      ],
      specifications: {
        length: "20.1 m",
        wingspan: "14.1 m",
        height: "4.6 m",
        maxSpeed: "2,450 km/h",
        range: "3,500 km",
        seatingCapacity: "1",
        engineType: "Saturn AL-41F1",
        engineCount: 2,
        certifications: {
          faa: "N/A",
          easa: "N/A",
          caac: "N/A"
        }
      },
      safetyFeatures: [
        {
          name: "Radar Absorbent Material (RAM)",
          description: "Stealth technology to reduce radar cross-section.",
          certificationDate: "2019-12-10"
        },
        {
          name: "Integrated Avionics Suite",
          description: "Advanced avionics for real-time battlefield awareness.",
          certificationDate: "2019-12-10"
        },
        {
          name: "Automatic Flight Control System",
          description: "Enhanced flight stability and safety.",
          certificationDate: "2019-12-10"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "200 flight hours",
            estimatedDuration: "6 hours",
            description: "Routine inspection and minor servicing"
          },
          bCheck: {
            interval: "1000 flight hours",
            estimatedDuration: "5 days",
            description: "System diagnostics and calibration"
          },
          cCheck: {
            interval: "3000 flight hours",
            estimatedDuration: "2 weeks",
            description: "Structural integrity assessment"
          },
          dCheck: {
            interval: "10000 flight hours",
            estimatedDuration: "1 month",
            description: "Full system overhaul"
          }
        },
        requiredInspectionItems: [
          "Engine performance test every 100 hours",
          "Weapons system calibration every 200 hours",
          "Flight control software diagnostics every 500 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 76,
          unitsInService: 70,
          averageFleetAge: 2.5,
          globalUtilization: 65
        },
        safetyTrend: {
          monthlyData: {
            flights: [150, 160, 170, 180, 190, 200],
            incidents: [0, 0, 1, 0, 0, 0],
            reliability: [99.7, 99.6, 99.8, 99.7, 99.6, 99.8]
          },
          yearlyTrend: {
            safetyScores: [87, 88, 88, 89, 88, 88],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "35 years",
          targetDispatchReliability: 99.3,
          averageFlightHours: "400 hours/year"
        }
      }
    },
    {
      id: 12,
      model: "Gulfstream-G650",
      manufacturer: "Gulfstream Aerospace",
      type: "Private",
      year: 2012,
      safetyScore: 94,
      totalFlights: 200000,
      incidentRate: 0.0003,
      lastIncidentDate: "2021-11-05",
      images: [
        {
          url: "gulfstream-g650-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "gulfstream-g650.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "gulfstream-g650-detail-2.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "gulfstream-g650-detail-3.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "29.39 m",
        wingspan: "28.5 m",
        height: "7.8 m",
        maxSpeed: "982 km/h",
        range: "12,964 km",
        seatingCapacity: "18",
        engineType: "Rolls-Royce BR725",
        engineCount: 2,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Enhanced Vision System (EVS)",
          description: "Provides better vision in low visibility conditions.",
          certificationDate: "2011-12-15"
        },
        {
          name: "Traffic Collision Avoidance System (TCAS II)",
          description: "Real-time collision avoidance alerts to prevent mid-air collisions.",
          certificationDate: "2011-12-15"
        },
        {
          name: "Automatic Emergency Descent System (AEDS)",
          description: "Automated descent to a safe altitude in case of cabin depressurization.",
          certificationDate: "2011-12-15"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "600 flight hours",
            estimatedDuration: "10 hours",
            description: "Basic inspection and servicing"
          },
          bCheck: {
            interval: "3000 flight hours",
            estimatedDuration: "2 days",
            description: "Comprehensive inspection of systems and components"
          },
          cCheck: {
            interval: "6000 flight hours",
            estimatedDuration: "1 week",
            description: "Extensive structural inspection"
          },
          dCheck: {
            interval: "20000 flight hours",
            estimatedDuration: "1 month",
            description: "Complete overhaul"
          }
        },
        requiredInspectionItems: [
          "Engine performance check every 200 hours",
          "Landing gear retraction test every 400 hours",
          "Flight control system inspection every 500 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 250,
          unitsInService: 230,
          averageFleetAge: 5.5,
          globalUtilization: 90
        },
        safetyTrend: {
          monthlyData: {
            flights: [700, 750, 800, 850, 900, 950],
            incidents: [0, 0, 1, 0, 0, 0],
            reliability: [99.9, 99.9, 99.8, 99.9, 99.9, 99.9]
          },
          yearlyTrend: {
            safetyScores: [93, 93, 94, 94, 94, 94],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "30 years",
          targetDispatchReliability: 99.8,
          averageFlightHours: "3200 hours/year"
        }
      }
    },
    {
      id: 13,
      model: "Cessna 172 Skyhawk",
      manufacturer: "Cessna",
      type: "Private",
      year: 1956,
      safetyScore: 95,
      totalFlights: 3000000,
      incidentRate: 0.0002,
      lastIncidentDate: "2023-10-12",
      images: [
        {
          url: "cessna-172-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "cessna-172-skyhawk.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "cessna-172-detail-2.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "cessna-172-detail-3.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "8.28 m",
        wingspan: "11 m",
        height: "2.7 m",
        maxSpeed: "226 km/h",
        range: "1,185 km",
        seatingCapacity: "4",
        engineType: "Lycoming IO-360",
        engineCount: 1,
        certifications: {
          faa: "FAA",
          easa: "EASA"
        }
      },
      safetyFeatures: [
        {
          name: "Autopilot System",
          description: "Ensures stable flight in non-critical conditions, reducing pilot workload.",
          certificationDate: "2010-05-15"
        },
        {
          name: "Traffic Collision Avoidance System (TCAS)",
          description: "Monitors airspace for other aircraft and provides avoidance guidance.",
          certificationDate: "2010-05-15"
        },
        {
          name: "Enhanced Ground Proximity Warning System (EGPWS)",
          description: "Helps prevent controlled flight into terrain by providing warnings.",
          certificationDate: "2010-05-15"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "50 flight hours",
            estimatedDuration: "5 hours",
            description: "Routine inspection of engine and airframe"
          },
          bCheck: {
            interval: "200 flight hours",
            estimatedDuration: "1 day",
            description: "Systematic inspection of avionics and control surfaces"
          },
          cCheck: {
            interval: "1000 flight hours",
            estimatedDuration: "1 week",
            description: "In-depth inspection of flight systems"
          },
          dCheck: {
            interval: "5000 flight hours",
            estimatedDuration: "2 weeks",
            description: "Comprehensive overhaul"
          }
        },
        requiredInspectionItems: [
          "Engine oil change every 50 hours",
          "Brake pads check every 100 hours",
          "Wing and fuselage inspection every 200 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 44000,
          unitsInService: 35000,
          averageFleetAge: 12.4,
          globalUtilization: 90
        },
        safetyTrend: {
          monthlyData: {
            flights: [12000, 11800, 12500, 12300, 13000, 12700],
            incidents: [0, 0, 0, 1, 0, 0],
            reliability: [99.95, 99.96, 99.94, 99.93, 99.95, 99.94]
          },
          yearlyTrend: {
            safetyScores: [94, 94, 95, 95, 96, 95],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "30 years",
          targetDispatchReliability: 99.8,
          averageFlightHours: "600 hours/year"
        }
      }
    },
    {
      id: 14,
      model: "Northrop Grumman B-2 Spirit",
      manufacturer: "Northrop Grumman",
      type: "Military",
      year: 1989,
      safetyScore: 78,
      totalFlights: 20000,
      incidentRate: 0.002,
      lastIncidentDate: "2020-11-05",
      images: [
        {
          url: "b2-spirit-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "b2-spirit-detail-2.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "b2-spirit-cockpit.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "b2-spirit-cabin.jpg",
          caption: "Cargo Bay Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "21 m",
        wingspan: "52 m",
        height: "5.18 m",
        maxSpeed: "1,010 km/h",
        range: "11,100 km",
        seatingCapacity: "2",
        engineType: "F118-GE-100",
        engineCount: 4,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Stealth Technology",
          description: "Low observability design reducing radar cross-section for enhanced survivability.",
          certificationDate: "1988-04-20"
        },
        {
          name: "Terrain Following Radar",
          description: "Allows for low-level navigation while avoiding obstacles and terrain.",
          certificationDate: "1988-04-20"
        },
        {
          name: "Flight Control System with Automatic Terrain Avoidance",
          description: "Autonomous system designed to help avoid obstacles during flight.",
          certificationDate: "1988-04-20"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "300 flight hours",
            estimatedDuration: "12 hours",
            description: "Routine inspections and servicing"
          },
          bCheck: {
            interval: "1500 flight hours",
            estimatedDuration: "5 days",
            description: "Detailed inspection of critical components"
          },
          cCheck: {
            interval: "3000 flight hours",
            estimatedDuration: "2 weeks",
            description: "Comprehensive systems and structure check"
          },
          dCheck: {
            interval: "12000 flight hours",
            estimatedDuration: "3 months",
            description: "Complete overhaul and upgrade"
          }
        },
        requiredInspectionItems: [
          "Radar system check every 100 hours",
          "Flight control systems check every 250 hours",
          "Engine performance test every 500 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 21,
          unitsInService: 20,
          averageFleetAge: 35,
          globalUtilization: 95
        },
        safetyTrend: {
          monthlyData: {
            flights: [30, 28, 32, 30, 29, 35],
            incidents: [0, 0, 1, 0, 0, 0],
            reliability: [99.5, 99.4, 99.6, 99.5, 99.7, 99.6]
          },
          yearlyTrend: {
            safetyScores: [76, 77, 78, 79, 80, 78],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "50 years",
          targetDispatchReliability: 99.9,
          averageFlightHours: "1500 hours/year"
        }
      }
    },
    {
      id: 15,
      model: "Airbus A330neo",
      manufacturer: "Airbus",
      type: "Commercial",
      year: 2018,
      safetyScore: 88,
      totalFlights: 300000,
      incidentRate: 0.0008,
      lastIncidentDate: "2021-11-30",
      images: [
        {
          url: "airbus-a330neo-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "airbus-a330neo.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "airbus-a330neo-detail-2.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "airbus-a330neo-detail-3.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "63.66 m",
        wingspan: "64 m",
        height: "16.79 m",
        maxSpeed: "910 km/h",
        range: "13,334 km",
        seatingCapacity: "280",
        engineType: "Rolls-Royce Trent 7000",
        engineCount: 2,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Enhanced Ground Proximity Warning System (EGPWS)",
          description: "Advanced system that provides real-time alerts to avoid terrain and obstacles.",
          certificationDate: "2018-02-28"
        },
        {
          name: "Traffic Collision Avoidance System (TCAS II)",
          description: "Monitors surrounding airspace for potential collision threats and provides avoidance guidance.",
          certificationDate: "2018-02-28"
        },
        {
          name: "Fly-by-wire Technology",
          description: "State-of-the-art flight control system for improved stability and precision handling.",
          certificationDate: "2018-02-28"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "600 flight hours",
            estimatedDuration: "12 hours",
            description: "Routine inspection and minor repairs"
          },
          bCheck: {
            interval: "3500 flight hours",
            estimatedDuration: "3 days",
            description: "Detailed inspection of mechanical and electrical systems"
          },
          cCheck: {
            interval: "8000 flight hours",
            estimatedDuration: "2 weeks",
            description: "Thorough structural checks and system evaluations"
          },
          dCheck: {
            interval: "25000 flight hours",
            estimatedDuration: "1 month",
            description: "Complete overhaul and major system upgrades"
          }
        },
        requiredInspectionItems: [
          "Wing structural inspection every 1000 hours",
          "Engine diagnostics every 500 hours",
          "Hydraulic system check every 300 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 300,
          unitsInService: 220,
          averageFleetAge: 4,
          globalUtilization: 80
        },
        safetyTrend: {
          monthlyData: {
            flights: [1300, 1250, 1400, 1350, 1450, 1500],
            incidents: [0, 1, 0, 0, 0, 0],
            reliability: [99.7, 99.8, 99.7, 99.8, 99.9, 99.9]
          },
          yearlyTrend: {
            safetyScores: [85, 86, 87, 88, 89, 88],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "30 years",
          targetDispatchReliability: 99.6,
          averageFlightHours: "3500 hours/year"
        }
      }
    },
    {
      id: 16,
      model: "Lockheed C-130 Hercules",
      manufacturer: "Lockheed Martin",
      type: "Military",
      year: 1956,
      safetyScore: 80,
      totalFlights: 1500000,
      incidentRate: 0.005,
      lastIncidentDate: "2021-09-12",
      images: [
        {
          url: "c-130-hercules-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "lockheed-c-130-hercules.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "c-130-hercules-detail-2.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "c-130-hercules-detail-3.jpg",
          caption: "Cargo Bay",
          type: "interior"
        }
      ],
      specifications: {
        length: "29.79 m",
        wingspan: "40.4 m",
        height: "11.6 m",
        maxSpeed: "592 km/h",
        range: "3,800 km",
        seatingCapacity: "92",
        engineType: "Allison T56-A-15",
        engineCount: 4,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Automatic Flight Control System (AFCS)",
          description: "Enhances control and stability, reducing pilot workload.",
          certificationDate: "1960-05-10"
        },
        {
          name: "Collision Avoidance System",
          description: "Monitors airspace for potential collisions and provides alerts.",
          certificationDate: "1960-05-10"
        },
        {
          name: "Flight Data Monitoring System",
          description: "Real-time monitoring of flight data for safety and performance.",
          certificationDate: "1960-05-10"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "400 flight hours",
            estimatedDuration: "6 hours",
            description: "Basic inspection and lubrication"
          },
          bCheck: {
            interval: "2500 flight hours",
            estimatedDuration: "2 days",
            description: "Detailed inspection and servicing of critical systems"
          },
          cCheck: {
            interval: "6000 flight hours",
            estimatedDuration: "1 week",
            description: "Extensive structural and systems inspection"
          },
          dCheck: {
            interval: "25000 flight hours",
            estimatedDuration: "1 month",
            description: "Complete overhaul of the aircraft"
          }
        },
        requiredInspectionItems: [
          "Engine performance check every 200 hours",
          "Landing gear inspection every 300 hours",
          "Cargo door operation check every 500 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 2800,
          unitsInService: 2300,
          averageFleetAge: 28,
          globalUtilization: 90
        },
        safetyTrend: {
          monthlyData: {
            flights: [800, 750, 850, 900, 950, 1000],
            incidents: [1, 0, 1, 0, 1, 0],
            reliability: [98.5, 98.6, 98.7, 98.4, 98.6, 98.7]
          },
          yearlyTrend: {
            safetyScores: [79, 80, 80, 81, 81, 80],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "40 years",
          targetDispatchReliability: 98.5,
          averageFlightHours: "3500 hours/year"
        }
      }
    },
    {
      id: 17,
      model: "Beechcraft King Air 350",
      manufacturer: "Beechcraft",
      type: "Private",
      year: 2000,
      safetyScore: 90,
      totalFlights: 200000,
      incidentRate: 0.0007,
      lastIncidentDate: "2021-05-05",
      images: [
        {
          url: "king-air-350-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "beechcraft-king-air-350.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "king-air-350-detail-2.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "king-air-350-detail-3.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "14.63 m",
        wingspan: "16.51 m",
        height: "4.37 m",
        maxSpeed: "578 km/h",
        range: "3,780 km",
        seatingCapacity: "11",
        engineType: "Pratt & Whitney Canada PT6A-60A",
        engineCount: 2,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Traffic Collision Avoidance System (TCAS)",
          description: "Helps pilots avoid collisions by providing alerts based on nearby aircraft.",
          certificationDate: "2000-04-15"
        },
        {
          name: "Enhanced Ground Proximity Warning System (EGPWS)",
          description: "Alerts pilots to potential collisions with terrain, particularly during landing approaches.",
          certificationDate: "2000-04-15"
        },
        {
          name: "Autopilot System",
          description: "Advanced autopilot that assists in maintaining altitude and navigation during flight.",
          certificationDate: "2000-04-15"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "400 flight hours",
            estimatedDuration: "8 hours",
            description: "Routine visual inspection and servicing of systems"
          },
          bCheck: {
            interval: "1500 flight hours",
            estimatedDuration: "2 days",
            description: "Inspection of engine systems and critical flight components"
          },
          cCheck: {
            interval: "3000 flight hours",
            estimatedDuration: "1 week",
            description: "In-depth inspection of structure and systems"
          },
          dCheck: {
            interval: "12000 flight hours",
            estimatedDuration: "2 weeks",
            description: "Full overhaul and detailed systems check"
          }
        },
        requiredInspectionItems: [
          "Wing inspection every 500 hours",
          "Fuel system inspection every 600 hours",
          "Landing gear servicing every 800 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 2000,
          unitsInService: 1700,
          averageFleetAge: 8.4,
          globalUtilization: 75
        },
        safetyTrend: {
          monthlyData: {
            flights: [350, 400, 450, 475, 500, 520],
            incidents: [0, 0, 0, 0, 1, 0],
            reliability: [99.7, 99.8, 99.9, 99.8, 99.9, 99.8]
          },
          yearlyTrend: {
            safetyScores: [89, 90, 90, 91, 92, 91],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "20 years",
          targetDispatchReliability: 99.6,
          averageFlightHours: "2100 hours/year"
        }
      }
    },
    {
      id: 18,
      model: "Boeing 747-8",
      manufacturer: "Boeing",
      type: "Commercial",
      year: 2012,
      safetyScore: 87,
      totalFlights: 400000,
      incidentRate: 0.0008,
      lastIncidentDate: "2021-05-12",
      images: [
        {
          url: "boeing-747-8-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "boeing-747-8.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "boeing-747-8-detail-2.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "boeing-747-8-detail-3.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "76.3 m",
        wingspan: "68.4 m",
        height: "19.4 m",
        maxSpeed: "1,050 km/h",
        range: "14,320 km",
        seatingCapacity: "410",
        engineType: "GEnx-2B67",
        engineCount: 4,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Enhanced Ground Proximity Warning System (EGPWS)",
          description: "Advanced terrain awareness system to prevent controlled flight into terrain.",
          certificationDate: "2012-04-15"
        },
        {
          name: "Traffic Collision Avoidance System (TCAS II)",
          description: "Provides collision avoidance alerts and guidance in real-time.",
          certificationDate: "2012-04-15"
        },
        {
          name: "Fly-By-Wire Flight Control System",
          description: "Digital flight control system that enhances safety and handling.",
          certificationDate: "2012-04-15"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "600 flight hours",
            estimatedDuration: "12 hours",
            description: "Basic inspection and servicing"
          },
          bCheck: {
            interval: "3000 flight hours",
            estimatedDuration: "3 days",
            description: "Detailed inspection of systems and components"
          },
          cCheck: {
            interval: "7500 flight hours",
            estimatedDuration: "2 weeks",
            description: "In-depth structural and system checks"
          },
          dCheck: {
            interval: "20000 flight hours",
            estimatedDuration: "2 months",
            description: "Comprehensive overhaul and deep inspection"
          }
        },
        requiredInspectionItems: [
          "Engine inspection every 100 hours",
          "Landing gear inspection every 200 hours",
          "Flight control systems check every 300 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 150,
          unitsInService: 130,
          averageFleetAge: 8,
          globalUtilization: 85
        },
        safetyTrend: {
          monthlyData: {
            flights: [1500, 1450, 1600, 1550, 1700, 1650],
            incidents: [0, 1, 0, 0, 1, 0],
            reliability: [99.7, 99.6, 99.8, 99.7, 99.6, 99.8]
          },
          yearlyTrend: {
            safetyScores: [85, 86, 87, 87, 88, 87],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "30 years",
          targetDispatchReliability: 99.5,
          averageFlightHours: "4000 hours/year"
        }
      }
    },
    {
      id: 19,
      model: "Airbus A310",
      manufacturer: "Airbus",
      type: "Commercial",
      year: 1983,
      safetyScore: 80,
      totalFlights: 300000,
      incidentRate: 0.002,
      lastIncidentDate: "2018-05-12",
      images: [
        {
          url: "airbus-a310-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "airbus-a310.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "airbus-a310-detail-2.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "airbus-a310-detail-3.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "46.66 m",
        wingspan: "43.45 m",
        height: "16.79 m",
        maxSpeed: "830 km/h",
        range: "9,540 km",
        seatingCapacity: "280",
        engineType: "CF6-50C2",
        engineCount: 2,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Ground Proximity Warning System (GPWS)",
          description: "Alerts the crew of potentially dangerous proximity to terrain.",
          certificationDate: "1987-03-10"
        },
        {
          name: "Traffic Collision Avoidance System (TCAS)",
          description: "Monitors airspace for other aircraft and provides collision avoidance guidance.",
          certificationDate: "1987-03-10"
        },
        {
          name: "Fly-by-Wire Flight Control System",
          description: "Improves control and safety with advanced automated systems.",
          certificationDate: "1987-03-10"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "500 flight hours",
            estimatedDuration: "8 hours",
            description: "Routine inspections and basic servicing."
          },
          bCheck: {
            interval: "2000 flight hours",
            estimatedDuration: "2 days",
            description: "Detailed inspection of aircraft systems."
          },
          cCheck: {
            interval: "6000 flight hours",
            estimatedDuration: "1 week",
            description: "Comprehensive structural and systems inspection."
          },
          dCheck: {
            interval: "18000 flight hours",
            estimatedDuration: "1 month",
            description: "Complete overhaul of major components."
          }
        },
        requiredInspectionItems: [
          "Airframe visual inspection every 200 hours",
          "Engine performance analysis every 500 hours",
          "Hydraulic system inspection every 1000 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 255,
          unitsInService: 180,
          averageFleetAge: 20.5,
          globalUtilization: 75
        },
        safetyTrend: {
          monthlyData: {
            flights: [400, 430, 450, 480, 500, 520],
            incidents: [0, 1, 0, 0, 0, 0],
            reliability: [99.6, 99.7, 99.8, 99.9, 99.8, 99.7]
          },
          yearlyTrend: {
            safetyScores: [78, 79, 80, 80, 81, 80],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "35 years",
          targetDispatchReliability: 99.4,
          averageFlightHours: "2500 hours/year"
        }
      }
    },
    {
      id: 20,
      model: "Lockheed SR-71 Blackbird",
      manufacturer: "Lockheed Martin",
      type: "Military",
      year: 1966,
      safetyScore: 95,
      totalFlights: 2500,
      incidentRate: 0.0005,
      lastIncidentDate: "1999-07-06",
      images: [
        {
          url: "sr71-blackbird-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "lockheed-sr-71-blackbird.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "sr71-blackbird-detail-2.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "sr71-blackbird-detail-3.jpg",
          caption: "Engine Compartment",
          type: "exterior"
        }
      ],
      specifications: {
        length: "32.74 m",
        wingspan: "16.94 m",
        height: "5.25 m",
        maxSpeed: "3,540 km/h",
        range: "5,000 km",
        seatingCapacity: "2",
        engineType: "Pratt & Whitney J58",
        engineCount: 2,
        certifications: {
          faa: "FAA",
          easa: "EASA"
        }
      },
      safetyFeatures: [
        {
          name: "Advanced Ejection Seats",
          description: "High-speed, high-altitude ejection system designed for extreme conditions.",
          certificationDate: "1966-11-10"
        },
        {
          name: "In-flight Refueling System",
          description: "Allows mid-air refueling to extend mission range.",
          certificationDate: "1966-11-10"
        },
        {
          name: "Self-sealing Fuel Tanks",
          description: "Tanks that automatically seal if punctured to prevent fuel loss.",
          certificationDate: "1966-11-10"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "200 flight hours",
            estimatedDuration: "12 hours",
            description: "Routine inspections and basic systems checks."
          },
          bCheck: {
            interval: "1000 flight hours",
            estimatedDuration: "1 week",
            description: "Comprehensive inspection of airframe and propulsion systems."
          },
          cCheck: {
            interval: "5000 flight hours",
            estimatedDuration: "3 weeks",
            description: "Full structural inspection, engine overhauls, and systems checks."
          },
          dCheck: {
            interval: "15000 flight hours",
            estimatedDuration: "2 months",
            description: "Complete overhaul of airframe and systems."
          }
        },
        requiredInspectionItems: [
          "Engine temperature check every 50 hours",
          "Landing gear system inspection every 100 hours",
          "Airframe stress testing every 500 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 32,
          unitsInService: 0,
          averageFleetAge: 35,
          globalUtilization: 0
        },
        safetyTrend: {
          monthlyData: {
            flights: [30, 25, 20, 18, 15, 10],
            incidents: [0, 0, 0, 0, 0, 0],
            reliability: [99.9, 99.9, 99.8, 99.9, 99.9, 99.8]
          },
          yearlyTrend: {
            safetyScores: [94, 95, 95, 95, 95, 95],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "50 years",
          targetDispatchReliability: 99.7,
          averageFlightHours: "1500 hours/year"
        }
      }
    },
    {
      id: 21,
      model: "Cessna Citation CJ4",
      manufacturer: "Cessna",
      type: "Private",
      year: 2010,
      safetyScore: 90,
      totalFlights: 100000,
      incidentRate: 0.0005,
      lastIncidentDate: "2021-11-05",
      images: [
        {
          url: "cessna-citation-cj4-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "cessna-citation-cj4-detail-2.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "cessna-citation-cj4-detail-3.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "cessna-citation-cj4-detail-4.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "15.77 m",
        wingspan: "15.41 m",
        height: "4.31 m",
        maxSpeed: "833 km/h",
        range: "3,710 km",
        seatingCapacity: "9",
        engineType: "FJ44-4A",
        engineCount: 2,
        certifications: {
          faa: "FAA",
          easa: "EASA"
        }
      },
      safetyFeatures: [
        {
          name: "Terrain Awareness and Warning System (TAWS)",
          description: "Helps pilots avoid controlled flight into terrain through alerts.",
          certificationDate: "2010-09-30"
        },
        {
          name: "Enhanced Vision System (EVS)",
          description: "Provides improved visibility in low-visibility conditions using infrared sensors.",
          certificationDate: "2010-09-30"
        },
        {
          name: "Autothrottle System",
          description: "Automates throttle control to improve fuel efficiency and reduce pilot workload.",
          certificationDate: "2010-09-30"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "300 flight hours",
            estimatedDuration: "6 hours",
            description: "Basic inspection of aircraft systems and structure."
          },
          bCheck: {
            interval: "1500 flight hours",
            estimatedDuration: "1.5 days",
            description: "Comprehensive inspection of engine and avionics systems."
          },
          cCheck: {
            interval: "4000 flight hours",
            estimatedDuration: "5 days",
            description: "Full inspection of the airframe, engines, and avionics."
          },
          dCheck: {
            interval: "12000 flight hours",
            estimatedDuration: "2 weeks",
            description: "Complete overhaul of all major components."
          }
        },
        requiredInspectionItems: [
          "Visual inspection of engine intakes every 100 hours",
          "Landing gear check every 200 hours",
          "Electrical system performance test every 500 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 400,
          unitsInService: 350,
          averageFleetAge: 7.5,
          globalUtilization: 85
        },
        safetyTrend: {
          monthlyData: {
            flights: [150, 160, 170, 180, 190, 200],
            incidents: [0, 0, 0, 0, 1, 0],
            reliability: [99.9, 99.8, 99.9, 99.8, 99.9, 99.9]
          },
          yearlyTrend: {
            safetyScores: [88, 89, 90, 90, 91, 90],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "30 years",
          targetDispatchReliability: 99.7,
          averageFlightHours: "2000 hours/year"
        }
      }
    },
    {
      id: 22,
      model: "McDonnell Douglas DC-10",
      manufacturer: "McDonnell Douglas",
      type: "Commercial",
      year: 1970,
      safetyScore: 75,
      totalFlights: 400000,
      incidentRate: 0.003,
      lastIncidentDate: "2015-09-04",
      images: [
        {
          url: "dc-10-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "mcDonnell-douglas-dc-10.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "dc-10-detail-2.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "dc-10-detail-3.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "53.02 m",
        wingspan: "47.61 m",
        height: "14.76 m",
        maxSpeed: "950 km/h",
        range: "9,630 km",
        seatingCapacity: "250",
        engineType: "CF6-50C2",
        engineCount: 3,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Ground Proximity Warning System (GPWS)",
          description: "System to alert crew of potential terrain collisions.",
          certificationDate: "1980-11-20"
        },
        {
          name: "Traffic Collision Avoidance System (TCAS)",
          description: "Monitors the airspace and provides collision avoidance guidance.",
          certificationDate: "1980-11-20"
        },
        {
          name: "Enhanced Flight Control Systems",
          description: "Incorporates advanced flight control systems for improved stability.",
          certificationDate: "1980-11-20"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "500 flight hours",
            estimatedDuration: "6 hours",
            description: "Routine inspection and servicing of aircraft."
          },
          bCheck: {
            interval: "1800 flight hours",
            estimatedDuration: "1.5 days",
            description: "Detailed inspection of systems and aircraft components."
          },
          cCheck: {
            interval: "5000 flight hours",
            estimatedDuration: "1 week",
            description: "Comprehensive inspection of the aircraft structure and systems."
          },
          dCheck: {
            interval: "12000 flight hours",
            estimatedDuration: "3 weeks",
            description: "Complete overhaul of major systems and components."
          }
        },
        requiredInspectionItems: [
          "Turbine engine inspection every 500 hours",
          "Hydraulic system check every 800 hours",
          "Landing gear and brake system check every 1000 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 446,
          unitsInService: 120,
          averageFleetAge: 30.2,
          globalUtilization: 70
        },
        safetyTrend: {
          monthlyData: {
            flights: [300, 320, 340, 350, 360, 375],
            incidents: [0, 0, 1, 0, 1, 0],
            reliability: [99.4, 99.5, 99.6, 99.5, 99.4, 99.6]
          },
          yearlyTrend: {
            safetyScores: [73, 74, 75, 76, 75, 74],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "40 years",
          targetDispatchReliability: 99.3,
          averageFlightHours: "2200 hours/year"
        }
      }
    },
    {
      id: 23,
      model: "Dassault Rafale",
      manufacturer: "Dassault Aviation",
      type: "Military",
      year: 2001,
      safetyScore: 88,
      totalFlights: 150000,
      incidentRate: 0.0005,
      lastIncidentDate: "2020-11-15",
      images: [
        {
          url: "dassault-rafale-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "dassault-rafale.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "dassault-rafale-cockpit.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "dassault-rafale-weapon-bay.jpg",
          caption: "Weapon Bay",
          type: "exterior"
        }
      ],
      specifications: {
        length: "15.27 m",
        wingspan: "10.90 m",
        height: "5.34 m",
        maxSpeed: "1,912 km/h",
        range: "3,700 km",
        seatingCapacity: "1",
        engineType: "Snecma M88-2",
        engineCount: 2,
        certifications: {
          faa: "Not applicable",
          easa: "EASA",
          caac: "Not applicable"
        }
      },
      safetyFeatures: [
        {
          name: "Digital Flight Control System (DFCS)",
          description: "Provides advanced automated flight control for enhanced maneuverability and safety.",
          certificationDate: "2001-05-05"
        },
        {
          name: "Ejection Seat System",
          description: "High-performance ejection seat system designed to provide pilot safety in emergencies.",
          certificationDate: "2001-05-05"
        },
        {
          name: "Radar and Electronic Warfare System",
          description: "Advanced radar and countermeasures system to ensure flight safety in hostile environments.",
          certificationDate: "2001-05-05"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "400 flight hours",
            estimatedDuration: "8 hours",
            description: "Routine inspections and system checks."
          },
          bCheck: {
            interval: "1500 flight hours",
            estimatedDuration: "1 day",
            description: "Detailed checks on avionics, power plant, and structural components."
          },
          cCheck: {
            interval: "4000 flight hours",
            estimatedDuration: "1 week",
            description: "Comprehensive inspection of airframe and avionics systems."
          },
          dCheck: {
            interval: "10000 flight hours",
            estimatedDuration: "2 weeks",
            description: "Full-scale overhaul and deep structural inspection."
          }
        },
        requiredInspectionItems: [
          "Engine performance check every 300 hours",
          "Avionics system inspection every 600 hours",
          "Landing gear and hydraulics check every 1000 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 180,
          unitsInService: 150,
          averageFleetAge: 17.5,
          globalUtilization: 85
        },
        safetyTrend: {
          monthlyData: {
            flights: [300, 320, 330, 340, 350, 360],
            incidents: [0, 0, 1, 0, 0, 0],
            reliability: [99.9, 99.9, 99.8, 99.9, 99.9, 99.8]
          },
          yearlyTrend: {
            safetyScores: [85, 86, 87, 87, 88, 88],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "30 years",
          targetDispatchReliability: 99.7,
          averageFlightHours: "2500 hours/year"
        }
      }
    },
    {
      id: 24,
      model: "Boeing 787 Dreamliner",
      manufacturer: "Boeing",
      type: "Commercial",
      year: 2009,
      safetyScore: 90,
      totalFlights: 200000,
      incidentRate: 0.0005,
      lastIncidentDate: "2021-08-14",
      images: [
        {
          url: "boeing-787-dreamliner-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "boeing-787-dreamliner.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "boeing-787-dreamliner-cockpit.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "boeing-787-dreamliner-cabin.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "56.7 m",
        wingspan: "60.1 m",
        height: "16.9 m",
        maxSpeed: "913 km/h",
        range: "14,800 km",
        seatingCapacity: "242",
        engineType: "Rolls-Royce Trent 1000 / General Electric GEnx-1B",
        engineCount: 2,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Enhanced Ground Proximity Warning System (EGPWS)",
          description: "Prevents controlled flight into terrain with real-time alerts.",
          certificationDate: "2009-10-15"
        },
        {
          name: "Traffic Collision Avoidance System (TCAS)",
          description: "Provides collision avoidance guidance and monitors airspace for other aircraft.",
          certificationDate: "2009-10-15"
        },
        {
          name: "Fly-by-Wire Flight Control System",
          description: "Advanced automated flight control systems for improved safety and handling.",
          certificationDate: "2009-10-15"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "500 flight hours",
            estimatedDuration: "10 hours",
            description: "Basic maintenance and visual inspections."
          },
          bCheck: {
            interval: "2500 flight hours",
            estimatedDuration: "2 days",
            description: "Routine systems inspection and servicing."
          },
          cCheck: {
            interval: "7500 flight hours",
            estimatedDuration: "1 week",
            description: "Comprehensive check of structure, systems, and components."
          },
          dCheck: {
            interval: "12000 flight hours",
            estimatedDuration: "3 weeks",
            description: "Full inspection and overhaul of critical systems."
          }
        },
        requiredInspectionItems: [
          "Engine performance check every 500 hours",
          "Landing gear check every 1000 hours",
          "Hydraulic system inspection every 1500 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 1200,
          unitsInService: 900,
          averageFleetAge: 5.5,
          globalUtilization: 90
        },
        safetyTrend: {
          monthlyData: {
            flights: [800, 850, 900, 950, 1000, 1050],
            incidents: [0, 0, 0, 1, 0, 0],
            reliability: [99.9, 99.9, 99.9, 99.8, 99.9, 99.9]
          },
          yearlyTrend: {
            safetyScores: [88, 89, 90, 90, 91, 90],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "40 years",
          targetDispatchReliability: 99.7,
          averageFlightHours: "3500 hours/year"
        }
      }
    },
    {
      id: 25,
      model: "Gulfstream G550",
      manufacturer: "Gulfstream Aerospace",
      type: "Private",
      year: 2003,
      safetyScore: 92,
      totalFlights: 80000,
      incidentRate: 0.0003,
      lastIncidentDate: "2022-11-20",
      images: [
        {
          url: "gulfstream-g550-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "gulfstream-g550.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "gulfstream-g550-cockpit.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "gulfstream-g550-cabin.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "29.5 m",
        wingspan: "28.5 m",
        height: "7.9 m",
        maxSpeed: "950 km/h",
        range: "12,501 km",
        seatingCapacity: "19",
        engineType: "Rolls-Royce BR710",
        engineCount: 2,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Enhanced Ground Proximity Warning System (EGPWS)",
          description: "Provides terrain awareness and alerts to prevent controlled flight into terrain.",
          certificationDate: "2003-08-15"
        },
        {
          name: "Traffic Collision Avoidance System (TCAS)",
          description: "Monitors airspace for potential aircraft conflicts and guides pilots in avoiding collisions.",
          certificationDate: "2003-08-15"
        },
        {
          name: "Dual Channel Fly-by-Wire Flight Control System",
          description: "Ensures high-level safety and control with two independent control channels.",
          certificationDate: "2003-08-15"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "400 flight hours",
            estimatedDuration: "8 hours",
            description: "Basic checks and maintenance, including visual inspections."
          },
          bCheck: {
            interval: "2000 flight hours",
            estimatedDuration: "1 day",
            description: "In-depth checks of the aircraft's mechanical and electronic systems."
          },
          cCheck: {
            interval: "5000 flight hours",
            estimatedDuration: "1 week",
            description: "Thorough inspection of structure, systems, and components."
          },
          dCheck: {
            interval: "12000 flight hours",
            estimatedDuration: "3 weeks",
            description: "Complete overhaul of systems and structural components."
          }
        },
        requiredInspectionItems: [
          "Engine health check every 500 hours",
          "Avionics system check every 800 hours",
          "Landing gear and hydraulic check every 1000 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 350,
          unitsInService: 250,
          averageFleetAge: 7.5,
          globalUtilization: 80
        },
        safetyTrend: {
          monthlyData: {
            flights: [150, 160, 170, 180, 190, 200],
            incidents: [0, 0, 0, 0, 1, 0],
            reliability: [99.9, 99.9, 99.9, 99.8, 99.9, 99.9]
          },
          yearlyTrend: {
            safetyScores: [90, 91, 92, 92, 93, 92],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "40 years",
          targetDispatchReliability: 99.8,
          averageFlightHours: "2500 hours/year"
        }
      }
    },
    {
      id: 26,
      model: "Airbus A220",
      manufacturer: "Airbus",
      type: "Commercial",
      year: 2016,
      safetyScore: 88,
      totalFlights: 100000,
      incidentRate: 0.0007,
      lastIncidentDate: "2022-04-15",
      images: [
        {
          url: "airbus-a220-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "airbus-a220.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "airbus-a220-cockpit.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "airbus-a220-cabin.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "38.7 m",
        wingspan: "35.8 m",
        height: "11.5 m",
        maxSpeed: "839 km/h",
        range: "6,300 km",
        seatingCapacity: "130",
        engineType: "Pratt & Whitney PW1500G",
        engineCount: 2,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Enhanced Ground Proximity Warning System (EGPWS)",
          description: "Warns the crew of potential collision with the ground or obstacles.",
          certificationDate: "2016-06-10"
        },
        {
          name: "Traffic Collision Avoidance System (TCAS)",
          description: "Alerts pilots of potential conflicts with nearby aircraft.",
          certificationDate: "2016-06-10"
        },
        {
          name: "Fly-by-Wire Flight Control System",
          description: "Highly advanced automated flight control system for enhanced safety.",
          certificationDate: "2016-06-10"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "500 flight hours",
            estimatedDuration: "8 hours",
            description: "Routine inspection of aircraft systems."
          },
          bCheck: {
            interval: "3000 flight hours",
            estimatedDuration: "2 days",
            description: "In-depth inspection of major systems and components."
          },
          cCheck: {
            interval: "7500 flight hours",
            estimatedDuration: "1 week",
            description: "Comprehensive check of aircraft structure and systems."
          },
          dCheck: {
            interval: "15000 flight hours",
            estimatedDuration: "3 weeks",
            description: "Complete overhaul of all critical systems and components."
          }
        },
        requiredInspectionItems: [
          "Engine health check every 500 hours",
          "Landing gear inspection every 1000 hours",
          "Avionics and flight control check every 1500 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 350,
          unitsInService: 270,
          averageFleetAge: 4,
          globalUtilization: 85
        },
        safetyTrend: {
          monthlyData: {
            flights: [700, 750, 800, 850, 900, 950],
            incidents: [0, 0, 0, 0, 1, 0],
            reliability: [99.8, 99.9, 99.9, 99.9, 99.8, 99.9]
          },
          yearlyTrend: {
            safetyScores: [87, 88, 88, 89, 89, 88],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "30 years",
          targetDispatchReliability: 99.6,
          averageFlightHours: "2500 hours/year"
        }
      }
    },
    {
      id: 27,
      model: "Beechcraft Baron 58",
      manufacturer: "Beechcraft",
      type: "Private",
      year: 1969,
      safetyScore: 85,
      totalFlights: 30000,
      incidentRate: 0.0012,
      lastIncidentDate: "2021-09-18",
      images: [
        {
          url: "beechcraft-baron-58-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "beechcraft-baron-58.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "beechcraft-baron-58-cockpit.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "beechcraft-baron-58-cabin.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "8.4 m",
        wingspan: "11.8 m",
        height: "2.7 m",
        maxSpeed: "380 km/h",
        range: "2,400 km",
        seatingCapacity: "6",
        engineType: "Continental IO-550-B",
        engineCount: 2,
        certifications: {
          faa: "FAA",
          easa: "EASA"
        }
      },
      safetyFeatures: [
        {
          name: "Wing Leveler",
          description: "Prevents excessive roll by leveling the wings automatically.",
          certificationDate: "1969-04-01"
        },
        {
          name: "Autopilot System",
          description: "Maintains heading and altitude, reducing pilot workload.",
          certificationDate: "1969-04-01"
        },
        {
          name: "Stall Warning System",
          description: "Warns pilots when the aircraft is nearing a stall condition.",
          certificationDate: "1969-04-01"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "100 flight hours",
            estimatedDuration: "6 hours",
            description: "Basic inspection of aircraft systems."
          },
          bCheck: {
            interval: "800 flight hours",
            estimatedDuration: "1 day",
            description: "Routine inspection of systems and avionics."
          },
          cCheck: {
            interval: "2000 flight hours",
            estimatedDuration: "2 days",
            description: "Detailed inspection of aircraft components."
          },
          dCheck: {
            interval: "5000 flight hours",
            estimatedDuration: "1 week",
            description: "Comprehensive overhaul and inspection."
          }
        },
        requiredInspectionItems: [
          "Engine oil change every 50 hours",
          "Propeller inspection every 200 hours",
          "Landing gear inspection every 300 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 4500,
          unitsInService: 3500,
          averageFleetAge: 15,
          globalUtilization: 75
        },
        safetyTrend: {
          monthlyData: {
            flights: [100, 120, 140, 160, 180, 200],
            incidents: [0, 0, 1, 0, 0, 0],
            reliability: [99.5, 99.6, 99.5, 99.6, 99.5, 99.6]
          },
          yearlyTrend: {
            safetyScores: [84, 85, 85, 86, 86, 85],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "40 years",
          targetDispatchReliability: 99.5,
          averageFlightHours: "400 hours/year"
        }
      }
    },
    {
      id: 28,
      model: "Antonov An-225 Mriya",
      manufacturer: "Antonov",
      type: "commercial",
      year: 1988,
      safetyScore: 88,
      totalFlights: 3000,
      incidentRate: 0.0002,
      lastIncidentDate: "2020-05-20",
      images: [
        {
          url: "antonov-an-225-mriya.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "antonov-an-225-mriya-side.jpg",
          caption: "Side Profile",
          type: "exterior"
        },

        {
          url: "antonov-an-225-cockpit.jpg",
          caption: "cockpit",
          type: "interior"
        },
        {
          url: "antonov-an-225-cargo.jpg",
          caption: "Cargo Hold",
          type: "interior"
        }
      ],
      specifications: {
        length: "84 m",
        wingspan: "88.4 m",
        height: "18.1 m",
        maxSpeed: "850 km/h",
        range: "4,000 km",
        seatingCapacity: "6",
        engineType: "Progress D-18T",
        engineCount: 6,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Enhanced Ground Proximity Warning System (EGPWS)",
          description: "Warns pilots of terrain and provides alerts to prevent accidents.",
          certificationDate: "1988-12-30"
        },
        {
          name: "Traffic Collision Avoidance System (TCAS)",
          description: "Helps to prevent mid-air collisions with other aircraft.",
          certificationDate: "1988-12-30"
        },
        {
          name: "Fly-by-Wire Flight Control System",
          description: "Ensures precision control and safety in flight, especially for heavy loads.",
          certificationDate: "1988-12-30"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "500 flight hours",
            estimatedDuration: "10 hours",
            description: "Basic maintenance and visual inspections."
          },
          bCheck: {
            interval: "2000 flight hours",
            estimatedDuration: "3 days",
            description: "Inspection of engines, hydraulic systems, and avionics."
          },
          cCheck: {
            interval: "5000 flight hours",
            estimatedDuration: "1 week",
            description: "Detailed inspection of airframe and cargo systems."
          },
          dCheck: {
            interval: "10000 flight hours",
            estimatedDuration: "2 weeks",
            description: "Full overhaul of the aircraft, including engine and structure."
          }
        },
        requiredInspectionItems: [
          "Engine inspection every 500 hours",
          "Landing gear inspection every 1000 hours",
          "Cargo hold system check every 1200 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 1,
          unitsInService: 1,
          averageFleetAge: 36,
          globalUtilization: 75
        },
        safetyTrend: {
          monthlyData: {
            flights: [10, 12, 8, 11, 9, 10],
            incidents: [0, 0, 0, 0, 1, 0],
            reliability: [99.8, 99.9, 99.9, 99.8, 99.7, 99.8]
          },
          yearlyTrend: {
            safetyScores: [87, 88, 88, 89, 90, 88],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "50 years",
          targetDispatchReliability: 99.5,
          averageFlightHours: "1000 hours/year"
        }
      }
    },
    {
      id: 29,
      model: "Bombardier Global 7500",
      manufacturer: "Bombardier Aerospace",
      type: "Private",
      year: 2018,
      safetyScore: 94,
      totalFlights: 10000,
      incidentRate: 0.0001,
      lastIncidentDate: "2022-07-15",
      images: [
        {
          url: "bombardier-global-7500-front.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "bombardier-global-7500.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "bombardier-global-7500-cockpit.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "bombardier-global-7500-cabin.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "33.6 m",
        wingspan: "31.7 m",
        height: "8.3 m",
        maxSpeed: "1040 km/h",
        range: "14,260 km",
        seatingCapacity: "19",
        engineType: "Rolls-Royce Pearl 15",
        engineCount: 2,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Enhanced Ground Proximity Warning System (EGPWS)",
          description: "Prevents controlled flight into terrain and provides alerts.",
          certificationDate: "2018-11-15"
        },
        {
          name: "Traffic Collision Avoidance System (TCAS)",
          description: "Tracks other aircraft and provides avoidance instructions.",
          certificationDate: "2018-11-15"
        },
        {
          name: "Advanced Fly-by-Wire Control System",
          description: "Increases precision and control, ensuring smooth handling in flight.",
          certificationDate: "2018-11-15"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "400 flight hours",
            estimatedDuration: "8 hours",
            description: "Routine inspection and servicing of basic systems."
          },
          bCheck: {
            interval: "1500 flight hours",
            estimatedDuration: "2 days",
            description: "In-depth inspection of avionics and engine systems."
          },
          cCheck: {
            interval: "4000 flight hours",
            estimatedDuration: "1 week",
            description: "Thorough check of airframe, flight systems, and engines."
          },
          dCheck: {
            interval: "8000 flight hours",
            estimatedDuration: "2 weeks",
            description: "Full overhaul, including engine maintenance and airframe checks."
          }
        },
        requiredInspectionItems: [
          "Engine performance check every 400 hours",
          "Electrical system inspection every 800 hours",
          "Cabin and interior system check every 1000 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 200,
          unitsInService: 150,
          averageFleetAge: 5,
          globalUtilization: 85
        },
        safetyTrend: {
          monthlyData: {
            flights: [120, 130, 140, 150, 160, 170],
            incidents: [0, 0, 0, 0, 0, 0],
            reliability: [99.9, 99.9, 99.9, 99.9, 99.9, 99.9]
          },
          yearlyTrend: {
            safetyScores: [93, 94, 94, 94, 95, 94],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "40 years",
          targetDispatchReliability: 99.9,
          averageFlightHours: "2500 hours/year"
        }
      }
    },
    {
      id: 30,
      model: "Concorde",
      manufacturer: "Aérospatiale / British Aircraft Corporation",
      type: "Commercial",
      year: 1969,
      safetyScore: 85,
      totalFlights: 14000,
      incidentRate: 0.0007,
      lastIncidentDate: "2000-07-25",
      images: [
        {
          url: "concorde.jpg",
          caption: "Concorde in Flight",
          type: "exterior"
        },
        {
          url: "concorde-side-profile.jpg",
          caption: "Concorde Profile",
          type: "exterior"
        },
        {
          url: "concorde-cockpit.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "concorde-cabin.jpg",
          caption: "Luxury Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "61.66 m",
        wingspan: "25.56 m",
        height: "12.19 m",
        maxSpeed: "2,180 km/h",
        range: "7,250 km",
        seatingCapacity: "100",
        engineType: "Rolls-Royce/Snecma Olympus 593",
        engineCount: 4,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Autoland System",
          description: "Automated landing system in case of pilot incapacitation.",
          certificationDate: "1980-10-01"
        },
        {
          name: "Advanced Radar Systems",
          description: "Enhanced radar and weather systems to aid in supersonic travel.",
          certificationDate: "1980-10-01"
        },
        {
          name: "Cockpit Voice Recorder",
          description: "Records all communications in the cockpit for safety investigations.",
          certificationDate: "1980-10-01"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "300 flight hours",
            estimatedDuration: "8 hours",
            description: "Routine inspection and maintenance."
          },
          bCheck: {
            interval: "1500 flight hours",
            estimatedDuration: "1 day",
            description: "Comprehensive system checks and minor component replacements."
          },
          cCheck: {
            interval: "5000 flight hours",
            estimatedDuration: "1 week",
            description: "In-depth inspection and overhaul of major systems."
          },
          dCheck: {
            interval: "10000 flight hours",
            estimatedDuration: "3 weeks",
            description: "Full structural and system overhaul."
          }
        },
        requiredInspectionItems: [
          "Engine inspections every 500 hours",
          "Wing inspection every 1000 hours",
          "Hydraulic system check every 1000 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 20,
          unitsInService: 0,
          averageFleetAge: 31,
          globalUtilization: 50
        },
        safetyTrend: {
          monthlyData: {
            flights: [5, 6, 7, 8, 9, 10],
            incidents: [0, 0, 1, 0, 0, 0],
            reliability: [98.8, 98.7, 98.5, 98.9, 98.9, 99.0]
          },
          yearlyTrend: {
            safetyScores: [84, 85, 85, 83, 86, 85],
            years: [1999, 2000, 2001, 2002, 2003, 2004]
          }
        },
        reliabilityMetrics: {
          designLifespan: "40 years",
          targetDispatchReliability: 99.5,
          averageFlightHours: "2500 hours/year"
        }
      }
    },
    {
      id: 31,
      model: "Piper PA-28 Cherokee",
      manufacturer: "Piper Aircraft",
      type: "Private",
      year: 1961,
      safetyScore: 90,
      totalFlights: 400000,
      incidentRate: 0.0005,
      lastIncidentDate: "2023-09-10",
      images: [
        {
          url: "piper-pa-28-cherokee-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "piper-pa-28-cherokee.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "piper-pa-28-cherokee-cockpit.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "piper-pa-28-cherokee-cabin.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "7.34 m",
        wingspan: "10.16 m",
        height: "2.44 m",
        maxSpeed: "226 km/h",
        range: "900 km",
        seatingCapacity: "4",
        engineType: "Lycoming O-320-E2A",
        engineCount: 1,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Stall Warning System",
          description: "Warns pilots when the aircraft is approaching a stall condition.",
          certificationDate: "1965-01-01"
        },
        {
          name: "Side-Impact Protection System",
          description: "Enhanced protection in case of side-impact collisions.",
          certificationDate: "1965-01-01"
        },
        {
          name: "Emergency Locator Transmitter (ELT)",
          description: "Automatically activates in the event of a crash, assisting in locating the aircraft.",
          certificationDate: "1965-01-01"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "50 flight hours",
            estimatedDuration: "4 hours",
            description: "Basic inspection of engines and control surfaces."
          },
          bCheck: {
            interval: "200 flight hours",
            estimatedDuration: "1 day",
            description: "Routine maintenance and detailed system checks."
          },
          cCheck: {
            interval: "500 flight hours",
            estimatedDuration: "2 days",
            description: "In-depth inspection of structure and systems."
          },
          dCheck: {
            interval: "1000 flight hours",
            estimatedDuration: "3 days",
            description: "Complete overhaul of aircraft systems and structure."
          }
        },
        requiredInspectionItems: [
          "Engine check every 100 hours",
          "Landing gear inspection every 200 hours",
          "Flight control system check every 200 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 32000,
          unitsInService: 28000,
          averageFleetAge: 15,
          globalUtilization: 80
        },
        safetyTrend: {
          monthlyData: {
            flights: [100, 110, 120, 130, 140, 150],
            incidents: [1, 0, 1, 0, 1, 0],
            reliability: [99.7, 99.7, 99.8, 99.9, 99.7, 99.8]
          },
          yearlyTrend: {
            safetyScores: [90, 90, 91, 89, 90, 91],
            years: [2018, 2019, 2020, 2021, 2022, 2023]
          }
        },
        reliabilityMetrics: {
          designLifespan: "30 years",
          targetDispatchReliability: 99.5,
          averageFlightHours: "2000 hours/year"
        }
      }
    },
    {
      id: 32,
      model: "Fokker 100",
      manufacturer: "Fokker",
      type: "Commercial",
      year: 1986,
      safetyScore: 88,
      totalFlights: 30000,
      incidentRate: 0.002,
      lastIncidentDate: "2020-05-12",
      images: [
        {
          url: "fokker-100-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "fokker-100.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "fokker-100-cockpit.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "fokker-100-cabin.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "31.4 m",
        wingspan: "28.8 m",
        height: "7.4 m",
        maxSpeed: "810 km/h",
        range: "2,100 km",
        seatingCapacity: "107",
        engineType: "Rolls-Royce Tay 620-15",
        engineCount: 2,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Enhanced Ground Proximity Warning System (EGPWS)",
          description: "Warns of potential terrain and obstacles during flight.",
          certificationDate: "1990-04-22"
        },
        {
          name: "Traffic Collision Avoidance System (TCAS)",
          description: "Monitors airspace for potential conflicts with other aircraft.",
          certificationDate: "1990-04-22"
        },
        {
          name: "Flight Data Monitoring System",
          description: "Monitors flight data in real-time to ensure operational safety.",
          certificationDate: "1990-04-22"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "600 flight hours",
            estimatedDuration: "8 hours",
            description: "Basic inspection and preventive maintenance."
          },
          bCheck: {
            interval: "3000 flight hours",
            estimatedDuration: "3 days",
            description: "Detailed inspection of systems and components."
          },
          cCheck: {
            interval: "7500 flight hours",
            estimatedDuration: "2 weeks",
            description: "Thorough structural and systems inspection."
          },
          dCheck: {
            interval: "15000 flight hours",
            estimatedDuration: "1 month",
            description: "Comprehensive overhaul and inspection."
          }
        },
        requiredInspectionItems: [
          "Engine inspection every 500 hours",
          "Landing gear inspection every 1000 hours",
          "Hydraulic systems inspection every 1500 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 283,
          unitsInService: 120,
          averageFleetAge: 18.5,
          globalUtilization: 75
        },
        safetyTrend: {
          monthlyData: {
            flights: [200, 210, 220, 230, 240, 250],
            incidents: [0, 0, 1, 0, 0, 0],
            reliability: [99.7, 99.8, 99.7, 99.8, 99.9, 99.9]
          },
          yearlyTrend: {
            safetyScores: [86, 87, 88, 88, 89, 88],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "35 years",
          targetDispatchReliability: 99.6,
          averageFlightHours: "2500 hours/year"
        }
      }
    },
    {
      id: 33,
      model: "Lockheed P-3 Orion",
      manufacturer: "Lockheed Martin",
      type: "Military",
      year: 1962,
      safetyScore: 85,
      totalFlights: 150000,
      incidentRate: 0.003,
      lastIncidentDate: "2018-07-22",
      images: [
        {
          url: "lockheed-p3-orion-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "lockheed-p-3-orion.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "lockheed-p3-orion-cockpit.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "lockheed-p3-orion-cabin.jpg",
          caption: "Bomb Bay",
          type: "interior"
        }
      ],
      specifications: {
        length: "35.3 m",
        wingspan: "30.4 m",
        height: "10.3 m",
        maxSpeed: "900 km/h",
        range: "4,630 km",
        seatingCapacity: "11",
        engineType: "Allison T56-A-14",
        engineCount: 4,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Ground Proximity Warning System (GPWS)",
          description: "Helps prevent controlled flight into terrain by providing alerts.",
          certificationDate: "1980-10-01"
        },
        {
          name: "Traffic Collision Avoidance System (TCAS)",
          description: "Monitors nearby aircraft and provides collision avoidance alerts.",
          certificationDate: "1980-10-01"
        },
        {
          name: "Advanced Avionics Suite",
          description: "Features advanced radar and sonar systems for enhanced mission safety.",
          certificationDate: "1980-10-01"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "500 flight hours",
            estimatedDuration: "12 hours",
            description: "Standard checks including engine and avionics inspection."
          },
          bCheck: {
            interval: "2000 flight hours",
            estimatedDuration: "4 days",
            description: "Detailed inspection of mechanical and electronic systems."
          },
          cCheck: {
            interval: "5000 flight hours",
            estimatedDuration: "2 weeks",
            description: "In-depth check of the airframe and mission systems."
          },
          dCheck: {
            interval: "10000 flight hours",
            estimatedDuration: "1 month",
            description: "Complete overhaul and inspection of critical systems."
          }
        },
        requiredInspectionItems: [
          "Engine performance check every 400 hours",
          "Hydraulic system check every 800 hours",
          "Radar system inspection every 1200 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 757,
          unitsInService: 400,
          averageFleetAge: 26,
          globalUtilization: 85
        },
        safetyTrend: {
          monthlyData: {
            flights: [100, 110, 120, 130, 140, 150],
            incidents: [1, 0, 0, 0, 1, 0],
            reliability: [99.5, 99.6, 99.6, 99.7, 99.6, 99.7]
          },
          yearlyTrend: {
            safetyScores: [83, 84, 85, 85, 86, 85],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "50 years",
          targetDispatchReliability: 99.4,
          averageFlightHours: "1500 hours/year"
        }
      }
    },
    {
      id: 34,
      model: "Cirrus SR22",
      manufacturer: "Cirrus Aircraft",
      type: "Private",
      year: 2001,
      safetyScore: 95,
      totalFlights: 150000,
      incidentRate: 0.0002,
      lastIncidentDate: "2023-05-05",
      images: [
        {
          url: "cirrus-sr22-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "cirrus-sr22.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "cirrus-sr22-cockpit.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "cirrus-sr22-cabin.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "8.28 m",
        wingspan: "11 m",
        height: "2.5 m",
        maxSpeed: "343 km/h",
        range: "1,200 km",
        seatingCapacity: "4",
        engineType: "Continental IO-550-N",
        engineCount: 1,
        certifications: {
          faa: "FAA",
          easa: "EASA"
        }
      },
      safetyFeatures: [
        {
          name: "Cirrus Airframe Parachute System (CAPS)",
          description: "A whole-aircraft parachute system that enables safe recovery in emergency situations.",
          certificationDate: "2002-01-01"
        },
        {
          name: "Electronic Stability and Protection (ESP)",
          description: "A system that helps prevent dangerous flight conditions and ensures stable aircraft behavior.",
          certificationDate: "2002-01-01"
        },
        {
          name: "Avidyne Entegra Glass Cockpit",
          description: "Advanced avionics system that provides easy-to-read displays and improves situational awareness.",
          certificationDate: "2002-01-01"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "50 flight hours",
            estimatedDuration: "4 hours",
            description: "Basic visual and mechanical inspections."
          },
          bCheck: {
            interval: "200 flight hours",
            estimatedDuration: "1 day",
            description: "Routine maintenance of flight systems and powerplant."
          },
          cCheck: {
            interval: "1000 flight hours",
            estimatedDuration: "2 weeks",
            description: "Detailed inspection of airframe and systems."
          },
          dCheck: {
            interval: "4000 flight hours",
            estimatedDuration: "1 month",
            description: "Complete overhaul and system checks."
          }
        },
        requiredInspectionItems: [
          "Engine inspection every 100 hours",
          "Fuel system check every 150 hours",
          "Flight control system check every 200 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 6000,
          unitsInService: 5500,
          averageFleetAge: 7,
          globalUtilization: 95
        },
        safetyTrend: {
          monthlyData: {
            flights: [120, 130, 125, 140, 135, 150],
            incidents: [0, 0, 1, 0, 0, 0],
            reliability: [99.8, 99.9, 99.9, 99.8, 99.9, 99.9]
          },
          yearlyTrend: {
            safetyScores: [94, 95, 95, 96, 96, 95],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "30 years",
          targetDispatchReliability: 99.7,
          averageFlightHours: "400 hours/year"
        }
      }
    },
    {
      id: 35,
      model: "Douglas DC-3",
      manufacturer: "Douglas Aircraft Company",
      type: "Commercial",
      year: 1936,
      safetyScore: 80,
      totalFlights: 300000,
      incidentRate: 0.002,
      lastIncidentDate: "1985-04-12",
      images: [
        {
          url: "douglas-dc3-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "douglas-dc-3.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "douglas-dc3-cockpit.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "douglas-dc3-cabin.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "19.66 m",
        wingspan: "29.4 m",
        height: "5.18 m",
        maxSpeed: "370 km/h",
        range: "2,400 km",
        seatingCapacity: "21",
        engineType: "Pratt & Whitney R-1830 Twin Wasp",
        engineCount: 2,
        certifications: {
          faa: "FAA"
        }
      },
      safetyFeatures: [
        {
          name: "Manual Flight Controls",
          description: "Traditional flight controls for basic, no-autopilot operation.",
          certificationDate: "1936-01-01"
        },
        {
          name: "Electro-Mechanical Navigation System",
          description: "Basic avionics for navigation during long-haul operations.",
          certificationDate: "1936-01-01"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "50 flight hours",
            estimatedDuration: "5 hours",
            description: "Routine checks for structural integrity and minor system performance."
          },
          bCheck: {
            interval: "500 flight hours",
            estimatedDuration: "1-2 days",
            description: "Comprehensive inspection of mechanical systems and avionics."
          },
          cCheck: {
            interval: "1500 flight hours",
            estimatedDuration: "2-3 weeks",
            description: "Deep inspection and servicing of the airframe, systems, and engines."
          },
          dCheck: {
            interval: "5000 flight hours",
            estimatedDuration: "4 weeks",
            description: "Full overhaul of engines, electrical systems, and airframe."
          }
        },
        requiredInspectionItems: [
          "Engine performance check every 100 hours",
          "Electrical system check every 300 hours",
          "Hydraulic and fuel system inspection every 500 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 1600,
          unitsInService: 100,
          averageFleetAge: 60,
          globalUtilization: 50
        },
        safetyTrend: {
          monthlyData: {
            flights: [30, 35, 40, 25, 20, 15],
            incidents: [0, 0, 1, 0, 1, 0],
            reliability: [98.5, 98.4, 98.6, 98.4, 98.3, 98.5]
          },
          yearlyTrend: {
            safetyScores: [78, 80, 80, 81, 79, 80],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "70 years",
          targetDispatchReliability: 98.0,
          averageFlightHours: "200 hours/year"
        }
      }
    },
    {
      id: 36,
      model: "Beechcraft King Air 350i",
      manufacturer: "Beechcraft",
      type: "Private",
      year: 2009,
      safetyScore: 88,
      totalFlights: 50000,
      incidentRate: 0.0008,
      lastIncidentDate: "2021-02-05",
      images: [
        {
          url: "beechcraft-king-air-350i-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "beechcraft-king-air-350i.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "beechcraft-king-air-350i-cockpit.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "beechcraft-king-air-350i-cabin.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "14.19 m",
        wingspan: "16.3 m",
        height: "4.57 m",
        maxSpeed: "578 km/h",
        range: "3,600 km",
        seatingCapacity: "11",
        engineType: "Pratt & Whitney Canada PT6A-60A",
        engineCount: 2,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Enhanced Ground Proximity Warning System (EGPWS)",
          description: "Warns pilots of potential terrain hazards to prevent controlled flight into terrain.",
          certificationDate: "2009-06-10"
        },
        {
          name: "Traffic Collision Avoidance System (TCAS)",
          description: "Detects potential aircraft conflicts and provides guidance to avoid collisions.",
          certificationDate: "2009-06-10"
        },
        {
          name: "Weather Radar System",
          description: "Provides real-time weather information to assist in flight planning and decision-making.",
          certificationDate: "2009-06-10"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "500 flight hours",
            estimatedDuration: "8 hours",
            description: "Basic checks and visual inspections."
          },
          bCheck: {
            interval: "2000 flight hours",
            estimatedDuration: "1 day",
            description: "In-depth inspection of aircraft systems and components."
          },
          cCheck: {
            interval: "5000 flight hours",
            estimatedDuration: "1 week",
            description: "Comprehensive checks on the structure and key components."
          },
          dCheck: {
            interval: "12000 flight hours",
            estimatedDuration: "2 weeks",
            description: "Full overhaul of systems and major components."
          }
        },
        requiredInspectionItems: [
          "Engine health check every 500 hours",
          "Landing gear inspection every 800 hours",
          "Fuel system check every 1000 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 1500,
          unitsInService: 1200,
          averageFleetAge: 6.5,
          globalUtilization: 85
        },
        safetyTrend: {
          monthlyData: {
            flights: [300, 320, 310, 350, 380, 400],
            incidents: [0, 0, 1, 0, 0, 0],
            reliability: [99.7, 99.8, 99.8, 99.7, 99.9, 99.8]
          },
          yearlyTrend: {
            safetyScores: [87, 88, 88, 89, 89, 88],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "35 years",
          targetDispatchReliability: 99.5,
          averageFlightHours: "2500 hours/year"
        }
      }
    },
    {
      id: 37,
      model: "Tupolev Tu-154",
      manufacturer: "Tupolev",
      type: "Commercial",
      year: 1968,
      safetyScore: 75,
      totalFlights: 350000,
      incidentRate: 0.002,
      lastIncidentDate: "2009-10-10",
      images: [
        {
          url: "tupolev-tu-154-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "tupolev-tu-154.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "tupolev-tu-154-cockpit.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "tupolev-tu-154-cabin.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "48.13 m",
        wingspan: "37.5 m",
        height: "11.4 m",
        maxSpeed: "850 km/h",
        range: "5,000 km",
        seatingCapacity: "180",
        engineType: "Soloviev D-30KU-154",
        engineCount: 3,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Ground Proximity Warning System (GPWS)",
          description: "Warns pilots about potential terrain conflicts and controlled flight into terrain.",
          certificationDate: "1975-01-12"
        },
        {
          name: "Traffic Collision Avoidance System (TCAS)",
          description: "Helps avoid in-air collisions by detecting nearby aircraft.",
          certificationDate: "1975-01-12"
        },
        {
          name: "Autopilot System",
          description: "Provides automated control of the aircraft for enhanced safety during flight.",
          certificationDate: "1975-01-12"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "600 flight hours",
            estimatedDuration: "12 hours",
            description: "Routine inspection and servicing of aircraft systems."
          },
          bCheck: {
            interval: "3000 flight hours",
            estimatedDuration: "2 days",
            description: "Detailed inspection of major components and systems."
          },
          cCheck: {
            interval: "6000 flight hours",
            estimatedDuration: "1 week",
            description: "Thorough inspection of aircraft structure and systems."
          },
          dCheck: {
            interval: "18000 flight hours",
            estimatedDuration: "1 month",
            description: "Complete overhaul of the aircraft's systems and structure."
          }
        },
        requiredInspectionItems: [
          "Engine performance check every 500 hours",
          "Landing gear inspection every 800 hours",
          "Hydraulic system check every 1200 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 1025,
          unitsInService: 500,
          averageFleetAge: 20,
          globalUtilization: 75
        },
        safetyTrend: {
          monthlyData: {
            flights: [500, 520, 510, 480, 450, 460],
            incidents: [1, 0, 2, 0, 1, 0],
            reliability: [99.0, 98.9, 99.1, 98.9, 99.0, 99.2]
          },
          yearlyTrend: {
            safetyScores: [74, 75, 76, 75, 74, 75],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "40 years",
          targetDispatchReliability: 99.2,
          averageFlightHours: "2800 hours/year"
        }
      }
    },
    {
      id: 38,
      model: "Boeing C-17 Globemaster III",
      manufacturer: "Boeing",
      type: "Military",
      year: 1991,
      safetyScore: 88,
      totalFlights: 150000,
      incidentRate: 0.0007,
      lastIncidentDate: "2022-03-25",
      images: [
        {
          url: "boeing-c-17-globemaster-iii-front.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "boeing-c-17-globemaster-iii-side.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "boeing-c-17-globemaster-iii-cockpit.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "boeing-c-17-globemaster-iii-cargo.jpg",
          caption: "Cargo Bay Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "53 m",
        wingspan: "51.7 m",
        height: "16.8 m",
        maxSpeed: "833 km/h",
        range: "4,482 km",
        seatingCapacity: "102",
        engineType: "Engine Alliance F117-PW-100",
        engineCount: 4,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Ground Proximity Warning System (GPWS)",
          description: "Detects terrain hazards and provides audible and visual alerts.",
          certificationDate: "1991-12-15"
        },
        {
          name: "Traffic Collision Avoidance System (TCAS)",
          description: "Monitors surrounding airspace to detect and avoid other aircraft.",
          certificationDate: "1991-12-15"
        },
        {
          name: "Autonomous Flight Control System",
          description: "Automated system to assist pilots with takeoff, landing, and emergency procedures.",
          certificationDate: "1991-12-15"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "200 flight hours",
            estimatedDuration: "8 hours",
            description: "Basic inspections and checks."
          },
          bCheck: {
            interval: "1500 flight hours",
            estimatedDuration: "2 days",
            description: "In-depth maintenance on all major systems."
          },
          cCheck: {
            interval: "5000 flight hours",
            estimatedDuration: "1 week",
            description: "Comprehensive inspection of airframe, engines, and critical systems."
          },
          dCheck: {
            interval: "15000 flight hours",
            estimatedDuration: "3 weeks",
            description: "Full overhaul of structural and operational systems."
          }
        },
        requiredInspectionItems: [
          "Engine inspection every 500 hours",
          "Landing gear check every 800 hours",
          "Flight control system inspection every 1000 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 223,
          unitsInService: 220,
          averageFleetAge: 18,
          globalUtilization: 85
        },
        safetyTrend: {
          monthlyData: {
            flights: [250, 260, 270, 280, 290, 300],
            incidents: [0, 0, 0, 1, 0, 0],
            reliability: [99.6, 99.7, 99.7, 99.6, 99.7, 99.7]
          },
          yearlyTrend: {
            safetyScores: [87, 88, 88, 89, 90, 88],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "40 years",
          targetDispatchReliability: 99.5,
          averageFlightHours: "1500 hours/year"
        }
      }
    },
    {
      id: 39,
      model: "Grumman F-14 Tomcat",
      manufacturer: "Grumman Aerospace",
      type: "Military",
      year: 1970,
      safetyScore: 82,
      totalFlights: 50000,
      incidentRate: 0.002,
      lastIncidentDate: "2006-07-28",
      images: [
        {
          url: "f-14-tomcat-front.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "grumman-f-14-tomcat.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "f-14-tomcat-cockpit.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "f-14-tomcat-landing.jpg",
          caption: "Weapon Bay",
          type: "exterior"
        }
      ],
      specifications: {
        length: "19.1 m",
        wingspan: "19.6 m (extended), 11.6 m (retracted)",
        height: "4.88 m",
        maxSpeed: "2,485 km/h",
        range: "2,300 km",
        seatingCapacity: "2",
        engineType: "Pratt & Whitney TF30-P-414A",
        engineCount: 2,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Ground Proximity Warning System (GPWS)",
          description: "Monitors proximity to terrain and provides automatic alerts.",
          certificationDate: "1972-05-12"
        },
        {
          name: "Radar System for Target Identification",
          description: "Advanced radar for long-range target acquisition and identification.",
          certificationDate: "1972-05-12"
        },
        {
          name: "Ejection Seats",
          description: "High-speed ejection seats for pilot and RIO (Radar Intercept Officer) in case of emergency.",
          certificationDate: "1972-05-12"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "50 flight hours",
            estimatedDuration: "4 hours",
            description: "Basic inspection and servicing."
          },
          bCheck: {
            interval: "500 flight hours",
            estimatedDuration: "2 days",
            description: "Routine inspection and system checks."
          },
          cCheck: {
            interval: "1500 flight hours",
            estimatedDuration: "1 week",
            description: "Comprehensive inspection of airframe and engines."
          },
          dCheck: {
            interval: "5000 flight hours",
            estimatedDuration: "2 weeks",
            description: "Major overhaul and replacement of critical components."
          }
        },
        requiredInspectionItems: [
          "Engine inspection every 200 hours",
          "Wing fold mechanism check every 300 hours",
          "Control surfaces inspection every 400 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 712,
          unitsInService: 100,
          averageFleetAge: 30,
          globalUtilization: 70
        },
        safetyTrend: {
          monthlyData: {
            flights: [50, 60, 55, 45, 70, 65],
            incidents: [1, 0, 0, 1, 0, 0],
            reliability: [98.2, 98.4, 98.3, 98.1, 98.5, 98.6]
          },
          yearlyTrend: {
            safetyScores: [81, 82, 82, 83, 83, 82],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "25 years",
          targetDispatchReliability: 98.5,
          averageFlightHours: "400 hours/year"
        }
      }
    },
    {
      id: 41,
      model: "De Havilland Canada DHC-6 Twin Otter",
      manufacturer: "De Havilland Canada",
      type: "Commercial",
      year: 1965,
      safetyScore: 87,
      totalFlights: 200000,
      incidentRate: 0.0012,
      lastIncidentDate: "2022-05-12",
      images: [
        {
          url: "dhc-6-twin-otter-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "de-havilland-canada-dhc-6-twin-otter.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "dhc-6-twin-otter-cockpit.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "dhc-6-twin-otter-cabin.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "15.77 m",
        wingspan: "19.81 m",
        height: "6.73 m",
        maxSpeed: "317 km/h",
        range: "1,100 km",
        seatingCapacity: "19",
        engineType: "Pratt & Whitney Canada PT6A",
        engineCount: 2,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Enhanced Ground Proximity Warning System (EGPWS)",
          description: "Terrain awareness system designed to prevent controlled flight into terrain.",
          certificationDate: "2003-11-20"
        },
        {
          name: "Traffic Collision Avoidance System (TCAS)",
          description: "Collision avoidance system to ensure safe operation in congested airspaces.",
          certificationDate: "2003-11-20"
        },
        {
          name: "Reinforced Landing Gear",
          description: "Designed to handle rough and short-field landing conditions.",
          certificationDate: "2003-11-20"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "400 flight hours",
            estimatedDuration: "8 hours",
            description: "Basic checks and inspections of aircraft systems."
          },
          bCheck: {
            interval: "1800 flight hours",
            estimatedDuration: "2 days",
            description: "Thorough inspection of structure, engines, and avionics."
          },
          cCheck: {
            interval: "5000 flight hours",
            estimatedDuration: "1 week",
            description: "Extensive check of all major components, systems, and structure."
          },
          dCheck: {
            interval: "10000 flight hours",
            estimatedDuration: "2 weeks",
            description: "Full aircraft overhaul, including engine and structural components."
          }
        },
        requiredInspectionItems: [
          "Engine performance check every 500 hours",
          "Landing gear inspection every 800 hours",
          "Avionics and flight control systems check every 1200 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 1100,
          unitsInService: 900,
          averageFleetAge: 15.5,
          globalUtilization: 75
        },
        safetyTrend: {
          monthlyData: {
            flights: [200, 180, 160, 150, 140, 130],
            incidents: [0, 1, 0, 0, 0, 0],
            reliability: [99.7, 99.8, 99.9, 99.9, 99.9, 99.8]
          },
          yearlyTrend: {
            safetyScores: [85, 86, 87, 87, 88, 87],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "30 years",
          targetDispatchReliability: 99.6,
          averageFlightHours: "2200 hours/year"
        }
      }
    },
    {
      id: 42,
      model: "Mikoyan MiG-29",
      manufacturer: "Mikoyan",
      type: "Military",
      year: 1983,
      safetyScore: 75,
      totalFlights: 100000,
      incidentRate: 0.005,
      lastIncidentDate: "2023-07-22",
      images: [
        {
          url: "mig-29-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "mikoyan-mig-29.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "mig-29-cockpit.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "mig-29-cabin.jpg",
          caption: "Weapon Bay",
          type: "Exterior"
        }
      ],
      specifications: {
        length: "17.32 m",
        wingspan: "11.36 m",
        height: "4.73 m",
        maxSpeed: "2400 km/h",
        range: "2,100 km",
        seatingCapacity: "1",
        engineType: "RD-33",
        engineCount: 2,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Digital Fly-by-Wire Flight Control",
          description: "Advanced control system providing high maneuverability and stability.",
          certificationDate: "1983-08-01"
        },
        {
          name: "Ground Proximity Warning System (GPWS)",
          description: "Alerts pilots to potential terrain collision during low-altitude flight.",
          certificationDate: "1983-08-01"
        },
        {
          name: "Infrared Search and Track System",
          description: "Allows detection of hostile aircraft and threats during combat operations.",
          certificationDate: "1983-08-01"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "100 flight hours",
            estimatedDuration: "6 hours",
            description: "Routine check of basic flight systems and engine inspection."
          },
          bCheck: {
            interval: "600 flight hours",
            estimatedDuration: "1 day",
            description: "Detailed inspection of airframe, avionics, and engine systems."
          },
          cCheck: {
            interval: "1500 flight hours",
            estimatedDuration: "1 week",
            description: "Comprehensive inspection of aircraft structure, systems, and avionics."
          },
          dCheck: {
            interval: "3000 flight hours",
            estimatedDuration: "2 weeks",
            description: "Complete overhaul, including airframe and engine components."
          }
        },
        requiredInspectionItems: [
          "Engine inspection every 200 hours",
          "Flight control system check every 500 hours",
          "Radar and avionics calibration every 600 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 1600,
          unitsInService: 1200,
          averageFleetAge: 16.5,
          globalUtilization: 85
        },
        safetyTrend: {
          monthlyData: {
            flights: [400, 350, 300, 250, 200, 180],
            incidents: [0, 1, 2, 0, 1, 0],
            reliability: [98.5, 98.4, 98.3, 98.2, 98.1, 98.0]
          },
          yearlyTrend: {
            safetyScores: [73, 74, 75, 75, 76, 75],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "40 years",
          targetDispatchReliability: 97.5,
          averageFlightHours: "1000 hours/year"
        }
      }
    },
    {
      id: 43,
      model: "Airbus A350 XWB",
      manufacturer: "Airbus",
      type: "Commercial",
      year: 2013,
      safetyScore: 93,
      totalFlights: 150000,
      incidentRate: 0.0004,
      lastIncidentDate: "2022-10-22",
      images: [
        {
          url: "airbus-a350-xwb-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "airbus-a350-xwb.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "airbus-a350-xwb-cockpit.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "airbus-a350-xwb-cabin.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "66.8 m",
        wingspan: "64.75 m",
        height: "17.05 m",
        maxSpeed: "945 km/h",
        range: "15,000 km",
        seatingCapacity: "300",
        engineType: "Rolls-Royce Trent XWB",
        engineCount: 2,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Enhanced Ground Proximity Warning System (EGPWS)",
          description: "Provides alerts to prevent controlled flight into terrain.",
          certificationDate: "2014-01-15"
        },
        {
          name: "Traffic Collision Avoidance System (TCAS)",
          description: "Monitors for other aircraft in the vicinity and provides avoidance guidance.",
          certificationDate: "2014-01-15"
        },
        {
          name: "Fly-by-Wire Flight Control System",
          description: "Advanced system for precise control with automated safety features.",
          certificationDate: "2014-01-15"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "600 flight hours",
            estimatedDuration: "10 hours",
            description: "Routine inspection and servicing."
          },
          bCheck: {
            interval: "3000 flight hours",
            estimatedDuration: "2 days",
            description: "Detailed systems inspection and component checks."
          },
          cCheck: {
            interval: "7500 flight hours",
            estimatedDuration: "1 week",
            description: "Comprehensive inspection of structure, systems, and components."
          },
          dCheck: {
            interval: "15000 flight hours",
            estimatedDuration: "3 weeks",
            description: "Full overhaul and critical systems inspection."
          }
        },
        requiredInspectionItems: [
          "Engine performance check every 500 hours",
          "Landing gear check every 1000 hours",
          "Wing and fuselage integrity inspection every 2000 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 500,
          unitsInService: 450,
          averageFleetAge: 5,
          globalUtilization: 90
        },
        safetyTrend: {
          monthlyData: {
            flights: [1000, 1100, 1200, 1300, 1400, 1500],
            incidents: [0, 0, 0, 0, 1, 0],
            reliability: [99.9, 99.9, 99.9, 99.8, 99.9, 99.9]
          },
          yearlyTrend: {
            safetyScores: [91, 92, 93, 93, 94, 93],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "40 years",
          targetDispatchReliability: 99.8,
          averageFlightHours: "3000 hours/year"
        }
      }
    },
    {
      id: 44,
      model: "Boeing KC-135 Stratotanker",
      manufacturer: "Boeing",
      type: "Military",
      year: 1956,
      safetyScore: 80,
      totalFlights: 250000,
      incidentRate: 0.002,
      lastIncidentDate: "2023-07-18",
      images: [
        {
          url: "boeing-kc-135-stratotanker-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "boeing-kc-135-stratotanker.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "boeing-kc-135-stratotanker-cockpit.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "boeing-kc-135-stratotanker-cargo.jpg",
          caption: "Cargo Bay",
          type: "interior"
        }
      ],
      specifications: {
        length: "42.4 m",
        wingspan: "39.9 m",
        height: "12.5 m",
        maxSpeed: "830 km/h",
        range: "2,200 km (with full fuel load)",
        seatingCapacity: "6 (crew)",
        engineType: "Pratt & Whitney J57-P-59W",
        engineCount: 4,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Enhanced Ground Proximity Warning System (EGPWS)",
          description: "Advanced system for terrain awareness and flight safety.",
          certificationDate: "2005-03-15"
        },
        {
          name: "Traffic Collision Avoidance System (TCAS)",
          description: "System to prevent mid-air collisions through continuous monitoring.",
          certificationDate: "2005-03-15"
        },
        {
          name: "Flight Data Monitoring System",
          description: "Monitors key aircraft data to ensure operational safety.",
          certificationDate: "2005-03-15"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "400 flight hours",
            estimatedDuration: "8 hours",
            description: "Basic check and servicing."
          },
          bCheck: {
            interval: "2000 flight hours",
            estimatedDuration: "1 day",
            description: "In-depth systems and structure inspection."
          },
          cCheck: {
            interval: "5000 flight hours",
            estimatedDuration: "1 week",
            description: "Comprehensive inspection of the aircraft's systems and components."
          },
          dCheck: {
            interval: "10000 flight hours",
            estimatedDuration: "2 weeks",
            description: "Full inspection and major overhaul of key systems."
          }
        },
        requiredInspectionItems: [
          "Engine health check every 500 hours",
          "Hydraulic system check every 1000 hours",
          "Fuel systems check every 1500 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 732,
          unitsInService: 400,
          averageFleetAge: 20,
          globalUtilization: 85
        },
        safetyTrend: {
          monthlyData: {
            flights: [300, 350, 400, 450, 500, 550],
            incidents: [1, 0, 0, 1, 0, 0],
            reliability: [98.5, 98.6, 98.7, 98.8, 98.9, 98.7]
          },
          yearlyTrend: {
            safetyScores: [78, 79, 80, 81, 82, 80],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "50 years",
          targetDispatchReliability: 99.0,
          averageFlightHours: "2000 hours/year"
        }
      }
    },
    {
      id: 45,
      model: "Bombardier CRJ700",
      manufacturer: "Bombardier",
      type: "Commercial",
      year: 2001,
      safetyScore: 88,
      totalFlights: 150000,
      incidentRate: 0.0012,
      lastIncidentDate: "2020-10-17",
      images: [
        {
          url: "bombardier-crj700-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "bombardier-crj700.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "bombardier-crj700-cockpit.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "bombardier-crj700-cabin.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "29.9 m",
        wingspan: "23.5 m",
        height: "7.7 m",
        maxSpeed: "850 km/h",
        range: "2,000 km",
        seatingCapacity: "78",
        engineType: "General Electric CF34-8C5",
        engineCount: 2,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Enhanced Ground Proximity Warning System (EGPWS)",
          description: "Helps avoid controlled flight into terrain by providing terrain alerts.",
          certificationDate: "2001-04-15"
        },
        {
          name: "Traffic Collision Avoidance System (TCAS)",
          description: "Detects nearby aircraft and provides collision avoidance advisories.",
          certificationDate: "2001-04-15"
        },
        {
          name: "Autoland System",
          description: "Allows for automatic landing under poor visibility conditions.",
          certificationDate: "2001-04-15"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "400 flight hours",
            estimatedDuration: "8 hours",
            description: "Basic inspection and servicing."
          },
          bCheck: {
            interval: "2000 flight hours",
            estimatedDuration: "1 day",
            description: "Thorough inspection of systems and mechanical components."
          },
          cCheck: {
            interval: "6000 flight hours",
            estimatedDuration: "1 week",
            description: "Comprehensive check of aircraft structure and components."
          },
          dCheck: {
            interval: "12000 flight hours",
            estimatedDuration: "2 weeks",
            description: "Full overhaul and systems inspection."
          }
        },
        requiredInspectionItems: [
          "Engine performance check every 500 hours",
          "Landing gear inspection every 800 hours",
          "Electrical system check every 1000 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 700,
          unitsInService: 550,
          averageFleetAge: 9,
          globalUtilization: 85
        },
        safetyTrend: {
          monthlyData: {
            flights: [500, 510, 530, 550, 570, 590],
            incidents: [1, 0, 0, 0, 1, 0],
            reliability: [99.7, 99.8, 99.9, 99.9, 99.8, 99.9]
          },
          yearlyTrend: {
            safetyScores: [85, 86, 87, 87, 88, 88],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "30 years",
          targetDispatchReliability: 99.5,
          averageFlightHours: "2500 hours/year"
        }
      }
    },
    {
      id: 46,
      model: "Piaggio P.180 Avanti",
      manufacturer: "Piaggio Aerospace",
      type: "Private",
      year: 1990,
      safetyScore: 93,
      totalFlights: 35000,
      incidentRate: 0.0008,
      lastIncidentDate: "2022-03-22",
      images: [
        {
          url: "piaggio-p180-avanti-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "piaggio-p.180-avanti.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "piaggio-p180-avanti-cockpit.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "piaggio-p180-avanti-cabin.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "14.6 m",
        wingspan: "15.2 m",
        height: "4.5 m",
        maxSpeed: "700 km/h",
        range: "1,800 km",
        seatingCapacity: "9",
        engineType: "Pratt & Whitney Canada PT6A-66B",
        engineCount: 2,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Enhanced Ground Proximity Warning System (EGPWS)",
          description: "Warns pilots of potential terrain hazards, especially in mountainous areas.",
          certificationDate: "1990-11-01"
        },
        {
          name: "Traffic Collision Avoidance System (TCAS)",
          description: "System to detect and avoid air traffic collisions by providing advisory alerts.",
          certificationDate: "1990-11-01"
        },
        {
          name: "Anti-skid Braking System",
          description: "Helps prevent skidding and ensures safer landings on wet or icy runways.",
          certificationDate: "1990-11-01"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "300 flight hours",
            estimatedDuration: "6 hours",
            description: "Routine maintenance, including basic inspections."
          },
          bCheck: {
            interval: "1500 flight hours",
            estimatedDuration: "1 day",
            description: "In-depth inspection of airframe and avionics."
          },
          cCheck: {
            interval: "5000 flight hours",
            estimatedDuration: "1 week",
            description: "Detailed inspection of systems, structure, and components."
          },
          dCheck: {
            interval: "10000 flight hours",
            estimatedDuration: "2 weeks",
            description: "Major overhaul and complete check of critical components."
          }
        },
        requiredInspectionItems: [
          "Engine inspection every 400 hours",
          "Flap system check every 600 hours",
          "Fuel system inspection every 800 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 150,
          unitsInService: 100,
          averageFleetAge: 15,
          globalUtilization: 75
        },
        safetyTrend: {
          monthlyData: {
            flights: [80, 85, 90, 95, 100, 110],
            incidents: [0, 0, 0, 0, 0, 0],
            reliability: [99.9, 99.9, 99.9, 99.9, 99.9, 99.9]
          },
          yearlyTrend: {
            safetyScores: [91, 92, 93, 93, 94, 93],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "25 years",
          targetDispatchReliability: 99.8,
          averageFlightHours: "1800 hours/year"
        }
      }
    },
    {
      id: 47,
      model: "Airbus A310 MRTT",
      manufacturer: "Airbus",
      type: "Military",
      year: 2007,
      safetyScore: 87,
      totalFlights: 40000,
      incidentRate: 0.0007,
      lastIncidentDate: "2021-06-14",
      images: [
        {
          url: "airbus-a310-mrtt-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "airbus-a310-mrtt.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "airbus-a310-mrtt-cockpit.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "airbus-a310-mrtt-cabin.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "46.66 m",
        wingspan: "43.9 m",
        height: "15.8 m",
        maxSpeed: "850 km/h",
        range: "9,100 km",
        seatingCapacity: "265",
        engineType: "CF6-80C2",
        engineCount: 2,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Air-to-Air Refueling System",
          description: "Advanced refueling capability with under-wing refueling pods and centerline hose for tactical operations.",
          certificationDate: "2008-07-12"
        },
        {
          name: "Enhanced Ground Proximity Warning System (EGPWS)",
          description: "Monitors terrain and provides warnings to avoid controlled flight into terrain.",
          certificationDate: "2008-07-12"
        },
        {
          name: "Traffic Collision Avoidance System (TCAS)",
          description: "Automated system for detecting and avoiding collisions with other aircraft.",
          certificationDate: "2008-07-12"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "600 flight hours",
            estimatedDuration: "12 hours",
            description: "Routine checks and servicing of all systems."
          },
          bCheck: {
            interval: "3500 flight hours",
            estimatedDuration: "2 days",
            description: "Detailed inspection of engines, airframe, and control systems."
          },
          cCheck: {
            interval: "10000 flight hours",
            estimatedDuration: "3 weeks",
            description: "Full-scale inspection of all major components and systems."
          },
          dCheck: {
            interval: "25000 flight hours",
            estimatedDuration: "1 month",
            description: "Complete overhaul, including engines, fuselage, and avionics."
          }
        },
        requiredInspectionItems: [
          "Engine performance check every 600 hours",
          "Landing gear inspection every 1000 hours",
          "Refueling system check every 1500 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 40,
          unitsInService: 35,
          averageFleetAge: 16,
          globalUtilization: 95
        },
        safetyTrend: {
          monthlyData: {
            flights: [120, 130, 140, 150, 160, 170],
            incidents: [0, 0, 0, 1, 0, 0],
            reliability: [99.7, 99.8, 99.9, 99.8, 99.9, 99.8]
          },
          yearlyTrend: {
            safetyScores: [85, 86, 87, 87, 88, 87],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "40 years",
          targetDispatchReliability: 99.6,
          averageFlightHours: "2800 hours/year"
        }
      }
    },
    {
      id: 48,
      model: "Boeing 727",
      manufacturer: "Boeing",
      type: "Commercial",
      year: 1963,
      safetyScore: 82,
      totalFlights: 400000,
      incidentRate: 0.002,
      lastIncidentDate: "2001-05-22",
      images: [
        {
          url: "boeing-727-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "boeing-727.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "boeing-727-cockpit.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "boeing-727-cabin.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "42.1 m",
        wingspan: "32.92 m",
        height: "11.13 m",
        maxSpeed: "950 km/h",
        range: "4,800 km",
        seatingCapacity: "189",
        engineType: "Pratt & Whitney JT8D",
        engineCount: 3,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Flight Data Monitoring",
          description: "Monitors critical flight parameters to ensure safe operations.",
          certificationDate: "1963-10-15"
        },
        {
          name: "Traffic Collision Avoidance System (TCAS)",
          description: "Monitors airspace for potential conflicts with other aircraft and provides collision avoidance guidance.",
          certificationDate: "1985-07-10"
        },
        {
          name: "Enhanced Ground Proximity Warning System (EGPWS)",
          description: "Alerts pilots to terrain proximity and provides corrective actions to prevent accidents.",
          certificationDate: "1985-07-10"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "300 flight hours",
            estimatedDuration: "6 hours",
            description: "Basic visual checks and routine servicing."
          },
          bCheck: {
            interval: "2000 flight hours",
            estimatedDuration: "2 days",
            description: "More extensive system checks, including engine and avionics."
          },
          cCheck: {
            interval: "5000 flight hours",
            estimatedDuration: "1 week",
            description: "Thorough inspection of structure, engine, and flight systems."
          },
          dCheck: {
            interval: "12000 flight hours",
            estimatedDuration: "3 weeks",
            description: "Comprehensive overhaul, including major system inspections and overhauls."
          }
        },
        requiredInspectionItems: [
          "Engine check every 600 hours",
          "Flight control systems check every 1000 hours",
          "Landing gear inspection every 1500 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 1850,
          unitsInService: 400,
          averageFleetAge: 35,
          globalUtilization: 75
        },
        safetyTrend: {
          monthlyData: {
            flights: [500, 450, 470, 490, 510, 530],
            incidents: [1, 0, 1, 0, 1, 0],
            reliability: [98.5, 98.7, 98.6, 98.5, 98.4, 98.6]
          },
          yearlyTrend: {
            safetyScores: [80, 81, 82, 82, 83, 82],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "45 years",
          targetDispatchReliability: 98.5,
          averageFlightHours: "2200 hours/year"
        }
      }
    },
    {
      id: 49,
      model: "Learjet 75",
      manufacturer: "Bombardier",
      type: "Private",
      year: 2013,
      safetyScore: 93,
      totalFlights: 40000,
      incidentRate: 0.0002,
      lastIncidentDate: "2023-06-30",
      images: [
        {
          url: "learjet-75-detail-1.jpg",
          caption: "Front View",
          type: "exterior"
        },
        {
          url: "learjet-75.jpg",
          caption: "Side Profile",
          type: "exterior"
        },
        {
          url: "learjet-75-cockpit.jpg",
          caption: "Cockpit View",
          type: "interior"
        },
        {
          url: "learjet-75-cabin.jpg",
          caption: "Cabin Layout",
          type: "interior"
        }
      ],
      specifications: {
        length: "21.77 m",
        wingspan: "19.45 m",
        height: "5.1 m",
        maxSpeed: "850 km/h",
        range: "3,778 km",
        seatingCapacity: "9",
        engineType: "Honeywell TFE731-40BR",
        engineCount: 2,
        certifications: {
          faa: "FAA",
          easa: "EASA",
          caac: "CAAC"
        }
      },
      safetyFeatures: [
        {
          name: "Enhanced Ground Proximity Warning System (EGPWS)",
          description: "Prevents controlled flight into terrain with real-time alerts and guidance.",
          certificationDate: "2013-05-10"
        },
        {
          name: "Traffic Collision Avoidance System (TCAS)",
          description: "Monitors surrounding airspace for other aircraft and provides avoidance alerts.",
          certificationDate: "2013-05-10"
        },
        {
          name: "Autothrottle System",
          description: "Maintains optimal engine power and speed, reducing pilot workload.",
          certificationDate: "2013-05-10"
        }
      ],
      maintenanceRequirements: {
        standardChecks: {
          aCheck: {
            interval: "400 flight hours",
            estimatedDuration: "8 hours",
            description: "Basic checks including visual inspection and fluid levels."
          },
          bCheck: {
            interval: "1500 flight hours",
            estimatedDuration: "1 day",
            description: "Comprehensive systems check and diagnostics."
          },
          cCheck: {
            interval: "4000 flight hours",
            estimatedDuration: "1 week",
            description: "Thorough inspection of structure, systems, and components."
          },
          dCheck: {
            interval: "8000 flight hours",
            estimatedDuration: "2 weeks",
            description: "Complete overhaul of critical systems and major components."
          }
        },
        requiredInspectionItems: [
          "Engine inspection every 500 hours",
          "Landing gear inspection every 1000 hours",
          "Airframe stress test every 1500 hours"
        ]
      },
      operationalMetrics: {
        fleetStatistics: {
          totalUnitsProduced: 250,
          unitsInService: 200,
          averageFleetAge: 6.2,
          globalUtilization: 75
        },
        safetyTrend: {
          monthlyData: {
            flights: [120, 130, 140, 150, 160, 170],
            incidents: [0, 0, 0, 0, 0, 1],
            reliability: [99.9, 99.9, 99.9, 99.9, 99.9, 99.8]
          },
          yearlyTrend: {
            safetyScores: [92, 92, 93, 93, 94, 93],
            years: [2019, 2020, 2021, 2022, 2023, 2024]
          }
        },
        reliabilityMetrics: {
          designLifespan: "35 years",
          targetDispatchReliability: 99.8,
          averageFlightHours: "1800 hours/year"
        }
      }
    }

  ],
};

