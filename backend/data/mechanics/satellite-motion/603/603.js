module.exports = {
  id: "603",
  courseId: "mechanics",
  topicId: "satellite-motion",
  title: "Kepler's Laws",
  estimatedTime: "12 minutes",
  videos: [
    {
      videoId: "uIYRFxF1DjI",
      videoTitle: "Kepler's Laws of Planetary Motion",
      questions: [
        {
          type: 'multiple-choice',
          question: "According to Kepler's Second Law, a planet sweeps out equal areas in equal times. What does this imply about the planet's speed at different points in its orbit?",
          options: [
            "The planet moves at constant speed throughout its orbit",
            "The planet moves faster when it is closer to the Sun",
            "The planet moves slower when it is closer to the Sun",
            "The planet's speed depends only on its mass"
          ],
          correctAnswer: 1,
          explanation: "Kepler's Second Law states that a planet sweeps out equal areas in equal times. When the planet is closer to the Sun, it must move faster to sweep out the same area in the same time interval compared to when it is farther away.\n\nThis law is a consequence of $\\text{conservation of angular momentum}$. As the orbital radius decreases (planet closer to Sun), the velocity must increase to maintain constant angular momentum:\n\n$$L = mvr = \\text{constant}$$\n\nTherefore, when $r$ decreases, $v$ must increase proportionally."
        },
        {
          type: 'math-input',
          question: "According to Kepler's Third Law, the ratio $\\frac{T^2}{R^3}$ is constant for all planets orbiting the same star, where $T$ is the orbital period and $R$ is the semi-major axis. This constant equals $\\frac{4\\pi^2}{GM_s}$. If a planet has an orbital period of $8\\text{ years}$ and orbits at $4\\text{ AU}$ from its star, what would be the orbital period (in years) of another planet orbiting the same star at a distance of $9\\text{ AU}$?",
          mathAnswer: "27",
          answerRange: 0.5,
          explanation: "Using Kepler's Third Law, we know that:\n\n$$\\frac{T_1^2}{R_1^3} = \\frac{T_2^2}{R_2^3}$$\n\nGiven values:\n- Planet 1: $T_1 = 8\\text{ years}$, $R_1 = 4\\text{ AU}$\n- Planet 2: $R_2 = 9\\text{ AU}$, $T_2 = ?$\n\nSolving for $T_2$:\n\n$$T_2^2 = T_1^2 \\cdot \\frac{R_2^3}{R_1^3}$$\n\n$$T_2^2 = (8)^2 \\cdot \\frac{(9)^3}{(4)^3} = 64 \\cdot \\frac{729}{64} = 729$$\n\n$$T_2 = \\sqrt{729} = 27\\text{ years}$$\n\nNotice that this follows the relationship $T \\propto R^{3/2}$, which is a direct consequence of Kepler's Third Law."
        }
      ]
    }
  ]
};
