module.exports = {
  id: "403",
  courseId: "electricity-magnetism",
  topicId: "capacitance",
  title: "Energy Storage",
  estimatedTime: "20 minutes",
  videos: [
    {
      videoId: "CK4yglZScxg",
      videoTitle: "The Energy Stored in a Capacitor",
      questions: [
        {
          type: 'multiple-choice',
          question: "The energy $U$ stored in a capacitor with charge $Q$ and voltage $V$ is given by:",
          options: [
            "$U = QV$",
            "$U = \\frac{1}{2}QV = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C}$",
            "$U = CV^2$",
            "$U = \\frac{Q}{2C}$"
          ],
          correctAnswer: 1,
          explanation: "Energy stored in capacitor (three equivalent forms):\n\n$$U = \\frac{1}{2}QV = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C}$$\n\nDerivation: Work to add charge $dq$ at voltage $v = q/C$:\n\n$$dW = v\\,dq = \\frac{q}{C}dq$$\n\n$$U = \\int_0^Q \\frac{q}{C}dq = \\frac{Q^2}{2C}$$\n\nNote the factor of $\\frac{1}{2}$ (average voltage during charging)."
        },
        {
          type: 'math-input',
          question: "A 100 μF capacitor is charged to 50 V. Calculate the energy stored (in joules).",
          mathAnswer: "0.125",
          answerRange: 0.005,
          explanation: "Using $U = \\frac{1}{2}CV^2$:\n\n$$U = \\frac{1}{2}(100 \\times 10^{-6})(50)^2$$\n\n$$U = \\frac{1}{2}(10^{-4})(2500)$$\n\n$$U = \\frac{2500 \\times 10^{-4}}{2} = \\frac{0.25}{2} = 0.125 \\text{ J}$$"
        }
      ]
    },
    {
      videoId: "yU60fWYIm1I",
      videoTitle: "Energy Stored in a Capacitor, Work Done by Batteries",
      questions: [
        {
          type: 'multiple-choice',
          question: "When a battery charges a capacitor, the work done by the battery $W_b$ and energy stored in the capacitor $U$ are related by:",
          options: [
            "$W_b = U$ (energy is conserved)",
            "$W_b = 2U$ (half goes to capacitor, half dissipated)",
            "$W_b = U/2$ (capacitor stores more than battery provides)",
            "$W_b = 3U/2$"
          ],
          correctAnswer: 1,
          explanation: "Battery does work: $W_b = QV$\n\nCapacitor stores: $U = \\frac{1}{2}QV$\n\nTherefore:\n\n$$W_b = 2U$$\n\nThe other half ($\\frac{1}{2}QV$) is dissipated as heat in resistance (even if very small).\n\nThis is a fundamental result: charging is inherently 50% inefficient!"
        }
      ]
    },
    {
      videoId: "X3bArLmGdRw",
      videoTitle: "Energy Density of an Electric Field",
      questions: [
        {
          type: 'multiple-choice',
          question: "The energy density $u$ (energy per unit volume) in an electric field $E$ is:",
          options: [
            "$u = \\epsilon_0 E$",
            "$u = \\frac{1}{2}\\epsilon_0 E^2$",
            "$u = \\epsilon_0 E^2$",
            "$u = \\frac{E^2}{2\\epsilon_0}$"
          ],
          correctAnswer: 1,
          explanation: "Energy density in electric field:\n\n$$u = \\frac{1}{2}\\epsilon_0 E^2 \\quad \\text{(J/m}^3\\text{)}$$\n\nFor parallel plate capacitor:\n- Energy: $U = \\frac{1}{2}CV^2 = \\frac{1}{2}\\frac{\\epsilon_0 A}{d}(Ed)^2 = \\frac{1}{2}\\epsilon_0 E^2 (Ad)$\n- Volume: $V_{\\text{volume}} = Ad$\n- Energy density: $u = U/V_{\\text{volume}} = \\frac{1}{2}\\epsilon_0 E^2$\n\nThis formula applies to $\\text{any}$ electric field, not just capacitors!"
        },
        {
          type: 'math-input',
          question: "The electric field in a region has magnitude 1000 N/C. Calculate the energy density in μJ/m³ (microjoules per cubic meter). (Use $\\epsilon_0 = 8.85 \\times 10^{-12}$ C²/(N·m²))",
          mathAnswer: "4.4",
          answerRange: 0.2,
          explanation: "Using $u = \\frac{1}{2}\\epsilon_0 E^2$:\n\n$$u = \\frac{1}{2}(8.85 \\times 10^{-12})(1000)^2$$\n\n$$u = \\frac{1}{2}(8.85 \\times 10^{-12})(10^6)$$\n\n$$u = \\frac{8.85 \\times 10^{-6}}{2} = 4.425 \\times 10^{-6} \\text{ J/m}^3 = 4.4 \\text{ μJ/m}^3$$"
        }
      ]
    }
  ]
};
