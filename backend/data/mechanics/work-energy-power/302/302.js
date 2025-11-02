module.exports = {
  id: "302",
  courseId: "mechanics",
  topicId: "work-energy-power",
  title: "Work by Forces",
  estimatedTime: "16 minutes",
  videos: [
    {
      videoId: "XrPEpCr-uCc",
      videoTitle: "Work Done on an Object by a Constant Force",
      questions: [
        {
          type: 'multiple-choice',
          question: "A constant force of $8\\text{ N}$ acts on an object at an angle of $60^\\circ$ to its displacement of $5\\text{ m}$. What is the work done by this force?",
          options: [
            "$40\\text{ J}$",
            "$20\\text{ J}$",
            "$34.6\\text{ J}$",
            "$0\\text{ J}$"
          ],
          correctAnswer: 1,
          explanation: "The work done by a constant force is given by:\n\n$$W = F s \\cos\\theta$$\n\nSubstituting the values:\n\n$$W = (8\\text{ N})(5\\text{ m})\\cos(60^\\circ)$$\n\n$$W = 40 \\times 0.5 = 20\\text{ J}$$\n\nThe cosine accounts for only the component of the force that is $\\text{parallel}$ to the displacement."
        },
        {
          type: 'multiple-choice',
          question: "An object moves in uniform circular motion at constant speed. What is the work done by the centripetal force during one complete revolution?",
          options: [
            "Positive, because the object is moving",
            "Negative, because the force points toward the center",
            "Zero, because the force is perpendicular to the displacement",
            "Cannot be determined without knowing the radius"
          ],
          correctAnswer: 2,
          explanation: "In uniform circular motion, the centripetal force is always directed toward the center of the circle, which means it is $\\text{perpendicular}$ to the instantaneous displacement (which is tangent to the circle).\n\nSince $\\theta = 90^\\circ$:\n\n$$W = F s \\cos(90^\\circ) = F s \\times 0 = 0\\text{ J}$$\n\nThis is consistent with the $\\text{work-energy theorem}$: since the speed is constant, the kinetic energy doesn't change, so $\\Delta K = 0$, meaning the net work must be zero."
        },
        {
          type: 'math-input',
          question: "A force of $15\\text{ N}$ acts directly opposite to an object's displacement of $3\\text{ m}$. Calculate the work done by this force (in $\\text{J}$).",
          mathAnswer: "-45",
          explanation: "When a force acts in the direction $\\text{opposite}$ to the displacement, the angle between them is $\\theta = 180^\\circ$.\n\nUsing the work formula:\n\n$$W = F s \\cos\\theta$$\n\n$$W = (15\\text{ N})(3\\text{ m})\\cos(180^\\circ)$$\n\n$$W = 45 \\times (-1) = -45\\text{ J}$$\n\nNegative work means the force removes energy from the object, opposing its motion."
        }
      ]
    },
    {
      videoId: "Ifh-qR1tsBs",
      videoTitle: "Work Done on an Object by a Varying Force",
      questions: [
        {
          type: 'multiple-choice',
          question: "A varying force $F(x) = 4x$ acts on an object as it moves from $x = 0$ to $x = 3\\text{ m}$. Which expression correctly represents the work done?",
          options: [
            "$W = 4 \\times 3 = 12\\text{ J}$",
            "$W = \\int_0^3 4x \\, dx$",
            "$W = 4x^2$",
            "$W = \\frac{dF}{dx}$"
          ],
          correctAnswer: 1,
          explanation: "For a varying force, we cannot simply multiply the final force by the total displacement. Instead, we must integrate:\n\n$$W = \\int F \\, dx = \\int_0^3 4x \\, dx$$\n\nEvaluating the integral:\n\n$$W = \\left[2x^2\\right]_0^3 = 2(9) - 0 = 18\\text{ J}$$\n\nNote that using $F(3) \\times 3 = 12 \\times 3 = 36\\text{ J}$ would overestimate the work, since the force is smaller at the beginning of the motion."
        },
        {
          type: 'math-input',
          question: "A force varies with position as $F(x) = 6x^2$ (in newtons, with $x$ in meters). Calculate the work done (in $\\text{J}$) as an object moves from $x = 1\\text{ m}$ to $x = 2\\text{ m}$.",
          mathAnswer: "14",
          explanation: "For a varying force, the work is found by integration:\n\n$$W = \\int_1^2 F(x) \\, dx = \\int_1^2 6x^2 \\, dx$$\n\nTaking the antiderivative:\n\n$$W = \\left[2x^3\\right]_1^2$$\n\nEvaluating at the boundaries:\n\n$$W = 2(2)^3 - 2(1)^3 = 2(8) - 2(1) = 16 - 2 = 14\\text{ J}$$\n\nThe integral represents the area under the $F$ versus $x$ curve between $x = 1$ and $x = 2$."
        }
      ]
    }
  ]
};