module.exports = {
  id: "1001",
  courseId: "electricity-magnetism",
  topicId: "inductance",
  title: "RL Circuits",
  estimatedTime: "25 minutes",
  videos: [
    {
      videoId: "LLr1kZJas6U",
      videoTitle: "RL Circuits - Current Growth",
      questions: [
        {
          type: 'multiple-choice',
          question: "In an RL circuit with battery $\\mathcal{E}$, resistor $R$, and inductor $L$, when the switch closes, the current $I(t)$ grows according to:",
          options: [
            "$I(t) = I_0(1 - e^{-t/(L/R)})$ where $I_0 = \\mathcal{E}/R$",
            "$I(t) = I_0 e^{-t/(L/R)}$",
            "$I(t) = I_0 t/(L/R)$",
            "$I(t) = I_0$ (instantly)"
          ],
          correctAnswer: 0,
          explanation: "RL circuit current growth:\n\n$$I(t) = I_0(1 - e^{-t/\\tau})$$\n\nwhere:\n- $I_0 = \\mathcal{E}/R$ = final steady-state current\n- $\\tau = L/R$ = inductive time constant\n\nAt $t = 0$: $I = 0$ (inductor opposes sudden change)\n\nAt $t = \\tau$: $I = 0.63 I_0$ (63% of final value)\n\nAt $t = 5\\tau$: $I \\approx I_0$ (essentially steady state)\n\nInductor behaves like open circuit initially, short circuit finally."
        },
        {
          type: 'math-input',
          question: "An RL circuit has $R = 50$ Ω and $L = 0.10$ H. Calculate the time constant $\\tau$ (in seconds).",
          mathAnswer: "0.002",
          answerRange: 0.0001,
          explanation: "Time constant: $\\tau = L/R$\n\n$$\\tau = \\frac{0.10}{50} = 0.002 \\text{ s} = 2.0 \\text{ ms}$$\n\nAfter 2.0 ms, current reaches 63% of final value.\n\nAfter 10 ms ($5\\tau$), essentially at steady state."
        }
      ]
    },
    {
      videoId: "75GaI2O1TW4",
      videoTitle: "RL Circuits - Current Decay",
      questions: [
        {
          type: 'multiple-choice',
          question: "When the battery is removed from an RL circuit (but R and L remain connected), the current decays according to:",
          options: [
            "$I(t) = I_0 e^{-t/(L/R)}$",
            "$I(t) = I_0(1 - e^{-t/(L/R)})$",
            "$I(t) = I_0 - Rt/L$",
            "$I(t) = 0$ (instantly)"
          ],
          correctAnswer: 0,
          explanation: "RL circuit current decay:\n\n$$I(t) = I_0 e^{-t/\\tau}$$\n\nwhere $\\tau = L/R$\n\nAt $t = 0$: $I = I_0$ (current cannot change instantly)\n\nAt $t = \\tau$: $I = 0.37 I_0$ (37% of initial value)\n\nInductor maintains current flow by inducing EMF: $\\mathcal{E}_L = -L\\frac{dI}{dt}$\n\nEnergy stored in inductor dissipates as heat in resistor."
        },
        {
          type: 'math-input',
          question: "An RL circuit with time constant 5.0 ms has initial current 2.0 A. Calculate the current (in amperes) after 10 ms. (Use $e^{-2} \\approx 0.135$)",
          mathAnswer: "0.27",
          answerRange: 0.02,
          explanation: "Using $I(t) = I_0 e^{-t/\\tau}$:\n\nTime elapsed: $t/\\tau = 10/5.0 = 2$\n\n$$I(10) = 2.0 \\cdot e^{-2} = 2.0(0.135) = 0.27 \\text{ A}$$\n\nAfter $2\\tau$, current decays to 13.5% of initial value."
        }
      ]
    },
    {
      videoId: "CG6qC6XSv8Y",
      videoTitle: "Energy Considerations in RL Circuits",
      questions: [
        {
          type: 'multiple-choice',
          question: "As current builds up in an RL circuit, the energy supplied by the battery is:",
          options: [
            "All stored in the inductor",
            "All dissipated in the resistor",
            "Split: half in inductor, half dissipated",
            "Distributed between inductor storage and resistor dissipation (not necessarily equal)"
          ],
          correctAnswer: 3,
          explanation: "Energy distribution in RL circuit:\n\nBattery supplies: $U_{\\text{battery}} = \\int_0^{\\infty} \\mathcal{E} I \\, dt$\n\nEnergy stored in inductor: $U_L = \\frac{1}{2}LI_0^2$\n\nEnergy dissipated in resistor: $U_R = \\int_0^{\\infty} I^2R \\, dt$\n\nResult: $U_{\\text{battery}} = U_L + U_R$\n\nFor RL circuit: $U_L = U_R = \\frac{1}{2}LI_0^2$\n\nHalf stored, half dissipated (similar to RC charging!)."
        }
      ]
    }
  ]
};
