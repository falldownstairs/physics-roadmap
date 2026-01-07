module.exports = {
  id: "204",
  courseId: "electricity-magnetism",
  topicId: "gauss-law",
  title: "Planes & Non-Uniform",
  estimatedTime: "25 minutes",
  videos: [
    {
      videoId: "E7JGUTz52cw",
      videoTitle: "Gauss's Law and the Electric Field Due to a Very Long and Wide Slab of Charge",
      questions: [
        {
          type: 'multiple-choice',
          question: "A thick slab of insulating material with uniform volume charge density $\\rho$ extends from $y = 0$ to $y = d$. Using Gauss's Law, the electric field inside the slab (for $0 < y < d$) is:",
          options: [
            "Zero (like inside a conductor)",
            "$E = \\frac{\\rho y}{\\epsilon_0}$ (increases linearly with $y$)",
            "$E = \\frac{\\rho d}{2\\epsilon_0}$ (constant)",
            "$E = \\frac{\\rho}{\\epsilon_0 y^2}$ (decreases with $y$)"
          ],
          correctAnswer: 1,
          explanation: "For a slab with uniform volume charge density $\\rho$:\n\nUsing a Gaussian pillbox at height $y$ inside:\n- Enclosed charge: $Q_{\\text{enc}} = \\rho \\cdot A \\cdot y$\n- Flux through top: $EA$\n- Flux through bottom and sides: 0 (by symmetry)\n\n$$EA = \\frac{\\rho A y}{\\epsilon_0}$$\n\n$$E = \\frac{\\rho y}{\\epsilon_0}$$\n\nThe field increases $\\text{linearly}$ from zero at $y = 0$ to maximum at $y = d$."
        }
      ]
    },
    {
      videoId: "jQBJ48-KcFA",
      videoTitle: "Gauss's Law and the Electric Field Due to a Very Long and Wide Plane of Charge",
      questions: [
        {
          type: 'multiple-choice',
          question: "For an infinite plane with uniform surface charge density $\\sigma$, the electric field magnitude at any distance from the plane is:",
          options: [
            "$E = \\frac{\\sigma}{\\epsilon_0}$",
            "$E = \\frac{\\sigma}{2\\epsilon_0}$",
            "$E = \\frac{k\\sigma}{r^2}$ (depends on distance)",
            "Zero by symmetry"
          ],
          correctAnswer: 1,
          explanation: "For an $\\text{infinite plane}$ of charge:\n\n$$E = \\frac{\\sigma}{2\\epsilon_0}$$\n\nUsing a cylindrical Gaussian surface perpendicular to the plane:\n- Flux through each flat end: $EA$\n- Total flux: $2EA$\n- Enclosed charge: $\\sigma A$\n\n$$2EA = \\frac{\\sigma A}{\\epsilon_0} \\Rightarrow E = \\frac{\\sigma}{2\\epsilon_0}$$\n\nKey insight: The field is $\\text{uniform}$ and $\\text{independent of distance}$ from the plane!"
        },
        {
          type: 'math-input',
          question: "Two large parallel plates have surface charge densities $+\\sigma$ and $-\\sigma$ with $\\sigma = 4.0 \\times 10^{-9}$ C/m². Calculate the magnitude of the electric field (in N/C) between the plates. (Use $\\epsilon_0 = 8.85 \\times 10^{-12}$ C²/(N·m²))",
          mathAnswer: "452",
          answerRange: 10,
          explanation: "Between two oppositely charged parallel plates:\n\nEach plate creates field: $E_1 = E_2 = \\frac{\\sigma}{2\\epsilon_0}$\n\nBetween plates, fields add (both point same direction):\n\n$$E_{\\text{total}} = \\frac{\\sigma}{2\\epsilon_0} + \\frac{\\sigma}{2\\epsilon_0} = \\frac{\\sigma}{\\epsilon_0}$$\n\n$$E = \\frac{4.0 \\times 10^{-9}}{8.85 \\times 10^{-12}} \\approx 452 \\text{ N/C}$$\n\nOutside the plates, the fields cancel."
        }
      ]
    },
    {
      videoId: "00dl3hOu9eQ",
      videoTitle: "Gauss's Law and the Electric Field Due to a Non-Uniformly Distributed Spherical Charge Density",
      questions: [
        {
          type: 'multiple-choice',
          question: "A sphere of radius $R$ has a non-uniform charge density $\\rho(r) = \\rho_0 \\frac{r}{R}$ where $r$ is the distance from the center. To find the electric field at radius $r < R$ using Gauss's Law, you must:",
          options: [
            "Use $Q_{\\text{enc}} = \\rho_0 \\cdot \\frac{4}{3}\\pi r^3$",
            "Integrate the charge density: $Q_{\\text{enc}} = \\int_0^r \\rho(r') 4\\pi r'^2 dr'$",
            "Set $E = 0$ because charge is non-uniform",
            "Use the average charge density $\\bar{\\rho} = \\frac{\\rho_0}{2}$"
          ],
          correctAnswer: 1,
          explanation: "For $\\text{non-uniform}$ charge density, you must $\\text{integrate}$:\n\n$$Q_{\\text{enc}} = \\int_0^r \\rho(r') dV' = \\int_0^r \\rho_0\\frac{r'}{R} (4\\pi r'^2) dr'$$\n\n$$Q_{\\text{enc}} = \\frac{4\\pi\\rho_0}{R} \\int_0^r r'^3 dr' = \\frac{4\\pi\\rho_0}{R} \\cdot \\frac{r^4}{4} = \\frac{\\pi\\rho_0 r^4}{R}$$\n\nThen apply Gauss's Law:\n\n$$E(4\\pi r^2) = \\frac{Q_{\\text{enc}}}{\\epsilon_0}$$"
        }
      ]
    },
    {
      videoId: "cuQ-wpHZrbg",
      videoTitle: "Gauss's Law and the Electric Field Due to a Non-Uniformly... (part 2)",
      questions: [
        {
          type: 'math-input',
          question: "A sphere has charge density $\\rho(r) = Ar^2$ where $A = 5.0 \\times 10^{-6}$ C/m⁵. Calculate the total enclosed charge in nanocoulombs (nC) within radius $r = 0.10$ m. (Hint: $Q = \\int_0^r Ar'^2 \\cdot 4\\pi r'^2 dr'$)",
          mathAnswer: "2.6",
          answerRange: 0.1,
          explanation: "For non-uniform density $\\rho(r) = Ar^2$:\n\n$$Q_{\\text{enc}} = \\int_0^r Ar'^2 (4\\pi r'^2) dr' = 4\\pi A \\int_0^r r'^4 dr'$$\n\n$$Q_{\\text{enc}} = 4\\pi A \\left[\\frac{r'^5}{5}\\right]_0^r = \\frac{4\\pi A r^5}{5}$$\n\n$$Q = \\frac{4\\pi (5.0 \\times 10^{-6})(0.10)^5}{5}$$\n\n$$Q = \\frac{4\\pi (5.0 \\times 10^{-6})(10^{-5})}{5} \\approx 2.6 \\times 10^{-9} \\text{ C} = 2.6 \\text{ nC}$$"
        }
      ]
    },
    {
      videoId: "1I0EQzP8nBs",
      videoTitle: "Gauss's Law and the Electric Field Due to a Non-Uniformly Charged Cylindrical Insulator",
      questions: [
        {
          type: 'multiple-choice',
          question: "A long cylindrical insulator of radius $R$ has volume charge density $\\rho(r) = \\rho_0(1 - \\frac{r}{R})$. The electric field inside the cylinder ($r < R$) will:",
          options: [
            "Be zero everywhere due to symmetry",
            "Depend on $r$ through integration of the charge density",
            "Be constant equal to $\\frac{\\rho_0 R}{2\\epsilon_0}$",
            "Decrease as $\\frac{1}{r}$ like a line charge"
          ],
          correctAnswer: 1,
          explanation: "For non-uniform cylindrical charge density:\n\n1. Use cylindrical Gaussian surface at radius $r$\n2. Enclosed charge per length: $\\lambda_{\\text{enc}} = \\int_0^r \\rho(r') 2\\pi r' dr'$\n\nFor $\\rho(r) = \\rho_0(1 - \\frac{r}{R})$:\n\n$$\\lambda_{\\text{enc}} = 2\\pi\\rho_0 \\int_0^r \\left(r' - \\frac{r'^2}{R}\\right) dr'$$\n\nThen apply: $E(2\\pi rL) = \\frac{\\lambda_{\\text{enc}} L}{\\epsilon_0}$\n\nThe field profile depends on how charge is distributed."
        }
      ]
    },
    {
      videoId: "cxTS1T6f13I",
      videoTitle: "Gauss's Law and the Electric Field Due to a Non-Uniformly Charged Cylindrical Insulator (part 2)",
      questions: [
        {
          type: 'multiple-choice',
          question: "When using Gauss's Law for a cylindrical geometry with non-uniform charge distribution, why must you integrate the charge density?",
          options: [
            "Because the electric field varies with position",
            "Because you need to find the total enclosed charge within the Gaussian surface",
            "Because Gauss's Law only works for uniform distributions",
            "Because the Gaussian surface is curved"
          ],
          correctAnswer: 1,
          explanation: "Gauss's Law relates flux to $\\text{enclosed charge}$:\n\n$$\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{\\text{enc}}}{\\epsilon_0}$$\n\nFor non-uniform $\\rho(r)$, you can't simply multiply density by volume. You must integrate:\n\n$$Q_{\\text{enc}} = \\int \\rho(r) dV$$\n\nFor a cylinder:\n\n$$Q_{\\text{enc}} = L \\int_0^r \\rho(r') 2\\pi r' dr'$$\n\nOnly after finding $Q_{\\text{enc}}$ can you solve for $E$."
        }
      ]
    }
  ]
};
