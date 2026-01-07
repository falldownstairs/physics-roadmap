module.exports = {
  id: "804",
  courseId: "electricity-magnetism",
  topicId: "sources-b-fields",
  title: "Magnetic Materials",
  estimatedTime: "20 minutes",
  videos: [
    {
      videoId: "lN296gUXkl4",
      videoTitle: "Magnetic Properties of Materials",
      questions: [
        {
          type: 'multiple-choice',
          question: "When a magnetic material is inserted into a solenoid, the magnetic field is modified by the relative permeability $K_m$ (also written $\\mu_r$). The new field is:",
          options: [
            "$B = K_m B_0$ where $B_0 = \\mu_0 nI$",
            "$B = B_0/K_m$",
            "$B = K_m^2 B_0$",
            "Unchanged"
          ],
          correctAnswer: 0,
          explanation: "Magnetic field in material:\n\n$$B = K_m B_0 = K_m \\mu_0 nI = \\mu nI$$\n\nwhere $\\mu = K_m \\mu_0$ is permeability of material.\n\nThree types of materials:\n- $\\text{Diamagnetic}$: $K_m < 1$ (slightly repelled, e.g., copper)\n- $\\text{Paramagnetic}$: $K_m > 1$ (slightly attracted, e.g., aluminum)\n- $\\text{Ferromagnetic}$: $K_m \\gg 1$ (strongly attracted, e.g., iron, $K_m \\sim 1000$)"
        }
      ]
    },
    {
      videoId: "C0FbuTBd26s",
      videoTitle: "Ferromagnetism",
      questions: [
        {
          type: 'multiple-choice',
          question: "Ferromagnetic materials (like iron) can retain magnetization after an external field is removed. This property is called:",
          options: [
            "Permeability",
            "Hysteresis",
            "Paramagnetism",
            "Diamagnetism"
          ],
          correctAnswer: 1,
          explanation: "Ferromagnetic properties:\n\n$\\text{Hysteresis:}$ \n- Magnetization lags behind applied field\n- B-H curve forms a loop\n- Retains magnetization when field removed (permanent magnets)\n\n$\\text{Magnetic domains:}$\n- Regions of aligned atomic magnetic moments\n- External field aligns domains\n- Curie temperature: loses ferromagnetism when heated above $T_C$\n\nApplications: transformers, motors, data storage"
        }
      ]
    },
    {
      videoId: "NLo71Q8Usuc",
      videoTitle: "Magnetic Field Lines and Magnetic Flux",
      questions: [
        {
          type: 'multiple-choice',
          question: "Unlike electric field lines, magnetic field lines:",
          options: [
            "Always form closed loops (no magnetic monopoles)",
            "Begin on north poles and end on south poles",
            "Can start or end in space",
            "Are always straight"
          ],
          correctAnswer: 0,
          explanation: "Magnetic field line properties:\n\n1. Always form $\\text{closed loops}$ (no magnetic monopoles!)\n2. Never cross\n3. Density indicates field strength\n4. Outside magnet: N → S\n5. Inside magnet: S → N (completing loop)\n\nMathematically:\n\n$$\\oint \\vec{B} \\cdot d\\vec{A} = 0$$\n\n(Gauss's Law for magnetism: no magnetic charges)\n\nContrast with electric field lines that begin/end on charges."
        }
      ]
    }
  ]
};
