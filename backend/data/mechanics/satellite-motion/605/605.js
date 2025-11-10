module.exports = {
  id: "605",
  courseId: "mechanics",
  topicId: "satellite-motion",
  title: "Escape Velocity & Binary Systems",
  estimatedTime: "16 minutes",
  videos: [
    {
      videoId: "nkccBTXOclY",
      videoTitle: "Escape Velocity",
      questions: [
        {
          type: 'multiple-choice',
          question: "What condition must be satisfied for an object to achieve escape velocity from a planet?",
          options: [
            "The kinetic energy must equal the potential energy",
            "The total mechanical energy must equal zero",
            "The velocity must be constant throughout the flight",
            "The gravitational force must become zero"
          ],
          correctAnswer: 1,
          explanation: "For an object to escape a planet's gravitational field, its total mechanical energy must equal zero:\n\n$$E = KE + PE = 0$$\n\nThis means:\n\n$$\\frac{1}{2}mv^2 - \\frac{GMm}{R} = 0$$\n\nAt this energy, the object will reach infinity with zero velocity, which is the minimum condition for escape."
        },
        {
          type: 'math-input',
          question: "Derive the escape velocity formula. If a planet has mass $M$ and radius $R$, write the expression for escape velocity $v_{\\text{escape}}$.",
          mathAnswer: "\\sqrt{\\frac{2GM}{R}}",
          explanation: "Starting from the energy condition $E = 0$:\n\n$$\\frac{1}{2}mv^2 - \\frac{GMm}{R} = 0$$\n\nSolving for $v$:\n\n$$\\frac{1}{2}mv^2 = \\frac{GMm}{R}$$\n\n$$v^2 = \\frac{2GM}{R}$$\n\n$$v_{\\text{escape}} = \\sqrt{\\frac{2GM}{R}}$$\n\nNotice that the escape velocity is independent of the mass of the escaping object."
        }
      ]
    },
    {
      videoId: "gph39sMrlM4",
      videoTitle: "The Physics of Binary Star Systems",
      questions: [
        {
          type: 'multiple-choice',
          question: "In a binary star system with two stars of different masses, which statement is true about their orbital periods?",
          options: [
            "The more massive star has a shorter period",
            "The less massive star has a shorter period",
            "Both stars have the same period",
            "The periods depend on their initial velocities"
          ],
          correctAnswer: 2,
          explanation: "In a binary star system, both stars orbit around their common center of mass with the $\\text{same period}$.\n\nThis must be true because the stars remain on opposite sides of the center of mass at all times. If they had different periods, they would not maintain their configuration as they orbit through space."
        },
        {
          type: 'math-input',
          question: "For a binary system with two stars of equal mass $M$ separated by distance $d$, each star orbits at radius $R = d/2$ from the center of mass. Write the equation relating the orbital speed $v$ to $M$ and $d$ using Newton's laws.",
          mathAnswer: "v^2 = \\frac{GM}{d}",
          explanation: "For circular motion, the centripetal force equals the gravitational force:\n\n$$\\frac{mv^2}{R} = \\frac{GM \\cdot M}{d^2}$$\n\nSince each star orbits at radius $R = d/2$:\n\n$$\\frac{mv^2}{d/2} = \\frac{GM^2}{d^2}$$\n\n$$\\frac{2mv^2}{d} = \\frac{GM^2}{d^2}$$\n\nCanceling $M$ and simplifying:\n\n$$v^2 = \\frac{GM}{d}$$"
        }
      ]
    }
  ]
};