module.exports = {
  id: "904",
  courseId: "electricity-magnetism",
  topicId: "em-induction",
  title: "Self-Inductance",
  estimatedTime: "20 minutes",
  videos: [
    {
      videoId: "2DH7ufrkeHM",
      videoTitle: "Self-Inductance",
      questions: [
        {
          type: 'multiple-choice',
          question: "Self-inductance $L$ of a coil is defined by the relationship:",
          options: [
            "$\\Phi_B = LI$ (flux proportional to current)",
            "$V = LI$ (voltage proportional to current)",
            "$\\mathcal{E} = L\\frac{dI}{dt}$",
            "Both A and C are used to define $L$"
          ],
          correctAnswer: 3,
          explanation: "Self-inductance definitions:\n\n$$\\Phi_B = LI$$\n\n(flux through coil due to its own current)\n\nInduced EMF:\n\n$$\\mathcal{E} = -L\\frac{dI}{dt}$$\n\nUnits: henry (H) = Wb/A = V·s/A\n\n$L$ depends only on geometry:\n- Number of turns\n- Shape and size\n- Core material\n\nLarger $L$ → opposes current changes more strongly."
        }
      ]
    },
    {
      videoId: "de4CWQoJ684",
      videoTitle: "Calculating the Self-Inductance of a Solenoid",
      questions: [
        {
          type: 'multiple-choice',
          question: "The self-inductance of a solenoid with $N$ turns, length $l$, and cross-sectional area $A$ is:",
          options: [
            "$L = \\mu_0 NA/l$",
            "$L = \\mu_0 N^2A/l$",
            "$L = \\mu_0 Nl/A$",
            "$L = \\mu_0 N/l$"
          ],
          correctAnswer: 1,
          explanation: "Solenoid self-inductance:\n\n$$L = \\mu_0\\frac{N^2A}{l} = \\mu_0 n^2 Al$$\n\nwhere $n = N/l$ = turns per length.\n\nDerivation:\n- Field inside: $B = \\mu_0 nI$\n- Flux per turn: $\\Phi_1 = BA$\n- Total flux: $\\Phi_B = N\\Phi_1 = NBA = \\mu_0 n^2AlI$\n- Therefore: $L = \\Phi_B/I = \\mu_0 n^2Al$\n\nNote: $L \\propto N^2$ (doubling turns quadruples $L$!)"
        },
        {
          type: 'math-input',
          question: "A solenoid has 1000 turns, length 0.50 m, and radius 0.020 m. Calculate its self-inductance (in henries). (Use $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A, $\\pi \\approx 3.14$)",
          mathAnswer: "0.00316",
          answerRange: 0.0002,
          explanation: "Area: $A = \\pi r^2 = 3.14(0.020)^2 = 0.001256$ m²\n\nUsing $L = \\mu_0\\frac{N^2A}{l}$:\n\n$$L = (4\\pi \\times 10^{-7})\\frac{(1000)^2(0.001256)}{0.50}$$\n\n$$L = (1.26 \\times 10^{-6})\\frac{1{,}000{,}000 \\times 0.001256}{0.50}$$\n\n$$L \\approx (1.26 \\times 10^{-6})(2512) \\approx 0.00316 \\text{ H} = 3.16 \\text{ mH}$$"
        }
      ]
    },
    {
      videoId: "Wgtw5lPKFXI",
      videoTitle: "Energy Stored in an Inductor",
      questions: [
        {
          type: 'multiple-choice',
          question: "The energy $U$ stored in an inductor with inductance $L$ carrying current $I$ is:",
          options: [
            "$U = LI$",
            "$U = \\frac{1}{2}LI$",
            "$U = \\frac{1}{2}LI^2$",
            "$U = LI^2$"
          ],
          correctAnswer: 2,
          explanation: "Energy in inductor:\n\n$$U = \\frac{1}{2}LI^2$$\n\nDerivation: Work to establish current against back-EMF:\n\n$$U = \\int_0^I \\mathcal{E} \\, dq = \\int_0^I L\\frac{dI}{dt} I \\, dt = \\int_0^I LI \\, dI = \\frac{1}{2}LI^2$$\n\nAnalogous to:\n- Capacitor: $U = \\frac{1}{2}CV^2$\n- Kinetic energy: $KE = \\frac{1}{2}mv^2$\n\nInductor stores energy in magnetic field."
        }
      ]
    }
  ]
};
