module.exports = {
  id: "702",
  courseId: "electricity-magnetism",
  topicId: "magnetic-forces",
  title: "Force on Current-Carrying Wire",
  estimatedTime: "20 minutes",
  videos: [
    {
      videoId: "_fbhcdS328c",
      videoTitle: "The Magnetic Force on a Current-Carrying Wire",
      questions: [
        {
          type: 'multiple-choice',
          question: "The magnetic force on a straight wire of length $L$ carrying current $I$ in magnetic field $\\vec{B}$ is:",
          options: [
            "$\\vec{F} = I\\vec{L} \\times \\vec{B}$",
            "$\\vec{F} = \\frac{I\\vec{B}}{L}$",
            "$F = BIL$ always",
            "Both A and C (depending on angle)"
          ],
          correctAnswer: 3,
          explanation: "Force on current-carrying wire:\n\n$$\\vec{F} = I\\vec{L} \\times \\vec{B}$$\n\nwhere $\\vec{L}$ points in direction of current.\n\nMagnitude: $F = BIL\\sin\\theta$\n\nFor $\\perp$ orientation ($\\theta = 90°$): $F = BIL$\n\nDirection: Right-hand rule\n- Point fingers along current $I$\n- Curl toward $\\vec{B}$\n- Thumb points along $\\vec{F}$"
        },
        {
          type: 'math-input',
          question: "A 0.50 m wire carries 3.0 A perpendicular to a 0.40 T magnetic field. Calculate the magnetic force (in newtons) on the wire.",
          mathAnswer: "0.6",
          answerRange: 0.05,
          explanation: "Using $F = BIL$ (perpendicular orientation):\n\n$$F = (0.40)(3.0)(0.50)$$\n\n$$F = 0.60 \\text{ N}$$\n\nDirection: perpendicular to both current and field (right-hand rule)."
        }
      ]
    },
    {
      videoId: "NfDQFtY1n8E",
      videoTitle: "Torque on a Current Loop in a Magnetic Field",
      questions: [
        {
          type: 'multiple-choice',
          question: "A rectangular current loop with area $A$ and current $I$ in a uniform magnetic field $\\vec{B}$ experiences maximum torque when:",
          options: [
            "Loop plane is parallel to $\\vec{B}$ (normal $\\perp$ to $\\vec{B}$)",
            "Loop plane is perpendicular to $\\vec{B}$ (normal $\\parallel$ to $\\vec{B}$)",
            "Current is zero",
            "Magnetic field is zero"
          ],
          correctAnswer: 0,
          explanation: "Torque on current loop:\n\n$$\\vec{\\tau} = \\vec{\\mu} \\times \\vec{B}$$\n\nwhere $\\vec{\\mu} = IA\\hat{n}$ is magnetic dipole moment ($\\hat{n}$ = normal to loop).\n\nMagnitude: $\\tau = IAB\\sin\\theta$ where $\\theta$ is angle between $\\vec{\\mu}$ and $\\vec{B}$\n\nMaximum torque when $\\theta = 90°$ (loop plane $\\parallel$ to $\\vec{B}$)\n\nZero torque when $\\theta = 0°$ or $180°$ (equilibrium positions)"
        },
        {
          type: 'math-input',
          question: "A circular loop with 50 turns, radius 0.10 m, and current 2.0 A is perpendicular to a 0.30 T field. Calculate the maximum torque (in N·m) as it rotates. (Use $\\pi \\approx 3.14$)",
          mathAnswer: "0.942",
          answerRange: 0.05,
          explanation: "For $N$ turns: $\\tau_{\\text{max}} = NIAB$\n\nArea: $A = \\pi r^2 = 3.14(0.10)^2 = 0.0314$ m²\n\n$$\\tau = (50)(2.0)(0.0314)(0.30)$$\n\n$$\\tau = (50)(2.0)(0.00942) \\approx 0.942 \\text{ N·m}$$\n\nThis is the principle behind electric motors!"
        }
      ]
    },
    {
      videoId: "GVjWn_nbcwg",
      videoTitle: "The Magnetic Dipole Moment",
      questions: [
        {
          type: 'multiple-choice',
          question: "The potential energy $U$ of a magnetic dipole moment $\\vec{\\mu}$ in a magnetic field $\\vec{B}$ is:",
          options: [
            "$U = \\vec{\\mu} \\times \\vec{B}$",
            "$U = -\\vec{\\mu} \\cdot \\vec{B}$",
            "$U = |\\vec{\\mu}||\\vec{B}|$",
            "$U = \\mu B\\sin\\theta$"
          ],
          correctAnswer: 1,
          explanation: "Magnetic potential energy:\n\n$$U = -\\vec{\\mu} \\cdot \\vec{B} = -\\mu B\\cos\\theta$$\n\nwhere $\\theta$ is angle between $\\vec{\\mu}$ and $\\vec{B}$.\n\n- Minimum energy: $U = -\\mu B$ when $\\theta = 0°$ ($\\vec{\\mu} \\parallel \\vec{B}$, stable)\n- Maximum energy: $U = +\\mu B$ when $\\theta = 180°$ ($\\vec{\\mu}$ antiparallel to $\\vec{B}$, unstable)\n- Zero energy: $\\theta = 90°$\n\nAnalogous to electric dipole in electric field!"
        }
      ]
    }
  ]
};
