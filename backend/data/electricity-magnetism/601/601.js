module.exports = {
  id: "601",
  courseId: "electricity-magnetism",
  topicId: "rc-circuits",
  title: "Charging & Discharging",
  estimatedTime: "25 minutes",
  videos: [
    {
      videoId: "skH2OW13PMA",
      videoTitle: "RC Circuits - Charging",
      questions: [
        {
          type: 'multiple-choice',
          question: "When a capacitor charges through a resistor in an RC circuit, the charge $Q(t)$ on the capacitor as a function of time is:",
          options: [
            "$Q(t) = Q_0(1 - e^{-t/RC})$ where $Q_0 = C\\mathcal{E}$",
            "$Q(t) = Q_0 e^{-t/RC}$",
            "$Q(t) = Q_0(1 - e^{-RC/t})$",
            "$Q(t) = Q_0 t/RC$"
          ],
          correctAnswer: 0,
          explanation: "Charging capacitor through resistor:\n\n$$Q(t) = Q_0(1 - e^{-t/\\tau})$$\n\nwhere:\n- $Q_0 = C\\mathcal{E}$ = final charge\n- $\\tau = RC$ = time constant\n\nVoltage: $V_C(t) = \\mathcal{E}(1 - e^{-t/\\tau})$\n\nCurrent: $I(t) = \\frac{\\mathcal{E}}{R}e^{-t/\\tau}$ (decreases exponentially)\n\nAt $t = \\tau$: capacitor reaches 63% of final charge."
        },
        {
          type: 'math-input',
          question: "An RC circuit has $R = 100$ kΩ and $C = 50$ μF. Calculate the time constant $\\tau$ (in seconds).",
          mathAnswer: "5",
          answerRange: 0.2,
          explanation: "Time constant: $\\tau = RC$\n\n$$\\tau = (100 \\times 10^3)(50 \\times 10^{-6})$$\n\n$$\\tau = (10^5)(5 \\times 10^{-5}) = 5 \\text{ s}$$\n\nAfter $\\tau = 5$ s, capacitor reaches 63% charge.\n\nAfter $5\\tau = 25$ s, essentially fully charged (99%)."
        }
      ]
    },
    {
      videoId: "Ppqijqfuk7M",
      videoTitle: "RC Circuits - Discharging",
      questions: [
        {
          type: 'multiple-choice',
          question: "When a charged capacitor discharges through a resistor, the charge $Q(t)$ decreases according to:",
          options: [
            "$Q(t) = Q_0 e^{-t/RC}$ (exponential decay)",
            "$Q(t) = Q_0(1 - e^{-t/RC})$",
            "$Q(t) = Q_0 - t/RC$",
            "$Q(t) = Q_0/t$"
          ],
          correctAnswer: 0,
          explanation: "Discharging capacitor:\n\n$$Q(t) = Q_0 e^{-t/\\tau}$$\n\nwhere $\\tau = RC$\n\nVoltage: $V_C(t) = V_0 e^{-t/\\tau}$\n\nCurrent: $I(t) = -\\frac{V_0}{R}e^{-t/\\tau}$ (negative = opposite direction)\n\nHalf-life: $t_{1/2} = \\tau \\ln(2) \\approx 0.693\\tau$\n\nAt $t = \\tau$: 37% of initial charge remains."
        },
        {
          type: 'math-input',
          question: "A capacitor initially charged to 12 V discharges through a circuit with time constant 2.0 s. Calculate the voltage (in volts) after 4.0 s. (Use $e^{-2} \\approx 0.135$)",
          mathAnswer: "1.62",
          answerRange: 0.1,
          explanation: "Using $V(t) = V_0 e^{-t/\\tau}$:\n\n$$V(4.0) = 12 \\cdot e^{-4.0/2.0} = 12 \\cdot e^{-2}$$\n\n$$V = 12(0.135) = 1.62 \\text{ V}$$\n\nAfter $2\\tau$, voltage drops to 13.5% of initial value."
        }
      ]
    },
    {
      videoId: "WRCuM2D1lq4",
      videoTitle: "The Time Constant in an RC Circuit",
      questions: [
        {
          type: 'multiple-choice',
          question: "The time constant $\\tau = RC$ in an RC circuit represents:",
          options: [
            "The time to reach full charge/discharge",
            "The time to reach 63% of final value (charging) or decay to 37% (discharging)",
            "The time for the capacitor to fully charge",
            "Half the charging time"
          ],
          correctAnswer: 1,
          explanation: "Time constant $\\tau = RC$ significance:\n\n$\\text{Charging:}$\n- At $t = \\tau$: reaches $1 - e^{-1} \\approx 0.63 = 63\\%$ of final\n\n$\\text{Discharging:}$\n- At $t = \\tau$: decays to $e^{-1} \\approx 0.37 = 37\\%$ of initial\n\nRule of thumb:\n- After $5\\tau$: 99% complete (essentially done)\n- Larger $RC$ → slower charging/discharging"
        }
      ]
    }
  ]
};
