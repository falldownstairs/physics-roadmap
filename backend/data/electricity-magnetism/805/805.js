module.exports = {
  id: "805",
  courseId: "electricity-magnetism",
  topicId: "sources-b-fields",
  title: "Displacement Current",
  estimatedTime: "15 minutes",
  videos: [
    {
      videoId: "UAgFicPQqek",
      videoTitle: "Maxwell's Correction to Ampère's Law (Displacement Current)",
      questions: [
        {
          type: 'multiple-choice',
          question: "Maxwell added a term to Ampère's Law to account for changing electric fields. The complete Ampère-Maxwell Law is:",
          options: [
            "$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{\\text{enc}}$ (original)",
            "$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0(I_{\\text{enc}} + I_d)$ where $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$",
            "$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{\\text{enc}} + \\epsilon_0 E$",
            "$\\oint \\vec{B} \\cdot d\\vec{l} = 0$"
          ],
          correctAnswer: 1,
          explanation: "Ampère-Maxwell Law:\n\n$$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0\\left(I_{\\text{enc}} + \\epsilon_0\\frac{d\\Phi_E}{dt}\\right)$$\n\nDisplacement current:\n\n$$I_d = \\epsilon_0\\frac{d\\Phi_E}{dt}$$\n\nKey insight: Changing $\\vec{E}$ field creates $\\vec{B}$ field (even without actual current flow!)\n\nEssential for:\n- Electromagnetic waves\n- Capacitor charging (current \"flows\" between plates)\n- Symmetry with Faraday's Law"
        }
      ]
    },
    {
      videoId: "8bdiylnIQqU",
      videoTitle: "Displacement Current in a Capacitor",
      questions: [
        {
          type: 'multiple-choice',
          question: "While a capacitor is charging, there is no actual current flow between the plates, but a displacement current $I_d$ exists. This displacement current:",
          options: [
            "Is zero (no actual charges moving)",
            "Equals the conduction current in the wires: $I_d = I$",
            "Creates a magnetic field between the plates",
            "Both B and C are correct"
          ],
          correctAnswer: 3,
          explanation: "Displacement current in charging capacitor:\n\nElectric field between plates: $E = Q/(\\epsilon_0 A)$\n\nFlux: $\\Phi_E = EA = Q/\\epsilon_0$\n\nDisplacement current:\n\n$$I_d = \\epsilon_0\\frac{d\\Phi_E}{dt} = \\epsilon_0\\frac{d(Q/\\epsilon_0)}{dt} = \\frac{dQ}{dt} = I$$\n\n$I_d$ equals conduction current and creates $\\vec{B}$ field!\n\nThis \"completes the circuit\" conceptually between capacitor plates."
        }
      ]
    }
  ]
};
