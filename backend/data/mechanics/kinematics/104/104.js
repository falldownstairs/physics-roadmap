module.exports = {
  id: "104",
  courseId: "mechanics",
  topicId: "kinematics",
  title: "Vectors",
  estimatedTime: "22 minutes",
  videos: [
    {
      videoId: "fX98skttxSU",
      videoTitle: "A Few Thoughts on Vectors",
      questions: [
        {
          type: 'multiple-choice',
          question: "A vector $\\vec{A}$ has magnitude $12\\text{ m}$ at $45^\\circ$ to the positive x-axis. What is the approximate magnitude of its x-component?",
          options: ["$6\\text{ m}$", "$8.5\\text{ m}$", "$10\\text{ m}$", "$12\\text{ m}$"],
          correctAnswer: 1,
          explanation: "The x-component is found using:\n\n$$A_x = A \\cos\\theta = 12\\text{ m} \\times \\cos(45^\\circ) \\approx 8.5\\text{ m}$$\n\nThe cosine of $45^\\circ$ is approximately $0.707$, so the x-component is about $8.5\\text{ m}$."
        },
        {
          type: 'math-input',
          question: "A vector $\\vec{B}$ can be written as $\\vec{B} = 3.0\\text{ m}\\,\\hat{i} - 4.0\\text{ m}\\,\\hat{j}$. Calculate the magnitude of this vector (in meters).",
          mathAnswer: "5",
          answerRange: 0.1,
          explanation: "The magnitude of a vector is found using the Pythagorean theorem:\n\n$$|\\vec{B}| = \\sqrt{B_x^2 + B_y^2} = \\sqrt{(3.0)^2 + (-4.0)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\text{ m}$$"
        },
        {
          type: 'multiple-choice',
          question: "Two vectors are given: $\\vec{A} = 6\\text{ m}\\,\\hat{i} + 2\\text{ m}\\,\\hat{j}$ and $\\vec{B} = -2\\text{ m}\\,\\hat{i} + 5\\text{ m}\\,\\hat{j}$. What is the resultant vector $\\vec{R} = \\vec{A} + \\vec{B}$?",
          image: {
            src: 'vector_addition.png',
            alt: 'Two vectors A and B shown on a coordinate system'
          },
          options: [
            "$4\\text{ m}\\,\\hat{i} + 7\\text{ m}\\,\\hat{j}$",
            "$8\\text{ m}\\,\\hat{i} + 3\\text{ m}\\,\\hat{j}$",
            "$4\\text{ m}\\,\\hat{i} - 3\\text{ m}\\,\\hat{j}$",
            "$8\\text{ m}\\,\\hat{i} + 7\\text{ m}\\,\\hat{j}$"
          ],
          correctAnswer: 0,
          explanation: "When adding vectors in component form, we add the corresponding components:\n\n$$\\vec{R} = (A_x + B_x)\\hat{i} + (A_y + B_y)\\hat{j}$$\n\n$$\\vec{R} = (6 - 2)\\text{ m}\\,\\hat{i} + (2 + 5)\\text{ m}\\,\\hat{j} = 4\\text{ m}\\,\\hat{i} + 7\\text{ m}\\,\\hat{j}$$"
        },
        {
          type: 'multiple-choice',
          question: "When you multiply a scalar quantity (like mass $m$) by a vector quantity (like velocity $\\vec{v}$), what can you conclude about the resulting vector?",
          options: [
            "It has a different direction than $\\vec{v}$",
            "It has the same direction as $\\vec{v}$",
            "Its direction depends on whether the scalar is positive or negative only",
            "It becomes a scalar quantity"
          ],
          correctAnswer: 1,
          explanation: "Multiplying a vector by a $\\text{positive scalar}$ does not change the direction of the vector, only its magnitude.\n\nFor example, $\\text{momentum}$ is defined as:\n\n$$\\vec{p} = m\\vec{v}$$\n\nSince mass is always positive, $\\vec{p}$ always points in the same direction as $\\vec{v}$."
        }
      ]
    },
    {
      videoId: "uji3iz5AdOg",
      videoTitle: "Part II: A Few Thoughts on Vectors",
      questions: [
        {
          type: 'multiple-choice',
          question: "An object is moving with velocity $\\vec{v}$ and has acceleration $\\vec{a}$ in the same direction as $\\vec{v}$. What is happening to the object?",
          image: {
            src: 'velocity_acceleration_same.png',
            alt: 'Vector v and vector a pointing in the same direction'
          },
          options: ["The object is speeding up", "The object is slowing down", "The object is turning but maintaining constant speed", "The object is moving at constant velocity"],
          correctAnswer: 0,
          explanation: "When the $\\text{acceleration}$ and $\\text{velocity}$ vectors point in the same direction, the object is $\\text{speeding up}$.\n\nIf they point in opposite directions, the object is slowing down. If they are perpendicular, the object is turning while maintaining constant speed."
        },
        {
          type: 'multiple-choice',
          question: "An object moves along a curved path at constant speed. What can you conclude about the acceleration?",
          image: {
            src: 'constant_speed_curve.png',
            alt: 'Object moving on a curved path with equal-length velocity vectors'
          },
          options: [
            "The acceleration is zero",
            "The acceleration is parallel to the velocity",
            "The acceleration is perpendicular to the velocity",
            "The acceleration is opposite to the velocity"
          ],
          correctAnswer: 2,
          explanation: "When an object moves at $\\text{constant speed}$ along a curved path, it must be turning. To turn without speeding up or slowing down, the acceleration must be $\\text{perpendicular}$ to the velocity.\n\nThis perpendicular component causes the direction to change (turning) without affecting the magnitude of velocity (speed)."
        }
      ]
    }
  ]
};
