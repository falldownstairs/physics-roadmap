module.exports = {
  id: "201",
  courseId: "mechanics",
  topicId: "newtons-laws",
  title: "Newton's Laws & Force Analysis",
  estimatedTime: "30 minutes",
  videos: [
    {
      videoId: "BSF3wZfpkcI",
      videoTitle: "Inclined Plane Problems (Ramp Problems)",
      questions: [
        {
          type: 'multiple-choice',
          question: "A block slides down a frictionless incline at angle $\\theta = 30^\\circ$. What is the magnitude of the block's acceleration down the incline?",
          image: {
            src: 'incline_plane_30deg.png',
            alt: 'Block on inclined plane at 30 degrees'
          },
          options: [
            "$4.9\\text{ m/s}^2$",
            "$8.5\\text{ m/s}^2$",
            "$9.8\\text{ m/s}^2$",
            "$5.7\\text{ m/s}^2$"
          ],
          correctAnswer: 0,
          explanation: "For a frictionless incline, the acceleration down the plane is:\n\n$$a = g\\sin\\theta$$\n\nSubstituting the values:\n\n$$a = 9.8\\text{ m/s}^2 \\times \\sin(30^\\circ) = 9.8 \\times 0.5 = 4.9\\text{ m/s}^2$$\n\nThis makes physical sense: at $\\theta = 0^\\circ$ (horizontal), $a = 0$, and at $\\theta = 90^\\circ$ (vertical), $a = g$."
        },
        {
          type: 'multiple-choice',
          question: "A $5\\text{ kg}$ block rests on an incline at $37^\\circ$ to the horizontal. What is the magnitude of the normal force acting on the block? (Use $g = 10\\text{ m/s}^2$ and $\\cos(37^\\circ) \\approx 0.8$)",
          options: [
            "$30\\text{ N}$",
            "$40\\text{ N}$",
            "$50\\text{ N}$",
            "$60\\text{ N}$"
          ],
          correctAnswer: 1,
          explanation: "The normal force on an incline is perpendicular to the surface and balances the perpendicular component of gravity:\n\n$$F_N = mg\\cos\\theta$$\n\nSubstituting:\n\n$$F_N = (5\\text{ kg})(10\\text{ m/s}^2)\\cos(37^\\circ) = 50 \\times 0.8 = 40\\text{ N}$$\n\nNote that $F_N \\neq mg$ on an incline. The normal force equals $mg\\cos\\theta$, not the full weight."
        }
      ]
    },
    {
      videoId: "VXu2gatnMWE",
      videoTitle: "The Force of Tension From a String, Rope, or Spring",
      questions: [
        {
          type: 'multiple-choice',
          question: "A massless string is attached to a wall and pulled with a force of $8\\text{ N}$. What is the tension throughout the string?",
          options: [
            "$0\\text{ N}$",
            "$4\\text{ N}$",
            "$8\\text{ N}$",
            "$16\\text{ N}$"
          ],
          correctAnswer: 2,
          explanation: "For a $\\text{massless}$ (or negligible mass) string, the tension is constant throughout the string.\n\nUsing Newton's second law for a segment of the string:\n\n$$F_{net} = ma$$\n\nSince $m = 0$ for a massless string, $F_{net} = 0$ regardless of acceleration. This means forces on each segment must balance, so:\n\n$$T = 8\\text{ N}$$\n\nthroughout the entire string."
        },
        {
          type: 'multiple-choice',
          question: "Which of the following statements about tension in strings is TRUE?",
          options: [
            "Strings can both push and pull on objects",
            "Tension always acts perpendicular to the string's orientation",
            "Strings only pull and always in the direction they are oriented",
            "Tension magnitude depends on the length of the string"
          ],
          correctAnswer: 2,
          explanation: "$\\text{Strings only pull}$ - they cannot push. When a string has tension, it pulls in the direction it is oriented.\n\nFor example, if a string is horizontal, the tension force is horizontal. If the string is at an angle, the tension acts along that angle.\n\nThe magnitude of tension does not depend on string length, only on the forces applied to the string's ends."
        }
      ]
    },
    {
      videoId: "wPQqrA-wmmg",
      videoTitle: "Force of Kinetic Friction",
      questions: [
        {
          type: 'math-input',
          question: "A $4\\text{ kg}$ crate slides across a horizontal floor with coefficient of kinetic friction $\\mu_k = 0.25$. What is the magnitude of the kinetic friction force (in Newtons)? Use $g = 10\\text{ m/s}^2$.",
          mathAnswer: "10",
          answerRange: 0.5,
          explanation: "The kinetic friction force is given by:\n\n$$f_k = \\mu_k F_N$$\n\nOn a horizontal surface, the normal force equals the weight:\n\n$$F_N = mg = (4\\text{ kg})(10\\text{ m/s}^2) = 40\\text{ N}$$\n\nTherefore:\n\n$$f_k = (0.25)(40\\text{ N}) = 10\\text{ N}$$"
        },
        {
          type: 'multiple-choice',
          question: "A book slides to the right across a table and experiences kinetic friction. In which direction does the kinetic friction force act?",
          image: {
            src: 'book_sliding_right.png',
            alt: 'Book sliding to the right on a table'
          },
          options: [
            "To the right (same direction as motion)",
            "To the left (opposite to motion)",
            "Upward (perpendicular to surface)",
            "Downward (into the surface)"
          ],
          correctAnswer: 1,
          explanation: "$\\text{Kinetic friction}$ always opposes the direction of motion.\n\nSince the book is sliding to the right, kinetic friction acts to the left, opposing the motion and slowing the book down.\n\nThe magnitude is:\n\n$$f_k = \\mu_k F_N$$\n\nwhere $\\mu_k$ describes surface roughness and $F_N$ describes how much the surfaces are pressed together."
        }
      ]
    },
    {
      videoId: "3y1iHqqw0S0",
      videoTitle: "Force of Static Friction",
      questions: [
        {
          type: 'multiple-choice',
          question: "A $3\\text{ kg}$ crate sits at rest on a floor with $\\mu_s = 0.4$. You push with a horizontal force of $6\\text{ N}$, but the crate doesn't move. What is the magnitude of the static friction force? (Use $g = 10\\text{ m/s}^2$)",
          options: [
            "$0\\text{ N}$",
            "$6\\text{ N}$",
            "$12\\text{ N}$",
            "$30\\text{ N}$"
          ],
          correctAnswer: 1,
          explanation: "$\\text{Static friction}$ adjusts to match the applied force up to its maximum value.\n\nThe maximum static friction is:\n\n$$f_{s,max} = \\mu_s F_N = (0.4)(30\\text{ N}) = 12\\text{ N}$$\n\nSince you push with only $6\\text{ N}$ and the crate doesn't move, static friction matches your push:\n\n$$f_s = 6\\text{ N}$$\n\nStatic friction will equal $6\\text{ N}$ to keep the net force zero and prevent motion."
        },
        {
          type: 'math-input',
          question: "A $5\\text{ kg}$ box sits on a floor where $\\mu_s = 0.6$. What is the minimum horizontal force (in Newtons) needed to start the box moving? Use $g = 10\\text{ m/s}^2$.",
          mathAnswer: "30",
          answerRange: 1,
          explanation: "To start the box moving, you must overcome the $\\text{maximum static friction}$:\n\n$$f_{s,max} = \\mu_s F_N$$\n\nOn a horizontal surface:\n\n$$F_N = mg = (5\\text{ kg})(10\\text{ m/s}^2) = 50\\text{ N}$$\n\nTherefore:\n\n$$f_{s,max} = (0.6)(50\\text{ N}) = 30\\text{ N}$$\n\nYou need to push with just over $30\\text{ N}$ to break static friction and start motion."
        },
        {
          type: 'multiple-choice',
          question: "Which statement correctly describes the relationship between static and kinetic friction coefficients?",
          options: [
            "$\\mu_s$ is always less than $\\mu_k$",
            "$\\mu_s$ is always equal to $\\mu_k$",
            "$\\mu_s$ is usually greater than $\\mu_k$",
            "$\\mu_s$ and $\\mu_k$ have no relationship"
          ],
          correctAnswer: 2,
          explanation: "The coefficient of static friction is $\\text{usually greater than}$ the coefficient of kinetic friction:\n\n$$\\mu_s > \\mu_k$$\n\nThis is because it's easier to break the microscopic bonds between surfaces (requiring a large force) than to keep them sliding once they're already moving.\n\nOnce an object starts moving, the surfaces don't have time to settle into each other, so kinetic friction is typically less than maximum static friction."
        }
      ]
    },
    {
      videoId: "FA3H0WKB3eo",
      videoTitle: "Part II: Inclined Plane Problems",
      questions: [
        {
          type: 'multiple-choice',
          question: "A block slides down an incline at angle $\\theta$ with kinetic friction coefficient $\\mu_k$. Which expression gives the acceleration down the incline?",
          image: {
            src: 'incline_with_friction.png',
            alt: 'Block sliding down incline with friction force shown'
          },
          options: [
            "$a = g\\sin\\theta$",
            "$a = g\\sin\\theta - \\mu_k g$",
            "$a = g\\sin\\theta - \\mu_k g\\cos\\theta$",
            "$a = g(\\sin\\theta - \\mu_k)$"
          ],
          correctAnswer: 2,
          explanation: "With friction on an incline, we apply Newton's second law along the incline:\n\n1. Component of gravity down the incline: $mg\\sin\\theta$\n\n2. Friction force up the incline: $f_k = \\mu_k F_N = \\mu_k mg\\cos\\theta$\n\nApplying $F_{net} = ma$:\n\n$$ma = mg\\sin\\theta - \\mu_k mg\\cos\\theta$$\n\nDividing by $m$:\n\n$$a = g\\sin\\theta - \\mu_k g\\cos\\theta$$"
        },
        {
          type: 'multiple-choice',
          question: "For an incline problem, why do teachers often not provide the mass of the object?",
          options: [
            "The mass is always assumed to be $1\\text{ kg}$",
            "Mass doesn't affect motion on inclines",
            "The mass cancels out in the calculations",
            "You're expected to measure it yourself"
          ],
          correctAnswer: 2,
          explanation: "In many incline problems, $\\text{mass cancels out}$ during the calculation.\n\nFor example, with friction:\n\n$$F_{net} = mg\\sin\\theta - \\mu_k mg\\cos\\theta = ma$$\n\nDividing both sides by $m$:\n\n$$a = g\\sin\\theta - \\mu_k g\\cos\\theta$$\n\nThe mass $m$ appears in every term and cancels. This is why acceleration on an incline is independent of mass (just like free fall)."
        }
      ]
    }
  ]
};