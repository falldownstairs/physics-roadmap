module.exports = {
  id: "105",
  courseId: "mechanics",
  topicId: "kinematics",
  title: "Relative Velocity",
  estimatedTime: "12 minutes",
  videos: [
    {
      videoId: "KGl7g3PMwj4",
      videoTitle: "Relative Velocity",
      questions: [
        {
          type: 'multiple-choice',
          question: "If the velocity of object A relative to object B is $\\vec{v}_{AB} = 15\\text{ m/s}$ eastward, what is the velocity of object B relative to object A?",
          options: [
            "$15\\text{ m/s}$ eastward",
            "$15\\text{ m/s}$ westward",
            "$30\\text{ m/s}$ eastward",
            "$0\\text{ m/s}$"
          ],
          correctAnswer: 1,
          explanation: "The velocity of B relative to A is the negative (opposite) of the velocity of A relative to B:\n\n$$\\vec{v}_{BA} = -\\vec{v}_{AB}$$\n\nIf $\\vec{v}_{AB} = 15\\text{ m/s}$ eastward, then:\n\n$$\\vec{v}_{BA} = 15\\text{ m/s}$$ westward\n\nThis makes intuitive sense: if you're moving east relative to another car, that car sees you moving west relative to them."
        },
        {
          type: 'math-input',
          question: "A boat travels at $3.0\\text{ m/s}$ northward relative to the water. The water flows at $4.0\\text{ m/s}$ eastward relative to the ground. What is the magnitude of the boat's velocity relative to the ground (in m/s)?",
          image: {
            src: 'boat_river_diagram.png',
            alt: 'Diagram showing boat velocity northward and water velocity eastward'
          },
          mathAnswer: "5",
          answerRange: 0.1,
          explanation: "To find the velocity of the boat relative to the ground, we add the vectors:\n\n$$\\vec{v}_{BG} = \\vec{v}_{BW} + \\vec{v}_{WG}$$\n\nSince these velocities are perpendicular (north and east), we use the Pythagorean theorem:\n\n$$|\\vec{v}_{BG}| = \\sqrt{(3.0)^2 + (4.0)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5.0\\text{ m/s}$$"
        }
      ]
    }
  ]
};
