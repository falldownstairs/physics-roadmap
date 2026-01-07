module.exports = {
  id: "103",
  courseId: "electricity-magnetism",
  topicId: "electric-charge-field",
  title: "Motion in E Fields",
  estimatedTime: "15 minutes",
  videos: [
    {
      videoId: "y-3Ow_-JpbI",
      videoTitle: "The Motion of Particles in a Uniform Electric Field",
      questions: [
        {
          type: 'multiple-choice',
          question: "An electron is released from rest in a uniform electric field. Which statement correctly describes its subsequent motion?",
          options: [
            "It moves in the direction of the electric field with constant velocity",
            "It moves opposite to the direction of the electric field with constant acceleration",
            "It moves in a circular path perpendicular to the field",
            "It remains at rest because the field is uniform"
          ],
          correctAnswer: 1,
          explanation: "Since the electron has $\\text{negative charge}$, it experiences a force $\\text{opposite}$ to the electric field direction:\n\n$$\\vec{F} = q\\vec{E}$$\n\nFor a negative charge, the force points opposite to $\\vec{E}$. In a uniform field, this force is constant, producing $\\text{constant acceleration}$:\n\n$$a = \\frac{F}{m} = \\frac{|q|E}{m}$$\n\nThe electron's motion is analogous to a mass in a uniform gravitational field."
        },
        {
          type: 'math-input',
          question: "A proton ($q = 1.6 \\times 10^{-19}$ C, $m = 1.67 \\times 10^{-27}$ kg) is accelerated from rest through a potential difference of $1000$ V. What is its final speed in m/s? (Round to the nearest thousand)",
          mathAnswer: "440000",
          answerRange: 10000,
          explanation: "Using $\\text{energy conservation}$, the electric potential energy is converted to kinetic energy:\n\n$$q\\Delta V = \\frac{1}{2}mv^2$$\n\nSolving for $v$:\n\n$$v = \\sqrt{\\frac{2q\\Delta V}{m}}$$\n\n$$v = \\sqrt{\\frac{2(1.6 \\times 10^{-19})(1000)}{1.67 \\times 10^{-27}}}$$\n\n$$v = \\sqrt{1.916 \\times 10^{11}} \\approx 4.4 \\times 10^5 \\text{ m/s} = 440{,}000 \\text{ m/s}$$"
        }
      ]
    },
    {
      videoId: "V_RentKae_M",
      videoTitle: "The Electric Field Due to 2 or More Charges",
      questions: [
        {
          type: 'multiple-choice',
          question: "Two positive charges $+Q$ are located at $(-a, 0)$ and $(+a, 0)$. At which point is the electric field equal to zero?",
          // Image description: Coordinate system showing two positive charges (+Q) symmetrically 
          // placed on the x-axis at x = -a and x = +a. Origin (0,0) marked at center.
          options: [
            "At the origin $(0, 0)$",
            "At any point on the $y$-axis",
            "At points $(\\pm 2a, 0)$",
            "The field is never zero"
          ],
          correctAnswer: 0,
          explanation: "By the $\\text{principle of superposition}$, the net electric field is the vector sum of fields from both charges.\n\nAt the origin $(0, 0)$:\n- The field from the left charge points to the $\\text{right}$ (away from $+Q$)\n- The field from the right charge points to the $\\text{left}$ (away from $+Q$)\n- Both charges are equidistant from the origin, so $|\\vec{E}_1| = |\\vec{E}_2|$\n- The fields have equal magnitudes but opposite directions, so they $\\text{cancel}$:\n\n$$\\vec{E}_{\\text{net}} = \\vec{E}_1 + \\vec{E}_2 = \\vec{0}$$"
        },
        {
          type: 'multiple-choice',
          question: "Four charges are arranged at the corners of a square: three positive charges $+Q$ and one negative charge $-Q$ at the bottom-right corner. At the center of the square, the direction of the net electric field is:",
          options: [
            "Toward the negative charge",
            "Away from the negative charge",
            "Straight upward",
            "Straight downward"
          ],
          correctAnswer: 2,
          explanation: "Using $\\text{symmetry}$ and $\\text{superposition}$:\n\n1. The two positive charges on the left create fields pointing away from them (to the right)\n2. Their $y$-components cancel, leaving only rightward components\n3. The top-right positive charge creates a field pointing downward and to the left\n4. The bottom-right negative charge creates a field pointing toward it (upward and to the left)\n5. The horizontal components from the right side cancel\n6. The vertical components both point $\\text{upward}$\n\nThe net field points $\\text{straight upward}$."
        }
      ]
    }
  ]
};
