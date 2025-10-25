module.exports = {
  id: "102",
  courseId: "mechanics",
  topicId: "kinematics",
  title: "Kinematic Equations & Calculus",
  estimatedTime: "20 minutes",
  videos: [
    {
      videoId: "yfnM0PNm9Q8",
      videoTitle: "Distance, Position, Displacement, Speed, Velocity and Acceleration",
      questions: [
        {
          type: 'math-input',
          question: "Write the formula for average velocity in terms of displacement ($\\Delta x$) and time ($\\Delta t$).",
          image: {
            src: 'sc.png',
            alt: 'Free body diagram showing forces on a block'
          },
          mathAnswer: "\\frac{\\Delta x}{\\Delta t}",
          explanation: "Average velocity is defined as displacement divided by time: $v = \\frac{\\Delta x}{\\Delta t}$."
        },
        {
          type: 'multiple-choice',
          question: "Which of the following quantities is a vector?",
          options: ["Speed", "Distance", "Displacement", "Time"],
          optionImages: [
            { src: 'sc.png', alt: 'Forces pointing left and down' },
            { src: 'sc.png', alt: 'Forces pointing right and up' },
            { src: 'sc.png', alt: 'Forces balanced vertically' },
            { src: 'sc.png', alt: 'Forces at 45 degree angle' }
          ],
          correctAnswer: 2,
          explanation: "$\\text{Displacement}$ is a vector because it has both magnitude and direction. Unlike distance (scalar), displacement includes the direction of motion from start to finish."
        }
      ]
    },
    {
      videoId: "lZm2vZn4gSg",
      videoTitle: "Deriving the Kinematics Equations for Straight-Line Uniform Acceleration Using the v vs. t Graph",
      questions: [
        {
          type: 'multiple-choice',
          question: "The area under a velocity vs. time graph represents which physical quantity?",
          options: ["Acceleration", "Displacement", "Force", "Speed"],
          correctAnswer: 1,
          explanation: "The area under a velocity-time graph gives **displacement**. This is because: $$\\Delta x = \\int v \\, dt$$ where the integral represents the area under the curve."
        }
      ]
    },
    {
      videoId: "JnFykw00HvE",
      videoTitle: "Deriving the Kinematics Equations for Straight-Line Uniform Acceleration Using Calculus.",
      questions: [
        {
          type: 'math-input',
          question: "Express acceleration ($a$) as the derivative of velocity ($v$) with respect to time ($t$).",
          mathAnswer: "a = \\frac{dv}{dt}",
          explanation: "Acceleration is the time derivative of velocity: $$a = \\frac{dv}{dt}$$ This fundamental relationship shows that acceleration measures how velocity changes over time."
        },
        {
          type: 'multiple-choice',
          question: "Which calculus operation is used to find velocity from acceleration?",
          options: ["Differentiation", "Integration", "Multiplication", "Division"],
          correctAnswer: 1,
          explanation: "**Integration** of acceleration with respect to time gives velocity: $$v = \\int a \\, dt$$ This is the inverse operation of differentiation, since $a = \\frac{dv}{dt}$."
        }
      ]
    }
  ]
};
