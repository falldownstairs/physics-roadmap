module.exports = {
  id: "502",
  courseId: "electricity-magnetism",
  topicId: "dc-circuits",
  title: "Power & EMF",
  estimatedTime: "20 minutes",
  videos: [
    {
      videoId: "t1n5RRO3VyM",
      videoTitle: "Power Dissipated in a Resistor",
      questions: [
        {
          type: 'multiple-choice',
          question: "The power $P$ dissipated in a resistor can be calculated using:",
          options: [
            "$P = IV$ only",
            "$P = I^2R$ only",
            "$P = V^2/R$ only",
            "$P = IV = I^2R = V^2/R$ (all equivalent)"
          ],
          correctAnswer: 3,
          explanation: "Power in resistor (three equivalent forms):\n\n$$P = IV = I^2R = \\frac{V^2}{R}$$\n\nDerivation: $P = IV$ (energy per time), then use Ohm's Law:\n- $V = IR$ gives $P = I(IR) = I^2R$\n- $I = V/R$ gives $P = (V/R)V = V^2/R$\n\nUnits: watt (W) = joule/second\n\nEnergy dissipated as heat."
        },
        {
          type: 'math-input',
          question: "A 100 Ω resistor carries current 0.50 A. Calculate the power dissipated (in watts).",
          mathAnswer: "25",
          answerRange: 1,
          explanation: "Using $P = I^2R$:\n\n$$P = (0.50)^2(100) = (0.25)(100) = 25 \\text{ W}$$\n\nOr using $V = IR = (0.50)(100) = 50$ V:\n\n$$P = IV = (0.50)(50) = 25 \\text{ W}$$"
        }
      ]
    },
    {
      videoId: "LfEG5Az-Rmg",
      videoTitle: "Terminal Voltage of a Battery and Internal Resistance",
      questions: [
        {
          type: 'multiple-choice',
          question: "A real battery with EMF $\\mathcal{E}$ and internal resistance $r$ delivers terminal voltage $V$ when current $I$ flows. The relationship is:",
          options: [
            "$V = \\mathcal{E}$ (always equal to EMF)",
            "$V = \\mathcal{E} + Ir$ (increases with current)",
            "$V = \\mathcal{E} - Ir$ (decreases with current)",
            "$V = I(\\mathcal{E} - r)$"
          ],
          correctAnswer: 2,
          explanation: "Terminal voltage with internal resistance:\n\n$$V = \\mathcal{E} - Ir$$\n\nwhere:\n- $\\mathcal{E}$ = EMF (electromotive force, ideal voltage)\n- $r$ = internal resistance\n- $Ir$ = voltage drop across internal resistance\n\nKey points:\n- $V < \\mathcal{E}$ when current flows\n- $V = \\mathcal{E}$ only when $I = 0$ (open circuit)\n- Larger current → more voltage drop"
        },
        {
          type: 'math-input',
          question: "A battery has EMF 12 V and internal resistance 0.50 Ω. When it delivers 2.0 A, calculate the terminal voltage (in volts).",
          mathAnswer: "11",
          answerRange: 0.5,
          explanation: "Using $V = \\mathcal{E} - Ir$:\n\n$$V = 12 - (2.0)(0.50)$$\n\n$$V = 12 - 1.0 = 11 \\text{ V}$$\n\nThe 1.0 V drop is dissipated in the battery's internal resistance."
        }
      ]
    },
    {
      videoId: "out4WZvdrKA",
      videoTitle: "Maximum Power Delivered by a Source with Internal Resistance",
      questions: [
        {
          type: 'multiple-choice',
          question: "For a battery with internal resistance $r$ connected to external load $R$, maximum power is delivered to the load when:",
          options: [
            "$R = 0$ (short circuit)",
            "$R = r$ (matched impedance)",
            "$R \\to \\infty$ (open circuit)",
            "$R = 2r$"
          ],
          correctAnswer: 1,
          explanation: "Maximum power transfer theorem:\n\nPower to load: $P = I^2R$ where $I = \\mathcal{E}/(R + r)$\n\n$$P = \\frac{\\mathcal{E}^2 R}{(R + r)^2}$$\n\nTo maximize, take $dP/dR = 0$:\n\n$$R = r$$\n\nAt $R = r$:\n- Half the power goes to load\n- Half dissipated in internal resistance\n- Efficiency = 50%"
        }
      ]
    }
  ]
};
