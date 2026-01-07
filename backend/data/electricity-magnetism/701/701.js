module.exports = {
  id: "701",
  courseId: "electricity-magnetism",
  topicId: "magnetic-forces",
  title: "Magnetic Fields & Lorentz Force",
  estimatedTime: "25 minutes",
  videos: [
    {
      videoId: "Gdh2srqH57M",
      videoTitle: "Magnetic Fields and Magnetic Force",
      questions: [
        {
          type: 'multiple-choice',
          question: "The magnetic force on a moving charged particle is given by:",
          options: [
            "$\\vec{F} = q\\vec{E}$ (electric force only)",
            "$\\vec{F} = q\\vec{v} \\times \\vec{B}$ (cross product)",
            "$\\vec{F} = q(\\vec{E} + \\vec{B})$",
            "$\\vec{F} = qvB$ (always)"
          ],
          correctAnswer: 1,
          explanation: "Magnetic force (Lorentz force):\n\n$$\\vec{F} = q\\vec{v} \\times \\vec{B}$$\n\nMagnitude: $F = qvB\\sin\\theta$ where $\\theta$ is angle between $\\vec{v}$ and $\\vec{B}$\n\nDirection: Right-hand rule\n- Point fingers along $\\vec{v}$\n- Curl toward $\\vec{B}$\n- Thumb points along $\\vec{F}$ (for positive $q$)\n\nKey: Force is $\\perp$ to both $\\vec{v}$ and $\\vec{B}$!"
        },
        {
          type: 'math-input',
          question: "A proton ($q = 1.6 \\times 10^{-19}$ C) moves at $2.0 \\times 10^6$ m/s perpendicular to a 0.50 T magnetic field. Calculate the magnetic force in $10^{-13}$ N.",
          mathAnswer: "1.6",
          answerRange: 0.1,
          explanation: "Using $F = qvB\\sin\\theta$ with $\\theta = 90°$ ($\\sin 90° = 1$):\n\n$$F = qvB = (1.6 \\times 10^{-19})(2.0 \\times 10^6)(0.50)$$\n\n$$F = (1.6 \\times 10^{-19})(10^6) = 1.6 \\times 10^{-13} \\text{ N}$$\n\nDirection: perpendicular to both velocity and field (right-hand rule)."
        }
      ]
    },
    {
      videoId: "w41Zijsv46o",
      videoTitle: "The Motion of a Charged Particle in a Magnetic Field",
      questions: [
        {
          type: 'multiple-choice',
          question: "When a charged particle moves perpendicular to a uniform magnetic field, its path is:",
          options: [
            "A straight line (no deflection)",
            "A parabola (like projectile motion)",
            "A circle (constant radius)",
            "A spiral (decreasing radius)"
          ],
          correctAnswer: 2,
          explanation: "Motion in uniform $\\vec{B}$ field:\n\nForce always $\\perp$ to velocity → $\\text{circular motion}$\n\nRadius: $r = \\frac{mv}{qB}$\n\nPeriod: $T = \\frac{2\\pi m}{qB}$ (independent of $v$!)\n\nAngular frequency: $\\omega = \\frac{qB}{m}$ (cyclotron frequency)\n\nKey: Magnetic force does $\\text{no work}$ (always $\\perp$ to motion) → constant speed."
        },
        {
          type: 'math-input',
          question: "An electron ($m = 9.1 \\times 10^{-31}$ kg, $q = -1.6 \\times 10^{-19}$ C) moves at $5.0 \\times 10^6$ m/s perpendicular to a 0.020 T field. Calculate the radius (in meters) of its circular path.",
          mathAnswer: "0.00142",
          answerRange: 0.0001,
          explanation: "Using $r = \\frac{mv}{|q|B}$:\n\n$$r = \\frac{(9.1 \\times 10^{-31})(5.0 \\times 10^6)}{(1.6 \\times 10^{-19})(0.020)}$$\n\n$$r = \\frac{4.55 \\times 10^{-24}}{3.2 \\times 10^{-21}} \\approx 1.42 \\times 10^{-3} \\text{ m} = 1.42 \\text{ mm}$$\n\nSmall radius due to tiny electron mass!"
        }
      ]
    },
    {
      videoId: "wcVzfTAK8fk",
      videoTitle: "The Mass Spectrometer",
      questions: [
        {
          type: 'multiple-choice',
          question: "A mass spectrometer separates ions based on their mass-to-charge ratio. After acceleration through voltage $V$, ions enter a magnetic field and follow circular paths. The radius depends on:",
          options: [
            "Only the charge $q$",
            "Only the mass $m$",
            "The ratio $m/q$ (mass-to-charge ratio)",
            "The magnetic field strength only"
          ],
          correctAnswer: 2,
          explanation: "Mass spectrometer principle:\n\n1. Ions accelerated: $qV = \\frac{1}{2}mv^2$ gives $v = \\sqrt{\\frac{2qV}{m}}$\n\n2. Circular motion in $B$: $r = \\frac{mv}{qB}$\n\nCombining:\n\n$$r = \\frac{1}{B}\\sqrt{\\frac{2mV}{q}} \\propto \\sqrt{\\frac{m}{q}}$$\n\nHeavier ions (larger $m/q$) → larger radius → spatial separation."
        }
      ]
    },
    {
      videoId: "5Fnq8TGbTfE",
      videoTitle: "The Velocity Selector",
      questions: [
        {
          type: 'multiple-choice',
          question: "A velocity selector uses crossed electric and magnetic fields. Particles with specific velocity pass straight through when:",
          options: [
            "$qE = qvB$ (forces balance)",
            "$E = vB$ (fields balance)",
            "$v = E/B$ (velocity selector condition)",
            "Both B and C are correct"
          ],
          correctAnswer: 3,
          explanation: "Velocity selector:\n\nElectric force: $\\vec{F}_E = q\\vec{E}$\n\nMagnetic force: $\\vec{F}_B = q\\vec{v} \\times \\vec{B}$\n\nFor straight-line motion: $F_E = F_B$\n\n$$qE = qvB$$\n\n$$v = \\frac{E}{B}$$\n\nOnly particles with this specific velocity pass undeflected!\n\nFaster/slower particles are deflected."
        }
      ]
    }
  ]
};
