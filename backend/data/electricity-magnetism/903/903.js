module.exports = {
  id: "903",
  courseId: "electricity-magnetism",
  topicId: "em-induction",
  title: "Generators & Transformers",
  estimatedTime: "25 minutes",
  videos: [
    {
      videoId: "M0SRan7UW6k",
      videoTitle: "Electric Generators",
      questions: [
        {
          type: 'multiple-choice',
          question: "An electric generator converts mechanical energy to electrical energy by:",
          options: [
            "Static charges accumulating on plates",
            "Rotating a coil in a magnetic field to induce EMF",
            "Heating a wire to produce current",
            "Chemical reactions in batteries"
          ],
          correctAnswer: 1,
          explanation: "Electric generator principle:\n\n$\\text{Rotating coil in magnetic field:}$\n\nFlux: $\\Phi_B = NBA\\cos(\\omega t)$ where $\\omega$ = angular velocity\n\nInduced EMF:\n\n$$\\mathcal{E} = -\\frac{d\\Phi_B}{dt} = NBA\\omega\\sin(\\omega t) = \\mathcal{E}_0\\sin(\\omega t)$$\n\nProduces AC (alternating current) with:\n- Peak EMF: $\\mathcal{E}_0 = NBA\\omega$\n- Frequency: $f = \\omega/(2\\pi)$\n\nMechanical power input = electrical power output (minus losses)."
        },
        {
          type: 'math-input',
          question: "A generator coil has 200 turns, area 0.050 m², and rotates at 60 Hz in a 0.40 T field. Calculate the peak EMF (in volts). (Use $\\omega = 2\\pi f$, $\\pi \\approx 3.14$)",
          mathAnswer: "1507",
          answerRange: 50,
          explanation: "Peak EMF: $\\mathcal{E}_0 = NBA\\omega$\n\nAngular velocity: $\\omega = 2\\pi f = 2(3.14)(60) = 377$ rad/s\n\n$$\\mathcal{E}_0 = (200)(0.40)(0.050)(377)$$\n\n$$\\mathcal{E}_0 = (200)(0.40)(0.050)(377) \\approx 1507 \\text{ V}$$\n\nRMS voltage: $V_{\\text{rms}} = \\mathcal{E}_0/\\sqrt{2} \\approx 1066$ V"
        }
      ]
    },
    {
      videoId: "UVrwNIWlbcE",
      videoTitle: "Transformers",
      questions: [
        {
          type: 'multiple-choice',
          question: "An ideal transformer with primary turns $N_p$ and secondary turns $N_s$ has voltage relationship:",
          options: [
            "$\\frac{V_s}{V_p} = \\frac{N_p}{N_s}$",
            "$\\frac{V_s}{V_p} = \\frac{N_s}{N_p}$",
            "$V_s = V_p$ (voltages equal)",
            "$V_s V_p = N_s N_p$"
          ],
          correctAnswer: 1,
          explanation: "Transformer equations:\n\nVoltage ratio:\n\n$$\\frac{V_s}{V_p} = \\frac{N_s}{N_p}$$\n\nCurrent ratio (from power conservation):\n\n$$\\frac{I_s}{I_p} = \\frac{N_p}{N_s}$$\n\n$\\text{Step-up:}$ $N_s > N_p$ → $V_s > V_p$ (but $I_s < I_p$)\n\n$\\text{Step-down:}$ $N_s < N_p$ → $V_s < V_p$ (but $I_s > I_p$)\n\nPower: $P_s = P_p$ (ideal, 100% efficient)"
        },
        {
          type: 'math-input',
          question: "A transformer has 100 turns on the primary and 500 turns on the secondary. If the primary voltage is 120 V, calculate the secondary voltage (in volts).",
          mathAnswer: "600",
          answerRange: 10,
          explanation: "Using $\\frac{V_s}{V_p} = \\frac{N_s}{N_p}$:\n\n$$V_s = V_p\\frac{N_s}{N_p} = 120\\frac{500}{100}$$\n\n$$V_s = 120(5) = 600 \\text{ V}$$\n\nThis is a step-up transformer (increases voltage, decreases current)."
        }
      ]
    },
    {
      videoId: "cXmv2d1OeU4",
      videoTitle: "Power Transmission",
      questions: [
        {
          type: 'multiple-choice',
          question: "High-voltage power transmission is used because:",
          options: [
            "Higher voltage means more power",
            "Lower current at high voltage reduces $I^2R$ power loss in transmission lines",
            "High voltage is safer",
            "Transformers work better at high voltage"
          ],
          correctAnswer: 1,
          explanation: "Power transmission efficiency:\n\nPower transmitted: $P = VI$\n\nFor fixed power, higher voltage → lower current: $I = P/V$\n\nPower loss in wires: $P_{\\text{loss}} = I^2R$\n\n$$P_{\\text{loss}} = \\frac{P^2}{V^2}R \\propto \\frac{1}{V^2}$$\n\nDoubling voltage → $\\frac{1}{4}$ the power loss!\n\nTypical: Generate at 20 kV, transmit at 500 kV, step down for homes to 120/240 V."
        }
      ]
    }
  ]
};
