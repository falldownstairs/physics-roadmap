module.exports = {
  id: "401",
  courseId: "mechanics",
  topicId: "momentum-impulse",
  title: "Linear Momentum & Collisions",
  estimatedTime: "22 minutes",
  videos: [
    {
      videoId: "dh4Zo2u9ZKk",
      videoTitle: "Momentum Basics",
      questions: [
        {
          type: 'multiple-choice',
          question: "Under what condition is momentum conserved for a system of objects?",
          options: [
            "When all objects are moving at constant velocity",
            "When the net external force on the system is zero",
            "When kinetic energy is conserved",
            "When all collisions are elastic"
          ],
          correctAnswer: 1,
          explanation: "Momentum is conserved when the net external force on the system is zero:\n\n$$F_{\\text{net}} = 0 \\implies \\Delta p = 0$$\n\nFrom Newton's second law for a system:\n\n$$F_{\\text{net}} \\Delta t = \\Delta p$$\n\nIf $F_{\\text{net}} = 0$, then $\\Delta p = 0$, which means:\n\n$$p_{\\text{initial}} = p_{\\text{final}}$$\n\nThis applies to collisions where internal forces (between objects in the system) are much larger than external forces like friction or air resistance."
        },
        {
          type: 'math-input',
          question: "Two objects collide. Object A has mass $3\\text{ kg}$ and initial velocity $4\\text{ m/s}$ to the right. Object B has mass $2\\text{ kg}$ and initial velocity $1\\text{ m/s}$ to the left. After collision, object A moves at $1\\text{ m/s}$ to the right. Find the final velocity of object B (in $\\text{m/s}$). Use positive for rightward motion.",
          mathAnswer: "3.5",
          answerRange: 0.1,
          explanation: "Using conservation of momentum with rightward as positive:\n\n$$p_{\\text{initial}} = p_{\\text{final}}$$\n\n$$m_A v_{Ai} + m_B v_{Bi} = m_A v_{Af} + m_B v_{Bf}$$\n\nSubstituting values (note: $v_{Bi} = -1\\text{ m/s}$ since leftward):\n\n$$(3)(4) + (2)(-1) = (3)(1) + (2)v_{Bf}$$\n\n$$12 - 2 = 3 + 2v_{Bf}$$\n\n$$10 = 3 + 2v_{Bf}$$\n\n$$v_{Bf} = 3.5\\text{ m/s}$$\n\nThe positive result indicates object B moves to the right after collision."
        },
        {
          type: 'multiple-choice',
          question: "A $2\\text{ kg}$ ball moving at $3\\text{ m/s}$ to the right bounces off a wall and returns at $2\\text{ m/s}$ to the left. What is the change in momentum of the ball?",
          image: {
            src: 'ball_wall_collision.png',
            alt: 'Ball approaching and bouncing off wall with velocity vectors shown'
          },
          options: [
            "$2\\text{ kg}\\cdot\\text{m/s}$",
            "$-2\\text{ kg}\\cdot\\text{m/s}$",
            "$10\\text{ kg}\\cdot\\text{m/s}$",
            "$-10\\text{ kg}\\cdot\\text{m/s}$"
          ],
          correctAnswer: 3,
          explanation: "Change in momentum is $\\Delta p = p_f - p_i$. Taking rightward as positive:\n\nInitial momentum:\n\n$$p_i = m v_i = (2\\text{ kg})(3\\text{ m/s}) = 6\\text{ kg}\\cdot\\text{m/s}$$\n\nFinal momentum (leftward is negative):\n\n$$p_f = m v_f = (2\\text{ kg})(-2\\text{ m/s}) = -4\\text{ kg}\\cdot\\text{m/s}$$\n\nChange in momentum:\n\n$$\\Delta p = p_f - p_i = -4 - 6 = -10\\text{ kg}\\cdot\\text{m/s}$$\n\nA common mistake is to simply find the difference in speeds $(3-2=1)$ and multiply by mass. You must account for the direction change by using negative values for opposite directions."
        }
      ]
    },
    {
      videoId: "cvfB6y_n_QA",
      videoTitle: "Types of Collisions",
      questions: [
        {
          type: 'multiple-choice',
          question: "What defines a $\\text{perfectly inelastic collision}$?",
          options: [
            "Kinetic energy is conserved",
            "The objects stick together after collision",
            "The objects bounce off each other elastically",
            "Momentum is not conserved"
          ],
          correctAnswer: 1,
          explanation: "A $\\text{perfectly inelastic collision}$ occurs when the colliding objects stick together and move as one mass after the collision.\n\nIn perfectly inelastic collisions:\n\n1. Momentum is conserved: $p_i = p_f$\n\n2. Kinetic energy is NOT conserved—some is converted to thermal energy, sound, deformation, etc.\n\n3. The objects have the same final velocity: $v_f = \\frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}$\n\nThis type of collision has the maximum kinetic energy loss possible while still conserving momentum."
        },
        {
          type: 'math-input',
          question: "A $5\\text{ kg}$ mass moving at $2\\text{ m/s}$ collides and sticks to a $4\\text{ kg}$ mass moving at $-1\\text{ m/s}$. Calculate the kinetic energy lost (in $\\text{J}$) during this perfectly inelastic collision.",
          mathAnswer: "10",
          answerRange: 0.1,
          explanation: "First, find the final velocity using momentum conservation:\n\n$$m_1 v_1 + m_2 v_2 = (m_1 + m_2)v_f$$\n\n$$(5)(2) + (4)(-1) = (9)v_f$$\n\n$$v_f = \\frac{6}{9} = \\frac{2}{3}\\text{ m/s}$$\n\nInitial kinetic energy:\n\n$$K_i = \\frac{1}{2}(5)(2)^2 + \\frac{1}{2}(4)(1)^2 = 10 + 2 = 12\\text{ J}$$\n\nFinal kinetic energy:\n\n$$K_f = \\frac{1}{2}(9)\\left(\\frac{2}{3}\\right)^2 = \\frac{1}{2}(9)\\left(\\frac{4}{9}\\right) = 2\\text{ J}$$\n\nEnergy lost:\n\n$$\\Delta K = K_i - K_f = 12 - 2 = 10\\text{ J}$$\n\nThis energy is converted to thermal energy and deformation."
        }
      ]
    },
    {
      videoId: "cvfB6y_n_QA",
      videoTitle: "Types of Collisions (part 2)",
      questions: [
        {
          type: 'multiple-choice',
          question: "In an $\\text{elastic collision}$ between two objects of equal mass where one is initially at rest, what happens to their velocities after collision?",
          options: [
            "Both objects move with half the initial speed",
            "The moving object stops and the stationary object moves with the initial speed",
            "Both objects move together at the same speed",
            "Both objects reverse direction"
          ],
          correctAnswer: 1,
          explanation: "For an $\\text{elastic collision}$ between equal masses where one is initially at rest, the objects exchange velocities.\n\nUsing conservation of momentum:\n\n$$m v_1 + m(0) = m v_{1f} + m v_{2f}$$\n\n$$v_1 = v_{1f} + v_{2f}$$\n\nFor elastic collisions, kinetic energy is also conserved:\n\n$$\\frac{1}{2}m v_1^2 = \\frac{1}{2}m v_{1f}^2 + \\frac{1}{2}m v_{2f}^2$$\n\nSolving these equations yields: $v_{1f} = 0$ and $v_{2f} = v_1$\n\nThis is commonly observed in pool/billiards when the cue ball stops after hitting another ball head-on."
        },
        {
          type: 'multiple-choice',
          question: "Which statement is true for ALL types of collisions (elastic, inelastic, and perfectly inelastic)?",
          options: [
            "Kinetic energy is conserved",
            "The objects stick together",
            "Momentum is conserved if net external force is zero",
            "Mechanical energy increases"
          ],
          correctAnswer: 2,
          explanation: "For ALL collisions, momentum is conserved when the net external force on the system is zero:\n\n$$\\vec{p}_{\\text{total, before}} = \\vec{p}_{\\text{total, after}}$$\n\nHowever:\n\n1. $\\text{Elastic collisions}$: Both momentum AND kinetic energy are conserved\n\n2. $\\text{Inelastic collisions}$: Momentum is conserved, but kinetic energy is NOT conserved (some converts to thermal energy)\n\n3. $\\text{Perfectly inelastic collisions}$: Momentum is conserved, maximum kinetic energy is lost, objects stick together\n\nMomentum conservation comes from Newton's third law and applies universally to isolated systems."
        },
        {
          type: 'math-input',
          question: "Two identical balls collide elastically. Ball 1 has initial velocity $6\\text{ m/s}$ and ball 2 is at rest. After collision, ball 1 stops. What is the velocity of ball 2 after collision (in $\\text{m/s}$)?",
          mathAnswer: "6",
          answerRange: 0.1,
          explanation: "For an elastic collision between equal masses where one is at rest, the velocities are exchanged.\n\nUsing momentum conservation:\n\n$$m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f}$$\n\nSince $m_1 = m_2 = m$, $v_{2i} = 0$, and $v_{1f} = 0$:\n\n$$m(6) + m(0) = m(0) + m v_{2f}$$\n\n$$v_{2f} = 6\\text{ m/s}$$\n\nWe can verify this is elastic by checking kinetic energy:\n\n$$K_i = \\frac{1}{2}m(6)^2 = 18m$$\n\n$$K_f = \\frac{1}{2}m(6)^2 = 18m$$\n\nIndeed, $K_i = K_f$, confirming the collision is elastic."
        }
      ]
    }
  ]
};
