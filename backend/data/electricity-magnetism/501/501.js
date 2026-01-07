module.exports = {
  id: "501",
  courseId: "electricity-magnetism",
  topicId: "dc-circuits",
  title: "Current & Resistance",
  estimatedTime: "25 minutes",
  videos: [
    {
      videoId: "-KM5bq0O48o",
      videoTitle: "Current and the Motion of Charge Carriers",
      questions: [
        {
          type: 'multiple-choice',
          question: "Electric current $I$ is defined as:",
          options: [
            "The total charge in a conductor",
            "The rate of charge flow: $I = dQ/dt$",
            "The velocity of electrons in the wire",
            "The energy per unit charge"
          ],
          correctAnswer: 1,
          explanation: "Current definition:\n\n$$I = \\frac{dQ}{dt}$$\n\nUnits: ampere (A) = coulomb/second\n\nFor steady current: $I = Q/t$\n\nDirection: By convention, current flows in direction of $\\text{positive}$ charge motion (opposite to electron flow).\n\nNote: 1 A = $6.25 \\times 10^{18}$ electrons/second."
        },
        {
          type: 'math-input',
          question: "A wire carries a steady current of 2.5 A. Calculate the total charge (in coulombs) that flows through a cross-section in 4.0 seconds.",
          mathAnswer: "10",
          answerRange: 0.5,
          explanation: "Using $Q = It$:\n\n$$Q = (2.5)(4.0) = 10 \\text{ C}$$\n\nAlternatively, from $I = Q/t$:\n\n$$Q = It$$"
        }
      ]
    },
    {
      videoId: "bK-9U-9eW_Y",
      videoTitle: "Current Density and Drift Velocity",
      questions: [
        {
          type: 'multiple-choice',
          question: "The drift velocity $v_d$ of electrons in a conductor is related to current density $J$ by:",
          options: [
            "$J = nev_d$ where $n$ is charge carrier density",
            "$v_d = I/A$ where $A$ is cross-sectional area",
            "$J = v_d/ne$",
            "Drift velocity equals speed of light"
          ],
          correctAnswer: 0,
          explanation: "Current density: $J = I/A$ (current per unit area)\n\nRelationship to drift velocity:\n\n$$J = nev_d$$\n\nwhere:\n- $n$ = number density of charge carriers (m⁻³)\n- $e$ = elementary charge\n- $v_d$ = drift velocity (typically mm/s, very slow!)\n\nCombining: $I = JA = nev_dA$"
        }
      ]
    },
    {
      videoId: "992C2VEUzr8",
      videoTitle: "Resistance and Resistivity",
      questions: [
        {
          type: 'multiple-choice',
          question: "Ohm's Law states that for an ohmic conductor:",
          options: [
            "$V = IR$ (voltage proportional to current)",
            "$I = V/R$ (current inversely proportional to resistance)",
            "$R = V/I$ (resistance is ratio of voltage to current)",
            "All of the above are equivalent"
          ],
          correctAnswer: 3,
          explanation: "Ohm's Law (three equivalent forms):\n\n$$V = IR, \\quad I = \\frac{V}{R}, \\quad R = \\frac{V}{I}$$\n\nResistance units: ohm ($\\Omega$) = volt/ampere\n\n$\\text{Ohmic}$ materials: $R$ is constant (independent of $V$ or $I$).\n\n$\\text{Non-ohmic}$: $R$ depends on $V$ (diodes, transistors, etc.)."
        },
        {
          type: 'math-input',
          question: "A resistor has resistance 150 Ω and carries current 0.20 A. Calculate the voltage (in volts) across the resistor.",
          mathAnswer: "30",
          answerRange: 1,
          explanation: "Using $V = IR$:\n\n$$V = (0.20)(150) = 30 \\text{ V}$$"
        }
      ]
    },
    {
      videoId: "yaa09qMshOc",
      videoTitle: "Calculating the Resistance of a Wire Using Resistivity",
      questions: [
        {
          type: 'multiple-choice',
          question: "The resistance $R$ of a wire with length $L$, cross-sectional area $A$, and resistivity $\\rho$ is:",
          options: [
            "$R = \\rho LA$",
            "$R = \\frac{\\rho A}{L}$",
            "$R = \\frac{\\rho L}{A}$",
            "$R = \\frac{\\rho}{LA}$"
          ],
          correctAnswer: 2,
          explanation: "Resistance of a wire:\n\n$$R = \\frac{\\rho L}{A}$$\n\nResistivity $\\rho$ (Ω·m) is material property:\n- Conductors: $\\rho \\sim 10^{-8}$ Ω·m (copper: $1.7 \\times 10^{-8}$)\n- Insulators: $\\rho \\sim 10^{16}$ Ω·m\n\n$R$ increases with:\n- Longer wire (more $L$)\n- Thinner wire (smaller $A$)\n- Higher resistivity"
        },
        {
          type: 'math-input',
          question: "A copper wire has length 2.0 m, diameter 1.0 mm, and resistivity $\\rho = 1.7 \\times 10^{-8}$ Ω·m. Calculate the resistance (in ohms). (Use $A = \\pi r^2$)",
          mathAnswer: "0.043",
          answerRange: 0.003,
          explanation: "Area: $A = \\pi r^2 = \\pi(0.5 \\times 10^{-3})^2 = \\pi(0.25 \\times 10^{-6}) \\approx 7.85 \\times 10^{-7}$ m²\n\nUsing $R = \\frac{\\rho L}{A}$:\n\n$$R = \\frac{(1.7 \\times 10^{-8})(2.0)}{7.85 \\times 10^{-7}}$$\n\n$$R = \\frac{3.4 \\times 10^{-8}}{7.85 \\times 10^{-7}} \\approx 0.043 \\,\\Omega$$"
        }
      ]
    }
  ]
};
