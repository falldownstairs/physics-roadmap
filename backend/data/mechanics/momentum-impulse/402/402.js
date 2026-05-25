module.exports = {
  id: "402",
  courseId: "mechanics",
  topicId: "momentum-impulse",
  title: "2D Collisions & Ballistic Pendulum",
  estimatedTime: "18 minutes",
  videos: [
    {
      videoId: "Y0NYXy5p5_0",
      videoTitle: "Collisions in 2 Dimensions",
      questions: [
        {
          type: 'multiple-choice',
          question: "In a two-dimensional collision, when can momentum be conserved separately in the x and y directions?",
          options: [
            "Only when the collision is elastic",
            "When the net external force is zero in both the x and y directions",
            "Only when both objects have the same mass",
            "When kinetic energy is conserved"
          ],
          correctAnswer: 1,
          explanation: "Momentum can be analyzed separately in x and y directions when:\n\n$$F_{\\text{net}, x} = 0 \\implies p_{x, \\text{initial}} = p_{x, \\text{final}}$$\n\n$$F_{\\text{net}, y} = 0 \\implies p_{y, \\text{initial}} = p_{y, \\text{final}}$$\n\nThis is independent of whether the collision is elastic or inelastic. As long as there are no external forces in a particular direction, momentum is conserved in that direction.\n\nFor example, when a sandbag drops into a moving cart, the floor exerts an external force in the y-direction, so momentum is NOT conserved in the y-direction. However, there's no external force in the x-direction, so momentum IS conserved in the x-direction."
        },
        {
          type: 'math-input',
          question: "A $2\\text{ kg}$ object moving at $3\\text{ m/s}$ in the positive x-direction collides and sticks with a $1\\text{ kg}$ object moving at $2\\text{ m/s}$ in the positive y-direction. What is the x-component of the final velocity (in $\\text{m/s}$)?",
          image: {
            src: 'perpendicular_collision.png',
            alt: 'Two objects approaching perpendicular to each other before collision'
          },
          mathAnswer: "2",
          answerRange: 0.05,
          explanation: "Use conservation of momentum in the x-direction:\n\n$$p_{x, i} = p_{x, f}$$\n\n$$m_1 v_{1x} + m_2 v_{2x} = (m_1 + m_2)v_{fx}$$\n\nThe $1\\text{ kg}$ object has no x-component of velocity initially:\n\n$$(2)(3) + (1)(0) = (2 + 1)v_{fx}$$\n\n$$6 = 3v_{fx}$$\n\n$$v_{fx} = 2\\text{ m/s}$$\n\nSimilarly, for the y-direction:\n\n$$(2)(0) + (1)(2) = (3)v_{fy}$$\n\n$$v_{fy} = \\frac{2}{3}\\text{ m/s}$$\n\nThe final velocity has components $(2, \\frac{2}{3})\\text{ m/s}$."
        }
      ]
    },
    {
      videoId: "qefrLHITBic",
      videoTitle: "Ballistic Pendulum Problems",
      questions: [
        {
          type: 'multiple-choice',
          question: "Why can't you solve a ballistic pendulum problem using energy conservation alone from the bullet's initial state to the pendulum's maximum height?",
          options: [
            "Because momentum is not conserved",
            "Because thermal energy is created during the collision, and we don't know how much",
            "Because the pendulum string does work on the system",
            "Because gravity changes the kinetic energy"
          ],
          correctAnswer: 1,
          explanation: "Ballistic pendulum problems require TWO steps:\n\n1. Use $\\text{momentum conservation}$ for the collision (bullet embeds in block)\n\n2. Use $\\text{energy conservation}$ after the collision (combined mass swings up)\n\nYou cannot use energy conservation for the entire process because the collision creates thermal energy when the bullet embeds in the block. Since we don't know how much thermal energy is created, we must:\n\n$$\\text{Step 1: } m_{\\text{bullet}}v_0 = (m_{\\text{bullet}} + m_{\\text{block}})v'$$\n\n$$\\text{Step 2: } \\frac{1}{2}(m_{\\text{bullet}} + m_{\\text{block}})v'^2 = (m_{\\text{bullet}} + m_{\\text{block}})gh$$\n\nThe kinetic energy of the bullet before collision is much greater than the kinetic energy of the combined system just after collision due to thermal energy loss."
        },
        {
          type: 'math-input',
          question: "A $0.02\\text{ kg}$ bullet embeds into a $1.98\\text{ kg}$ block hanging from a string. After collision, the combined mass swings up to a height of $0.8\\text{ m}$. Calculate the speed of the bullet just before impact (in $\\text{m/s}$). Use $g = 10\\text{ m/s}^2$.",
          mathAnswer: "400",
          answerRange: 5,
          explanation: "This is a two-step problem:\n\n1. Find speed just after collision using energy conservation:\n\n$$mgh = \\frac{1}{2}mv'^2$$\n\n$$v' = \\sqrt{2gh} = \\sqrt{2(10)(0.8)} = 4\\text{ m/s}$$\n\n2. Find initial bullet speed using momentum conservation:\n\n$$m_{\\text{bullet}}v_0 = (m_{\\text{bullet}} + m_{\\text{block}})v'$$\n\n$$(0.02)v_0 = (2.00)(4)$$\n\n$$v_0 = \\frac{8}{0.02} = 400\\text{ m/s}$$\n\nNote: The kinetic energy before collision $K_i = \\frac{1}{2}(0.02)(400)^2 = 1600\\text{ J}$ is much greater than after collision $K_f = \\frac{1}{2}(2)(4)^2 = 16\\text{ J}$, showing significant thermal energy was created."
        }
      ]
    }
  ]
};