module.exports = {
  id: "204",
  courseId: "mechanics",
  topicId: "newtons-laws",
  title: "Elevator Problems",
  estimatedTime: "14 minutes",
  videos: [
    {
      videoId: "LaVGCq0PM4U",
      videoTitle: "Physics of Elevators",
      questions: [
        {
          type: 'math-input',
          question: "A $60\\text{ kg}$ person stands on a bathroom scale in an elevator. The scale reads $720\\text{ N}$. What is the acceleration of the elevator (in m/s²)? Use $g = 10\\text{ m/s}^2$.",
          mathAnswer: "2",
          answerRange: 0.1,
          explanation: "Use Newton's second law to find acceleration:\n\n$$a = \\frac{F_{net}}{m}$$\n\nThe forces on the person are:\n\n- Normal force (scale reading): $F_N = 720\\text{ N}$ (upward)\n- Weight: $mg = (60)(10) = 600\\text{ N}$ (downward)\n\nSince $F_N > mg$, the net force is upward:\n\n$$a = \\frac{720 - 600}{60} = \\frac{120}{60} = 2\\text{ m/s}^2$$ (upward)\n\nNote: We cannot determine if the elevator is moving up or down - it could be moving upward and speeding up, or moving downward and slowing down."
        },
        {
          type: 'multiple-choice',
          question: "A $3\\text{ kg}$ bowling ball hangs from a string and swings through the lowest point of its arc at $4\\text{ m/s}$. The radius of the circular path is $10\\text{ m}$. What is the tension in the string at the lowest point? Use $g = 10\\text{ m/s}^2$.",
          options: [
            "$30\\text{ N}$",
            "$34.8\\text{ N}$",
            "$35\\text{ N}$",
            "$26.2\\text{ N}$"
          ],
          correctAnswer: 1,
          explanation: "At the lowest point, the ball experiences circular motion, so:\n\n$$a_c = \\frac{v^2}{r}$$\n\nApplying Newton's second law toward the center (upward):\n\n$$\\frac{v^2}{r} = \\frac{F_{net}}{m} = \\frac{T - mg}{m}$$\n\nSolving for tension:\n\n$$T = m\\left(\\frac{v^2}{r} + g\\right)$$\n\n$$T = 3\\left(\\frac{16}{10} + 10\\right) = 3(1.6 + 10) = 3(11.6) = 34.8\\text{ N}$$\n\nThe tension must be greater than the weight to provide the centripetal acceleration."
        }
      ]
    }
  ]
};