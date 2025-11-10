module.exports = {
  id: "801",
  courseId: "mechanics",
  topicId: "growth-decay",
  title: "Air Resistance & Falling Objects",
  estimatedTime: "16 minutes",
  videos: [
    {
      videoId: "I6Or5EvCPYk",
      videoTitle: "Objects Falling With Air Resistance",
      questions: [
        {
          type: 'multiple-choice',
          question: "For an object falling through air at low speeds, the air resistance force is modeled as $F_{\\text{air}} = -bv$. What does the negative sign indicate?",
          options: [
            "The drag coefficient is always negative",
            "The force always acts downward",
            "The force opposes the direction of velocity",
            "The object is decelerating"
          ],
          correctAnswer: 2,
          explanation: "The negative sign indicates that the $\\text{air resistance force}$ always opposes the direction of motion.\n\nIf velocity is positive (downward), the air resistance force is negative (upward). If velocity is negative (upward), the air resistance force is positive (downward). This ensures the force always opposes motion."
        },
        {
          type: 'math-input',
          question: "An object falling through air reaches terminal velocity when air resistance equals the gravitational force. Express terminal velocity ($v_{\\text{terminal}}$) in terms of mass ($m$), gravitational acceleration ($g$), and drag coefficient ($b$).",
          mathAnswer: "\\frac{mg}{b}",
          explanation: "At $\\text{terminal velocity}$, the net force is zero, so:\n\n$$mg = bv_{\\text{terminal}}$$\n\nSolving for terminal velocity:\n\n$$v_{\\text{terminal}} = \\frac{mg}{b}$$\n\nAt this speed, the object stops accelerating and continues falling at constant velocity."
        },
        {
          type: 'multiple-choice',
          question: "A $2.0\\text{ kg}$ object falls from rest through air with drag coefficient $b = 4.0\\text{ kg/s}$. What is the terminal velocity (in $\\text{m/s}$)?",
          options: [
            "$2.0\\text{ m/s}$",
            "$4.9\\text{ m/s}$",
            "$9.8\\text{ m/s}$",
            "$19.6\\text{ m/s}$"
          ],
          correctAnswer: 1,
          explanation: "Using the terminal velocity formula:\n\n$$v_{\\text{terminal}} = \\frac{mg}{b}$$\n\nSubstituting values:\n\n$$v_{\\text{terminal}} = \\frac{(2.0\\text{ kg})(9.8\\text{ m/s}^2)}{4.0\\text{ kg/s}} = \\frac{19.6}{4.0} = 4.9\\text{ m/s}$$"
        }
      ]
    },
    {
      videoId: "HwPdh72GF8I",
      videoTitle: "Objects Falling With Air Resistance (part 2)",
      questions: [
        {
          type: 'multiple-choice',
          question: "After solving the differential equation for an object falling with air resistance from rest, the velocity as a function of time is $v(t) = \\frac{mg}{b}\\left(1 - e^{-\\frac{b}{m}t}\\right)$. What happens to velocity as $t \\to \\infty$?",
          options: [
            "Velocity approaches zero",
            "Velocity approaches $\\frac{mg}{b}$",
            "Velocity increases without bound",
            "Velocity oscillates"
          ],
          correctAnswer: 1,
          explanation: "As time approaches infinity, the exponential term decays:\n\n$$\\lim_{t \\to \\infty} e^{-\\frac{b}{m}t} = 0$$\n\nTherefore:\n\n$$v(\\infty) = \\frac{mg}{b}(1 - 0) = \\frac{mg}{b}$$\n\nThis is the $\\text{terminal velocity}$. The exponential decay means the object asymptotically approaches this maximum speed but never exceeds it."
        }
      ]
    }
  ]
};