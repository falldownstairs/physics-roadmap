module.exports = {
  id: "602",
  courseId: "mechanics",
  topicId: "satellite-motion",
  title: "Gravitational Fields & Circular Orbits",
  estimatedTime: "16 minutes",
  videos: [
    {
      videoId: "n4BzjP01uYM",
      videoTitle: "The Gravitational Field Strength",
      questions: [
        {
          type: 'multiple-choice',
          question: "The gravitational field strength $g$ is defined as the force of gravity on a test mass divided by the test mass. If a $1 \\text{ kg}$ test mass experiences a gravitational force of $9.8 \\text{ N}$, what is the gravitational field strength at that location?",
          options: [
            "$9.8 \\text{ m/s}^2$",
            "$9.8 \\text{ N/kg}$",
            "$9.8 \\text{ kg/N}$",
            "Both A and B are correct"
          ],
          correctAnswer: 3,
          explanation: "The gravitational field strength is:\n\n$$g = \\frac{F_g}{m_{test}} = \\frac{9.8 \\text{ N}}{1 \\text{ kg}} = 9.8 \\text{ N/kg}$$\n\nSince $\\text{N/kg}$ is equivalent to $\\text{m/s}^2$ (from $F = ma$), both units are correct. The value represents that for every kilogram placed at that location, there will be $9.8$ newtons of gravitational force."
        },
        {
          type: 'multiple-choice',
          question: "If the distance from the center of a planet is tripled, how does the gravitational field strength change?",
          options: [
            "It becomes $\\frac{1}{3}$ of its original value",
            "It becomes $\\frac{1}{6}$ of its original value",
            "It becomes $\\frac{1}{9}$ of its original value",
            "It triples"
          ],
          correctAnswer: 2,
          explanation: "The gravitational field strength is given by:\n\n$$g = G\\frac{M}{r^2}$$\n\nSince $g$ is inversely proportional to $r^2$, when the distance is tripled:\n\n$$g_{new} = G\\frac{M}{(3r)^2} = G\\frac{M}{9r^2} = \\frac{1}{9}g_{original}$$\n\nThe gravitational field strength becomes one-ninth of its original value."
        }
      ]
    },
    {
      videoId: "eWd15TEIjRE",
      videoTitle: "Satellites in Circular Orbit",
      questions: [
        {
          type: 'multiple-choice',
          question: "A satellite orbits a planet in a circular path at distance $R$ from the planet's center, as shown below. What is the orbital speed required for this circular orbit?",
          image: {
            src: 'circular_orbit.png',
            alt: 'Satellite in circular orbit around a planet at distance R'
          },
          options: [
            "$v = \\sqrt{\\frac{GM}{R}}$",
            "$v = \\sqrt{\\frac{2GM}{R}}$",
            "$v = \\frac{GM}{R}$",
            "$v = \\sqrt{GMR}$"
          ],
          correctAnswer: 0,
          explanation: "For a circular orbit, the gravitational force provides the centripetal force:\n\n$$\\frac{GMm}{R^2} = \\frac{mv^2}{R}$$\n\nCanceling $m$ and one factor of $R$:\n\n$$\\frac{GM}{R} = v^2$$\n\nTaking the square root:\n\n$$v = \\sqrt{\\frac{GM}{R}}$$\n\nThis is the orbital speed needed for a stable circular orbit at distance $R$ from the planet's center."
        },
        {
          type: 'multiple-choice',
          question: "As a satellite moves in a circular orbit around a planet, the gravitational force is always perpendicular to the satellite's displacement. What is the work done by gravity on the satellite during one complete orbit?",
          options: [
            "Positive, because gravity is always acting on the satellite",
            "Negative, because gravity pulls the satellite inward",
            "Zero, because the force is perpendicular to the displacement",
            "Equal to the change in kinetic energy"
          ],
          correctAnswer: 2,
          explanation: "The work done by gravity is:\n\n$$W = \\int \\vec{F} \\cdot d\\vec{r}$$\n\nIn a circular orbit, the gravitational force is always directed radially inward (toward the center), while the displacement $d\\vec{r}$ is always tangent to the circle. These directions are perpendicular, so:\n\n$$\\vec{F} \\cdot d\\vec{r} = 0$$\n\nTherefore, the work done by gravity is zero. This explains why the satellite maintains constant speed—there is no change in kinetic energy because no net work is done."
        }
      ]
    }
  ]
};