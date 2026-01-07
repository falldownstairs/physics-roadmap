module.exports = {
  id: "803",
  courseId: "electricity-magnetism",
  topicId: "sources-b-fields",
  title: "Toroid & Current Loop",
  estimatedTime: "20 minutes",
  videos: [
    {
      videoId: "4c6fRmyh4q8",
      videoTitle: "The Magnetic Field of a Toroid",
      questions: [
        {
          type: 'multiple-choice',
          question: "A toroid is a solenoid bent into a doughnut shape. The magnetic field inside a toroid with $N$ total turns at radius $r$ is:",
          options: [
            "$B = \\mu_0 NI$",
            "$B = \\frac{\\mu_0 NI}{2\\pi r}$",
            "$B = \\frac{\\mu_0 I}{r}$",
            "$B = \\mu_0 nI$ (same as solenoid)"
          ],
          correctAnswer: 1,
          explanation: "Toroid magnetic field:\n\n$$B = \\frac{\\mu_0 NI}{2\\pi r}$$\n\nwhere $r$ is distance from toroid center axis.\n\nKey differences from solenoid:\n- Field varies with $r$ (not uniform)\n- Field confined entirely inside toroid\n- Zero field outside (exact, not approximation)\n\nUsing Ampère's Law with circular loop at radius $r$:\n\n$$B(2\\pi r) = \\mu_0 NI$$"
        }
      ]
    },
    {
      videoId: "ZBXVuHpUucc",
      videoTitle: "The Magnetic Field at the Center of a Current Loop",
      questions: [
        {
          type: 'multiple-choice',
          question: "The magnetic field at the center of a circular loop of radius $R$ carrying current $I$ is:",
          options: [
            "$B = \\frac{\\mu_0 I}{2R}$",
            "$B = \\frac{\\mu_0 I}{2\\pi R}$",
            "$B = \\frac{\\mu_0 I}{4\\pi R}$",
            "$B = \\mu_0 IR$"
          ],
          correctAnswer: 0,
          explanation: "Magnetic field at center of loop:\n\n$$B = \\frac{\\mu_0 I}{2R}$$\n\nDirection: perpendicular to loop plane (right-hand rule)\n\nFor $N$ turns:\n\n$$B = \\frac{\\mu_0 NI}{2R}$$\n\nNote: Similar form to straight wire but different constant factor."
        },
        {
          type: 'math-input',
          question: "A circular coil with 100 turns, radius 0.10 m, carries 0.50 A. Calculate the magnetic field (in millitesla, mT) at the center. (Use $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A)",
          mathAnswer: "0.314",
          answerRange: 0.01,
          explanation: "Using $B = \\frac{\\mu_0 NI}{2R}$:\n\n$$B = \\frac{(4\\pi \\times 10^{-7})(100)(0.50)}{2(0.10)}$$\n\n$$B = \\frac{(4\\pi \\times 10^{-7})(50)}{0.20}$$\n\n$$B = \\frac{2\\pi \\times 10^{-5}}{0.20} = 10\\pi \\times 10^{-5}$$\n\n$$B \\approx 3.14 \\times 10^{-4} \\text{ T} = 0.314 \\text{ mT}$$"
        }
      ]
    },
    {
      videoId: "pCSHcftPAIM",
      videoTitle: "The Magnetic Field on the Axis of a Current Loop",
      questions: [
        {
          type: 'multiple-choice',
          question: "The magnetic field on the axis of a circular loop at distance $x$ from the center (with radius $R$) is:",
          options: [
            "$B = \\frac{\\mu_0 IR^2}{2(R^2 + x^2)^{3/2}}$",
            "$B = \\frac{\\mu_0 I}{2R}$ (constant)",
            "$B = \\frac{\\mu_0 I}{2x}$",
            "$B = \\frac{\\mu_0 IR}{2(R + x)}$"
          ],
          correctAnswer: 0,
          explanation: "On-axis field for current loop:\n\n$$B = \\frac{\\mu_0 IR^2}{2(R^2 + x^2)^{3/2}}$$\n\nSpecial cases:\n- At center ($x = 0$): $B = \\frac{\\mu_0 I}{2R}$\n- Far away ($x \\gg R$): $B \\approx \\frac{\\mu_0 IR^2}{2x^3} \\propto \\frac{1}{x^3}$ (magnetic dipole)\n\nField decreases as you move away from center along axis."
        }
      ]
    }
  ]
};
