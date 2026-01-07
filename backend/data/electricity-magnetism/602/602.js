module.exports = {
  id: "602",
  courseId: "electricity-magnetism",
  topicId: "rc-circuits",
  title: "Energy & Applications",
  estimatedTime: "20 minutes",
  videos: [
    {
      videoId: "eCOLkUPSpxc",
      videoTitle: "Energy Considerations in RC Circuits",
      questions: [
        {
          type: 'multiple-choice',
          question: "When charging a capacitor through a resistor from a battery, the energy supplied by the battery $U_b$ and energy stored in the capacitor $U_C$ are related by:",
          options: [
            "$U_b = U_C$ (all energy goes to capacitor)",
            "$U_b = 2U_C$ (half dissipated as heat in resistor)",
            "$U_b = U_C/2$ (capacitor stores more than battery provides)",
            "$U_b = 3U_C$"
          ],
          correctAnswer: 1,
          explanation: "Energy analysis for RC charging:\n\nBattery supplies: $U_b = Q\\mathcal{E} = C\\mathcal{E}^2$\n\nCapacitor stores: $U_C = \\frac{1}{2}C\\mathcal{E}^2$\n\nResistor dissipates: $U_R = \\frac{1}{2}C\\mathcal{E}^2$\n\nTherefore:\n\n$$U_b = 2U_C$$\n\nHalf the energy is $\\text{always}$ dissipated as heat, independent of $R$ value!\n\n(Smaller $R$ → faster charging but larger current → same total heat)"
        },
        {
          type: 'math-input',
          question: "A 100 μF capacitor is charged to 50 V through a resistor. Calculate the energy dissipated (in joules) as heat in the resistor.",
          mathAnswer: "0.125",
          answerRange: 0.005,
          explanation: "Energy dissipated = energy stored in capacitor:\n\n$$U_R = U_C = \\frac{1}{2}CV^2$$\n\n$$U_R = \\frac{1}{2}(100 \\times 10^{-6})(50)^2$$\n\n$$U_R = \\frac{1}{2}(10^{-4})(2500) = 0.125 \\text{ J}$$\n\nBattery supplied: $U_b = CV^2 = 0.25$ J (twice as much)."
        }
      ]
    },
    {
      videoId: "uZs31-U4GQA",
      videoTitle: "RC Circuit Applications",
      questions: [
        {
          type: 'multiple-choice',
          question: "RC circuits are commonly used in:",
          options: [
            "Timing circuits and filters only",
            "Power amplification",
            "Timing, filtering, waveshaping, and delay circuits",
            "Direct current generation"
          ],
          correctAnswer: 2,
          explanation: "RC circuit applications:\n\n$\\text{1. Timing circuits:}$ delay switches, pulse generators\n\n$\\text{2. Filters:}$ block/pass certain frequencies\n- Low-pass: passes low frequencies, blocks high\n- High-pass: passes high frequencies, blocks low\n\n$\\text{3. Waveshaping:}$ convert square → triangle waves\n\n$\\text{4. Coupling/decoupling:}$ AC/DC separation\n\nKey: exponential charging/discharging provides controllable time delays."
        }
      ]
    },
    {
      videoId: "5lYEpfpIqiQ",
      videoTitle: "Designing RC Filter Circuits",
      questions: [
        {
          type: 'multiple-choice',
          question: "A low-pass RC filter allows low frequencies to pass and blocks high frequencies. The cutoff frequency $f_c$ is:",
          options: [
            "$f_c = RC$",
            "$f_c = 2\\pi RC$",
            "$f_c = \\frac{1}{2\\pi RC}$",
            "$f_c = \\frac{1}{RC}$"
          ],
          correctAnswer: 2,
          explanation: "RC filter cutoff frequency:\n\n$$f_c = \\frac{1}{2\\pi RC}$$\n\nOr angular frequency: $\\omega_c = \\frac{1}{RC} = 2\\pi f_c$\n\nAt $f_c$:\n- Output voltage is $1/\\sqrt{2} \\approx 0.707$ of input (3 dB down)\n- Power is half\n\nLow-pass: output across capacitor\nHigh-pass: output across resistor\n\nLarger $RC$ → lower cutoff frequency."
        },
        {
          type: 'math-input',
          question: "Design a low-pass filter with cutoff frequency 1000 Hz using $R = 10$ kΩ. Calculate the required capacitance (in microfarads). (Use $\\pi \\approx 3.14$)",
          mathAnswer: "0.016",
          answerRange: 0.002,
          explanation: "From $f_c = \\frac{1}{2\\pi RC}$, solve for $C$:\n\n$$C = \\frac{1}{2\\pi R f_c}$$\n\n$$C = \\frac{1}{2(3.14)(10 \\times 10^3)(1000)}$$\n\n$$C = \\frac{1}{6.28 \\times 10^7} \\approx 1.6 \\times 10^{-8} \\text{ F}$$\n\n$$C \\approx 0.016 \\,\\mu\\text{F} = 16 \\text{ nF}$$"
        }
      ]
    }
  ]
};
