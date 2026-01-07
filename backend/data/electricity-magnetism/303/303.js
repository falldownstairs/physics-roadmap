module.exports = {
  id: "303",
  courseId: "electricity-magnetism",
  topicId: "electric-potential",
  title: "Conductors & Equipotentials",
  estimatedTime: "20 minutes",
  videos: [
    {
      videoId: "nF7VsE5AI1A",
      videoTitle: "Equipotential Lines and Equipotential Surfaces",
      questions: [
        {
          type: 'multiple-choice',
          question: "Equipotential surfaces are surfaces where the electric potential has the same value everywhere. Which statement is true?",
          options: [
            "The electric field is parallel to equipotential surfaces",
            "The electric field is perpendicular to equipotential surfaces",
            "No work is required to move along an equipotential surface",
            "Both B and C are correct"
          ],
          correctAnswer: 3,
          explanation: "Properties of equipotential surfaces:\n\n1. $\\vec{E} \\perp$ equipotential surfaces (field points toward lower $V$)\n\n2. No work to move along equipotential:\n\n$$W = -q\\Delta V = 0 \\text{ (since } \\Delta V = 0\\text{)}$$\n\nFor point charge:\n- Equipotentials are spheres centered on the charge\n- Field lines are radial, perpendicular to spheres\n\nCloser spacing of equipotentials → stronger field."
        },
        {
          type: 'multiple-choice',
          question: "The equipotential surfaces around a positive point charge are:",
          options: [
            "Parallel planes perpendicular to the field lines",
            "Concentric spheres centered on the charge",
            "Hyperbolic surfaces",
            "Cylindrical surfaces"
          ],
          correctAnswer: 1,
          explanation: "For a point charge $Q$:\n\n$$V(r) = k\\frac{Q}{r}$$\n\nEquipotential surfaces: all points with same $r$ (same distance from charge).\n\nThese form $\\text{concentric spheres}$.\n\nField lines:\n- Radial (point outward for $+Q$, inward for $-Q$)\n- Perpendicular to spherical equipotentials"
        }
      ]
    },
    {
      videoId: "Sb1mydS075g",
      videoTitle: "Electric Potential on the Surface of a Conductor and in a Cavity Inside the Conductor",
      questions: [
        {
          type: 'multiple-choice',
          question: "For a conductor in electrostatic equilibrium, which statement is FALSE?",
          options: [
            "The electric field inside is zero",
            "The entire conductor (including surface) is at the same potential",
            "Excess charge resides on the inner and outer surfaces",
            "The surface is an equipotential"
          ],
          correctAnswer: 2,
          explanation: "Properties of conductors in equilibrium:\n\n✓ $\\vec{E} = 0$ inside\n✓ Entire conductor at same $V$ (equipotential)\n✓ Surface is equipotential\n✗ Excess charge resides on $\\text{outer surface only}$\n\nIf there's a cavity with no charge inside:\n- No charge on cavity surface\n- $E = 0$ in cavity\n- $V$ is constant throughout conductor and cavity"
        },
        {
          type: 'math-input',
          question: "A conducting sphere of radius 0.10 m carries total charge $+5.0 \\times 10^{-9}$ C. Calculate the electric potential (in volts) at the surface. (Use $k = 9.0 \\times 10^9$ N·m²/C²)",
          mathAnswer: "450",
          answerRange: 10,
          explanation: "For conducting sphere:\n- All charge on outer surface\n- $V$ at surface: $V = k\\frac{Q}{R}$\n\n$$V = (9.0 \\times 10^9)\\frac{5.0 \\times 10^{-9}}{0.10}$$\n\n$$V = \\frac{45}{0.10} = 450 \\text{ V}$$\n\nInside the conductor: $V = 450$ V everywhere (constant).\n\nOutside ($r > R$): $V = k\\frac{Q}{r}$ (decreases as $1/r$)."
        }
      ]
    },
    {
      videoId: "zFnHEwDUbMQ",
      videoTitle: "The Electric Potential Due to a Continuous Distribution of Charge on a Line",
      questions: [
        {
          type: 'multiple-choice',
          question: "To find the electric potential at a point due to a continuous line of charge with charge density $\\lambda$, you must:",
          options: [
            "Use $V = k\\lambda/r$ directly",
            "Integrate: $V = \\int k\\frac{dq}{r}$ over the charge distribution",
            "First find $\\vec{E}$, then integrate to get $V$",
            "Use Gauss's Law"
          ],
          correctAnswer: 1,
          explanation: "For continuous charge distribution:\n\n$$V = \\int dV = \\int k\\frac{dq}{r}$$\n\nFor line charge with density $\\lambda$:\n\n$$dq = \\lambda \\, dl$$\n\n$$V = k\\int \\frac{\\lambda \\, dl}{r}$$\n\nwhere $r$ is distance from charge element $dq$ to the field point.\n\nNote: $V$ is scalar, so no vector components (easier than finding $\\vec{E}$)!\n\nFor symmetry, you can find $V$ first, then use $\\vec{E} = -\\nabla V$."
        }
      ]
    },
    {
      videoId: "INOp5_IrylM",
      videoTitle: "The Electric Potential Due to a Continuous Distribution of Charge on a Disk",
      questions: [
        {
          type: 'multiple-choice',
          question: "When calculating the potential at a point on the axis of a uniformly charged disk, a useful strategy is to:",
          options: [
            "Treat the disk as a point charge at its center",
            "Divide the disk into concentric rings and integrate",
            "Use Gauss's Law to find $E$, then integrate",
            "Sum the potentials from each surface charge element directly"
          ],
          correctAnswer: 1,
          explanation: "For a charged disk with surface density $\\sigma$:\n\nDivide into concentric rings:\n- Ring at radius $r'$ with width $dr'$\n- Charge: $dq = \\sigma (2\\pi r' dr')$\n- Distance to point on axis: $\\sqrt{r'^2 + z^2}$\n\n$$dV = k\\frac{dq}{\\sqrt{r'^2 + z^2}} = k\\frac{\\sigma 2\\pi r' dr'}{\\sqrt{r'^2 + z^2}}$$\n\nIntegrate from $r' = 0$ to $r' = R$:\n\n$$V = 2\\pi k\\sigma \\int_0^R \\frac{r' dr'}{\\sqrt{r'^2 + z^2}}$$"
        }
      ]
    }
  ]
};
