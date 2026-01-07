module.exports = {
  id: "902",
  courseId: "electricity-magnetism",
  topicId: "em-induction",
  title: "Motional EMF",
  estimatedTime: "25 minutes",
  videos: [
    {
      videoId: "he3ByTc2OQo",
      videoTitle: "Motional EMF",
      questions: [
        {
          type: 'multiple-choice',
          question: "When a conducting rod of length $L$ moves with velocity $v$ perpendicular to magnetic field $B$, the motional EMF induced is:",
          options: [
            "$\\mathcal{E} = BLv$",
            "$\\mathcal{E} = Bv/L$",
            "$\\mathcal{E} = BL/v$",
            "$\\mathcal{E} = BL^2v$"
          ],
          correctAnswer: 0,
          explanation: "Motional EMF:\n\n$$\\mathcal{E} = BLv$$\n\nwhen $\\vec{v}$, $\\vec{B}$, and $L$ are mutually perpendicular.\n\nPhysical origin:\n- Charges in moving conductor experience force: $\\vec{F} = q\\vec{v} \\times \\vec{B}$\n- Charges separate creating potential difference\n- EMF = work per charge = $\\frac{F \\cdot L}{q} = vBL$\n\nAlternatively, from Faraday: $\\mathcal{E} = \\frac{d\\Phi_B}{dt} = B\\frac{dA}{dt} = BLv$"
        },
        {
          type: 'math-input',
          question: "A 0.40 m rod moves at 5.0 m/s perpendicular to a 0.60 T magnetic field. Calculate the induced EMF (in volts).",
          mathAnswer: "1.2",
          answerRange: 0.1,
          explanation: "Using $\\mathcal{E} = BLv$:\n\n$$\\mathcal{E} = (0.60)(0.40)(5.0) = 1.2 \\text{ V}$$\n\nDirection: determined by right-hand rule ($\\vec{v} \\times \\vec{B}$) or Lenz's Law."
        }
      ]
    },
    {
      videoId: "YOPTpv5wWlo",
      videoTitle: "The EMF Induced in a Moving Conductor",
      questions: [
        {
          type: 'multiple-choice',
          question: "A conducting rod slides on parallel rails in a magnetic field, forming a closed loop. If the rod moves with constant velocity, the induced current:",
          options: [
            "Increases exponentially",
            "Remains constant (steady state)",
            "Decreases to zero",
            "Oscillates"
          ],
          correctAnswer: 1,
          explanation: "Sliding rod on rails:\n\nInduced EMF: $\\mathcal{E} = BLv$ (constant if $v$ constant)\n\nInduced current: $I = \\mathcal{E}/R = BLv/R$ (constant)\n\nMagnetic force on rod: $F_{\\text{mag}} = BIL = \\frac{B^2L^2v}{R}$ (opposes motion)\n\nTo maintain constant $v$, external force must balance magnetic force:\n\n$$F_{\\text{ext}} = \\frac{B^2L^2v}{R}$$\n\nPower dissipated: $P = I^2R = \\frac{B^2L^2v^2}{R}$ = $F_{\\text{ext}} \\cdot v$"
        }
      ]
    },
    {
      videoId: "q8g5k1W-rTs",
      videoTitle: "Eddy Currents",
      questions: [
        {
          type: 'multiple-choice',
          question: "Eddy currents are:",
          options: [
            "Currents that flow in straight lines",
            "Swirling induced currents in bulk conductors moving through magnetic fields",
            "Currents in superconductors",
            "DC currents only"
          ],
          correctAnswer: 1,
          explanation: "Eddy currents:\n\n$\\text{Formation:}$\n- Conductor moves through non-uniform $\\vec{B}$ field\n- Or changing $\\vec{B}$ field in stationary conductor\n- Induced currents circulate in loops (\"eddies\")\n\n$\\text{Effects:}$\n- Create opposing magnetic force (braking)\n- Dissipate energy as heat\n\n$\\text{Applications:}$\n- Magnetic braking (trains, roller coasters)\n- Induction heating\n- Metal detectors\n\n$\\text{Reduction:}$ Laminate metal (use thin sheets with insulation) to minimize eddy current paths."
        }
      ]
    }
  ]
};
