module.exports = {
  id: "802",
  courseId: "electricity-magnetism",
  topicId: "sources-b-fields",
  title: "Ampère's Law",
  estimatedTime: "25 minutes",
  videos: [
    {
      videoId: "ryGzpGpTtIM",
      videoTitle: "Ampère's Law",
      questions: [
        {
          type: 'multiple-choice',
          question: "Ampère's Law states that:",
          options: [
            "$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{\\text{enc}}$",
            "$\\oint \\vec{E} \\cdot d\\vec{A} = Q_{\\text{enc}}/\\epsilon_0$",
            "$\\oint \\vec{B} \\cdot d\\vec{A} = 0$",
            "$\\vec{F} = I\\vec{L} \\times \\vec{B}$"
          ],
          correctAnswer: 0,
          explanation: "Ampère's Law:\n\n$$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{\\text{enc}}$$\n\nLine integral of $\\vec{B}$ around closed path (Amperian loop) equals $\\mu_0$ times enclosed current.\n\nAnalogous to Gauss's Law for magnetism!\n\nUseful for finding $\\vec{B}$ when symmetry exists:\n- Long straight wires\n- Solenoids\n- Toroids\n\nRight-hand rule: curl fingers with loop, thumb shows positive current direction."
        }
      ]
    },
    {
      videoId: "6CX_VbJWopE",
      videoTitle: "Using Ampère's Law to Calculate the Magnetic Field Due to a Wire",
      questions: [
        {
          type: 'multiple-choice',
          question: "To use Ampère's Law for a long straight wire, you choose an Amperian loop that is:",
          options: [
            "A square centered on the wire",
            "A circle centered on the wire",
            "A straight line parallel to the wire",
            "Any shape (doesn't matter)"
          ],
          correctAnswer: 1,
          explanation: "For long straight wire:\n\nChoose $\\text{circular}$ Amperian loop (radius $r$ centered on wire):\n- $\\vec{B}$ is tangent to circle (by symmetry)\n- $\\vec{B}$ has constant magnitude on circle\n\n$$\\oint \\vec{B} \\cdot d\\vec{l} = B(2\\pi r) = \\mu_0 I$$\n\n$$B = \\frac{\\mu_0 I}{2\\pi r}$$\n\nKey: Choose loop matching the symmetry!"
        }
      ]
    },
    {
      videoId: "UUfZR33FblY",
      videoTitle: "The Magnetic Field Inside a Long Straight Current-Carrying Wire",
      questions: [
        {
          type: 'multiple-choice',
          question: "Inside a long straight wire of radius $R$ with uniform current density, the magnetic field at distance $r < R$ from the center:",
          options: [
            "Is zero (like inside a conductor)",
            "Is constant (independent of $r$)",
            "Increases linearly with $r$: $B \\propto r$",
            "Decreases as $1/r$"
          ],
          correctAnswer: 2,
          explanation: "Inside wire with uniform current density:\n\nCurrent enclosed by loop at radius $r$:\n\n$$I_{\\text{enc}} = I\\frac{\\pi r^2}{\\pi R^2} = I\\frac{r^2}{R^2}$$\n\nAmpère's Law:\n\n$$B(2\\pi r) = \\mu_0 I\\frac{r^2}{R^2}$$\n\n$$B = \\frac{\\mu_0 I r}{2\\pi R^2} \\propto r$$\n\nField increases $\\text{linearly}$ from zero at center to maximum at surface ($r = R$)."
        },
        {
          type: 'math-input',
          question: "A wire of radius 2.0 mm carries 10 A uniformly distributed. Calculate the magnetic field (in tesla) at $r = 1.0$ mm from the center. (Use $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A)",
          mathAnswer: "0.0005",
          answerRange: 0.00002,
          explanation: "Using $B = \\frac{\\mu_0 I r}{2\\pi R^2}$:\n\n$$B = \\frac{(4\\pi \\times 10^{-7})(10)(1.0 \\times 10^{-3})}{2\\pi(2.0 \\times 10^{-3})^2}$$\n\n$$B = \\frac{2 \\times 10^{-7} \\times 10 \\times 10^{-3}}{(2.0 \\times 10^{-3})^2}$$\n\n$$B = \\frac{2 \\times 10^{-9}}{4 \\times 10^{-6}} = 5 \\times 10^{-4} \\text{ T} = 0.5 \\text{ mT}$$"
        }
      ]
    },
    {
      videoId: "ef9R3imCesY",
      videoTitle: "The Magnetic Field of a Solenoid",
      questions: [
        {
          type: 'multiple-choice',
          question: "The magnetic field inside a long ideal solenoid with $n$ turns per unit length carrying current $I$ is:",
          options: [
            "$B = \\mu_0 I/n$",
            "$B = \\mu_0 nI$",
            "$B = \\mu_0 n^2I$",
            "$B = \\mu_0 I/(2\\pi n)$"
          ],
          correctAnswer: 1,
          explanation: "Ideal solenoid field:\n\n$$B = \\mu_0 nI$$\n\nwhere $n = N/L$ = turns per unit length\n\nKey features:\n- Uniform field $\\text{inside}$\n- Zero field $\\text{outside}$ (ideal approximation)\n- Field parallel to solenoid axis\n- Independent of position inside\n\nDerivation uses Ampère's Law with rectangular loop."
        },
        {
          type: 'math-input',
          question: "A solenoid with 2000 turns over 0.50 m length carries 3.0 A. Calculate the magnetic field (in tesla) inside. (Use $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A)",
          mathAnswer: "0.015",
          answerRange: 0.001,
          explanation: "Turns per length: $n = N/L = 2000/0.50 = 4000$ m⁻¹\n\nUsing $B = \\mu_0 nI$:\n\n$$B = (4\\pi \\times 10^{-7})(4000)(3.0)$$\n\n$$B = (4\\pi \\times 10^{-7})(12{,}000)$$\n\n$$B \\approx (1.26 \\times 10^{-6})(1.2 \\times 10^4) \\approx 0.015 \\text{ T} = 15 \\text{ mT}$$"
        }
      ]
    }
  ]
};
