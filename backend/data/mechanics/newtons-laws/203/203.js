module.exports = {
  id: "203",
  courseId: "mechanics",
  topicId: "newtons-laws",
  title: "Circular Motion & Banked Turns",
  estimatedTime: "32 minutes",
  videos: [
    {
      videoId: "AtJBl9N9o6E",
      videoTitle: "Circular Motion Problems",
      questions: [
        {
          type: 'multiple-choice',
          question: "A person sits at the top of a Ferris wheel moving in uniform circular motion. Which of the following correctly describes the relationship between the normal force ($F_N$) and the person's weight ($mg$)?",
          options: [
            "$F_N > mg$ because the person accelerates upward",
            "$F_N = mg$ because the person is in equilibrium",
            "$F_N < mg$ because the person accelerates toward the center",
            "$F_N = 0$ because the person is weightless at the top"
          ],
          correctAnswer: 2,
          explanation: "At the top of the Ferris wheel, the person accelerates downward toward the center of the circle. Using Newton's second law:\n\n$$\\frac{v^2}{r} = \\frac{mg - F_N}{m}$$\n\nThis shows that $mg$ must be greater than $F_N$ to provide the net downward (centripetal) force. The normal force is:\n\n$$F_N = mg - \\frac{mv^2}{r}$$\n\nTherefore, $F_N < mg$, making the person feel lighter at the top."
        }
      ]
    },
    {
      videoId: "aFEnKRQMjgQ",
      videoTitle: "Physics of Circular Motion (part II)",
      questions: [
        {
          type: 'multiple-choice',
          question: "A car travels around a flat circular turn of radius $r$ with coefficient of static friction $\\mu_s$. What is the maximum speed the car can travel without sliding?",
          options: [
            "$v_{\\text{max}} = \\sqrt{\\mu_s g r}$",
            "$v_{\\text{max}} = \\sqrt{\\frac{gr}{\\mu_s}}$",
            "$v_{\\text{max}} = \\mu_s gr$",
            "$v_{\\text{max}} = \\frac{\\mu_s g}{r}$"
          ],
          correctAnswer: 0,
          explanation: "For a car on a flat turn, friction provides the centripetal force. In the horizontal direction:\n\n$$\\frac{v^2}{r} = \\frac{F_s}{m}$$\n\nThe maximum static friction is $F_s = \\mu_s F_N = \\mu_s mg$. Substituting:\n\n$$\\frac{v_{\\text{max}}^2}{r} = \\frac{\\mu_s mg}{m} = \\mu_s g$$\n\nSolving for $v_{\\text{max}}$:\n\n$$v_{\\text{max}} = \\sqrt{\\mu_s g r}$$\n\nNotice that the mass cancels out, so vehicles of any mass have the same maximum speed on the same curve."
        },
        {
          type: 'math-input',
          question: "A person at the bottom of a circular loop (like the Viper ride) experiences a normal force. If the person has mass $m$, travels with speed $v$, and the loop has radius $R$, write the expression for the normal force $F_N$.",
          mathAnswer: "mg + \\frac{mv^2}{R}",
          explanation: "At the bottom of the loop, the person accelerates upward toward the center. Both the normal force and weight act, but the normal force is larger.\n\nUsing Newton's second law in the vertical direction:\n\n$$\\frac{v^2}{R} = \\frac{F_N - mg}{m}$$\n\nSolving for $F_N$:\n\n$$F_N = mg + \\frac{mv^2}{R}$$\n\nThis shows that the normal force exceeds the person's weight by the centripetal force term $\\frac{mv^2}{R}$. The faster you go, the more you're pushed into your seat."
        }
      ]
    },
    {
      videoId: "5sULOQeXCdI",
      videoTitle: "Physics of Banked Turns",
      questions: [
        {
          type: 'multiple-choice',
          question: "A car travels around a banked turn at the perfect speed where no friction is needed. At this speed, which force(s) provide the centripetal acceleration?",
          options: [
            "Only the normal force",
            "Only friction",
            "The horizontal component of the normal force",
            "Both friction and the normal force equally"
          ],
          correctAnswer: 2,
          explanation: "When a car travels at the ideal speed on a banked turn, friction is not needed. The normal force can be broken into components:\n\n1. $F_N \\cos\\theta$ balances the weight ($mg$) vertically\n2. $F_N \\sin\\theta$ provides the centripetal force horizontally\n\nThe horizontal component of the normal force is what causes the car to accelerate toward the center of the turn:\n\n$$\\frac{v^2}{r} = \\frac{F_N \\sin\\theta}{m}$$\n\nThis is why banked turns allow vehicles to navigate curves at higher speeds safely."
        },
        {
          type: 'math-input',
          question: "For a banked turn with angle $\\theta$ and radius $r$, what is the ideal speed $v$ at which a car can travel without relying on friction? (Use $g$ for gravitational acceleration)",
          mathAnswer: "\\sqrt{rg\\tan\\theta}",
          explanation: "For a frictionless banked turn, we set up Newton's second law in two directions.\n\nVertical (no acceleration):\n\n$$F_N \\cos\\theta = mg$$\n\nHorizontal (centripetal acceleration):\n\n$$F_N \\sin\\theta = \\frac{mv^2}{r}$$\n\nDividing these equations:\n\n$$\\frac{F_N \\sin\\theta}{F_N \\cos\\theta} = \\frac{mv^2/r}{mg}$$\n\n$$\\tan\\theta = \\frac{v^2}{rg}$$\n\nSolving for $v$:\n\n$$v = \\sqrt{rg\\tan\\theta}$$\n\nThis is the perfect speed where the banking alone keeps the car in the turn."
        }
      ]
    },
    {
      videoId: "lJcjsyFisy4",
      videoTitle: "The Physics of a Car Traveling Around a Banked Turn (Without Friction and Then With Friction)",
      questions: [
        {
          type: 'multiple-choice',
          question: "A car travels faster than the ideal speed around a banked turn. In which direction does the friction force act?",
          options: [
            "Up the inclined plane",
            "Down the inclined plane",
            "Perpendicular to the inclined plane",
            "There is no friction force at any speed"
          ],
          correctAnswer: 1,
          explanation: "When a car goes too fast around a banked turn, it tends to slide up the bank (outward from the center). Friction opposes this tendency and acts down the inclined plane.\n\nThe friction force acts down the incline because:\n\n1. The car needs more centripetal force than the normal force component can provide\n2. Friction provides additional inward force by acting down the slope\n3. This helps prevent the car from sliding up and off the turn\n\nIf the car were going too slowly, friction would act up the incline to prevent sliding down."
        },
        {
          type: 'math-input',
          question: "A car travels around a banked turn with angle $20°$ and radius $30\\text{ m}$. If the coefficient of static friction is $\\mu_s = 0.30$, calculate the maximum speed (in $\\text{m/s}$) the car can travel without sliding.",
          mathAnswer: "14.8",
          answerRange: 0.2,
          explanation: "This problem requires Newton's second law in both directions with friction included.\n\nIn the $y$-direction (perpendicular to motion):\n\n$$F_N \\cos(20°) = mg + \\mu_s F_N \\sin(20°)$$\n\nIn the $x$-direction (toward center):\n\n$$\\frac{v^2}{r} = \\frac{F_N \\sin(20°) + \\mu_s F_N \\cos(20°)}{m}$$\n\nSolving the first equation for $F_N$ and substituting into the second:\n\n$$F_N = \\frac{mg}{\\cos(20°) - \\mu_s \\sin(20°)}$$\n\nAfter algebraic manipulation and substituting values:\n\n$$v = \\sqrt{\\frac{rg(\\sin(20°) + \\mu_s \\cos(20°))}{\\cos(20°) - \\mu_s \\sin(20°)}}$$\n\n$$v \\approx 14.8 \\text{ m/s}$$"
        }
      ]
    }
  ]
};
