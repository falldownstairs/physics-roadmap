const l1 = 0;    // Course level
const l2 = 500;    // Main topics
const l3 = 800;    // Intermediate subtopics
const l4 = 1100;   // Lower subtopics
const l5 = 1400;   // Deepest subtopics
const l6 = 1700;   // Extra deep level

export const courseData = [
    // root - centered at top
    { id: 0, title: "Physics I", x: 1650, y: l1, completed: false, level: 'course' },
  
    // topics - arranged in a gentle arc
    { id: 1, title: "Kinematics", x: 400, y: l2, completed: true, level: 'topic' },
    { id: 2, title: "Dynamics", x: 800, y: l2 - 50, completed: false, level: 'topic' },
    { id: 3, title: "Work, Energy, Power", x: 1200, y: l2 - 80, completed: false, level: 'topic' },
    { id: 4, title: "Momentum", x: 1600, y: l2 - 100, completed: false, level: 'topic' },
    { id: 5, title: "Torque & Rotation", x: 2000, y: l2 - 80, completed: false, level: 'topic' },
    { id: 6, title: "Rot. Energy & Momentum", x: 2400, y: l2 - 50, completed: false, level: 'topic' },
    { id: 7, title: "Oscillations & Simple Harmonic Motion", x: 2800, y: l2, completed: false, level: 'topic' },
    { id: 8, title: "Fluids", x: 3200, y: l2 + 50, completed: false, level: 'topic' },
  
    // Unit 1: Kinematics subtopics - fan out from left
    { id: 103, title: "Scalars & Vectors in 2D", x: 300, y: l3, completed: true, level: 'subtopic' },
    { id: 104, title: "Reference Frames & Relative Motion", x: 500, y: l3, completed: false, level: 'subtopic' },
    { id: 101, title: "Scalars & Vectors in 1D", x: 200, y: l4, completed: false, level: 'subtopic' },
    { id: 105, title: "Motion Graphs", x: 400, y: l4, completed: false, level: 'subtopic' },
    { id: 102, title: "Displacement, Velocity, and Acceleration", x: 150, y: l5, completed: false, level: 'subtopic' },
  
    // Unit 2: Dynamics subtopics - clustered and flowing
    { id: 201, title: "Systems and Center of Mass", x: 800, y: l3, completed: false, level: 'subtopic' },
    { id: 206, title: "Gravitational Force", x: 600, y: l4, completed: false, level: 'subtopic' },
    { id: 202, title: "Free-Body Diagrams", x: 800, y: l4, completed: false, level: 'subtopic' },
    { id: 203, title: "Newton's 1st Law", x: 600, y: l5, completed: false, level: 'subtopic' },
    { id: 204, title: "Newton's 2nd Law", x: 800, y: l5, completed: false, level: 'subtopic' },
    { id: 205, title: "Newton's 3rd Law", x: 1000, y: l5, completed: false, level: 'subtopic' },
    { id: 207, title: "Friction Force", x: 900, y: l6, completed: false, level: 'subtopic' },
  
    // Unit 3: Work, Energy, Power subtopics - diamond formation
    { id: 302, title: "Work", x: 1100, y: l3, completed: false, level: 'subtopic' },
    { id: 304, title: "Conservation of Energy", x: 1300, y: l3, completed: false, level: 'subtopic' },
    { id: 305, title: "Power", x: 1050, y: l4, completed: false, level: 'subtopic' },
    { id: 301, title: "Kinetic Energy", x: 1300, y: l4, completed: false, level: 'subtopic' },
    { id: 303, title: "Potential Energy", x: 1200, y: l5, completed: false, level: 'subtopic' },
  
    // Unit 4: Momentum subtopics - centered under main topic
    { id: 402, title: "Impulse", x: 1500, y: l3, completed: false, level: 'subtopic' },
    { id: 403, title: "Conservation of Momentum", x: 1600, y: l4, completed: false, level: 'subtopic' },
    { id: 401, title: "Linear Momentum", x: 1500, y: l5, completed: false, level: 'subtopic' },
  
    // Unit 5: Torque & Rotation subtopics - spread symmetrically
    { id: 505, title: "Rotational Equilibrium", x: 1800, y: l3, completed: false, level: 'subtopic' },
    { id: 502, title: "Linear and Rotational Motion", x: 2000, y: l3, completed: false, level: 'subtopic' },
    { id: 506, title: "Newton's 2nd Law (Rotational Form)", x: 1900, y: l4, completed: false, level: 'subtopic' },
    { id: 501, title: "Rotational Kinematics", x: 2100, y: l4, completed: false, level: 'subtopic' },
    { id: 503, title: "Torque", x: 1800, y: l5, completed: false, level: 'subtopic' },
    { id: 504, title: "Rotational Inertia", x: 2000, y: l5, completed: false, level: 'subtopic' },
  
    // Unit 6: Rot. Energy & Momentum subtopics - flowing arrangement
    { id: 604, title: "Conservation of Angular Momentum", x: 2400, y: l3, completed: false, level: 'subtopic' },
    { id: 602, title: "Torque and Work", x: 2300, y: l4, completed: false, level: 'subtopic' },
    { id: 603, title: "Angular Momentum/Impulse", x: 2500, y: l4, completed: false, level: 'subtopic' },
    { id: 601, title: "Rotational Kinetic Energy", x: 2300, y: l5, completed: false, level: 'subtopic' },
  
    // Unit 7: Oscillations/Simple Harmonic Motion subtopics - fan arrangement
    { id: 703, title: "SHM Graphs", x: 2700, y: l3, completed: false, level: 'subtopic' },
    { id: 704, title: "SHM Energy", x: 2900, y: l3, completed: false, level: 'subtopic' },
    { id: 702, title: "Frequency & Period", x: 2800, y: l4, completed: false, level: 'subtopic' },
    { id: 701, title: "SMH Basics", x: 2700, y: l5, completed: false, level: 'subtopic' },
  
    // Unit 8: Fluids subtopics - compact cluster at the end
    { id: 804, title: "Fluids & Conservation", x: 3100, y: l3, completed: false, level: 'subtopic' },
    { id: 802, title: "Pressure", x: 3050, y: l4, completed: false, level: 'subtopic' },
    { id: 803, title: "Fluids & Forces", x: 3100, y: l5, completed: false, level: 'subtopic' },
    { id: 801, title: "Density", x: 3300, y: l5, completed: false, level: 'subtopic' },
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
  
    // subtopics → topics
    { from: 101, to: 103, offset: 0 },
  { from: 102, to: 101, offset: 0 },
  { from: 103, to: 1, offset: -20 },
  { from: 104, to: 1, offset: 20 },
  { from: 105, to: 1, offset: 0 },

  { from: 201, to: 2, offset: 0 },
  { from: 202, to: 201, offset: 0 },
  { from: 203, to: 202, offset: -20 },
  { from: 204, to: 202, offset: 0 },
  { from: 205, to: 202, offset: 40 },
  { from: 206, to: 2, offset: -20 },
  { from: 207, to: 202, offset: 20 },

  { from: 301, to: 304, offset: 20 },
  { from: 302, to: 3, offset: -20 },
  { from: 303, to: 304, offset: 0 },
  { from: 304, to: 3, offset: 0 },
  { from: 305, to: 302, offset: 0 },

  { from: 401, to: 403, offset: 0 },
  { from: 402, to: 4, offset: 20 },
  { from: 403, to: 4, offset: 40 },

  { from: 501, to: 502, offset: 0 },
  { from: 502, to: 5, offset: 20 },
  { from: 503, to: 505, offset: 20 },
  { from: 504, to: 506, offset: 0 },
  { from: 505, to: 5, offset: -20 },
  { from: 506, to: 5, offset: 0 },

  { from: 601, to: 602, offset: 0 },
  { from: 602, to: 6, offset: 0 },
  { from: 603, to: 604, offset: 20 },
  { from: 604, to: 6, offset: 20 },

  { from: 701, to: 702, offset: 0 },
  { from: 702, to: 703, offset: 0 },
  { from: 703, to: 7, offset: 0 },
  { from: 704, to: 7, offset: 20 },

  { from: 801, to: 804, offset: 40 },
  { from: 802, to: 804, offset: 0 },
  { from: 803, to: 802, offset: 0 },
  { from: 804, to: 8, offset: 0 },
  ];