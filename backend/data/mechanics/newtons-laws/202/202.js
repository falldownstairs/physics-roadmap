module.exports = {
  id: "202",
  courseId: "mechanics",
  topicId: "newtons-laws",
  title: "Multiple-Body Systems & Pulleys",
  estimatedTime: "28 minutes",
  videos: [
    {
      videoId: "QmtTmUcE73k",
      videoTitle: "Two Newton's 2nd Law Example Problems: Ball Hanging From the Ceiling of a Truck and Crate in a Truck",
      questions: [
        {
          type: 'multiple-choice',
          question: "A truck accelerates forward at $2\\text{ m/s}^2$. A crate of mass $10\\text{ kg}$ rests on the truck bed. If the crate does not slip, what is the magnitude of the static friction force on the crate?",
          options: [
            "$10\\text{ N}$",
            "$20\\text{ N}$",
            "$50\\text{ N}$",
            "$100\\text{ N}$"
          ],
          correctAnswer: 1,
          explanation: "For the crate to accelerate with the truck without slipping, static friction must provide the net force.\n\nUsing Newton's second law:\n\n$$F_{net} = ma$$\n\n$$f_s = (10\\text{ kg})(2\\text{ m/s}^2) = 20\\text{ N}$$\n\nThe static friction force is $20\\text{ N}$ in the direction of the truck's acceleration, causing the crate to accelerate forward with the truck."
        },
        {
          type: 'multiple-choice',
          question: "A ball hangs from the ceiling of a truck by a string. When the truck accelerates forward, the string makes an angle with the vertical. Which force provides the horizontal component needed for the ball's acceleration?",
          options: [
            "Gravitational force",
            "Normal force from the air",
            "The horizontal component of tension",
            "Friction between the ball and string"
          ],
          correctAnswer: 2,
          explanation: "When the truck accelerates, the ball must accelerate with it. The only forces on the ball are $\\text{tension}$ and $\\text{gravity}$.\n\nGravity acts vertically downward. For the ball to accelerate horizontally:\n\n$$F_{net,x} = T\\sin\\theta = ma$$\n\nThe horizontal component of the tension force ($T\\sin\\theta$) provides the net force needed for the ball's horizontal acceleration with the truck."
        }
      ]
    },
    {
      videoId: "PRvpnZ_vDpU",
      videoTitle: "Solving Problems Involving Multiple-Bodies Using Newton's Laws",
      questions: [
        {
          type: 'multiple-choice',
          question: "Two blocks are pushed along a frictionless surface by a force of $20\\text{ N}$ to the right. Block A has mass $2\\text{ kg}$ and block B has mass $3\\text{ kg}$. What is the force that block A exerts on block B?",
          image: {
            src: 'two_blocks_pushed.png',
            alt: 'Two blocks A (2kg) and B (3kg) pushed by 20N force'
          },
          options: [
            "$8\\text{ N}$ to the left",
            "$8\\text{ N}$ to the right",
            "$12\\text{ N}$ to the left",
            "$12\\text{ N}$ to the right"
          ],
          correctAnswer: 3,
          explanation: "First, find the acceleration of the system:\n\n$$a = \\frac{F_{total}}{m_{total}} = \\frac{20\\text{ N}}{5\\text{ kg}} = 4\\text{ m/s}^2$$\n\nFor block B (mass $3\\text{ kg}$) to accelerate at $4\\text{ m/s}^2$, the net force on it must be:\n\n$$F_{net} = (3\\text{ kg})(4\\text{ m/s}^2) = 12\\text{ N}$$\n\nThis force comes from block A pushing on block B, so block A exerts $12\\text{ N}$ to the right on block B."
        },
        {
          type: 'multiple-choice',
          question: "When solving a multiple-body problem, which approach is most effective?",
          options: [
            "Treat all objects as a single system first to find acceleration",
            "Always solve for internal forces before finding acceleration",
            "Start with the smallest mass object",
            "Ignore friction forces in the initial analysis"
          ],
          correctAnswer: 0,
          explanation: "The most effective approach for multiple-body problems is:\n\n1. $\\text{System Analysis}$: Treat all objects as one system to find the acceleration using external forces only\n\n$$a = \\frac{F_{external}}{m_{total}}$$\n\n2. $\\text{Individual Object Analysis}$: Use the found acceleration with Newton's second law on individual objects to find internal forces (like tension or contact forces)\n\nThis method avoids dealing with internal forces (which cancel in the system analysis) until you need them."
        }
      ]
    },
    {
      videoId: "lNb1C8UnnUo",
      videoTitle: "Atwood's Machine Problems",
      questions: [
        {
          type: 'math-input',
          question: "An Atwood machine has a $5\\text{ kg}$ mass on one side and a $3\\text{ kg}$ mass on the other side. What is the magnitude of the system's acceleration (in m/s²)? Use $g = 10\\text{ m/s}^2$.",
          mathAnswer: "2.5",
          answerRange: 0.2,
          explanation: "For an Atwood machine with masses $m_1$ and $m_2$ (where $m_1 > m_2$):\n\n$$a = \\frac{(m_1 - m_2)g}{m_1 + m_2}$$\n\nSubstituting values:\n\n$$a = \\frac{(5 - 3)(10)}{5 + 3} = \\frac{20}{8} = 2.5\\text{ m/s}^2$$\n\nThe heavier mass accelerates downward and the lighter mass accelerates upward at the same rate."
        },
        {
          type: 'multiple-choice',
          question: "In an Atwood machine, which statement is TRUE about the tension in the string (assuming a massless, frictionless pulley)?",
          options: [
            "Tension equals the weight of the heavier mass",
            "Tension equals the weight of the lighter mass",
            "Tension is constant throughout the string but does not equal either weight",
            "Tension is different on each side of the pulley"
          ],
          correctAnswer: 2,
          explanation: "For an Atwood machine with a massless, frictionless pulley, the $\\text{tension is constant}$ throughout the string.\n\nHowever, tension does NOT equal either mass's weight. The tension is:\n\n$$T = \\frac{2m_1 m_2 g}{m_1 + m_2}$$\n\nThis is less than $m_1 g$ (heavier weight) but greater than $m_2 g$ (lighter weight). The tension is between the two weights because both masses are accelerating."
        }
      ]
    },
    {
      videoId: "l7FNVmuNn2I",
      videoTitle: "Atwood's Machine Problems (part II)",
      questions: [
        {
          type: 'math-input',
          question: "A modified Atwood machine has a $4\\text{ kg}$ block on a frictionless horizontal table connected by a string over a pulley to a hanging $2\\text{ kg}$ mass. What is the acceleration of the system (in m/s²)? Use $g = 10\\text{ m/s}^2$.",
          mathAnswer: "3.33",
          answerRange: 0.2,
          explanation: "For a modified Atwood machine (one mass on table, one hanging):\n\n$$a = \\frac{m_{hanging} \\cdot g}{m_{table} + m_{hanging}}$$\n\nSubstituting:\n\n$$a = \\frac{(2\\text{ kg})(10\\text{ m/s}^2)}{4\\text{ kg} + 2\\text{ kg}} = \\frac{20}{6} \\approx 3.33\\text{ m/s}^2$$\n\nOnly the hanging mass's weight contributes to the net external force on the system."
        },
        {
          type: 'multiple-choice',
          question: "For a modified Atwood machine with friction coefficient $\\mu_k$ between the table mass $m_1$ and the surface, which expression gives the acceleration?",
          options: [
            "$a = \\frac{m_2 g}{m_1 + m_2}$",
            "$a = \\frac{m_2 g - \\mu_k m_1 g}{m_1 + m_2}$",
            "$a = \\frac{m_2 g - \\mu_k m_2 g}{m_1 + m_2}$",
            "$a = \\frac{(m_2 - m_1)g}{m_1 + m_2}$"
          ],
          correctAnswer: 1,
          explanation: "With friction on the horizontal mass $m_1$:\n\n1. External forces: $m_2 g$ (pulling system) and $f_k = \\mu_k m_1 g$ (opposing motion)\n\n2. Net external force:\n\n$$F_{net} = m_2 g - \\mu_k m_1 g$$\n\n3. System acceleration:\n\n$$a = \\frac{m_2 g - \\mu_k m_1 g}{m_1 + m_2}$$\n\nFriction depends on the normal force of the table mass ($m_1 g$), not the hanging mass."
        }
      ]
    }
  ]
};
