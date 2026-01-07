module.exports = {
  id: "801",
  courseId: "electricity-magnetism",
  topicId: "sources-b-fields",
  title: "Biot-Savart Law",
  estimatedTime: "25 minutes",
  videos: [
    {
      videoId: "WUpDMi50zPs",
      videoTitle: "The Biot-Savart Law",
      questions: [
        {
          type: 'multiple-choice',
          question: "The Biot-Savart Law gives the magnetic field $d\\vec{B}$ from a current element $Id\\vec{l}$ as:",
          options: [
            "$d\\vec{B} = \\frac{\\mu_0}{4\\pi}\\frac{Id\\vec{l} \\times \\hat{r}}{r^2}$",
            "$d\\vec{B} = \\frac{\\mu_0}{4\\pi}\\frac{Id\\vec{l}}{r}$",
            "$d\\vec{B} = \\mu_0 I d\\vec{l} \\times \\vec{r}$",
            "$d\\vec{B} = \\frac{Id\\vec{l}}{4\\pi\\epsilon_0 r^2}$"
          ],
          correctAnswer: 0,
          explanation: "Biot-Savart Law:\n\n$$d\\vec{B} = \\frac{\\mu_0}{4\\pi}\\frac{Id\\vec{l} \\times \\hat{r}}{r^2}$$\n\nwhere:\n- $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A (permeability of free space)\n- $Id\\vec{l}$ = current element\n- $\\hat{r}$ = unit vector from element to field point\n- $r$ = distance\n\nMagnitude: $dB = \\frac{\\mu_0 I dl \\sin\\theta}{4\\pi r^2}$\n\nDirection: right-hand rule (curl fingers with current, thumb points toward $d\\vec{B}$)"
        }
      ]
    },
    {
      videoId: "9nWTiPGjbjY",
      videoTitle: "The Magnetic Field Due to a Long Straight Current-Carrying Wire",
      questions: [
        {
          type: 'multiple-choice',
          question: "The magnetic field at perpendicular distance $r$ from a long straight wire carrying current $I$ is:",
          options: [
            "$B = \\frac{\\mu_0 I}{2\\pi r^2}$",
            "$B = \\frac{\\mu_0 I}{2\\pi r}$",
            "$B = \\frac{\\mu_0 I}{4\\pi r}$",
            "$B = \\mu_0 I r$"
          ],
          correctAnswer: 1,
          explanation: "Magnetic field from long straight wire:\n\n$$B = \\frac{\\mu_0 I}{2\\pi r}$$\n\nKey features:\n- $B \\propto 1/r$ (not $1/r^2$ like point charge!)\n- Field circles the wire (right-hand rule: thumb = current, fingers curl = field)\n- Valid for $r \\ll $ wire length\n\nUsing $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A:\n\n$$B = \\frac{2 \\times 10^{-7} I}{r}$$"
        },
        {
          type: 'math-input',
          question: "A long straight wire carries 15 A. Calculate the magnetic field strength (in tesla) at a perpendicular distance of 0.050 m from the wire. (Use $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A)",
          mathAnswer: "0.00006",
          answerRange: 0.000002,
          explanation: "Using $B = \\frac{\\mu_0 I}{2\\pi r}$:\n\n$$B = \\frac{(4\\pi \\times 10^{-7})(15)}{2\\pi(0.050)}$$\n\n$$B = \\frac{2 \\times 10^{-7} \\times 15}{0.050} = \\frac{3 \\times 10^{-6}}{0.050}$$\n\n$$B = 6.0 \\times 10^{-5} \\text{ T} = 60 \\,\\mu\\text{T}$$"
        }
      ]
    },
    {
      videoId: "waTF7kjmmt8",
      videoTitle: "The Magnetic Force Between Two Parallel Current-Carrying Wires",
      questions: [
        {
          type: 'multiple-choice',
          question: "Two long parallel wires carrying currents in the same direction will:",
          options: [
            "Repel each other",
            "Attract each other",
            "Experience no force",
            "Experience torque but no force"
          ],
          correctAnswer: 1,
          explanation: "Force between parallel currents:\n\nWire 1 creates field at wire 2: $B_1 = \\frac{\\mu_0 I_1}{2\\pi d}$\n\nForce per length on wire 2: $\\frac{F}{L} = B_1 I_2 = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$\n\n$\\text{Same direction}$ currents: $\\text{attract}$\n\n$\\text{Opposite direction}$ currents: $\\text{repel}$\n\nThis defines the ampere: 1 A produces $2 \\times 10^{-7}$ N/m force at 1 m separation."
        }
      ]
    }
  ]
};
