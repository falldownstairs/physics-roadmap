module.exports = {
  id: "104",
  courseId: "electricity-magnetism",
  topicId: "electric-charge-field",
  title: "E Field from Distributions",
  estimatedTime: "25 minutes",
  videos: [
    {
      videoId: "WmZ3G2DWHlg",
      videoTitle: "The Electric Field Due to a Straight Uniformly Charged Wire",
      questions: [
        {
          type: 'multiple-choice',
          question: "For an infinitely long straight wire with uniform linear charge density $\\lambda$, the electric field at a perpendicular distance $r$ from the wire is given by $E = \\frac{\\lambda}{2\\pi\\epsilon_0 r}$. How does the field strength vary with distance?",
          options: [
            "Inversely proportional to $r^2$ (like a point charge)",
            "Inversely proportional to $r$",
            "Independent of $r$",
            "Proportional to $r$"
          ],
          correctAnswer: 1,
          explanation: "For an infinite line of charge, the electric field varies as $\\frac{1}{r}$, not $\\frac{1}{r^2}$:\n\n$$E = \\frac{\\lambda}{2\\pi\\epsilon_0 r}$$\n\nThis is different from a $\\text{point charge}$ where $E \\propto \\frac{1}{r^2}$. The $\\frac{1}{r}$ dependence occurs because the charged wire extends to infinity in both directions, and integration over the entire length produces this result.\n\nKey insight: The field's dependence on distance reflects the $\\text{geometry}$ of the charge distribution."
        }
      ]
    },
    {
      videoId: "1p1nCs1775E",
      videoTitle: "The Electric Field Due to a Straight Uniformly Charged Wire (part 2)",
      questions: [
        {
          type: 'math-input',
          question: "A finite wire of length $L = 0.40$ m carries a uniform charge of $Q = 8.0 \\times 10^{-9}$ C. Calculate the magnitude of the electric field (in N/C) at a point on the perpendicular bisector, a distance $r = 0.30$ m from the wire's center. Use the approximation formula for points not too far from a finite wire: $E \\approx \\frac{kQ}{r\\sqrt{r^2 + (L/2)^2}}$. ($k = 9.0 \\times 10^9 \\, \\text{N}\\cdot\\text{m}^2/\\text{C}^2$)",
          mathAnswer: "200",
          answerRange: 20,
          explanation: "Using the given approximation formula:\n\n$$E = \\frac{kQ}{r\\sqrt{r^2 + (L/2)^2}}$$\n\nSubstitute values:\n\n$$E = \\frac{(9.0 \\times 10^9)(8.0 \\times 10^{-9})}{0.30\\sqrt{(0.30)^2 + (0.20)^2}}$$\n\n$$E = \\frac{72}{0.30\\sqrt{0.09 + 0.04}} = \\frac{72}{0.30(0.36)}$$\n\n$$E \\approx 200 \\text{ N/C}$$\n\nFor a finite wire, the field depends on both the distance and the wire's length."
        }
      ]
    },
    {
      videoId: "80mM3kSTZcE",
      videoTitle: "Electric Field Due to a Ring of Charge",
      questions: [
        {
          type: 'multiple-choice',
          question: "A uniformly charged ring of radius $R$ carries total charge $Q$. At the center of the ring, what is the electric field?",
          options: [
            "$E = \\frac{kQ}{R^2}$",
            "$E = \\frac{kQ}{2R^2}$",
            "$E = 0$",
            "$E = \\frac{kQ\\pi}{R^2}$"
          ],
          correctAnswer: 2,
          explanation: "At the $\\text{center}$ of a uniformly charged ring, the electric field is $\\text{zero}$ due to $\\text{symmetry}$.\n\nEvery infinitesimal charge element $dq$ on the ring creates a field pointing from that element toward (or away from) the center. However, for every element, there is a diametrically opposite element creating an equal field in the opposite direction.\n\nAll these paired contributions $\\text{cancel}$, resulting in:\n\n$$\\vec{E}_{\\text{center}} = \\vec{0}$$"
        },
        {
          type: 'math-input',
          question: "For a ring of radius $R$ with charge $Q$, the electric field along the axis at distance $x$ from the center is $E = \\frac{kQx}{(x^2 + R^2)^{3/2}}$. At what distance $x$ (in terms of $R$) is the field maximum? Enter your answer as a decimal multiple of $R$ (e.g., if $x = 0.5R$, enter $0.5$, or if $x = R/\\sqrt{2}$, enter $0.707$).",
          mathAnswer: "0.707",
          answerRange: 0.05,
          explanation: "To find the maximum field, take the derivative $\\frac{dE}{dx}$ and set it equal to zero. After differentiation and simplification:\n\n$$\\frac{dE}{dx} = 0 \\text{ when } x^2 = \\frac{R^2}{2}$$\n\nSolving:\n\n$$x = \\frac{R}{\\sqrt{2}} \\approx 0.707R$$\n\nAt this point, the field reaches its $\\text{maximum value}$ along the axis."
        },
        {
          type: 'multiple-choice',
          question: "A uniformly charged disk of radius $R$ has surface charge density $\\sigma$. Very close to the disk's center (when $x \\ll R$), the electric field approaches:",
          options: [
            "$E \\approx 0$",
            "$E \\approx \\frac{\\sigma}{\\epsilon_0}$",
            "$E \\approx \\frac{\\sigma}{2\\epsilon_0}$",
            "$E \\approx \\frac{k\\sigma}{R^2}$"
          ],
          correctAnswer: 2,
          explanation: "The electric field along the axis of a uniformly charged disk is:\n\n$$E = \\frac{\\sigma}{2\\epsilon_0}\\left(1 - \\frac{x}{\\sqrt{x^2 + R^2}}\\right)$$\n\nVery close to the disk ($x \\ll R$):\n\n$$E \\approx \\frac{\\sigma}{2\\epsilon_0}$$\n\nThis is the same result as an $\\text{infinite plane}$ of charge, which makes sense because when you're very close to a large disk, it appears infinite."
        }
      ]
    },
    {
      videoId: "L1n2EUvayfw",
      videoTitle: "Electric Field Due to a Semi-Circular Ring of Charge",
      questions: [
        {
          type: 'multiple-choice',
          question: "A semi-circular ring of radius $R$ has uniform charge $Q$ distributed along its length. At the center of curvature, the direction of the electric field is:",
          options: [
            "Tangent to the semicircle",
            "Perpendicular to the diameter, pointing away from the semicircle",
            "Along the diameter, parallel to it",
            "Zero (by symmetry)"
          ],
          correctAnswer: 1,
          explanation: "By $\\text{symmetry}$, the horizontal components of the electric field from opposite sides of the semicircle $\\text{cancel out}$.\n\nOnly the vertical components (perpendicular to the diameter) add up. For a $\\text{positive}$ charge distribution, the field points $\\text{away}$ from the semicircle:\n\n$$E = \\frac{2kQ}{\\pi R^2}$$\n\nThe direction is perpendicular to the diameter, pointing toward the open side of the semicircle."
        }
      ]
    }
  ]
};
