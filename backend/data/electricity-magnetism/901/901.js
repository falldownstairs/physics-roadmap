module.exports = {
  id: "901",
  courseId: "electricity-magnetism",
  topicId: "em-induction",
  title: "Faraday's Law Basics",
  estimatedTime: "25 minutes",
  videos: [
    {
      videoId: "fJjVxR2fynk",
      videoTitle: "Induced EMF and Magnetic Flux",
      questions: [
        {
          type: 'multiple-choice',
          question: "Magnetic flux $\\Phi_B$ through a loop of area $A$ in magnetic field $\\vec{B}$ is defined as:",
          options: [
            "$\\Phi_B = BA\\sin\\theta$",
            "$\\Phi_B = BA\\cos\\theta$ where $\\theta$ is angle between $\\vec{B}$ and normal to loop",
            "$\\Phi_B = B/A$",
            "$\\Phi_B = BA^2$"
          ],
          correctAnswer: 1,
          explanation: "Magnetic flux:\n\n$$\\Phi_B = \\vec{B} \\cdot \\vec{A} = BA\\cos\\theta$$\n\nwhere $\\theta$ is angle between $\\vec{B}$ and area vector $\\vec{A}$ (normal to loop).\n\nUnits: weber (Wb) = T·m²\n\nMaximum flux: $\\theta = 0°$ (field $\\perp$ to loop)\n\nZero flux: $\\theta = 90°$ (field $\\parallel$ to loop)\n\nFor multiple turns: $\\Phi_B = NBA\\cos\\theta$"
        },
        {
          type: 'math-input',
          question: "A circular loop of radius 0.10 m has its plane perpendicular to a 0.50 T magnetic field. Calculate the magnetic flux (in webers) through the loop. (Use $\\pi \\approx 3.14$)",
          mathAnswer: "0.0157",
          answerRange: 0.001,
          explanation: "Area: $A = \\pi r^2 = 3.14(0.10)^2 = 0.0314$ m²\n\nPerpendicular ($\\theta = 0°$, $\\cos 0° = 1$):\n\n$$\\Phi_B = BA = (0.50)(0.0314) = 0.0157 \\text{ Wb}$$"
        }
      ]
    },
    {
      videoId: "JSWOIxanzPU",
      videoTitle: "Faraday's Law of Induction",
      questions: [
        {
          type: 'multiple-choice',
          question: "Faraday's Law states that the induced EMF in a loop is:",
          options: [
            "$\\mathcal{E} = -\\frac{d\\Phi_B}{dt}$ (rate of change of magnetic flux)",
            "$\\mathcal{E} = \\Phi_B/t$",
            "$\\mathcal{E} = -N\\Phi_B$",
            "$\\mathcal{E} = B\\frac{dA}{dt}$ only"
          ],
          correctAnswer: 0,
          explanation: "Faraday's Law:\n\n$$\\mathcal{E} = -\\frac{d\\Phi_B}{dt}$$\n\nFor $N$ turns:\n\n$$\\mathcal{E} = -N\\frac{d\\Phi_B}{dt}$$\n\nNegative sign: Lenz's Law (direction opposes change)\n\nFlux can change by:\n- Changing $B$ field strength\n- Changing loop area $A$\n- Changing angle $\\theta$\n- Moving loop in/out of field"
        },
        {
          type: 'math-input',
          question: "The magnetic flux through a coil decreases from 0.60 Wb to 0.20 Wb in 0.10 s. Calculate the magnitude of the induced EMF (in volts).",
          mathAnswer: "4",
          answerRange: 0.2,
          explanation: "Using $|\\mathcal{E}| = |\\frac{\\Delta\\Phi_B}{\\Delta t}|$:\n\n$$|\\mathcal{E}| = \\frac{|0.20 - 0.60|}{0.10} = \\frac{0.40}{0.10} = 4.0 \\text{ V}$$\n\nInduced EMF opposes the flux decrease (Lenz's Law)."
        }
      ]
    },
    {
      videoId: "JbjMpe-HoUY",
      videoTitle: "Lenz's Law",
      questions: [
        {
          type: 'multiple-choice',
          question: "Lenz's Law states that the direction of induced current is such that:",
          options: [
            "It enhances the change in magnetic flux",
            "It opposes the change in magnetic flux",
            "It creates maximum power",
            "It flows in a random direction"
          ],
          correctAnswer: 1,
          explanation: "Lenz's Law:\n\nInduced current creates magnetic field that $\\text{opposes}$ the change in flux.\n\nExamples:\n- Flux increasing → induced field opposes increase (opposite direction)\n- Flux decreasing → induced field opposes decrease (same direction)\n\nThis is why Faraday's Law has negative sign: $\\mathcal{E} = -\\frac{d\\Phi_B}{dt}$\n\nConsequence of energy conservation (can't get free energy!)."
        }
      ]
    }
  ]
};
