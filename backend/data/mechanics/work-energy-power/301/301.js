module.exports = {
  id: "301",
  courseId: "mechanics",
  topicId: "work-energy-power",
  title: "Dot Product & Work Basics",
  estimatedTime: "20 minutes",
  videos: [
    {
      videoId: "71BUWPC8KU0",
      videoTitle: "The Scalar Product or Dot Product for Physics",
      questions: [
        {
          type: 'multiple-choice',
          question: "Why is the dot product also called the $\\text{scalar product}$?",
          options: [
            "Because it uses a dot symbol in the notation",
            "Because it multiplies two scalar quantities together",
            "Because the result of multiplying two vectors using the dot product is a scalar quantity",
            "Because it can only be used with scalar values"
          ],
          correctAnswer: 2,
          explanation: "The dot product is called the $\\text{scalar product}$ because when you multiply two vectors using this operation, you obtain a scalar quantity (a number with no direction). For example, when calculating $\\text{work}$: $W = \\vec{F} \\cdot \\vec{s}$, the result is a scalar value in joules, not a vector."
        },
        {
          type: 'math-input',
          question: "Calculate $\\vec{A} \\cdot \\vec{B}$ where $\\vec{A} = 6\\hat{i} + 4\\hat{j}$ and $\\vec{B} = 3\\hat{i} - 2\\hat{j}$.",
          mathAnswer: "10",
          answerRange: 0.1,
          explanation: "When computing the dot product with unit vectors, multiply the corresponding components and add them:\n\n$$\\vec{A} \\cdot \\vec{B} = (6)(3) + (4)(-2)$$\n\n$$\\vec{A} \\cdot \\vec{B} = 18 - 8 = 10$$\n\nNote that $\\hat{i} \\cdot \\hat{i} = 1$, $\\hat{j} \\cdot \\hat{j} = 1$, and $\\hat{i} \\cdot \\hat{j} = 0$ because perpendicular unit vectors have a dot product of zero."
        }
      ]
    },
    {
      videoId: "TpFpTpcFLCg",
      videoTitle: "Dot Product",
      questions: [
        {
          type: 'multiple-choice',
          question: "Given two vectors $\\vec{A}$ and $\\vec{B}$ at an angle $\\theta$ between them (tail to tail), which expression correctly represents $\\vec{A} \\cdot \\vec{B}$?",
          options: [
            "$A B \\sin\\theta$",
            "$A B \\cos\\theta$",
            "$A B \\tan\\theta$",
            "$A + B \\cos\\theta$"
          ],
          correctAnswer: 1,
          explanation: "The dot product of two vectors is given by:\n\n$$\\vec{A} \\cdot \\vec{B} = AB\\cos\\theta$$\n\nwhere $A$ and $B$ are the magnitudes of the vectors and $\\theta$ is the angle between them when placed tail to tail. The cosine function accounts for the component of one vector that is $\\text{parallel}$ to the other vector, which is exactly what the dot product measures."
        }
      ]
    },
    {
      videoId: "33vei9HDphw",
      videoTitle: "The Work Done by a Varying Force",
      questions: [
        {
          type: 'multiple-choice',
          question: "A force varies with position according to $F(x) = \\frac{1}{2}x^2$. What integral expression represents the work done by this force as an object moves from $x = 0$ to $x = 3\\text{ m}$?",
          image: {
            src: 'force_displacement_graph.png',
            alt: 'Graph showing curved force vs displacement relationship with area under curve shaded'
          },
          options: [
            "$W = \\frac{1}{2}x^2$",
            "$W = \\int_0^3 \\frac{1}{2}x^2 \\, dx$",
            "$W = \\frac{d}{dx}(\\frac{1}{2}x^2)$",
            "$W = \\int_0^3 \\frac{1}{2}x \\, dx$"
          ],
          correctAnswer: 1,
          explanation: "When a force varies with position, the work done is found by integrating the force over the displacement:\n\n$$W = \\int F \\, dx$$\n\nFor this problem:\n\n$$W = \\int_0^3 \\frac{1}{2}x^2 \\, dx$$\n\nThe integral represents the area under the $F$ versus $x$ curve, which gives the total work done. Evaluating this integral:\n\n$$W = \\left[\\frac{1}{6}x^3\\right]_0^3 = \\frac{1}{6}(27) = 4.5 \\text{ J}$$"
        }
      ]
    }
  ]
};
