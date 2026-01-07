module.exports = {
  id: "503",
  courseId: "electricity-magnetism",
  topicId: "dc-circuits",
  title: "Series & Parallel Circuits",
  estimatedTime: "30 minutes",
  videos: [
    {
      videoId: "2ZWEsnlLovo",
      videoTitle: "Resistors in Series",
      questions: [
        {
          type: 'multiple-choice',
          question: "For resistors connected in series, the equivalent resistance $R_{\\text{eq}}$ is:",
          options: [
            "$R_{\\text{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + ...$",
            "$R_{\\text{eq}} = R_1 + R_2 + R_3 + ...$",
            "$R_{\\text{eq}} = \\frac{R_1R_2}{R_1 + R_2}$",
            "$R_{\\text{eq}} < $ smallest $R_i$"
          ],
          correctAnswer: 1,
          explanation: "Resistors in $\\text{series}$:\n\n$$R_{\\text{eq}} = R_1 + R_2 + R_3 + ...$$\n\nKey property: Same current $I$ through each resistor.\n\nVoltages add: $V_{\\text{total}} = V_1 + V_2 + V_3 = I(R_1 + R_2 + R_3)$\n\nNote: $R_{\\text{eq}} > $ largest individual $R$ (series increases resistance)."
        },
        {
          type: 'math-input',
          question: "Three resistors (10 Ω, 20 Ω, and 30 Ω) are connected in series. Calculate the equivalent resistance (in ohms).",
          mathAnswer: "60",
          answerRange: 1,
          explanation: "Series: $R_{\\text{eq}} = R_1 + R_2 + R_3$\n\n$$R_{\\text{eq}} = 10 + 20 + 30 = 60 \\,\\Omega$$\n\nSimple addition!"
        }
      ]
    },
    {
      videoId: "4RlGArj_nU4",
      videoTitle: "Resistors in Parallel",
      questions: [
        {
          type: 'multiple-choice',
          question: "For resistors connected in parallel, the equivalent resistance is found by:",
          options: [
            "$R_{\\text{eq}} = R_1 + R_2 + R_3 + ...$",
            "$\\frac{1}{R_{\\text{eq}}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3} + ...$",
            "$R_{\\text{eq}} = \\frac{R_1R_2R_3}{R_1 + R_2 + R_3}$",
            "Both B and C for two resistors"
          ],
          correctAnswer: 3,
          explanation: "Resistors in $\\text{parallel}$:\n\n$$\\frac{1}{R_{\\text{eq}}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3} + ...$$\n\nFor two resistors:\n\n$$R_{\\text{eq}} = \\frac{R_1R_2}{R_1 + R_2}$$\n\nKey property: Same voltage $V$ across each resistor.\n\nNote: $R_{\\text{eq}} < $ smallest individual $R$ (parallel decreases resistance)."
        },
        {
          type: 'math-input',
          question: "Two resistors (6.0 Ω and 3.0 Ω) are connected in parallel. Calculate the equivalent resistance (in ohms).",
          mathAnswer: "2",
          answerRange: 0.1,
          explanation: "Parallel: $R_{\\text{eq}} = \\frac{R_1R_2}{R_1 + R_2}$\n\n$$R_{\\text{eq}} = \\frac{(6.0)(3.0)}{6.0 + 3.0} = \\frac{18}{9} = 2.0 \\,\\Omega$$\n\nOr using reciprocals:\n\n$$\\frac{1}{R_{\\text{eq}}} = \\frac{1}{6.0} + \\frac{1}{3.0} = \\frac{1}{6} + \\frac{2}{6} = \\frac{1}{2}$$\n\n$$R_{\\text{eq}} = 2.0 \\,\\Omega$$"
        }
      ]
    },
    {
      videoId: "3OZg6Qb-a7o",
      videoTitle: "Combination Circuits Containing Series and Parallel Resistors",
      questions: [
        {
          type: 'multiple-choice',
          question: "To analyze a combination circuit with both series and parallel resistors, you should:",
          options: [
            "Always start with series combinations",
            "Always start with parallel combinations",
            "Work from the simplest sub-circuit outward, combining groups step by step",
            "Use Kirchhoff's Laws only"
          ],
          correctAnswer: 2,
          explanation: "Strategy for combination circuits:\n\n1. Identify series/parallel groups\n2. Combine simplest groups first\n3. Work outward until single equivalent $R$\n4. Calculate total current from $V/R_{\\text{eq}}$\n5. Work backward to find individual currents/voltages\n\nKey: Recognize which resistors have same current (series) or same voltage (parallel)."
        }
      ]
    },
    {
      videoId: "4Lc9IMAbRJc",
      videoTitle: "Kirchhoff's Current Law (Junction Rule)",
      questions: [
        {
          type: 'multiple-choice',
          question: "Kirchhoff's Current Law (KCL) states that:",
          options: [
            "The sum of voltages around any closed loop is zero",
            "The sum of currents entering a junction equals the sum leaving",
            "Current is the same everywhere in a series circuit",
            "Voltage is the same across parallel branches"
          ],
          correctAnswer: 1,
          explanation: "Kirchhoff's Current Law (Junction Rule):\n\n$$\\sum I_{\\text{in}} = \\sum I_{\\text{out}}$$\n\nOr: $\\sum I = 0$ at any junction (with sign convention).\n\nBasis: Charge conservation (no charge accumulation at junction).\n\nExample: If $I_1$ and $I_2$ enter, and $I_3$ leaves:\n\n$$I_1 + I_2 = I_3$$"
        }
      ]
    },
    {
      videoId: "pvYp7w7kNOc",
      videoTitle: "Kirchhoff's Voltage Law (Loop Rule)",
      questions: [
        {
          type: 'multiple-choice',
          question: "Kirchhoff's Voltage Law (KVL) states that:",
          options: [
            "Voltage increases across a resistor in direction of current",
            "The sum of potential differences around any closed loop is zero",
            "Total voltage equals sum of resistances",
            "Voltage is constant in a circuit"
          ],
          correctAnswer: 1,
          explanation: "Kirchhoff's Voltage Law (Loop Rule):\n\n$$\\sum V = 0$$\n\naround any closed loop.\n\nBasis: Energy conservation (electric potential is path-independent).\n\nSign convention:\n- EMF sources: $+\\mathcal{E}$ when traversing from $-$ to $+$\n- Resistors: $-IR$ when traversing in direction of current\n\nEssential for analyzing multi-loop circuits!"
        },
        {
          type: 'math-input',
          question: "A simple loop has a 12 V battery and three resistors (2.0 Ω, 3.0 Ω, 5.0 Ω) in series. Calculate the current (in amperes) in the circuit.",
          mathAnswer: "1.2",
          answerRange: 0.05,
          explanation: "Series resistors: $R_{\\text{eq}} = 2.0 + 3.0 + 5.0 = 10 \\,\\Omega$\n\nUsing Ohm's Law: $I = V/R_{\\text{eq}}$\n\n$$I = \\frac{12}{10} = 1.2 \\text{ A}$$\n\nUsing KVL: $12 - I(2.0) - I(3.0) - I(5.0) = 0$\n\n$$12 = 10I \\Rightarrow I = 1.2 \\text{ A}$$"
        }
      ]
    }
  ]
};
