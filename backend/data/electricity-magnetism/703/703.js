module.exports = {
  id: "703",
  courseId: "electricity-magnetism",
  topicId: "magnetic-forces",
  title: "Hall Effect",
  estimatedTime: "20 minutes",
  videos: [
    {
      videoId: "JfqRv7dau2A",
      videoTitle: "The Hall Effect",
      questions: [
        {
          type: 'multiple-choice',
          question: "The Hall effect occurs when a current-carrying conductor is placed in a magnetic field perpendicular to the current. What happens?",
          options: [
            "Current increases due to magnetic acceleration",
            "Voltage (Hall voltage) develops across the conductor perpendicular to both current and field",
            "Resistance of the conductor increases",
            "Temperature of the conductor increases"
          ],
          correctAnswer: 1,
          explanation: "Hall Effect:\n\nWhen current $I$ flows through conductor in magnetic field $\\vec{B}$:\n\n1. Charge carriers deflected by magnetic force: $\\vec{F} = q\\vec{v} \\times \\vec{B}$\n2. Charges accumulate on one side\n3. Electric field $E_H$ builds up (Hall field)\n4. Equilibrium: $qE_H = qv_dB$\n\nHall voltage: $V_H = E_H w = v_d B w$ where $w$ = width\n\nUsed to:\n- Determine charge carrier sign (+ or -)\n- Measure magnetic fields\n- Find carrier density"
        },
        {
          type: 'multiple-choice',
          question: "In the Hall effect, if the Hall voltage is negative on the side where positive charges would accumulate, this indicates:",
          options: [
            "Positive charge carriers (holes)",
            "Negative charge carriers (electrons)",
            "No charge carriers",
            "Neutral atoms"
          ],
          correctAnswer: 1,
          explanation: "Hall effect reveals charge carrier type:\n\n$\\text{Electrons}$ (negative):\n- Deflected opposite to positive charges\n- Hall voltage has opposite polarity\n- Most metals: electron conduction\n\n$\\text{Holes}$ (positive):\n- Deflected like positive charges\n- Hall voltage has \"expected\" polarity\n- Some semiconductors: hole conduction\n\nHistorically confirmed that metals conduct via electrons!"
        }
      ]
    },
    {
      videoId: "JYyVkB7_A7g",
      videoTitle: "Calculating the Hall Voltage",
      questions: [
        {
          type: 'multiple-choice',
          question: "The Hall voltage $V_H$ in a conductor with thickness $t$, carrying current $I$ in magnetic field $B$ is given by:",
          options: [
            "$V_H = \\frac{IB}{nqt}$ where $n$ is charge carrier density",
            "$V_H = nqtIB$",
            "$V_H = \\frac{B}{nqIt}$",
            "$V_H = IBt$"
          ],
          correctAnswer: 0,
          explanation: "Hall voltage derivation:\n\nCurrent density: $J = nqv_d$ gives $v_d = \\frac{I}{nqA} = \\frac{I}{nqtw}$\n\nHall field: $E_H = v_dB = \\frac{IB}{nqtw}$\n\nHall voltage: $V_H = E_H w = \\frac{IB}{nqt}$\n\nNote:\n- $V_H \\propto I$ and $B$\n- $V_H \\propto 1/n$ (fewer carriers → larger voltage)\n- $V_H \\propto 1/t$ (thinner → larger voltage)"
        },
        {
          type: 'math-input',
          question: "A copper strip (thickness 0.50 mm) carries 10 A in a 1.5 T field. The carrier density is $n = 8.5 \\times 10^{28}$ m⁻³. Calculate the Hall voltage in microvolts (μV). (Use $e = 1.6 \\times 10^{-19}$ C)",
          mathAnswer: "2.2",
          answerRange: 0.2,
          explanation: "Using $V_H = \\frac{IB}{nqt}$:\n\n$$V_H = \\frac{(10)(1.5)}{(8.5 \\times 10^{28})(1.6 \\times 10^{-19})(0.5 \\times 10^{-3})}$$\n\n$$V_H = \\frac{15}{(8.5 \\times 10^{28})(1.6 \\times 10^{-19})(5 \\times 10^{-4})}$$\n\n$$V_H = \\frac{15}{6.8 \\times 10^{6}} \\approx 2.2 \\times 10^{-6} \\text{ V} = 2.2 \\,\\mu\\text{V}$$\n\nVery small voltage! (High carrier density in metals)"
        }
      ]
    }
  ]
};
