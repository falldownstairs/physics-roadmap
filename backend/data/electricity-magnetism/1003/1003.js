module.exports = {
  id: "1003",
  courseId: "electricity-magnetism",
  topicId: "inductance",
  title: "RLC Circuits",
  estimatedTime: "25 minutes",
  videos: [
    {
      videoId: "Z85J5eW1C1A",
      videoTitle: "RLC Circuits - Damped Oscillations",
      questions: [
        {
          type: 'multiple-choice',
          question: "An RLC circuit (resistor, inductor, capacitor in series) exhibits:",
          options: [
            "Perpetual oscillations (like LC circuit)",
            "Damped oscillations that decay exponentially",
            "No oscillations (immediate decay)",
            "Growing oscillations"
          ],
          correctAnswer: 1,
          explanation: "RLC circuit behavior:\n\nCharge: $Q(t) = Q_0 e^{-Rt/(2L)}\\cos(\\omega' t)$\n\nDamped angular frequency:\n\n$$\\omega' = \\sqrt{\\frac{1}{LC} - \\left(\\frac{R}{2L}\\right)^2}$$\n\n$\\text{Underdamped}$ ($R$ small): Oscillates with exponential decay\n\n$\\text{Critically damped}$: Returns to equilibrium fastest (no oscillation)\n\n$\\text{Overdamped}$ ($R$ large): Slow return, no oscillation\n\nEnergy dissipated in resistor causes damping."
        }
      ]
    },
    {
      videoId: "aLu5SvgUz1I",
      videoTitle: "Damping in RLC Circuits",
      questions: [
        {
          type: 'multiple-choice',
          question: "The condition for critical damping in an RLC circuit is:",
          options: [
            "$R = 2\\sqrt{L/C}$",
            "$R = \\sqrt{L/C}$",
            "$R = L/C$",
            "$R = 0$"
          ],
          correctAnswer: 0,
          explanation: "Critical damping condition:\n\n$$R = 2\\sqrt{\\frac{L}{C}}$$\n\nOr equivalently: $\\omega' = 0$ where $\\omega' = \\sqrt{\\frac{1}{LC} - \\left(\\frac{R}{2L}\\right)^2}$\n\nThree regimes:\n- $R < 2\\sqrt{L/C}$: Underdamped (oscillates)\n- $R = 2\\sqrt{L/C}$: Critically damped (optimal)\n- $R > 2\\sqrt{L/C}$: Overdamped (slow)\n\nCritical damping: fastest return to equilibrium without oscillation."
        }
      ]
    },
    {
      videoId: "fqQ3-d0V4D0",
      videoTitle: "Driven RLC Circuits and Resonance",
      questions: [
        {
          type: 'multiple-choice',
          question: "In a driven RLC circuit (with AC source), resonance occurs when:",
          options: [
            "Resistance is zero",
            "Driving frequency equals natural frequency: $\\omega_d = 1/\\sqrt{LC}$",
            "Inductance equals capacitance",
            "Voltage equals current"
          ],
          correctAnswer: 1,
          explanation: "Resonance in driven RLC circuit:\n\nResonant frequency:\n\n$$\\omega_0 = \\frac{1}{\\sqrt{LC}}$$\n\nAt resonance:\n- Inductive reactance = capacitive reactance: $\\omega L = 1/(\\omega C)$\n- Impedance minimum: $Z = R$ (purely resistive)\n- Current maximum: $I_{\\text{max}} = V_0/R$\n- Power dissipation maximum\n- Voltage across L and C can exceed source voltage!\n\nApplications: Radio tuning, filters, signal processing."
        },
        {
          type: 'multiple-choice',
          question: "The quality factor $Q$ of an RLC circuit measures:",
          options: [
            "The total charge in the circuit",
            "The sharpness of the resonance peak (ratio of resonant frequency to bandwidth)",
            "The power dissipated",
            "The capacitance value"
          ],
          correctAnswer: 1,
          explanation: "Quality factor:\n\n$$Q = \\frac{\\omega_0 L}{R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}} = \\frac{\\omega_0}{\\Delta\\omega}$$\n\nwhere $\\Delta\\omega$ is bandwidth (full width at half maximum).\n\nHigh $Q$:\n- Sharp resonance peak\n- Low damping (small $R$)\n- Long oscillation decay time\n- Selective frequency response\n\nLow $Q$:\n- Broad resonance\n- High damping (large $R$)\n- Quick decay\n\nTypical: Quartz crystals $Q \\sim 10^5$, LC circuits $Q \\sim 100$"
        }
      ]
    }
  ]
};
