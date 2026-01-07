module.exports = {
  id: "504",
  courseId: "electricity-magnetism",
  topicId: "dc-circuits",
  title: "Multi-Loop Analysis",
  estimatedTime: "30 minutes",
  videos: [
    {
      videoId: "BUk0E-2QMP4",
      videoTitle: "Using Kirchhoff's Rules to Solve Circuit Problems",
      questions: [
        {
          type: 'multiple-choice',
          question: "When analyzing a multi-loop circuit with Kirchhoff's rules, how many independent equations do you need?",
          options: [
            "One equation for each resistor",
            "One equation for each loop",
            "Number of unknown currents",
            "Always three equations"
          ],
          correctAnswer: 2,
          explanation: "Strategy for Kirchhoff's rules:\n\n1. Assign current directions (if wrong, result will be negative)\n2. Apply KCL at junctions until you have enough equations\n3. Apply KVL to independent loops\n4. Need $N$ equations for $N$ unknowns\n\nTypical system:\n- 3 unknown currents → need 3 equations\n- Use KCL for $(N-1)$ junctions\n- Use KVL for remaining independent loops"
        }
      ]
    },
    {
      videoId: "dOrkGQfSR6Q",
      videoTitle: "Multi-loop Circuit Analysis",
      questions: [
        {
          type: 'multiple-choice',
          question: "In a circuit with two loops sharing a common branch, the current in the shared branch is:",
          options: [
            "The sum of the loop currents: $I_{\\text{shared}} = I_1 + I_2$",
            "The difference of the loop currents (depends on directions)",
            "Equal to the larger loop current",
            "Always zero by symmetry"
          ],
          correctAnswer: 1,
          explanation: "For shared branch with loop currents:\n\nIf both loop currents flow $\\text{same direction}$ through branch:\n\n$$I_{\\text{shared}} = I_1 + I_2$$\n\nIf loop currents flow $\\text{opposite directions}$:\n\n$$I_{\\text{shared}} = I_1 - I_2$$\n\n(or could be negative if $I_2 > I_1$)\n\nAlways apply KCL at junctions to determine actual current!"
        }
      ]
    },
    {
      videoId: "kGkmLc5qBi0",
      videoTitle: "Wheatstone Bridge",
      questions: [
        {
          type: 'multiple-choice',
          question: "A Wheatstone bridge is balanced (no current through the center branch) when:",
          options: [
            "All four resistors are equal",
            "$R_1/R_2 = R_3/R_4$ (ratios equal)",
            "$R_1 + R_2 = R_3 + R_4$",
            "The battery voltage is zero"
          ],
          correctAnswer: 1,
          explanation: "Wheatstone bridge balance condition:\n\n$$\\frac{R_1}{R_2} = \\frac{R_3}{R_4}$$\n\nOr equivalently: $R_1R_4 = R_2R_3$\n\nWhen balanced:\n- No current through galvanometer/center\n- $V_1 = V_3$ (same potential at bridge midpoints)\n- Used for precise resistance measurements\n\nDerivation: If no center current, then\n$I_1 = I_2$ and $I_3 = I_4$, and $V_1 = V_3$."
        }
      ]
    },
    {
      videoId: "5lYEpfpIqiQ",
      videoTitle: "Measuring Voltage, Current, and Resistance",
      questions: [
        {
          type: 'multiple-choice',
          question: "An ideal voltmeter and ammeter should have:",
          options: [
            "Voltmeter: low resistance; Ammeter: high resistance",
            "Voltmeter: high resistance; Ammeter: low resistance",
            "Both should have equal resistance",
            "Both should have zero resistance"
          ],
          correctAnswer: 1,
          explanation: "Ideal meter characteristics:\n\n$\\text{Voltmeter}$:\n- Connected in $\\text{parallel}$\n- Should have $\\text{infinite resistance}$ (no current drawn)\n- Measures potential difference\n\n$\\text{Ammeter}$:\n- Connected in $\\text{series}$\n- Should have $\\text{zero resistance}$ (no voltage drop)\n- Measures current\n\nReal meters approximate these ideals to minimize circuit disturbance."
        }
      ]
    }
  ]
};
