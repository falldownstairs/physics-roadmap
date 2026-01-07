module.exports = {
  id: "202",
  courseId: "electricity-magnetism",
  topicId: "gauss-law",
  title: "Gauss's Law Applications",
  estimatedTime: "20 minutes",
  videos: [
    {
      videoId: "cQy8dborOs4",
      videoTitle: "Gauss's Law (part 2) - Electric field due to a very long uniformly charged wire",
      questions: [
        {
          type: 'multiple-choice',
          question: "When applying Gauss's Law to find the electric field of an infinite line charge, the best choice for the Gaussian surface is:",
          options: [
            "A sphere centered on a point of the line",
            "A cylinder with the line along its axis",
            "A cube surrounding a section of the line",
            "A flat disk perpendicular to the line"
          ],
          correctAnswer: 1,
          explanation: "For an infinite line charge, choose a $\\text{cylindrical}$ Gaussian surface with the line along its axis because:\n\n1. The field has $\\text{cylindrical symmetry}$ (points radially outward)\n2. On the curved surface: $\\vec{E} \\perp d\\vec{A}$ everywhere, so $\\vec{E} \\cdot d\\vec{A} = E \\, dA$\n3. On the flat ends: $\\vec{E} \\parallel d\\vec{A}$, so flux = 0\n4. By symmetry, $E$ is constant on the curved surface\n\nThis gives: $\\Phi_E = E(2\\pi rL) = \\frac{\\lambda L}{\\epsilon_0}$, yielding $E = \\frac{\\lambda}{2\\pi\\epsilon_0 r}$"
        },
        {
          type: 'math-input',
          question: "An infinite line charge has linear charge density $\\lambda = 3.0 \\times 10^{-9}$ C/m. Calculate the electric field magnitude (in N/C) at a perpendicular distance of $r = 0.20$ m from the line. (Use $\\epsilon_0 = 8.85 \\times 10^{-12}$ C²/(N·m²))",
          mathAnswer: "270",
          answerRange: 10,
          explanation: "Using Gauss's Law for an infinite line charge:\n\n$$E = \\frac{\\lambda}{2\\pi\\epsilon_0 r}$$\n\n$$E = \\frac{3.0 \\times 10^{-9}}{2\\pi(8.85 \\times 10^{-12})(0.20)}$$\n\n$$E = \\frac{3.0 \\times 10^{-9}}{1.113 \\times 10^{-11}} \\approx 270 \\text{ N/C}$$\n\nThe field decreases as $\\frac{1}{r}$ (not $\\frac{1}{r^2}$) due to the line's geometry."
        }
      ]
    },
    {
      videoId: "WQ6adZYd9_0",
      videoTitle: "Finding the Electric Field for a Uniformly Charged Solid Sphere",
      questions: [
        {
          type: 'multiple-choice',
          question: "For a uniformly charged non-conducting solid sphere of radius $R$ with total charge $Q$, the electric field at a point inside the sphere (at radius $r < R$) is:",
          options: [
            "$E = \\frac{kQ}{r^2}$ (same as outside)",
            "$E = \\frac{kQr}{R^3}$ (proportional to $r$)",
            "$E = 0$ (like a conducting sphere)",
            "$E = \\frac{kQ}{R^2}$ (constant inside)"
          ],
          correctAnswer: 1,
          explanation: "Inside a uniformly charged $\\text{insulating sphere}$ ($r < R$):\n\n$$E = \\frac{kQr}{R^3}$$\n\nUsing Gauss's Law with a spherical Gaussian surface at radius $r$:\n- Only charge within radius $r$ contributes: $Q_{\\text{enc}} = Q\\frac{r^3}{R^3}$\n- Applying Gauss's Law: $E(4\\pi r^2) = \\frac{Q_{\\text{enc}}}{\\epsilon_0}$\n\nThis gives $E \\propto r$ (field increases linearly from center).\n\nAt the surface ($r = R$): $E = \\frac{kQ}{R^2}$"
        }
      ]
    },
    {
      videoId: "klNH7T57o3I",
      videoTitle: "Conductors in Electrostatic Equilibrium",
      questions: [
        {
          type: 'multiple-choice',
          question: "For a conductor in electrostatic equilibrium, which statement is TRUE?",
          options: [
            "The electric field inside is uniform but nonzero",
            "The electric field inside is zero, and any excess charge resides on the surface",
            "Charges are uniformly distributed throughout the volume",
            "The electric field at the surface is parallel to the surface"
          ],
          correctAnswer: 1,
          explanation: "For a $\\text{conductor in electrostatic equilibrium}$:\n\n1. $\\vec{E} = 0$ inside the conductor (charges have stopped moving)\n2. All excess charge resides on the $\\text{surface}$\n3. The electric field just outside is $\\text{perpendicular}$ to the surface\n4. The surface is an equipotential\n\nIf there were a field inside, charges would move until equilibrium is reached. By Gauss's Law, since $E = 0$ inside, no net charge exists in the interior."
        }
      ]
    }
  ]
};
