const l1 = 100;    // Course level
const l2 = 500;    // Main topics
const l3 = 800;    // Intermediate subtopics
const l4 = 1100;   // Lower subtopics
const l5 = 1400;   // Deepest subtopics

export const courseData = [
    // Root course node
    { 
        id: 0, 
        title: "Mechanics", 
        x: 1800, 
        y: l1, 
        videos: [
            { number: "H1", title: "The Big Picture (part 1): The Big Picture" },
            { number: "H2", title: "The Big Picture (part 2)" }
        ],
        description: "The study of motion and the forces that cause motion, covering kinematics, dynamics, energy, momentum, rotation, and periodic motion."
    },
  
    // Main topic nodes
    { 
        id: 1, 
        title: "Kinematics", 
        x: 400, 
        y: l2, 
        videos: [],
        description: "The study of describing motion without considering the forces that cause it."
    },
    { 
        id: 2, 
        title: "Newton's Laws", 
        x: 800, 
        y: l2, 
        videos: [
            { number: "B9", title: "Review of Unit B. Newton's Laws (part 1)" },
            { number: "B10", title: "Review of Unit B (part 2)" },
            { number: "B11", title: "Review of Unit B (part 3)" }
        ],
        description: "The three fundamental laws that describe the relationship between forces acting on a body and its motion."
    },
    { 
        id: 3, 
        title: "Work, Energy, Power", 
        x: 1200, 
        y: l2, 
        videos: [
            { number: "C10", title: "Unit C Review (part 1)" },
            { number: "C11", title: "Unit C Review (part 2)" },
            { number: "C12", title: "Unit C Review (part 3)" },
            { number: "C13", title: "Unit C Review (part 4)" }
        ],
        description: "The study of energy transfer, storage, and transformation in mechanical systems."
    },
    { 
        id: 4, 
        title: "Momentum & Impulse", 
        x: 1600, 
        y: l2, 
        videos: [
            { number: "D6", title: "Unit D Review (part 1)" },
            { number: "D7", title: "Unit D Review (part 2)" },
            { number: "D8", title: "Unit D Review (part 3)" }
        ],
        description: "The study of momentum conservation and collision dynamics in mechanical systems."
    },
    { 
        id: 5, 
        title: "Rotational Motion", 
        x: 2000, 
        y: l2, 
        videos: [
            { number: "E18", title: "Unit E Review (part 1)" },
            { number: "E19", title: "Unit E Review (part 2)" }
        ],
        description: "The study of objects rotating about an axis, including torque, angular momentum, and rotational dynamics."
    },
    { 
        id: 6, 
        title: "Satellite Motion", 
        x: 2400, 
        y: l2, 
        videos: [
            { number: "F11", title: "Review for Unit F (part 1)" },
            { number: "F12", title: "Review for Unit F (part 2)" },
            { number: "F13", title: "Review for Unit F (part 3)" }
        ],
        description: "The study of gravitational forces and orbital mechanics for satellites and planetary motion."
    },
    { 
        id: 7, 
        title: "Periodic Motion", 
        x: 2800, 
        y: l2, 
        videos: [
            { number: "G12", title: "Review of Unit G (part 1)" },
            { number: "G13", title: "Review of Unit G (part 2)" },
            { number: "G14", title: "Review of Unit G (part 3)" },
            { number: "G15", title: "Review Unit G (part 4)" },
            { number: "G16", title: "Review Unit G (part 5)" }
        ],
        description: "The study of oscillatory motion including simple harmonic motion, springs, and pendulums."
    },
    { 
        id: 8, 
        title: "Growth & Decay", 
        x: 3200, 
        y: l2, 
        videos: [
            { number: "N3", title: "Review of Air Resistance" },
            { number: "N4", title: "Review of Air Resistance (part 2)" }
        ],
        description: "The study of exponential processes in physics, particularly air resistance effects on falling objects."
    },
  
    // Kinematics subtopics
    { 
        id: 101, 
        title: "Motion Concepts", 
        x: 300, 
        y: l5, 
        videos: [
            { number: "A1", title: "Distance, Position, Displacement, Speed, Velocity and Acceleration" },
        ],
        description: "Fundamental concepts of motion description including vectors, displacement, velocity, and acceleration."
    },
    { 
        id: 102, 
        title: "Kinematic Equations & Calculus", 
        x: 300, 
        y: l4, 
        videos: [
            { number: "A2", title: "Deriving the Kinematics Equations for Straight-Line Uniform Acceleration Using the v vs. t Graph" },
            { number: "A3", title: "Deriving the Kinematics Equations for Straight-Line Uniform Acceleration Using Calculus" },
        ],
        description: "Mathematical derivations of kinematic equations using graphical and calculus-based approaches."
    },
    { 
        id: 103, 
        title: "Projectile Motion", 
        x: 300, 
        y: l3, 
        videos: [
            { number: "A4", title: "Projectile Motion Basics" }
        ],
        description: "The motion of objects launched into the air under the influence of gravity alone."
    },
    { 
        id: 104, 
        title: "Vectors", 
        x: 500, 
        y: l4, 
        videos: [
            { number: "A6", title: "Vector Basics (Part I)" },
            { number: "A7", title: "Vector Basics (part 2)" }
        ],
        description: "Fundamental concepts of motion description including vectors, displacement, velocity, and acceleration."
    },
    { 
        id: 105, 
        title: "Relative Velocity", 
        x: 500, 
        y: l3, 
        videos: [
            { number: "A5", title: "Relative Velocity" }
        ],
        description: "Understanding how velocities appear different from different reference frames."
    },
  
    // Newton's Laws subtopics
    { 
        id: 201, 
        title: "Newton's Laws & Force Analysis", 
        x: 700, 
        y: l5, 
        videos: [
            { number: "B1", title: "Solving Newton's Second Law Problems" },
            { number: "B1.1", title: "Basics on the Force of Tension" },
            { number: "B1.2", title: "The Force of Kinetic Friction" },
            { number: "B1.3", title: "The Force of Static Friction" },
            { number: "B2", title: "Inclined Planes (Continued from Video B1)" }
        ],
        description: "Fundamental application of Newton's three laws to analyze forces and motion."
    },
    { 
        id: 202, 
        title: "Multiple-Body Systems & Pulleys", 
        x: 700, 
        y: l4, 
        videos: [
            { number: "B2.1", title: "Two Newton's 2nd Law Example Problems: Ball Hanging From the Ceiling of a Truck and Crate in a Truck" },
            { number: "B3", title: "Solving Problems Involving Multiple-Bodies Using Newton's Laws" },
            { number: "B3.1", title: "Atwood's Machine Problems" },
            { number: "B4", title: "Atwood's Machine Problems (part II)" }
        ],
        description: "Analysis of systems with multiple connected objects and pulley systems."
    },
    { 
        id: 204, 
        title: "Elevator Problems", 
        x: 700, 
        y: l3, 
        videos: [
            { number: "B8", title: "Elevator Problems and Newton's Laws" }
        ],
        description: "Application of Newton's laws to objects in accelerating reference frames like elevators."
    },
    { 
        id: 203, 
        title: "Circular Motion & Banked Turns", 
        x: 900, 
        y: l3, 
        videos: [
            { number: "B5", title: "Circular Motion Problems" },
            { number: "B6", title: "Circular Motion Problems (part 2)" },
            { number: "B6.5", title: "Circular Motion for Non-Uniform Circular Motion" },
            { number: "B7", title: "Banked Turns and Toy Airplanes" },
            { number: "B7.1", title: "The Physics of a Banked Turn (with Friction Considerations)" }
        ],
        description: "Analysis of objects moving in circular paths, including banked curves and friction considerations."
    },
  
    // Work, Energy, Power subtopics
    { 
        id: 301, 
        title: "Dot Product & Work Basics", 
        x: 1100, 
        y: l5, 
        videos: [
            { number: "C0", title: "Part 1 of the Dot Product or Scalar Product" },
            { number: "C1", title: "The Dot Product or the Scalar Product" },
            { number: "C2", title: "The Integral and Work Done by a Force" }
        ],
        description: "Mathematical foundation of vector dot products and basic work concepts."
    },
    { 
        id: 302, 
        title: "Work by Forces", 
        x: 1100, 
        y: l4, 
        videos: [
            { number: "C4", title: "Work Done on an Object by a Constant Force" },
            { number: "C5", title: "Work Done on an Object by a Varying Force" }
        ],
        description: "Calculation of work done by both constant and varying forces."
    },
    { 
        id: 303, 
        title: "Power & Efficiency", 
        x: 1100, 
        y: l3, 
        videos: [
            { number: "C6", title: "Power and Efficiency" }
        ],
        description: "The rate of energy transfer and the efficiency of mechanical systems."
    },
    { 
        id: 304, 
        title: "Conservative Forces & Energy", 
        x: 1300, 
        y: l3, 
        videos: [
            { number: "C7", title: "Conservative and Non-Conservative Forces" },
            { number: "C8", title: "Conservative and Non-Conservative Forces (part 2)" },
            { number: "C9", title: "Work Done By a Conservative Forces" }
        ],
        description: "Understanding path-independent forces and their relationship to potential energy."
    },
  
    // Momentum & Impulse subtopics
    { 
        id: 401, 
        title: "Linear Momentum & Collisions", 
        x: 1500, 
        y: l4, 
        videos: [
            { number: "D1", title: "Momentum Basics" },
            { number: "D2", title: "Types of Collisions" },
            { number: "D3", title: "Types of Collisions (part 2)" }
        ],
        description: "Conservation of momentum in collision processes and momentum fundamentals."
    },
    { 
        id: 402, 
        title: "2D Collisions & Ballistic Pendulum", 
        x: 1500, 
        y: l3, 
        videos: [
            { number: "D4", title: "Collisions in 2 Dimensions" },
            { number: "D5", title: "Ballistic Pendulum Problems" }
        ],
        description: "Advanced collision analysis including two-dimensional collisions and ballistic pendulum systems."
    },
  
    // Rotational Motion subtopics
    { 
        id: 507, 
        title: "Static Equilibrium", 
        x: 1700, 
        y: l3, 
        videos: [
            { number: "E7", title: "Static Equilibrium Problems" },
            { number: "E8", title: "Static Equilibrium Problems (part 2)" },
            { number: "E8.1", title: "Static Equilibrium Problem for Physics of a Person Climbing a Ladder" }
        ],
        description: "Conditions for rotational and translational equilibrium in static systems."
    },
    { 
        id: 502, 
        title: "Rotational Kinetic Energy", 
        x: 2100, 
        y: l4, 
        videos: [
            { number: "E14", title: "Rotational Kinetic Energy (part 1)" },
            { number: "E15", title: "Rotational Kinetic Energy (part 2)" },
            { number: "E15.1", title: "An example of an Atwood's Machine problem involving a pulley with non-negligible mass and with friction in its axle" }
        ],
        description: "Energy associated with rotational motion and its applications."
    },
    { 
        id: 505, 
        title: "Rotational Dynamics", 
        x: 1900, 
        y: l3, 
        videos: [
            { number: "E11", title: "Rotational Dynamics (Newton's Second Law in Rotational Motion)" },
            { number: "E12", title: "Rotational Dynamics (part 2)" },
            { number: "E13", title: "Rotational Dynamics (part 3)" }
        ],
        description: "Application of Newton's second law to rotational motion and torque analysis."
    },
    { 
        id: 501, 
        title: "Rotational Kinematics", 
        x: 2000, 
        y: l5, 
        videos: [
            { number: "E1", title: "Rotational Kinematics" },
            { number: "E2", title: "Rotational Kinematics (part 2)" },
            { number: "E3", title: "Rotational Kinematics (part 3)" }
        ],
        description: "Description of rotational motion using angular displacement, velocity, and acceleration."
    },
    { 
        id: 503, 
        title: "Angular Momentum", 
        x: 2100, 
        y: l3, 
        videos: [
            { number: "E16", title: "Angular Momentum" },
            { number: "E17", title: "Angular Momentum (part 2)" }
        ],
        description: "Conservation of angular momentum and its applications in rotational systems."
    },
    { 
        id: 506, 
        title: "Torque & Cross Product", 
        x: 1700, 
        y: l4, 
        videos: [
            { number: "E4", title: "Torque and the Cross-Product (or Vector Product)" },
            { number: "E5", title: "Torque and the Cross-Product (part 2)" },
            { number: "E6", title: "Torque and the Cross-Product (part 3)" }
        ],
        description: "Mathematical description of torque using vector cross products."
    },
    { 
        id: 504, 
        title: "Rotational Inertia", 
        x: 1900, 
        y: l4, 
        videos: [
            { number: "E9", title: "Rotational Inertia or Moment of Inertia" },
            { number: "E9.1", title: "Rotational Inertia for a Long Slender Rod" },
            { number: "E9.2", title: "Rotational Inertia for a Solid Disk" },
            { number: "E9.3", title: "Rotational Inertia for a Solid Cylinder" },
            { number: "E9.4", title: "Rotational Inertia for a Slender Rod of NON-UNIFORM mass density" },
            { number: "E9.5", title: "Rotational Inertia for a Solid Cylinder of NON-UNIFORM mass density" },
            { number: "E10", title: "The Parallel-Axis Theorem" }
        ],
        description: "Resistance to rotational motion and methods for calculating moment of inertia."
    },
  
    // Satellite Motion subtopics
    { 
        id: 601, 
        title: "Gravitational Force & Energy", 
        x: 2300, 
        y: l5, 
        videos: [
            { number: "F1", title: "The Gravitational Force" },
            { number: "F2", title: "Gravitational Potential Energy" },
            { number: "F3", title: "Gravitational Forces and Energies" }
        ],
        description: "Newton's law of universal gravitation and gravitational potential energy."
    },
    { 
        id: 602, 
        title: "Gravitational Fields & Circular Orbits", 
        x: 2300, 
        y: l4, 
        videos: [
            { number: "F4", title: "The Gravitational Field Strength" },
            { number: "F5", title: "Satellites in Circular Orbit" }
        ],
        description: "Gravitational field concepts and analysis of circular orbital motion."
    },
    { 
        id: 603, 
        title: "Kepler's Laws", 
        x: 2300, 
        y: l3, 
        videos: [
            { number: "F6", title: "Kepler's 3 Laws of Planetary Motion" }
        ],
        description: "The three fundamental laws governing planetary and satellite motion."
    },
    { 
        id: 604, 
        title: "Elliptical Orbits & Conservation", 
        x: 2500, 
        y: l4, 
        videos: [
            { number: "F7", title: "Elliptical Orbits and the Conservation of Energy" },
            { number: "F8", title: "Elliptical Orbits and the Conservation of Angular Momentum" }
        ],
        description: "Analysis of non-circular orbits using energy and angular momentum conservation."
    },
    { 
        id: 605, 
        title: "Escape Velocity & Binary Systems", 
        x: 2500, 
        y: l3, 
        videos: [
            { number: "F9", title: "Escape Velocity" },
            { number: "F10", title: "The Physics of Binary Star Systems" }
        ],
        description: "Minimum speed needed to escape gravitational influence and multi-body orbital systems."
    },
  
    // Periodic Motion subtopics
    { 
        id: 701, 
        title: "SHM Kinematics & Graphs", 
        x: 2700, 
        y: l4, 
        videos: [
            { number: "G1", title: "The Kinematics of Harmonic Motion (part 1): An Introduction into Harmonic Motion" },
            { number: "G2", title: "The Kinematics of Harmonic Motion (part 2)" },
            { number: "G3", title: "The Kinematics of Harmonic Motion (part 3)" }
        ],
        description: "Mathematical description of simple harmonic motion and its graphical representation."
    },
    { 
        id: 702, 
        title: "SHM Dynamics & Energy", 
        x: 2700, 
        y: l3, 
        videos: [
            { number: "G4", title: "The Dynamics of Simple Harmonic Motion (part 1)" },
            { number: "G5", title: "Energy Conservation and Simple Harmonic Motion" }
        ],
        description: "Forces causing harmonic motion and energy transformations in oscillating systems."
    },
    { 
        id: 704, 
        title: "Spring Systems", 
        x: 2900, 
        y: l3, 
        videos: [
            { number: "G6", title: "Harmonic Oscillator with a Crate on Top of a Crate" },
            { number: "G7", title: "Springs in Series and Parallel" },
            { number: "G11", title: "The Equivalence of a Vertical Mass on a Spring to a Horizontal Mass on a Spring" }
        ],
        description: "Analysis of spring-mass systems including equivalent spring constants and complex configurations."
    },
    { 
        id: 703, 
        title: "Pendulum Motion", 
        x: 2900, 
        y: l4, 
        videos: [
            { number: "G8", title: "The Period of a Simple Pendulum" },
            { number: "G9", title: "The Period of a Physical Pendulum" },
            { number: "G10", title: "The Period of a Physical Pendulum (part 2)" }
        ],
        description: "Oscillatory motion of pendulum systems and their period calculations."
    },

    // Growth & Decay subtopic
    { 
        id: 801, 
        title: "Air Resistance & Falling Objects", 
        x: 3200, 
        y: l3, 
        videos: [
            { number: "N1", title: "Objects Falling With Air Resistance" },
            { number: "N2", title: "Objects Falling With Air Resistance (part 2)" }
        ],
        description: "Analysis of motion when air resistance creates velocity-dependent forces."
    },
  ];
  
export const connections = [
    // topics → root - spread out more to avoid overlap
    { from: 1, to: 0, offset: -70},
    { from: 2, to: 0, offset: -50},
    { from: 3, to: 0, offset: -30},
    { from: 4, to: 0, offset: -10},
    { from: 5, to: 0, offset: 10},
    { from: 6, to: 0, offset: 30},
    { from: 7, to: 0, offset: 50},
    { from: 8, to: 0, offset: 70},
  
    // subtopics → topics (connections only go upwards)
    // Kinematics connections
    { from: 103, to: 1, offset: -10 },
    { from: 105, to: 1, offset: 10 },
    { from: 101, to: 102, offset:  0},
    { from: 102, to: 103, offset:  0},
    { from: 104, to: 105, offset:  0},

    // Newton's Laws connections
    { from: 201, to: 202, offset: 0 },
    { from: 202, to: 204, offset: 0 },
    { from: 203, to: 2, offset: 10 },
    { from: 204, to: 2, offset: -10 },
    

    // Work, Energy, Power connections
    { from: 304, to: 3, offset: 10 },
    { from: 303, to: 3, offset: -10 },
    { from: 302, to: 303, offset: 0 },
    { from: 301, to: 303, offset: 0 },

    // Momentum & Impulse connections
    { from: 401, to: 402, offset: 0 },
    { from: 402, to: 4, offset: 0 },

    // Rotational Motion connections
    { from: 507, to: 5, offset: -20 },
    { from: 505, to: 5, offset: 0 },
    { from: 503, to: 5, offset: 20 },
    { from: 506, to: 507, offset: 0 },
    { from: 504, to: 505, offset: 0 },
    { from: 502, to: 503, offset: 0 },
    { from: 501, to: 504, offset: 0 },
    { from: 501, to: 502, offset: 0 },


    // Satellite Motion connections
    { from: 603, to: 6, offset: -10 },
    { from: 605, to: 6, offset: 10 },
    { from: 601, to: 602, offset: 0 },
    { from: 602, to: 603, offset: 0 },
    { from: 604, to: 605, offset: 0 },

    // Periodic Motion connections
    { from: 704, to: 7, offset: 10 },
    { from: 702, to: 7, offset: -10 },
    { from: 701, to: 702, offset: 0 },
    { from: 703, to: 704, offset: 0 },

    // Growth & Decay connections
    { from: 801, to: 8, offset: 0 },
  ];