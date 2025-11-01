module.exports = {
  id: "102",
  courseId: "mechanics",
  topicId: "kinematics",
  title: "Kinematic Equation Derivations",
  estimatedTime: "10 minutes",
  videos: [
    {
      videoId: "lZm2vZn4gSg",
      videoTitle: "Deriving Kinematics Equations Using Graphs (Velocity vs. Time)",
      questions: [
        {
          type: 'multiple-choice',
          question: "The derivations of the three standard kinematic equations are only valid if which condition is met?",
          options: ["Velocity is zero.", "Acceleration is constant.", "Displacement is zero.", "Initial velocity is zero."],
          correctAnswer: 1,
          explanation: "The kinematics equations require a $\\text{constant acceleration}$ ($a$) to be valid. The derivation from a $\\text{velocity}$ versus $\\text{time}$ graph relies on the line having a constant $\\text{slope}$."
        }
      ]
    },
    {
      videoId: "JnFykw00HvE",
      videoTitle: "Deriving Kinematics Equations Using Calculus",
      questions: [
        {
          type: 'multiple-choice',
          question: "In the calculus-based derivation, which physical quantity is $\\text{integrated}$ with respect to $\\text{time}$ to obtain the $\\text{displacement}$?",
          options: ["Acceleration ($a$)", "Jerk ($j$)", "Velocity ($v$)", "Force ($F$)"],
          correctAnswer: 2,
          explanation: "The $\\text{velocity}$ ($v$) is defined as the derivative of $\\text{position}$. Therefore, integrating $\\text{velocity}$ with respect to $\\text{time}$ yields $\\text{displacement}$: $$\\Delta x = \\int v \\, dt$$"
        }
      ]
    }
  ]
};