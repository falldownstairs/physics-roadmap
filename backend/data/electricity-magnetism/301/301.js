module.exports = {
  id: "301",
  courseId: "electricity-magnetism",
  topicId: "electric-potential",
  title: "Potential Energy & Work",
  estimatedTime: "20 minutes",
  videos: [
    {
      videoId: "Ircup9aIJzU",
      videoTitle: "Electric Potential Energy",
      questions: [
        {
          type: 'multiple-choice',
          question: "The electric potential energy $U$ of a charge $q$ in an electric field is analogous to gravitational potential energy. Which statement is correct?",
          options: [
            "$U$ is maximum where the electric field is strongest",
            "$U$ depends on the path taken to move the charge",
            "A positive charge has higher $U$ near a positive source charge",
            "Electric potential energy is always positive"
          ],
          correctAnswer: 2,
          explanation: "Electric potential energy for charge $q$ near source $Q$:\n\n$$U = k\\frac{qQ}{r}$$\n\nKey points:\n- If $q$ and $Q$ have the $\\text{same sign}$, $U > 0$ (repulsion, high energy)\n- If $q$ and $Q$ have $\\text{opposite signs}$, $U < 0$ (attraction, low energy)\n- Like charges repel → high potential energy when close\n- $U$ is path-independent (conservative force)\n\nPositive charge near positive source has maximum $U$."
        },
        {
          type: 'math-input',
          question: "Two protons are initially separated by 2.0 mm. Calculate the electric potential energy (in $10^{-14}$ J) of this system. (Use $k = 9.0 \\times 10^9$ N·m²/C², $e = 1.6 \\times 10^{-19}$ C)",
          mathAnswer: "11.5",
          answerRange: 0.5,
          explanation: "For two protons (each with charge $e$):\n\n$$U = k\\frac{q_1 q_2}{r} = k\\frac{e \\cdot e}{r} = k\\frac{e^2}{r}$$\n\n$$U = (9.0 \\times 10^9) \\frac{(1.6 \\times 10^{-19})^2}{2.0 \\times 10^{-3}}$$\n\n$$U = (9.0 \\times 10^9) \\frac{2.56 \\times 10^{-38}}{2.0 \\times 10^{-3}}$$\n\n$$U \\approx 1.15 \\times 10^{-13} \\text{ J} = 11.5 \\times 10^{-14} \\text{ J}$$\n\nPositive energy indicates repulsion."
        }
      ]
    },
    {
      videoId: "Y3xv-Oz68jQ",
      videoTitle: "Electric Potential Energy and Electric Potential",
      questions: [
        {
          type: 'multiple-choice',
          question: "Electric potential $V$ (measured in volts) differs from electric potential energy $U$ (measured in joules) in that:",
          options: [
            "$V$ depends on the test charge, while $U$ does not",
            "$V$ is energy per unit charge: $V = U/q$",
            "$V$ is a vector quantity, while $U$ is scalar",
            "$V$ requires contact with the source charge"
          ],
          correctAnswer: 1,
          explanation: "Electric potential $V$ is defined as:\n\n$$V = \\frac{U}{q} = \\frac{\\text{potential energy}}{\\text{charge}}$$\n\nUnits: $1 \\text{ volt} = 1 \\text{ joule/coulomb}$\n\n$V$ is a $\\text{property of space}$ (created by source charges), independent of any test charge.\n\n$U$ is the $\\text{energy of a specific charge}$ $q$ at that location:\n\n$$U = qV$$\n\nBoth $V$ and $U$ are scalars."
        }
      ]
    },
    {
      videoId: "HJrkw_YQzcc",
      videoTitle: "Electric Potential and Electric Potential Energy Due to Point Charges",
      questions: [
        {
          type: 'multiple-choice',
          question: "The electric potential $V$ at distance $r$ from a point charge $Q$ is given by:",
          options: [
            "$V = k\\frac{Q}{r^2}$",
            "$V = k\\frac{Q}{r}$",
            "$V = \\frac{kQ^2}{r}$",
            "$V = \\frac{Q}{4\\pi\\epsilon_0 r^2}$"
          ],
          correctAnswer: 1,
          explanation: "Electric potential from a point charge:\n\n$$V = k\\frac{Q}{r} = \\frac{1}{4\\pi\\epsilon_0}\\frac{Q}{r}$$\n\nKey differences from electric field:\n- $E \\propto \\frac{1}{r^2}$ (vector)\n- $V \\propto \\frac{1}{r}$ (scalar)\n\nNote: $V = 0$ at $r = \\infty$ by convention.\n\nFor multiple charges, potentials add $\\text{algebraically}$ (scalar sum):\n\n$$V_{\\text{total}} = \\sum_i k\\frac{Q_i}{r_i}$$"
        },
        {
          type: 'math-input',
          question: "A charge of $+3.0$ μC is placed at the origin. Calculate the electric potential (in volts) at a point 0.50 m away. (Use $k = 9.0 \\times 10^9$ N·m²/C²)",
          mathAnswer: "54000",
          answerRange: 500,
          explanation: "Using $V = k\\frac{Q}{r}$:\n\n$$V = (9.0 \\times 10^9) \\frac{3.0 \\times 10^{-6}}{0.50}$$\n\n$$V = \\frac{27 \\times 10^3}{0.50} = 54{,}000 \\text{ V} = 54 \\text{ kV}$$\n\nPositive potential because the source charge is positive."
        }
      ]
    },
    {
      videoId: "lIf_UoWJ8sk",
      videoTitle: "Electric Potential Due to Multiple Point Charges",
      questions: [
        {
          type: 'multiple-choice',
          question: "Three charges are arranged at the corners of an equilateral triangle. To find the total electric potential at the center, you must:",
          options: [
            "Find the vector sum of the three potentials",
            "Find the algebraic (scalar) sum of the three potentials",
            "Multiply the three individual potentials",
            "Use the average of the three potentials"
          ],
          correctAnswer: 1,
          explanation: "Electric potential is a $\\text{scalar}$ quantity!\n\nTotal potential is the $\\text{algebraic sum}$:\n\n$$V_{\\text{total}} = V_1 + V_2 + V_3 = k\\sum_i \\frac{Q_i}{r_i}$$\n\nNote: Signs matter!\n- Positive charges contribute positive $V$\n- Negative charges contribute negative $V$\n\nNo need for vector components or angles (unlike electric field)."
        },
        {
          type: 'math-input',
          question: "Two charges are placed on the x-axis: $q_1 = +4.0$ nC at $x = 0$ and $q_2 = -2.0$ nC at $x = 3.0$ m. Calculate the total electric potential (in volts) at $x = 1.0$ m. (Use $k = 9.0 \\times 10^9$ N·m²/C²)",
          mathAnswer: "27",
          answerRange: 1,
          explanation: "Calculate potential from each charge:\n\n$$V_1 = k\\frac{q_1}{r_1} = (9.0 \\times 10^9)\\frac{4.0 \\times 10^{-9}}{1.0} = 36 \\text{ V}$$\n\n$$V_2 = k\\frac{q_2}{r_2} = (9.0 \\times 10^9)\\frac{-2.0 \\times 10^{-9}}{2.0} = -9 \\text{ V}$$\n\nTotal (scalar sum):\n\n$$V_{\\text{total}} = V_1 + V_2 = 36 + (-9) = 27 \\text{ V}$$"
        }
      ]
    }
  ]
};
