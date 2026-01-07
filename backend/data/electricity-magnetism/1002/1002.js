module.exports = {
  id: "1002",
  courseId: "electricity-magnetism",
  topicId: "inductance",
  title: "LC Circuits",
  estimatedTime: "25 minutes",
  videos: [
    {
      videoId: "v3-HwZMThzQ",
      videoTitle: "LC Circuits and Oscillations",
      questions: [
        {
          type: 'multiple-choice',
          question: "An LC circuit (inductor and capacitor connected) exhibits:",
          options: [
            "Exponential decay to zero current",
            "Constant current flow",
            "Oscillating current and charge",
            "Linear increase in current"
          ],
          correctAnswer: 2,
          explanation: "LC circuit oscillations:\n\nCharge oscillates: $Q(t) = Q_0\\cos(\\omega t)$\n\nCurrent oscillates: $I(t) = -\\omega Q_0\\sin(\\omega t)$\n\nAngular frequency:\n\n$$\\omega = \\frac{1}{\\sqrt{LC}}$$\n\nPeriod: $T = 2\\pi\\sqrt{LC}$\n\nEnergy oscillates between:\n- Capacitor: $U_C = \\frac{Q^2}{2C}$ (electric field)\n- Inductor: $U_L = \\frac{1}{2}LI^2$ (magnetic field)\n\nTotal energy conserved (no resistance)."
        },
        {
          type: 'math-input',
          question: "An LC circuit has $L = 0.10$ H and $C = 25$ μF. Calculate the oscillation frequency (in Hz). (Use $\\pi \\approx 3.14$)",
          mathAnswer: "100.7",
          answerRange: 5,
          explanation: "Angular frequency: $\\omega = \\frac{1}{\\sqrt{LC}}$\n\n$$\\omega = \\frac{1}{\\sqrt{(0.10)(25 \\times 10^{-6})}}$$\n\n$$\\omega = \\frac{1}{\\sqrt{2.5 \\times 10^{-6}}} = \\frac{1}{1.58 \\times 10^{-3}} \\approx 632 \\text{ rad/s}$$\n\nFrequency: $f = \\frac{\\omega}{2\\pi} = \\frac{632}{2(3.14)} \\approx 100.7 \\text{ Hz}$$"
        }
      ]
    },
    {
      videoId: "t5yMPyNkdkI",
      videoTitle: "Energy in LC Circuits",
      questions: [
        {
          type: 'multiple-choice',
          question: "In an ideal LC circuit, as the charge on the capacitor decreases to zero, the current:",
          options: [
            "Also decreases to zero",
            "Reaches its maximum value",
            "Remains constant",
            "Becomes negative"
          ],
          correctAnswer: 1,
          explanation: "Energy oscillation in LC circuit:\n\nTotal energy: $U_{\\text{total}} = \\frac{Q^2}{2C} + \\frac{1}{2}LI^2$ (constant)\n\nWhen $Q = 0$ (capacitor fully discharged):\n- $U_C = 0$\n- All energy in inductor: $U_L = \\frac{1}{2}LI_{\\text{max}}^2$\n- Current is $\\text{maximum}$\n\nWhen $I = 0$ (current zero):\n- $U_L = 0$\n- All energy in capacitor: $U_C = \\frac{Q_{\\text{max}}^2}{2C}$\n- Charge is maximum\n\nEnergy continuously exchanges between electric and magnetic forms."
        }
      ]
    },
    {
      videoId: "B8CPGiK59f8",
      videoTitle: "The LC Circuit as a Harmonic Oscillator",
      questions: [
        {
          type: 'multiple-choice',
          question: "The LC circuit is analogous to a mass-spring system. The correct analogy is:",
          options: [
            "L ↔ mass, C ↔ spring constant, Q ↔ position",
            "L ↔ spring constant, C ↔ mass, I ↔ position",
            "C ↔ mass, L ↔ spring constant, Q ↔ velocity",
            "No mechanical analogy exists"
          ],
          correctAnswer: 0,
          explanation: "LC circuit ↔ Mass-spring analogy:\n\n$\\text{LC Circuit:}$\n- Charge: $Q$\n- Current: $I = dQ/dt$\n- Inductance: $L$\n- Capacitance: $C$\n- Equation: $L\\frac{d^2Q}{dt^2} + \\frac{Q}{C} = 0$\n\n$\\text{Mass-Spring:}$\n- Position: $x$\n- Velocity: $v = dx/dt$\n- Mass: $m$\n- Spring constant: $k$\n- Equation: $m\\frac{d^2x}{dt^2} + kx = 0$\n\nCorrespondences: $L \\leftrightarrow m$, $1/C \\leftrightarrow k$, $Q \\leftrightarrow x$, $I \\leftrightarrow v$"
        }
      ]
    }
  ]
};
