module.exports = {
  id: "203",
  courseId: "electricity-magnetism",
  topicId: "gauss-law",
  title: "Spherical & Cylindrical",
  estimatedTime: "20 minutes",
  videos: [
    {
      videoId: "0rRWQlGleNM",
      videoTitle: "Gauss's Law and Concentric Spherical Shells",
      questions: [
        {
          type: 'multiple-choice',
          question: "Two concentric spherical shells have radii $R_1$ and $R_2$ ($R_1 < R_2$) with charges $+Q$ and $-Q$ respectively. The electric field in the region $R_1 < r < R_2$ is:",
          // Image description: Cross-section showing two concentric circles representing spherical shells.
          // Inner shell at radius R1 labeled "+Q", outer shell at radius R2 labeled "-Q". 
          // Show a point P in the region between the shells.
          options: [
            "Zero everywhere",
            "$E = \\frac{kQ}{r^2}$ pointing radially outward",
            "$E = \\frac{k(-Q)}{r^2}$ pointing radially inward",
            "Constant with magnitude $\\frac{kQ}{R_1^2}$"
          ],
          correctAnswer: 1,
          explanation: "In the region between the shells ($R_1 < r < R_2$):\n\nUsing a Gaussian sphere at radius $r$:\n- Enclosed charge: $Q_{\\text{enc}} = +Q$ (only inner shell)\n- The outer shell's charge doesn't contribute\n\n$$E(4\\pi r^2) = \\frac{Q}{\\epsilon_0}$$\n\n$$E = \\frac{kQ}{r^2}$$ (pointing radially outward)\n\nFor $r > R_2$: Total enclosed charge = $+Q + (-Q) = 0$, so $E = 0$"
        },
        {
          type: 'math-input',
          question: "A spherical shell of radius $R = 0.10$ m carries a total charge of $Q = 4.0 \\times 10^{-9}$ C uniformly distributed on its surface. Calculate the electric field magnitude (in N/C) at a point $r = 0.20$ m from the center. (Use $k = 9.0 \\times 10^9$ N·m²/C²)",
          mathAnswer: "900",
          answerRange: 20,
          explanation: "For a spherical shell, the field outside ($r > R$) behaves like a $\\text{point charge}$ at the center:\n\n$$E = \\frac{kQ}{r^2}$$\n\n$$E = \\frac{(9.0 \\times 10^9)(4.0 \\times 10^{-9})}{(0.20)^2}$$\n\n$$E = \\frac{36}{0.04} = 900 \\text{ N/C}$$\n\nInside the shell ($r < R$): $E = 0$"
        }
      ]
    },
    {
      videoId: "39ZZH1VjxPk",
      videoTitle: "Gauss's Law and Concentric Spherical Shells (part 2)",
      questions: [
        {
          type: 'multiple-choice',
          question: "A conducting spherical shell with inner radius $a$ and outer radius $b$ has a point charge $+Q$ at its center. The charge distribution on the shell is:",
          options: [
            "$-Q$ on the inner surface, $+Q$ on the outer surface",
            "$+Q$ on the inner surface, $-Q$ on the outer surface",
            "$0$ on the inner surface, $+Q$ on the outer surface",
            "Uniformly distributed throughout the shell material"
          ],
          correctAnswer: 0,
          explanation: "For a $\\text{conducting shell}$ with charge at center:\n\n1. The field inside the conductor must be zero\n2. By Gauss's Law, a charge of $-Q$ must appear on the inner surface to create $E = 0$ inside the conductor\n3. Since the shell started neutral and gained $-Q$ on the inner surface, $+Q$ must appear on the outer surface\n4. The $-Q$ distributes uniformly on the inner surface\n5. The $+Q$ distributes uniformly on the outer surface\n\nThis maintains $E = 0$ inside the conducting material."
        }
      ]
    },
    {
      videoId: "f94v7FeK020",
      videoTitle: "Gauss's Law and Co-Axial Cables",
      questions: [
        {
          type: 'multiple-choice',
          question: "A coaxial cable consists of a solid inner conductor of radius $a$ with charge per unit length $+\\lambda$ and a cylindrical outer conductor (inner radius $b$, outer radius $c$) with charge per unit length $-\\lambda$. In the region $a < r < b$, the electric field is:",
          options: [
            "Zero",
            "$E = \\frac{\\lambda}{2\\pi\\epsilon_0 r}$ pointing radially outward",
            "$E = \\frac{\\lambda}{2\\pi\\epsilon_0 r}$ pointing radially inward",
            "Uniform with magnitude $\\frac{\\lambda}{2\\pi\\epsilon_0 a}$"
          ],
          correctAnswer: 1,
          explanation: "Between the conductors ($a < r < b$):\n\nUsing a cylindrical Gaussian surface at radius $r$:\n- Enclosed charge per length: $\\lambda$ (from inner conductor)\n- The outer conductor hasn't been reached yet\n\n$$E(2\\pi rL) = \\frac{\\lambda L}{\\epsilon_0}$$\n\n$$E = \\frac{\\lambda}{2\\pi\\epsilon_0 r}$$ (radially outward)\n\nFor $r > c$: Total enclosed charge = $+\\lambda - \\lambda = 0$, so $E = 0$ (cable is shielded)"
        },
        {
          type: 'math-input',
          question: "A coaxial cable's inner conductor has radius $a = 0.002$ m and linear charge density $\\lambda = 6.0 \\times 10^{-9}$ C/m. Calculate the electric field magnitude (in N/C) at radius $r = 0.005$ m (between conductors). (Use $\\epsilon_0 = 8.85 \\times 10^{-12}$ C²/(N·m²))",
          mathAnswer: "216",
          answerRange: 10,
          explanation: "For the region between cylinders:\n\n$$E = \\frac{\\lambda}{2\\pi\\epsilon_0 r}$$\n\n$$E = \\frac{6.0 \\times 10^{-9}}{2\\pi(8.85 \\times 10^{-12})(0.005)}$$\n\n$$E = \\frac{6.0 \\times 10^{-9}}{2.78 \\times 10^{-13}} \\approx 216 \\text{ N/C}$$"
        }
      ]
    },
    {
      videoId: "vEHLlSvA5kA",
      videoTitle: "Gauss's Law and Co-Axial Cables (part 2)",
      questions: [
        {
          type: 'multiple-choice',
          question: "In a coaxial cable at electrostatic equilibrium, where is the charge located on the conducting outer cylinder?",
          options: [
            "Uniformly throughout the conducting material",
            "Only on the inner surface facing the inner conductor",
            "Only on the outer surface",
            "On both inner and outer surfaces"
          ],
          correctAnswer: 3,
          explanation: "For the conducting outer cylinder:\n\n1. **Inner surface**: Charge $-\\lambda$ per unit length (induced by the inner conductor's $+\\lambda$)\n2. **Outer surface**: If the cable has net charge, excess charge appears here\n3. **Inside the conductor**: $E = 0$ and charge density = 0\n\nFor a neutral outer conductor:\n- Inner surface: $-\\lambda$ per length\n- Outer surface: $+\\lambda$ per length\n- Net charge on outer conductor: 0\n\nThis configuration ensures $E = 0$ outside the cable (electromagnetic shielding)."
        }
      ]
    }
  ]
};
