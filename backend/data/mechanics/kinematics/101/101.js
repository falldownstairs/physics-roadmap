module.exports = {
  id: "101",
  courseId: "mechanics",
  topicId: "kinematics",
  title: "Kinematic Variables: Definitions and Concepts",
  estimatedTime: "10 minutes",
  videos: [
    {
      videoId: "yfnM0PNm9Q8",
      videoTitle: "Distance, Position, Displacement, Speed, Velocity and Acceleration",
      questions: [
        {
          type: 'multiple-choice',
          question: "Which of the following terms is a $\\text{vector}$ quantity that measures the $\\text{rate of change}$ of an object's $\\text{position}$?",
          options: ["$\\text{Distance}$", "$\\text{Speed}$", "$\\text{Velocity}$", "$\\text{Time}$"],
          correctAnswer: 2,
          explanation: "$\\text{Velocity}$ is a $\\text{vector}$ quantity that specifies both the $\\text{rate}$ and $\\text{direction}$ of $\\text{position change}$. $\\text{Speed}$ is the $\\text{scalar}$ magnitude of $\\text{velocity}$."
        },
        {
          type: 'multiple-choice',
          question: "An object $\\text{starts}$ with a $\\text{velocity}$ of $5 \\text{ m/s}$ and $\\text{accelerates}$ uniformly to a $\\text{velocity}$ of $17 \\text{ m/s}$ in $3 \\text{ s}$. What is the object's $\\text{average acceleration}$ (${\\bar{a}}$)?",
          options: ["$7 \\text{ m/s}^2$", "$4 \\text{ m/s}^2$", "$12 \\text{ m/s}^2$", "$6 \\text{ m/s}^2$"],
          correctAnswer: 1,
          explanation: "$\\text{Average acceleration}$ is the $\\text{change in velocity}$ divided by the $\\text{change in time}$: $$\\bar{a} = \\\\frac{\\\\Delta v}{\\\\Delta t} = \\\\frac{v_f - v_i}{\\\\Delta t} = \\\\frac{(17 \\text{ m/s}) - (5 \\text{ m/s})}{3 \\text{ s}} = \\\\frac{12 \\text{ m/s}}{3 \\text{ s}} = 4 \\text{ m/s}^2$$"
        },
      ]
    }
  ]
};