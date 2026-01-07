module.exports = {
  id: "201",
  courseId: "electricity-magnetism",
  topicId: "gauss-law",
  title: "Electric Flux Basics",
  estimatedTime: "15 minutes",
  videos: [
    {
      videoId: "ZHulB3-d4Ro",
      videoTitle: "An Introduction to Electric Flux (part 1)",
      questions: [
        {
          type: 'multiple-choice',
          question: "Electric flux through a surface is defined as:",
          options: [
            "The number of electric field lines passing through the surface",
            "The dot product of the electric field and the area vector: $\\Phi_E = \\vec{E} \\cdot \\vec{A}$",
            "The magnitude of the electric field at the surface",
            "The charge enclosed by the surface"
          ],
          correctAnswer: 1,
          explanation: "$\\text{Electric flux}$ ($\\Phi_E$) measures how much electric field passes through a surface:\n\n$$\\Phi_E = \\vec{E} \\cdot \\vec{A} = EA\\cos\\theta$$\n\nwhere:\n- $\\vec{E}$ is the electric field\n- $\\vec{A}$ is the area vector (perpendicular to the surface)\n- $\\theta$ is the angle between $\\vec{E}$ and $\\vec{A}$\n\nMaximum flux occurs when the field is $\\text{perpendicular}$ to the surface ($\\theta = 0°$), and zero flux when parallel ($\\theta = 90°$)."
        },
        {
          type: 'math-input',
          question: "A uniform electric field of magnitude $E = 500$ N/C passes through a flat square surface of area $A = 0.04$ m² at an angle of $\\theta = 60°$ to the surface normal. Calculate the electric flux (in N·m²/C) through the surface.",
          mathAnswer: "10",
          answerRange: 0.5,
          explanation: "Electric flux is calculated using:\n\n$$\\Phi_E = EA\\cos\\theta$$\n\nSubstituting values:\n\n$$\\Phi_E = (500)(0.04)\\cos(60°)$$\n\n$$\\Phi_E = (20)(0.5) = 10 \\text{ N·m}^2\\text{/C}$$\n\nNote: The angle is measured between the field and the $\\text{normal}$ to the surface."
        }
      ]
    },
    {
      videoId: "qy4w_Yxg5EY",
      videoTitle: "An Introduction to Electric Flux (part 2)",
      questions: [
        {
          type: 'multiple-choice',
          question: "For a closed surface in a uniform electric field with no charges inside, the net electric flux through the surface is:",
          options: [
            "Maximum at the top of the surface",
            "Equal to $EA$ where $A$ is the total surface area",
            "Zero",
            "Dependent on the shape of the surface"
          ],
          correctAnswer: 2,
          explanation: "For a $\\text{closed surface}$ with no enclosed charge, the net flux is $\\text{zero}$:\n\n$$\\Phi_{\\text{net}} = \\oint \\vec{E} \\cdot d\\vec{A} = 0$$\n\nField lines that enter the surface must exit it. The flux entering (negative) exactly cancels the flux exiting (positive).\n\nThis is true regardless of the shape of the surface or the uniformity of the field, as long as no charge is enclosed."
        }
      ]
    },
    {
      videoId: "QNIJC1emss8",
      videoTitle: "An Introduction to Gauss's Law",
      questions: [
        {
          type: 'multiple-choice',
          question: "$\\text{Gauss's Law}$ states that the net electric flux through a closed surface is proportional to:",
          options: [
            "The electric field strength at the surface",
            "The area of the surface",
            "The charge enclosed by the surface",
            "The distance from the charge to the surface"
          ],
          correctAnswer: 2,
          explanation: "$\\text{Gauss's Law}$ is one of the fundamental equations of electromagnetism:\n\n$$\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{\\text{enc}}}{\\epsilon_0}$$\n\nKey insights:\n- The net flux depends $\\text{only}$ on the enclosed charge $Q_{\\text{enc}}$\n- Charges outside the surface contribute zero net flux\n- The shape and size of the surface don't affect the relationship\n- $\\epsilon_0 = 8.85 \\times 10^{-12}$ C²/(N·m²) is the permittivity of free space"
        },
        {
          type: 'math-input',
          question: "A point charge of $Q = 5.0 \\times 10^{-9}$ C is enclosed by a spherical surface. Calculate the net electric flux (in N·m²/C) through the surface. (Use $\\epsilon_0 = 8.85 \\times 10^{-12}$ C²/(N·m²))",
          mathAnswer: "565",
          answerRange: 10,
          explanation: "Using Gauss's Law:\n\n$$\\Phi_E = \\frac{Q_{\\text{enc}}}{\\epsilon_0}$$\n\n$$\\Phi_E = \\frac{5.0 \\times 10^{-9}}{8.85 \\times 10^{-12}}$$\n\n$$\\Phi_E \\approx 565 \\text{ N·m}^2\\text{/C}$$\n\nNotice the flux is $\\text{independent}$ of the sphere's radius—it depends only on the enclosed charge."
        }
      ]
    }
  ]
};
