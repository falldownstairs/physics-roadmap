module.exports = {
  id: "502",
  courseId: "mechanics",
  topicId: "rotational-motion",
  title: "Rotational Kinetic Energy",
  estimatedTime: "22 minutes",
  videos: [
    {
      videoId: "m2j7ddWOfNA",
      videoTitle: "Rotational Kinetic Energy (part 1)",
      questions: [
        {
          type: 'multiple-choice',
          question: "What is the formula for $\\text{rotational kinetic energy}$?",
          options: [
            "$K_{rot} = \\frac{1}{2}mv^2$",
            "$K_{rot} = \\frac{1}{2}I\\omega$",
            "$K_{rot} = \\frac{1}{2}I\\omega^2$",
            "$K_{rot} = I\\omega^2$"
          ],
          correctAnswer: 2,
          explanation: "Rotational kinetic energy is analogous to linear kinetic energy ($\\frac{1}{2}mv^2$), but uses rotational quantities:\n\n$$K_{rot} = \\frac{1}{2}I\\omega^2$$\n\nwhere $I$ is the $\\text{rotational inertia}$ (analogous to mass) and $\\omega$ is the $\\text{angular velocity}$ (analogous to linear velocity)."
        },
        {
          type: 'multiple-choice',
          question: "A uniform meter stick is pivoted at one end and released from a horizontal position. Which energy transformation occurs as it swings down?",
          options: [
            "Kinetic energy converts to potential energy",
            "Rotational kinetic energy converts to linear kinetic energy",
            "Potential energy converts to rotational kinetic energy",
            "Linear kinetic energy converts to rotational kinetic energy"
          ],
          correctAnswer: 2,
          explanation: "Initially, the meter stick has $\\text{gravitational potential energy}$ when held horizontally. As it swings down, the center of mass falls, converting potential energy to rotational kinetic energy:\n\n$$mgh = \\frac{1}{2}I\\omega^2$$\n\nThe pivot axis doesn't move, so there is no linear kinetic energy term ($\\frac{1}{2}mv^2$)."
        }
      ]
    },
    {
      videoId: "obkHulqyVTo",
      videoTitle: "Rotational Kinetic Energy (part 2)",
      questions: [
        {
          type: 'multiple-choice',
          question: "A solid cylinder rolls without slipping on a level surface. What is its $\\text{total kinetic energy}$?",
          options: [
            "$K_{total} = \\frac{1}{2}mv^2$",
            "$K_{total} = \\frac{1}{2}I\\omega^2$",
            "$K_{total} = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$",
            "$K_{total} = mv^2 + I\\omega^2$"
          ],
          correctAnswer: 2,
          explanation: "When an object rolls, it has both translational and rotational motion. The total kinetic energy includes both:\n\n$$K_{total} = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$$\n\nThe first term accounts for the moving axis (translation), and the second term accounts for rotation about that axis. For a solid cylinder with $I = \\frac{1}{2}mR^2$ and $v = \\omega R$, this simplifies to $K_{total} = \\frac{3}{4}mv^2$."
        },
        {
          type: 'math-input',
          question: "A hollow hoop of mass $m$ rolls without slipping down an incline from height $h$. Using energy conservation, what is its speed at the bottom? Express your answer as $v = \\sqrt{Cgh}$ where $C$ is a constant. What is $C$?",
          mathAnswer: "1",
          answerRange: 0.01,
          explanation: "Using conservation of energy, initial potential energy equals final kinetic energy:\n\n$$mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$$\n\nFor a hollow hoop, $I = mR^2$ and $\\omega = v/R$ (no slipping):\n\n$$mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}(mR^2)\\left(\\frac{v}{R}\\right)^2$$\n\n$$mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}mv^2 = mv^2$$\n\n$$v = \\sqrt{gh}$$\n\nTherefore, $C = 1$."
        }
      ]
    },
    {
      videoId: "9QoPdMHcOxc",
      videoTitle: "An example of an Atwood's Machine problem involving a pulley with non-negligible mass and with friction in its axle",
      questions: [
        {
          type: 'multiple-choice',
          question: "In an Atwood's machine with a pulley of non-negligible mass, why are the two string tensions $\\text{not equal}$?",
          options: [
            "Because one mass is heavier than the other",
            "Because the pulley must have angular acceleration, requiring unequal tensions to create torque",
            "Because friction always makes tensions unequal",
            "Because the strings have different lengths"
          ],
          correctAnswer: 1,
          explanation: "For the pulley to rotate with angular acceleration ($\\alpha \\neq 0$), there must be a net torque on it:\n\n$$\\sum \\tau = I\\alpha$$\n\nThis requires that $(T_2 - T_1)R = I\\alpha$, meaning $T_2 \\neq T_1$. The difference in tensions creates the torque needed to give the pulley rotational acceleration. When the pulley has negligible mass, $I \\approx 0$ and the tensions become equal."
        },
        {
          type: 'multiple-choice',
          question: "In an Atwood's machine problem with friction in the pulley's axle, what happens to the mechanical energy lost to friction?",
          options: [
            "It disappears from the system",
            "It converts to additional kinetic energy",
            "It converts to thermal energy",
            "It converts back to potential energy"
          ],
          correctAnswer: 2,
          explanation: "When friction is present in the pulley's axle, mechanical energy is converted to $\\text{thermal energy}$. Using energy conservation:\n\n$$E_{initial} = E_{final} + E_{thermal}$$\n\n$$m_2gh = \\frac{1}{2}m_2v^2 + \\frac{1}{2}m_1v^2 + m_1gh + \\frac{1}{2}I\\omega^2 + E_{thermal}$$\n\nThe thermal energy term accounts for the mechanical energy dissipated by friction."
        }
      ]
    }
  ]
};