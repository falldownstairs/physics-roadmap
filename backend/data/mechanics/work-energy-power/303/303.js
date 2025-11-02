module.exports = {
  id: "303",
  courseId: "mechanics",
  topicId: "work-energy-power",
  title: "Power & Efficiency",
  estimatedTime: "12 minutes",
  videos: [
    {
      videoId: "9at8eOrYvmY",
      videoTitle: "Power and Efficiency",
      questions: [
        {
          type: 'multiple-choice',
          question: "Which of the following are correct definitions of $\\text{power}$?",
          options: [
            "The total amount of work done by a force",
            "The rate at which work is done or the rate at which energy changes forms",
            "The product of force and displacement",
            "The change in kinetic energy of an object"
          ],
          correctAnswer: 1,
          explanation: "$\\text{Power}$ is defined as the rate at which work is done or the rate at which energy changes forms.\n\nMathematically:\n\n$$P_{\\text{avg}} = \\frac{W}{\\Delta t}$$\n\nor for instantaneous power:\n\n$$P = \\frac{dW}{dt} = \\frac{dE}{dt}$$\n\nThe SI unit of power is the $\\text{watt}$ ($\\text{W}$), where $1\\text{ W} = 1\\text{ J/s}$."
        },
        {
          type: 'math-input',
          question: "A machine performs $450\\text{ J}$ of work in $15\\text{ s}$. Calculate the average power output (in $\\text{W}$).",
          mathAnswer: "30",
          explanation: "Average power is the work done divided by the time interval:\n\n$$P_{\\text{avg}} = \\frac{W}{\\Delta t}$$\n\nSubstituting the given values:\n\n$$P_{\\text{avg}} = \\frac{450\\text{ J}}{15\\text{ s}} = 30\\text{ W}$$\n\nThis means the machine transfers energy at a rate of $30$ joules per second."
        },
        {
          type: 'multiple-choice',
          question: "A machine has a power input of $800\\text{ W}$ and does useful work at a rate of $600\\text{ W}$. What is the efficiency of this machine?",
          options: [
            "$133\\%$",
            "$75\\%$",
            "$200\\%$",
            "$25\\%$"
          ],
          correctAnswer: 1,
          explanation: "$\\text{Efficiency}$ is defined as the ratio of useful output to total input:\n\n$$e = \\frac{P_{\\text{output}}}{P_{\\text{input}}} \\times 100\\%$$\n\nor equivalently:\n\n$$e = \\frac{W_{\\text{output}}}{W_{\\text{input}}} \\times 100\\%$$\n\nSubstituting the values:\n\n$$e = \\frac{600\\text{ W}}{800\\text{ W}} \\times 100\\% = 0.75 \\times 100\\% = 75\\%$$\n\nThis means $75\\%$ of the input power is converted to useful work, while the remaining $25\\%$ is lost (typically as heat or other forms)."
        }
      ]
    }
  ]
};