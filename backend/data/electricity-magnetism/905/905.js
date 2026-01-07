module.exports = {
  id: "905",
  courseId: "electricity-magnetism",
  topicId: "em-induction",
  title: "Mutual Inductance & Energy",
  estimatedTime: "20 minutes",
  videos: [
    {
      videoId: "IwM32ArGxm4",
      videoTitle: "Mutual Inductance",
      questions: [
        {
          type: 'multiple-choice',
          question: "Two coils have mutual inductance $M$ if a changing current in coil 1 induces an EMF in coil 2. The relationship is:",
          options: [
            "$\\mathcal{E}_2 = -M\\frac{dI_1}{dt}$",
            "$\\mathcal{E}_2 = M I_1$",
            "$\\mathcal{E}_2 = -\\frac{M}{I_1}$",
            "$\\mathcal{E}_2 = M\\frac{dI_2}{dt}$"
          ],
          correctAnswer: 0,
          explanation: "Mutual inductance:\n\n$$\\mathcal{E}_2 = -M\\frac{dI_1}{dt}$$\n\nEMF in coil 2 from changing current in coil 1.\n\nSymmetric: $\\mathcal{E}_1 = -M\\frac{dI_2}{dt}$ (same $M$)\n\nUnits: henry (H)\n\n$M$ depends on:\n- Geometry of both coils\n- Relative position/orientation\n- Core material\n\nApplications: transformers, wireless charging, induction coils."
        }
      ]
    },
    {
      videoId: "u-9H6kq5Um8",
      videoTitle: "Energy Density of a Magnetic Field",
      questions: [
        {
          type: 'multiple-choice',
          question: "The energy density $u$ (energy per unit volume) in a magnetic field $B$ is:",
          options: [
            "$u = \\frac{B^2}{2\\mu_0}$",
            "$u = \\frac{\\mu_0 B^2}{2}$",
            "$u = \\frac{B}{\\mu_0}$",
            "$u = \\mu_0 B$"
          ],
          correctAnswer: 0,
          explanation: "Magnetic energy density:\n\n$$u = \\frac{B^2}{2\\mu_0} \\quad \\text{(J/m}^3\\text{)}$$\n\nFor solenoid:\n- Energy: $U = \\frac{1}{2}LI^2$\n- $L = \\mu_0 n^2 Al$, $B = \\mu_0 nI$\n- Volume: $V = Al$\n- Energy density: $u = U/V = \\frac{B^2}{2\\mu_0}$\n\nCompare to electric: $u_E = \\frac{1}{2}\\epsilon_0 E^2$\n\nNote different factors: $\\mu_0$ in denominator vs $\\epsilon_0$ in numerator!"
        },
        {
          type: 'math-input',
          question: "The magnetic field in a region has magnitude 0.80 T. Calculate the energy density (in J/m³) in this region. (Use $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A)",
          mathAnswer: "254648",
          answerRange: 5000,
          explanation: "Using $u = \\frac{B^2}{2\\mu_0}$:\n\n$$u = \\frac{(0.80)^2}{2(4\\pi \\times 10^{-7})}$$\n\n$$u = \\frac{0.64}{2(1.26 \\times 10^{-6})} = \\frac{0.64}{2.52 \\times 10^{-6}}$$\n\n$$u \\approx 2.54 \\times 10^5 \\text{ J/m}^3 \\approx 254{,}000 \\text{ J/m}^3$$\n\nStrong magnetic fields store significant energy!"
        }
      ]
    },
    {
      videoId: "9qSw2FNkE0I",
      videoTitle: "Applications of Electromagnetic Induction",
      questions: [
        {
          type: 'multiple-choice',
          question: "Electromagnetic induction is used in all of the following EXCEPT:",
          options: [
            "Electric generators (power plants)",
            "Transformers (voltage conversion)",
            "Induction cooktops (heating)",
            "Static electricity generation"
          ],
          correctAnswer: 3,
          explanation: "EM induction applications:\n\n✓ $\\text{Generators:}$ mechanical → electrical energy\n\n✓ $\\text{Transformers:}$ AC voltage conversion\n\n✓ $\\text{Induction cooktops:}$ oscillating B field induces currents in pot → heating\n\n✓ $\\text{Metal detectors:}$ eddy currents in metal\n\n✓ $\\text{Wireless charging:}$ mutual inductance\n\n✓ $\\text{Magnetic braking:}$ eddy current damping\n\n✗ $\\text{Static electricity:}$ involves charge separation, not changing magnetic flux\n\nEM induction requires $\\text{changing}$ magnetic fields!"
        }
      ]
    }
  ]
};
