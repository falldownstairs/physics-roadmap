module.exports = {
  id: "401",
  courseId: "electricity-magnetism",
  topicId: "capacitance",
  title: "Capacitor Basics",
  estimatedTime: "25 minutes",
  videos: [
    {
      videoId: "QtPbSR-IYKk",
      videoTitle: "Capacitors and Capacitance",
      questions: [
        {
          type: 'multiple-choice',
          question: "Capacitance $C$ of a capacitor is defined as the ratio of charge $Q$ to potential difference $V$. Which statement is correct?",
          options: [
            "$C = QV$ (product of charge and voltage)",
            "$C = Q/V$ (depends on geometry only)",
            "$C = V/Q$ (voltage per unit charge)",
            "Capacitance increases when voltage increases"
          ],
          correctAnswer: 1,
          explanation: "Capacitance definition:\n\n$$C = \\frac{Q}{V}$$\n\nUnits: farad (F) = coulomb/volt\n\nKey insight: $C$ depends only on $\\text{geometry}$ (shape, size, separation) and $\\text{material}$ (dielectric), NOT on $Q$ or $V$.\n\nFor a given capacitor:\n- $Q \\propto V$ (linear relationship)\n- $C$ is constant\n\nTypical values: pF to μF range."
        },
        {
          type: 'math-input',
          question: "A capacitor has capacitance 50 μF and is charged to a potential difference of 12 V. Calculate the charge stored (in coulombs) on each plate.",
          mathAnswer: "0.0006",
          answerRange: 0.00001,
          explanation: "Using $Q = CV$:\n\n$$Q = (50 \\times 10^{-6})(12)$$\n\n$$Q = 600 \\times 10^{-6} = 6.0 \\times 10^{-4} \\text{ C} = 0.6 \\text{ mC}$$\n\nOne plate has $+Q$, the other has $-Q$."
        }
      ]
    },
    {
      videoId: "LwpQ0e-gWdE",
      videoTitle: "Calculating the Capacitance of a Parallel Plate Capacitor",
      questions: [
        {
          type: 'multiple-choice',
          question: "For a parallel plate capacitor with plate area $A$ and separation $d$, the capacitance is:",
          options: [
            "$C = \\epsilon_0 Ad$",
            "$C = \\frac{\\epsilon_0 A}{d}$",
            "$C = \\frac{\\epsilon_0 d}{A}$",
            "$C = \\frac{A}{\\epsilon_0 d^2}$"
          ],
          correctAnswer: 1,
          explanation: "Parallel plate capacitor:\n\n$$C = \\frac{\\epsilon_0 A}{d}$$\n\nCapacitance increases with:\n- Larger area $A$ (more charge storage)\n- Smaller separation $d$ (stronger field)\n\nTypical derivation:\n1. $E = \\sigma/\\epsilon_0 = Q/(\\epsilon_0 A)$\n2. $V = Ed = Qd/(\\epsilon_0 A)$\n3. $C = Q/V = \\epsilon_0 A/d$"
        },
        {
          type: 'math-input',
          question: "A parallel plate capacitor has square plates with side length 0.10 m separated by 2.0 mm. Calculate the capacitance in picofarads (pF). (Use $\\epsilon_0 = 8.85 \\times 10^{-12}$ C²/(N·m²))",
          mathAnswer: "44",
          answerRange: 2,
          explanation: "Using $C = \\frac{\\epsilon_0 A}{d}$:\n\nArea: $A = (0.10)^2 = 0.010$ m²\n\nSeparation: $d = 2.0 \\times 10^{-3}$ m\n\n$$C = \\frac{(8.85 \\times 10^{-12})(0.010)}{2.0 \\times 10^{-3}}$$\n\n$$C = \\frac{8.85 \\times 10^{-14}}{2.0 \\times 10^{-3}} = 4.425 \\times 10^{-11} \\text{ F} \\approx 44 \\text{ pF}$$"
        }
      ]
    },
    {
      videoId: "9T6HGC-m8zU",
      videoTitle: "Calculating the Capacitance of a Cylindrical Capacitor",
      questions: [
        {
          type: 'multiple-choice',
          question: "A cylindrical capacitor consists of two coaxial cylinders. The capacitance per unit length depends on:",
          options: [
            "Only the outer radius",
            "Only the inner radius",
            "The ratio $b/a$ of outer to inner radius",
            "The natural log: $\\ln(b/a)$"
          ],
          correctAnswer: 3,
          explanation: "Cylindrical capacitor (length $L$, inner radius $a$, outer radius $b$):\n\n$$C = \\frac{2\\pi\\epsilon_0 L}{\\ln(b/a)}$$\n\nCapacitance per unit length:\n\n$$\\frac{C}{L} = \\frac{2\\pi\\epsilon_0}{\\ln(b/a)}$$\n\nSmaller ratio $b/a$ (closer cylinders) → larger $C$.\n\nNote the $\\text{logarithmic}$ dependence (from $E \\propto 1/r$ for cylindrical symmetry)."
        }
      ]
    },
    {
      videoId: "R9enwtkYBM4",
      videoTitle: "Calculating the Capacitance of a Spherical Capacitor",
      questions: [
        {
          type: 'multiple-choice',
          question: "A spherical capacitor has inner radius $a$ and outer radius $b$. Its capacitance is:",
          options: [
            "$C = 4\\pi\\epsilon_0 ab$",
            "$C = \\frac{4\\pi\\epsilon_0 ab}{b-a}$",
            "$C = 4\\pi\\epsilon_0(b-a)$",
            "$C = \\frac{\\epsilon_0 \\pi a^2}{b-a}$"
          ],
          correctAnswer: 1,
          explanation: "Spherical capacitor:\n\n$$C = \\frac{4\\pi\\epsilon_0 ab}{b-a} = 4\\pi\\epsilon_0 \\frac{ab}{b-a}$$\n\nFor isolated sphere ($b \\to \\infty$):\n\n$$C = 4\\pi\\epsilon_0 a$$\n\nDerivation uses:\n- $E = kQ/r^2$ between spheres\n- $V = kQ(1/a - 1/b)$\n- $C = Q/V$"
        },
        {
          type: 'math-input',
          question: "An isolated conducting sphere has radius 0.05 m. Calculate its capacitance in picofarads (pF). (Use $\\epsilon_0 = 8.85 \\times 10^{-12}$ C²/(N·m²), $k = 9.0 \\times 10^9$ N·m²/C²)",
          mathAnswer: "5.5",
          answerRange: 0.2,
          explanation: "For isolated sphere: $C = 4\\pi\\epsilon_0 R$\n\nUsing $k = 1/(4\\pi\\epsilon_0)$:\n\n$$C = \\frac{R}{k} = \\frac{0.05}{9.0 \\times 10^9}$$\n\n$$C \\approx 5.5 \\times 10^{-12} \\text{ F} = 5.5 \\text{ pF}$$\n\nAlternatively: $4\\pi\\epsilon_0 = 1/k \\approx 1.11 \\times 10^{-10}$\n\n$$C = (1.11 \\times 10^{-10})(0.05) = 5.5 \\times 10^{-12} \\text{ F}$$"
        }
      ]
    }
  ]
};
