const l1 = 100;    // Course level (root)
const l2 = 500;    // Main topics
const l3 = 800;    // Intermediate subtopics
const l4 = 1100;   // Lower subtopics
const l5 = 1400;   // Deepest subtopics

export const courseData = [
    // Root course node
    { 
        id: 0, 
        type: 'root' as const,
        title: "Electricity & Magnetism", 
        x: 2200, 
        y: l1, 
        videos: [],
        description: "The study of electric charges, electric and magnetic fields, circuits, and electromagnetic phenomena including induction and inductance."
    },
  
    // Main topic nodes (10 topics, spread across x-axis like mechanics)
    { 
        id: 1, 
        type: 'topic' as const,
        title: "Electric Charge & Field", 
        x: 400, 
        y: l2, 
        videos: [
            { number: "I10", title: "Unit I Review of Electrostatics (part 1)" },
            { number: "I11", title: "Unit I Review of Electrostatics (part 2)" },
            { number: "I12", title: "Unit I Review of Electrostatics (part 3)" }
        ],
        practiceProblems: "Practice problems coming soon",
        description: "The fundamental concepts of electric charge, Coulomb's law, and electric fields from point charges and continuous distributions."
    },
    { 
        id: 2, 
        type: 'topic' as const,
        title: "Gauss's Law", 
        x: 800, 
        y: l2, 
        videos: [],
        practiceProblems: "Practice problems coming soon",
        description: "Using Gauss's law to calculate electric fields for symmetric charge distributions through the concept of electric flux."
    },
    { 
        id: 3, 
        type: 'topic' as const,
        title: "Electric Potential", 
        x: 1200, 
        y: l2, 
        videos: [
            { number: "K8", title: "Review for Unit K (part 1)" },
            { number: "K9", title: "Review for Unit K (part 2)" },
            { number: "K10", title: "Review for Unit K (part 3)" }
        ],
        practiceProblems: "Practice problems coming soon",
        description: "The concepts of electric potential energy, potential difference, and voltage in electrostatic systems."
    },
    { 
        id: 4, 
        type: 'topic' as const,
        title: "Capacitance", 
        x: 1600, 
        y: l2, 
        videos: [
            { number: "L9", title: "Review of Unit L. Capacitance" },
            { number: "L10", title: "Review Unit L. Capacitance (part 2)" },
            { number: "L11", title: "Review Unit L. Capacitance (part 3)" },
            { number: "L12", title: "Review Unit L. Capacitance (part 4)" }
        ],
        practiceProblems: "Practice problems coming soon",
        description: "The study of capacitors, energy storage, and the effects of dielectric materials on capacitance."
    },
    { 
        id: 5, 
        type: 'topic' as const,
        title: "DC Circuits", 
        x: 2000, 
        y: l2, 
        videos: [
            { number: "M12", title: "Review for Unit M. DC Circuits (part 1)" },
            { number: "M13", title: "Review for Unit M. DC Circuits (part 2)" },
            { number: "M14", title: "Review for Unit M. DC Circuits (part 3)" },
            { number: "M15", title: "Review for Unit M. DC Circuits (part 4)" }
        ],
        practiceProblems: "Practice problems coming soon",
        description: "Analysis of direct current circuits using Kirchhoff's rules, resistance, and power concepts."
    },
    { 
        id: 6, 
        type: 'topic' as const,
        title: "RC Circuits", 
        x: 2400, 
        y: l2, 
        videos: [
            { number: "N5", title: "Review of Unit N (part 1)" },
            { number: "N6", title: "Review of Unit N (part 2)" }
        ],
        practiceProblems: "Practice problems coming soon",
        description: "The transient behavior of circuits containing resistors and capacitors, including charging and discharging processes."
    },
    { 
        id: 7, 
        type: 'topic' as const,
        title: "Magnetic Forces", 
        x: 2800, 
        y: l2, 
        videos: [
            { number: "O6", title: "Unit O Review (part 1)" },
            { number: "O7", title: "Unit O Review (part 2)" },
            { number: "O8", title: "Unit O Review (part 3)" },
            { number: "O9", title: "Unit O Review (part 4)" }
        ],
        practiceProblems: "Practice problems coming soon",
        description: "The forces experienced by moving charges and current-carrying wires in magnetic fields."
    },
    { 
        id: 8, 
        type: 'topic' as const,
        title: "Sources of B Fields", 
        x: 3200, 
        y: l2, 
        videos: [
            { number: "P16", title: "Unit P Review: Sources of Magnetic Fields (part 1)" },
            { number: "P17", title: "Unit P Review: Sources of Magnetic Fields (part 2)" }
        ],
        practiceProblems: "Practice problems coming soon",
        description: "The creation of magnetic fields by moving charges and currents, using Biot-Savart law and Ampere's law."
    },
    { 
        id: 9, 
        type: 'topic' as const,
        title: "EM Induction", 
        x: 3600, 
        y: l2, 
        videos: [
            { number: "Q14", title: "Unit Q Review on Electromagnetic Induction (part 1)" },
            { number: "Q15", title: "Unit Q Review on Electromagnetic Induction (part 2)" },
            { number: "Q16", title: "Unit Q Review on Electromagnetic Induction (part 3)" },
            { number: "Q17", title: "Unit Q Review on Electromagnetic Induction (part 4)" }
        ],
        practiceProblems: "Practice problems coming soon",
        description: "Faraday's law and Lenz's law describing how changing magnetic fields induce electric fields and currents."
    },
    { 
        id: 10, 
        type: 'topic' as const,
        title: "Inductance", 
        x: 4000, 
        y: l2, 
        videos: [
            { number: "R10", title: "Unit R Review for Inductance (part 1)" },
            { number: "R11", title: "Unit R Review for Inductance (part 2)" }
        ],
        practiceProblems: "Practice problems coming soon",
        description: "The properties of inductors, energy storage in magnetic fields, and RL and LC circuit behavior."
    },

    // ========== LESSON NODES ==========

    // Unit I: Electric Charge & Field lessons
    { 
        id: 101, 
        type: 'lesson' as const,
        title: "Charge Basics", 
        x: 300, 
        y: l5, 
        videos: [
            { number: "I1", title: "Types of Charge, Polarization of Charge, and Charging by Induction" }
        ],
        description: "Introduction to electric charge including types of charge, polarization, and methods of charging objects."
    },
    { 
        id: 102, 
        type: 'lesson' as const,
        title: "Coulomb's Law & E Fields", 
        x: 300, 
        y: l4, 
        videos: [
            { number: "I2", title: "Coulomb's Law, The Principle of Superposition, and Electric Fields" },
            { number: "I3", title: "Force due to an Electric Field on a Point Charge, Torque due to an Electric Field on a Set of Charges, Information from Electric Field Lines" }
        ],
        description: "Coulomb's law for electrostatic forces and the concept of electric fields from point charges."
    },
    { 
        id: 103, 
        type: 'lesson' as const,
        title: "Motion in E Fields", 
        x: 300, 
        y: l3, 
        videos: [
            { number: "I4", title: "The Motion of Particles in a Uniform Electric Field" },
            { number: "I5", title: "The Electric Field Due to 2 or More Charges" }
        ],
        description: "Analysis of charged particle motion in uniform electric fields and superposition of fields from multiple charges."
    },
    { 
        id: 104, 
        type: 'lesson' as const,
        title: "E Field from Distributions", 
        x: 500, 
        y: l3, 
        videos: [
            { number: "I6", title: "The Electric Field Due to a Straight Uniformly Charged Wire" },
            { number: "I7", title: "The Electric Field Due to a Straight Uniformly Charged Wire (part 2)" },
            { number: "I8", title: "Electric Field Due to a Ring of Charge" },
            { number: "I8.5", title: "Electric Field Due to a Disk of Charge" },
            { number: "I9", title: "Electric Field Due to a Semi-Circular Ring of Charge" }
        ],
        description: "Calculating electric fields from continuous charge distributions using integration techniques."
    },

    // Unit J: Gauss's Law lessons
    { 
        id: 201, 
        type: 'lesson' as const,
        title: "Electric Flux Basics", 
        x: 700, 
        y: l5, 
        videos: [
            { number: "J intro 1", title: "An Introduction to Electric Flux (part 1)" },
            { number: "J intro 2", title: "An Introduction to Electric Flux (part 2)" },
            { number: "J1", title: "An Introduction to Gauss's Law" }
        ],
        description: "The concept of electric flux and the fundamental statement of Gauss's law."
    },
    { 
        id: 202, 
        type: 'lesson' as const,
        title: "Gauss's Law Applications", 
        x: 700, 
        y: l4, 
        videos: [
            { number: "J2", title: "Gauss's Law (part 2) - Electric field due to a very long uniformly charged wire" },
            { number: "J3", title: "Finding the Electric Field for a Uniformly Charged Solid Sphere" },
            { number: "J4", title: "Conductors in Electrostatic Equilibrium" }
        ],
        description: "Applying Gauss's law to find electric fields for symmetric charge distributions."
    },
    { 
        id: 203, 
        type: 'lesson' as const,
        title: "Spherical & Cylindrical", 
        x: 700, 
        y: l3, 
        videos: [
            { number: "J5", title: "Gauss's Law and Concentric Spherical Shells" },
            { number: "J6", title: "Gauss's Law and Concentric Spherical Shells (part 2)" },
            { number: "J7", title: "Gauss's Law and Co-Axial Cables" },
            { number: "J8", title: "Gauss's Law and Co-Axial Cables (part 2)" }
        ],
        description: "Gauss's law applications to concentric spherical shells and coaxial cable configurations."
    },
    { 
        id: 204, 
        type: 'lesson' as const,
        title: "Planes & Non-Uniform", 
        x: 900, 
        y: l3, 
        videos: [
            { number: "J9", title: "Gauss's Law and the Electric Field Due to a Very Long and Wide Slab of Charge" },
            { number: "J10", title: "Gauss's Law and the Electric Field Due to a Very Long and Wide Plane of Charge" },
            { number: "J11", title: "Gauss's Law and the Electric Field Due to a Non-Uniformly Distributed Spherical Charge Density" },
            { number: "J12", title: "Gauss's Law and the Electric Field Due to a Non-Uniformly... (part 2)" },
            { number: "J13", title: "Gauss's Law and the Electric Field Due to a Non-Uniformly Charged Cylindrical Insulator" },
            { number: "J14", title: "Gauss's Law and the Electric Field Due to a Non-Uniformly Charged Cylindrical Insulator (part 2)" }
        ],
        description: "Advanced Gauss's law applications for planar geometries and non-uniform charge distributions."
    },

    // Unit K: Electric Potential lessons
    { 
        id: 301, 
        type: 'lesson' as const,
        title: "Potential Energy & Voltage", 
        x: 1100, 
        y: l5, 
        videos: [
            { number: "K1", title: "The electric potential energy of a system of 2 charges" },
            { number: "K2", title: "Potential, Potential Difference, and Voltage" }
        ],
        description: "Electric potential energy of charge systems and the concepts of potential and voltage."
    },
    { 
        id: 302, 
        type: 'lesson' as const,
        title: "Path Integrals", 
        x: 1100, 
        y: l4, 
        videos: [
            { number: "K3", title: "Potential Difference as a Path Integral" },
            { number: "K4", title: "Potential Difference as a Path Integral (part 2)" },
            { number: "K5", title: "Accelerating a Positive Charge from a Positively Charged Plate to a Negatively Charged Plate" }
        ],
        description: "Calculating potential differences using line integrals and work-energy relationships."
    },
    { 
        id: 303, 
        type: 'lesson' as const,
        title: "Conductors & Equilibrium", 
        x: 1100, 
        y: l3, 
        videos: [
            { number: "K6", title: "Conductors in Electrostatic Equilibrium (Revisited)" },
            { number: "K7", title: "Conductors in Electrostatic Equilibrium (Revisited... part 2)" }
        ],
        description: "Properties of conductors in electrostatic equilibrium and equipotential surfaces."
    },

    // Unit L: Capacitance lessons
    { 
        id: 401, 
        type: 'lesson' as const,
        title: "Capacitance Basics", 
        x: 1500, 
        y: l5, 
        videos: [
            { number: "L1", title: "The Basics of Capacitance" },
            { number: "L2", title: "The Basics of Capacitance (part 2)" },
            { number: "L3", title: "Energy Stored in a Capacitor" }
        ],
        description: "Fundamental concepts of capacitance, parallel plate capacitors, and energy storage."
    },
    { 
        id: 402, 
        type: 'lesson' as const,
        title: "Capacitor Configurations", 
        x: 1500, 
        y: l4, 
        videos: [
            { number: "L4", title: "Pulling the Plates of a Capacitor Apart When Connected or Disconnected From a Battery" },
            { number: "L5", title: "Capacitors Hooked Up in Series" },
            { number: "L6", title: "Capacitors Hooked Up in Parallel" }
        ],
        description: "Analysis of capacitors in series and parallel configurations and changing plate separation."
    },
    { 
        id: 403, 
        type: 'lesson' as const,
        title: "Dielectrics", 
        x: 1500, 
        y: l3, 
        videos: [
            { number: "L7", title: "Dielectrics in Capacitors (part 1)" },
            { number: "L8", title: "Dielectrics in Capacitors (part 2)" }
        ],
        description: "The effects of dielectric materials on capacitance and dielectric strength concepts."
    },

    // Unit M: DC Circuits lessons
    { 
        id: 501, 
        type: 'lesson' as const,
        title: "Current & Resistance", 
        x: 1900, 
        y: l5, 
        videos: [
            { number: "M1", title: "Current, Drift Velocity, and Current Density" },
            { number: "M2", title: "Resistivity, Resistance, and Conductivity" },
            { number: "M3", title: "Resistance" }
        ],
        description: "Fundamental concepts of electric current, drift velocity, resistance, and resistivity."
    },
    { 
        id: 502, 
        type: 'lesson' as const,
        title: "Kirchhoff's Rules", 
        x: 1900, 
        y: l4, 
        videos: [
            { number: "M4", title: "Kirchhoff's Junction Rule" },
            { number: "M5", title: "Kirchhoff's Loop Rule" },
            { number: "M6", title: "Voltage Analogy for Circuits" }
        ],
        description: "Kirchhoff's junction and loop rules for analyzing complex circuits."
    },
    { 
        id: 503, 
        type: 'lesson' as const,
        title: "Circuit Analysis", 
        x: 1900, 
        y: l3, 
        videos: [
            { number: "M7", title: "Derivation of Equivalent Resistance for Resistors in Series and Parallel Circuits" },
            { number: "M8", title: "Using Equivalent Resistance to Analyze a Simple Circuit" },
            { number: "M9", title: "Applying Kirchhoff's Rules to Circuits with Multiple Batteries" }
        ],
        description: "Techniques for analyzing circuits using equivalent resistance and Kirchhoff's rules."
    },
    { 
        id: 504, 
        type: 'lesson' as const,
        title: "Power & Bridge Circuits", 
        x: 2100, 
        y: l3, 
        videos: [
            { number: "M10", title: "Finding the External Resistor that will Yield the Maximum Power For a Battery with Internal Resistance" },
            { number: "M11", title: "Bridge Circuits" }
        ],
        description: "Maximum power transfer theorem and analysis of bridge circuit configurations."
    },

    // Unit N: RC Circuits lessons
    { 
        id: 601, 
        type: 'lesson' as const,
        title: "RC Circuit Concepts", 
        x: 2300, 
        y: l4, 
        videos: [
            { number: "N1", title: "RC circuits - Getting a Conceptual Grasp for RC Circuits" }
        ],
        description: "Conceptual understanding of how capacitors charge and discharge in RC circuits."
    },
    { 
        id: 602, 
        type: 'lesson' as const,
        title: "RC Circuit Math", 
        x: 2300, 
        y: l3, 
        videos: [
            { number: "N2", title: "Discharging a Capacitor in an RC Circuit (The Mathematics)" },
            { number: "N3", title: "Charging a Capacitor in an RC Circuit (The Mathematics)" },
            { number: "N4", title: "Time Constants for RC Circuits" }
        ],
        description: "Mathematical analysis of charging and discharging capacitors and time constant concepts."
    },

    // Unit O: Magnetic Forces lessons
    { 
        id: 701, 
        type: 'lesson' as const,
        title: "Force on Moving Charges", 
        x: 2700, 
        y: l5, 
        videos: [
            { number: "O1", title: "Force on a Charged Particle in a Magnetic Field" },
            { number: "O2", title: "Force on a Charged Particle in a Magnetic Field (part 2)" },
            { number: "O3", title: "Force on a Charged Particle in a Magnetic Field (part 3)" }
        ],
        description: "The magnetic force on moving charged particles and the right-hand rule."
    },
    { 
        id: 702, 
        type: 'lesson' as const,
        title: "Velocity Selectors", 
        x: 2700, 
        y: l4, 
        videos: [
            { number: "O4", title: "Charged Particle Moving in a Straight-Line Through Both an Electric Field and a Magnetic Field" }
        ],
        description: "Motion of charged particles through combined electric and magnetic fields."
    },
    { 
        id: 703, 
        type: 'lesson' as const,
        title: "Force on Current Wires", 
        x: 2700, 
        y: l3, 
        videos: [
            { number: "O5", title: "Force on a Current-Carrying Wire in a Magnetic Field and Torque on a Current Loop" }
        ],
        description: "Magnetic forces on current-carrying wires and torque on current loops in magnetic fields."
    },

    // Unit P: Sources of Magnetic Fields lessons
    { 
        id: 801, 
        type: 'lesson' as const,
        title: "B Field from Charges", 
        x: 3100, 
        y: l5, 
        videos: [
            { number: "P1", title: "The Direction of the Magnetic Field Created by a Current-Carrying Wire and a Moving Charge" },
            { number: "P2", title: "Calculating the Magnetic Field Strength Created by a Moving Charge" }
        ],
        description: "Direction and magnitude of magnetic fields produced by moving charges."
    },
    { 
        id: 802, 
        type: 'lesson' as const,
        title: "Biot-Savart Law", 
        x: 3100, 
        y: l4, 
        videos: [
            { number: "P3", title: "The Law of Biot-Savart" },
            { number: "P4", title: "An Application of the Law of Biot-Savart" }
        ],
        description: "Using the Biot-Savart law to calculate magnetic fields from current elements."
    },
    { 
        id: 803, 
        type: 'lesson' as const,
        title: "Ampere's Law Basics", 
        x: 3100, 
        y: l3, 
        videos: [
            { number: "P5", title: "An Introduction to Ampere's Law (part 1)" },
            { number: "P6", title: "An Introduction to Ampere's Law (part 2)" }
        ],
        description: "Introduction to Ampere's law and its application to current-carrying wires."
    },
    { 
        id: 804, 
        type: 'lesson' as const,
        title: "Ampere's Law Applications", 
        x: 3300, 
        y: l4, 
        videos: [
            { number: "P7", title: "Applications of Ampere's Law (part 1) - Inside a wire" },
            { number: "P8", title: "Applications of Ampere's Law (part 2) - Coaxial cable" },
            { number: "P9", title: "Applications of Ampere's Law (part 3) - Non-uniform current density" }
        ],
        description: "Applying Ampere's law to wires, coaxial cables, and non-uniform current distributions."
    },
    { 
        id: 805, 
        type: 'lesson' as const,
        title: "Solenoids & Toroids", 
        x: 3300, 
        y: l3, 
        videos: [
            { number: "P10", title: "The Magnetic Field Near the Center of a Solenoid (part 1)" },
            { number: "P11", title: "The Magnetic Field Near the Center of a Solenoid (part 2)" },
            { number: "P14", title: "The Magnetic Field Due to a Toroid" }
        ],
        description: "Magnetic fields inside solenoids and toroids using Ampere's law."
    },
    { 
        id: 806, 
        type: 'lesson' as const,
        title: "Wire Interactions", 
        x: 3300, 
        y: l5, 
        videos: [
            { number: "P12", title: "The Magnetic Field Due to Two Wires (Superposition)" },
            { number: "P13", title: "Force of One Current-Carrying Wire on Another" },
            { number: "P15", title: "The Magnetic Field on the Axis of a Current-Carrying Circular Hoop" }
        ],
        description: "Superposition of magnetic fields and forces between current-carrying wires."
    },

    // Unit Q: Electromagnetic Induction lessons
    { 
        id: 901, 
        type: 'lesson' as const,
        title: "Magnetic Flux", 
        x: 3500, 
        y: l5, 
        videos: [
            { number: "Q1", title: "Magnetic Flux (part 1)" },
            { number: "Q2", title: "Magnetic Flux (part 2)" },
            { number: "Q3", title: "Calculating the Magnetic Flux for a Non-Uniform Magnetic Field" }
        ],
        description: "The concept of magnetic flux and its calculation for uniform and non-uniform fields."
    },
    { 
        id: 902, 
        type: 'lesson' as const,
        title: "Faraday's Law", 
        x: 3500, 
        y: l4, 
        videos: [
            { number: "Q4", title: "Faraday's Law Basics (part 1)" },
            { number: "Q5", title: "Faraday's Law Basics (part 2)" },
            { number: "Q6", title: "Faraday's Law Basics (part 3)" }
        ],
        description: "Faraday's law relating changing magnetic flux to induced EMF."
    },
    { 
        id: 903, 
        type: 'lesson' as const,
        title: "Lenz's Law", 
        x: 3500, 
        y: l3, 
        videos: [
            { number: "Q7", title: "Lenz's Law: Finding the Direction of Induced Current (part 1)" },
            { number: "Q8", title: "Lenz's Law (part 2)" },
            { number: "Q9", title: "Lenz's Law (part 3)" }
        ],
        description: "Using Lenz's law to determine the direction of induced currents."
    },
    { 
        id: 904, 
        type: 'lesson' as const,
        title: "Motional EMF & Generators", 
        x: 3700, 
        y: l4, 
        videos: [
            { number: "Q10", title: "Motional EMF" },
            { number: "Q11", title: "The Generator" }
        ],
        description: "Motional EMF from moving conductors and the physics of electric generators."
    },
    { 
        id: 905, 
        type: 'lesson' as const,
        title: "Induced E Fields", 
        x: 3700, 
        y: l3, 
        videos: [
            { number: "Q12", title: "Faraday's Law and Induced Electric Fields (part 1)" },
            { number: "Q13", title: "Faraday's Law and Induced Electric Fields (part 2)" }
        ],
        description: "Electric fields induced by changing magnetic fields and their non-conservative nature."
    },

    // Unit R: Inductance lessons
    { 
        id: 1001, 
        type: 'lesson' as const,
        title: "Inductance Basics", 
        x: 3900, 
        y: l5, 
        videos: [
            { number: "R1", title: "Inductance Basics part 1" },
            { number: "R2", title: "Inductance Basics part 2" },
            { number: "R3", title: "Energy Stored in an Inductor" }
        ],
        description: "Self-inductance, mutual inductance, and energy storage in magnetic fields."
    },
    { 
        id: 1002, 
        type: 'lesson' as const,
        title: "RL Circuits", 
        x: 3900, 
        y: l4, 
        videos: [
            { number: "R4", title: "The RL Circuit part 1" },
            { number: "R5", title: "The RL Circuit part 2" },
            { number: "R6", title: "Time Constants for RL Circuits" },
            { number: "R7", title: "An Example Inductance Problem" }
        ],
        description: "Transient behavior of RL circuits including time constants and energy dissipation."
    },
    { 
        id: 1003, 
        type: 'lesson' as const,
        title: "LC Circuits", 
        x: 3900, 
        y: l3, 
        videos: [
            { number: "R8", title: "The LC Circuit (part 1)" },
            { number: "R9", title: "The LC Circuit (part 2)" }
        ],
        description: "Oscillatory behavior of LC circuits and energy exchange between capacitors and inductors."
    },
];
  
export const connections = [
    // topics → root - spread out to avoid overlap (10 topics)
    { from: 1, to: 0, offset: -90 },
    { from: 2, to: 0, offset: -70 },
    { from: 3, to: 0, offset: -50 },
    { from: 4, to: 0, offset: -30 },
    { from: 5, to: 0, offset: -10 },
    { from: 6, to: 0, offset: 10 },
    { from: 7, to: 0, offset: 30 },
    { from: 8, to: 0, offset: 50 },
    { from: 9, to: 0, offset: 70 },
    { from: 10, to: 0, offset: 90 },
  
    // Unit I: Electric Charge & Field connections
    { from: 101, to: 102, offset: 0 },
    { from: 102, to: 103, offset: 0 },
    { from: 103, to: 1, offset: -10 },
    { from: 104, to: 1, offset: 10 },

    // Unit J: Gauss's Law connections
    { from: 201, to: 202, offset: 0 },
    { from: 202, to: 203, offset: 0 },
    { from: 203, to: 2, offset: -10 },
    { from: 204, to: 2, offset: 10 },

    // Unit K: Electric Potential connections
    { from: 301, to: 302, offset: 0 },
    { from: 302, to: 303, offset: 0 },
    { from: 303, to: 3, offset: 0 },

    // Unit L: Capacitance connections
    { from: 401, to: 402, offset: 0 },
    { from: 402, to: 403, offset: 0 },
    { from: 403, to: 4, offset: 0 },

    // Unit M: DC Circuits connections
    { from: 501, to: 502, offset: 0 },
    { from: 502, to: 503, offset: 0 },
    { from: 503, to: 5, offset: -10 },
    { from: 504, to: 5, offset: 10 },

    // Unit N: RC Circuits connections
    { from: 601, to: 602, offset: 0 },
    { from: 602, to: 6, offset: 0 },

    // Unit O: Magnetic Forces connections
    { from: 701, to: 702, offset: 0 },
    { from: 702, to: 703, offset: 0 },
    { from: 703, to: 7, offset: 0 },

    // Unit P: Sources of B Fields connections
    { from: 801, to: 802, offset: 0 },
    { from: 802, to: 803, offset: 0 },
    { from: 803, to: 8, offset: -10 },
    { from: 805, to: 8, offset: 10 },
    { from: 804, to: 805, offset: 0 },
    { from: 806, to: 804, offset: 0 },

    // Unit Q: EM Induction connections
    { from: 901, to: 902, offset: 0 },
    { from: 902, to: 903, offset: 0 },
    { from: 903, to: 9, offset: -10 },
    { from: 905, to: 9, offset: 10 },
    { from: 904, to: 905, offset: 0 },

    // Unit R: Inductance connections
    { from: 1001, to: 1002, offset: 0 },
    { from: 1002, to: 1003, offset: 0 },
    { from: 1003, to: 10, offset: 0 },
];
