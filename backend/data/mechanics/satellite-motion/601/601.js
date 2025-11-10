module.exports = {
  id: "601",
  courseId: "mechanics",
  topicId: "satellite-motion",
  title: "Gravitational Force & Energy",
  estimatedTime: "20 minutes",
  videos: [
    {
      videoId: "z0GN6VEN-4k",
      videoTitle: "The Gravitational Force",
      questions: [
        {
          type: 'multiple-choice',
          question: "Near the surface of Earth, the gravitational field strength $g$ has a value of approximately $9.8 \\text{ N/kg}$. What does this value represent?",
          options: [
            "For every kilogram of mass, there is a gravitational force of $9.8 \\text{ N}$",
            "The total gravitational force at Earth's surface is $9.8 \\text{ N}$",
            "The gravitational constant $G$ equals $9.8 \\text{ N/kg}$",
            "The mass of Earth divided by its radius squared"
          ],
          correctAnswer: 0,
          explanation: "The gravitational field strength of $9.8 \\text{ N/kg}$ means that for every kilogram of mass, there is a gravitational force of $9.8$ newtons acting on it. This is equivalent to saying the acceleration due to gravity is $9.8 \\text{ m/s}^2$, since $\\text{N/kg}$ and $\\text{m/s}^2$ are equivalent units."
        },
        {
          type: 'multiple-choice',
          question: "The mass of Planet X is one-tenth that of Earth, and its radius is one-half that of Earth. What is the acceleration due to gravity at the surface of Planet X?",
          options: [
            "$2 \\text{ m/s}^2$",
            "$4 \\text{ m/s}^2$",
            "$5 \\text{ m/s}^2$",
            "$10 \\text{ m/s}^2$"
          ],
          correctAnswer: 1,
          explanation: "The gravitational field strength is given by:\n\n$$g = G\\frac{M}{R^2}$$\n\nCompared to Earth, Planet X has mass $M/10$ and radius $R/2$.\n\nThe acceleration becomes:\n\n$$g_X = G\\frac{M/10}{(R/2)^2} = G\\frac{M/10}{R^2/4} = G\\frac{4M}{10R^2} = \\frac{4}{10}g_{Earth}$$\n\nTherefore: $g_X = 0.4 \\times 9.8 \\approx 4 \\text{ m/s}^2$"
        }
      ]
    },
    {
      videoId: "QZgh18t7-P8",
      videoTitle: "Gravitational Potential Energy",
      questions: [
        {
          type: 'multiple-choice',
          question: "A person with mass $75 \\text{ kg}$ standing on Earth's surface has a gravitational potential energy of approximately $-4.7 \\times 10^9 \\text{ J}$. What does the negative sign indicate?",
          options: [
            "The person is below sea level",
            "The calculation contains an error",
            "The person is bound to Earth and would need positive kinetic energy to escape",
            "The person is falling downward"
          ],
          correctAnswer: 2,
          explanation: "The negative gravitational potential energy means the person is $\\text{bound}$ to Earth's gravitational field. To completely escape Earth's gravity and reach infinite distance, the person would need positive kinetic energy equal in magnitude to this negative potential energy (approximately $4.7 \\times 10^9 \\text{ J}$). All gravitational potential energies are negative by convention."
        },
      ]
    },
    {
      videoId: "Ok6qmQBHrMI",
      videoTitle: "Gravitational Forces and Energies",
      questions: [
        {
          type: 'multiple-choice',
          question: "A newly discovered planet has twice the mass of Earth, but the acceleration due to gravity on its surface is exactly the same as on Earth's surface. What is the radius of this planet in terms of Earth's radius $R_E$?",
          options: [
            "$R_E/2$",
            "$R_E$",
            "$\\sqrt{2} R_E$",
            "$2R_E$"
          ],
          correctAnswer: 2,
          explanation: "The gravitational field strength is:\n\n$$g = G\\frac{M}{R^2}$$\n\nFor the new planet to have the same $g$ as Earth with twice the mass:\n\n$$G\\frac{2M_E}{R_{new}^2} = G\\frac{M_E}{R_E^2}$$\n\nSolving for $R_{new}$:\n\n$$R_{new}^2 = 2R_E^2$$\n\n$$R_{new} = \\sqrt{2} R_E$$"
        },
        {
          type: 'multiple-choice',
          question: "The formula $\\Delta U = mg\\Delta h$ is commonly used to calculate changes in gravitational potential energy near Earth's surface. Under what condition is this formula valid?",
          options: [
            "When the object has zero initial velocity",
            "When $\\Delta h$ is much smaller than Earth's radius",
            "When the object's mass is less than $100 \\text{ kg}$",
            "When the gravitational field is zero"
          ],
          correctAnswer: 1,
          explanation: "The approximation $\\Delta U = mg\\Delta h$ is valid when the height change is much smaller than Earth's radius ($\\Delta h \\ll R_E$).\n\nWhen this condition is met, the gravitational field can be treated as uniform (constant), and the more general expression:\n\n$$\\Delta U = -Gm_1M_E\\left(\\frac{1}{R_E} - \\frac{1}{R_E + \\Delta h}\\right)$$\n\nreduces to the simpler form $mg\\Delta h$. For typical problems involving heights of meters or even kilometers, this is an excellent approximation."
        }
      ]
    }
  ]
};