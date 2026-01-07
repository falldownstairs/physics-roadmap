module.exports = {
  id: "402",
  courseId: "electricity-magnetism",
  topicId: "capacitance",
  title: "Combinations & Dielectrics",
  estimatedTime: "25 minutes",
  videos: [
    {
      videoId: "emknXC_sHlA",
      videoTitle: "Calculating the Equivalent Capacitance for Capacitors in Series",
      questions: [
        {
          type: 'multiple-choice',
          question: "For capacitors connected in series, the equivalent capacitance $C_{\\text{eq}}$ is found by:",
          options: [
            "$C_{\\text{eq}} = C_1 + C_2 + C_3 + ...$",
            "$\\frac{1}{C_{\\text{eq}}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\frac{1}{C_3} + ...$",
            "$C_{\\text{eq}} = \\frac{C_1 C_2}{C_1 + C_2}$ (product over sum)",
            "Both B and C for two capacitors"
          ],
          correctAnswer: 3,
          explanation: "Capacitors in $\\text{series}$:\n\n$$\\frac{1}{C_{\\text{eq}}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\frac{1}{C_3} + ...$$\n\nFor two capacitors:\n\n$$C_{\\text{eq}} = \\frac{C_1 C_2}{C_1 + C_2}$$\n\nKey property: Same charge $Q$ on each capacitor.\n\nNote: $C_{\\text{eq}} < $ smallest individual $C$ (series reduces capacitance)."
        },
        {
          type: 'math-input',
          question: "Two capacitors (6.0 μF and 3.0 μF) are connected in series. Calculate the equivalent capacitance (in microfarads).",
          mathAnswer: "2",
          answerRange: 0.1,
          explanation: "Series: $C_{\\text{eq}} = \\frac{C_1 C_2}{C_1 + C_2}$\n\n$$C_{\\text{eq}} = \\frac{(6.0)(3.0)}{6.0 + 3.0} = \\frac{18}{9} = 2.0 \\,\\mu\\text{F}$$\n\nOr using reciprocals:\n\n$$\\frac{1}{C_{\\text{eq}}} = \\frac{1}{6.0} + \\frac{1}{3.0} = \\frac{1}{6} + \\frac{2}{6} = \\frac{3}{6} = \\frac{1}{2}$$\n\n$$C_{\\text{eq}} = 2.0 \\,\\mu\\text{F}$$"
        }
      ]
    },
    {
      videoId: "8XXCuq_lBPM",
      videoTitle: "Calculating the Equivalent Capacitance for Capacitors in Parallel",
      questions: [
        {
          type: 'multiple-choice',
          question: "For capacitors connected in parallel, the equivalent capacitance is:",
          options: [
            "$\\frac{1}{C_{\\text{eq}}} = \\frac{1}{C_1} + \\frac{1}{C_2} + ...$",
            "$C_{\\text{eq}} = C_1 + C_2 + C_3 + ...$",
            "$C_{\\text{eq}} = \\frac{C_1 C_2}{C_1 + C_2}$",
            "Same as series combination"
          ],
          correctAnswer: 1,
          explanation: "Capacitors in $\\text{parallel}$:\n\n$$C_{\\text{eq}} = C_1 + C_2 + C_3 + ...$$\n\nKey property: Same voltage $V$ across each capacitor.\n\nTotal charge: $Q_{\\text{total}} = Q_1 + Q_2 + ... = C_1V + C_2V + ... = (C_1 + C_2 + ...)V$\n\nNote: $C_{\\text{eq}} > $ largest individual $C$ (parallel increases capacitance)."
        },
        {
          type: 'math-input',
          question: "Three capacitors (2.0 μF, 4.0 μF, and 6.0 μF) are connected in parallel. Calculate the equivalent capacitance (in microfarads).",
          mathAnswer: "12",
          answerRange: 0.5,
          explanation: "Parallel: $C_{\\text{eq}} = C_1 + C_2 + C_3$\n\n$$C_{\\text{eq}} = 2.0 + 4.0 + 6.0 = 12.0 \\,\\mu\\text{F}$$\n\nSimple addition!"
        }
      ]
    },
    {
      videoId: "rRCW5caaFiI",
      videoTitle: "Dielectric Constant and Dielectric Strength",
      questions: [
        {
          type: 'multiple-choice',
          question: "When a dielectric material with dielectric constant $\\kappa$ is inserted between capacitor plates, the capacitance:",
          options: [
            "Decreases by factor $\\kappa$",
            "Increases by factor $\\kappa$",
            "Remains unchanged",
            "Becomes $C/\\kappa^2$"
          ],
          correctAnswer: 1,
          explanation: "Dielectric increases capacitance:\n\n$$C = \\kappa C_0$$\n\nwhere $C_0$ is capacitance with vacuum/air.\n\nFor parallel plates:\n\n$$C = \\frac{\\kappa\\epsilon_0 A}{d}$$\n\nDielectric constant $\\kappa > 1$ (typically 2-10 for common materials).\n\nPhysics: Dielectric polarizes, reducing net field, allowing more charge at same voltage."
        }
      ]
    },
    {
      videoId: "YC5BOusCevw",
      videoTitle: "The Effect of a Dielectric on the Electric Field and the Stored Energy in a Capacitor",
      questions: [
        {
          type: 'multiple-choice',
          question: "When a dielectric is inserted into a charged, isolated capacitor (no battery connected), what happens to the stored energy?",
          options: [
            "Energy increases by factor $\\kappa$",
            "Energy decreases by factor $\\kappa$",
            "Energy remains constant (conservation)",
            "Energy becomes zero"
          ],
          correctAnswer: 1,
          explanation: "For $\\text{isolated}$ capacitor (charge $Q$ fixed):\n\nBefore: $U_0 = \\frac{Q^2}{2C_0}$\n\nAfter inserting dielectric: $C = \\kappa C_0$\n\n$$U = \\frac{Q^2}{2C} = \\frac{Q^2}{2\\kappa C_0} = \\frac{U_0}{\\kappa}$$\n\nEnergy $\\text{decreases}$ (work done pulling dielectric in is negative).\n\nVoltage also decreases: $V = Q/C = V_0/\\kappa$"
        },
        {
          type: 'multiple-choice',
          question: "The dielectric strength of a material is:",
          options: [
            "The dielectric constant $\\kappa$",
            "The maximum electric field before breakdown (sparking)",
            "The energy stored per unit volume",
            "The capacitance enhancement factor"
          ],
          correctAnswer: 1,
          explanation: "Dielectric strength: maximum $E$ field material can withstand before electrical breakdown (ionization, sparking).\n\nTypical values:\n- Air: ~3 MV/m\n- Teflon: ~60 MV/m\n- Glass: ~10-30 MV/m\n\nImportant for capacitor design: need large $C$ (small $d$) but must avoid breakdown."
        }
      ]
    }
  ]
};
