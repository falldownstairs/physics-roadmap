module.exports = {
  id: "503",
  courseId: "mechanics",
  topicId: "rotational-motion",
  title: "Angular Momentum",
  estimatedTime: "16 minutes",
  videos: [
    {
      videoId: "ymwF4ydd8Hc",
      videoTitle: "Angular Momentum",
      questions: [
        {
          type: 'multiple-choice',
          question: "A figure skater spins with arms extended. When the skater pulls their arms inward, which of the following correctly describes the changes in $\\text{angular momentum}$ and $\\text{rotational kinetic energy}$?",
          options: [
            "Angular momentum increases; Rotational kinetic energy increases",
            "Angular momentum remains constant; Rotational kinetic energy increases",
            "Angular momentum decreases; Rotational kinetic energy remains constant",
            "Angular momentum remains constant; Rotational kinetic energy remains constant"
          ],
          correctAnswer: 1,
          explanation: "When no external torques act on the system, $\\text{angular momentum}$ is conserved and remains constant:\n\n$$L_i = L_f$$\n\nAs the skater pulls their arms in, the $\\text{moment of inertia}$ decreases. Since $L = I\\omega$ and $L$ is constant, the angular velocity must increase. The $\\text{rotational kinetic energy}$ is given by:\n\n$$K_{rot} = \\frac{1}{2}I\\omega^2$$\n\nThe skater does work pulling their arms inward, which increases the rotational kinetic energy even though angular momentum is conserved."
        },
        {
          type: 'math-input',
          question: "A disk rotates with constant angular acceleration about a fixed axis. The disk's moment of inertia is $6 \\text{ kg}\\cdot\\text{m}^2$. At time $t = 0$ the disk is at rest. At time $t = 3$ seconds its angular velocity is $2$ radians per second. What is the $\\text{angular momentum}$ of the disk (in $\\text{kg}\\cdot\\text{m}^2\\text{/s}$) at $t = 3$ seconds?",
          mathAnswer: "12",
          answerRange: 0.1,
          explanation: "Angular momentum is given by:\n\n$$L = I\\omega$$\n\nwhere $I$ is the moment of inertia and $\\omega$ is the angular velocity.\n\nSubstituting the given values:\n\n$$L = (6 \\text{ kg}\\cdot\\text{m}^2)(2 \\text{ rad/s}) = 12 \\text{ kg}\\cdot\\text{m}^2\\text{/s}$$"
        }
      ]
    },
    {
      videoId: "y9Bm4o1rEiU",
      videoTitle: "Angular Momentum (part 2)",
      questions: [
        {
          type: 'multiple-choice',
          question: "A particle of mass $m$ moves with constant speed $v$ along a straight line at a perpendicular distance $r$ from a fixed point $O$. What is the magnitude of the $\\text{angular momentum}$ of the particle with respect to point $O$?",
          options: [
            "$mvr^2$",
            "$mvr$",
            "$mv^2r$",
            "$\\frac{mv}{r}$"
          ],
          correctAnswer: 1,
          explanation: "The angular momentum of a particle about a point is given by:\n\n$$L = mvr_{\\perp}$$\n\nwhere $r_{\\perp}$ is the perpendicular distance from the point to the line of motion. Since the particle moves along a line at perpendicular distance $r$ from point $O$:\n\n$$L = mvr$$\n\nAlternatively, using the cross product definition $\\vec{L} = \\vec{r} \\times \\vec{p}$, the magnitude is $L = rp\\sin\\theta = rmv\\sin(90°) = mvr$."
        },
        {
          type: 'multiple-choice',
          question: "A disk slides on a frictionless horizontal surface and collides with a rod that is free to move and rotate on the surface. Which of the following quantities must be the same for the disk-rod system before and after the collision?",
          options: [
            "Linear momentum only",
            "Angular momentum only",
            "Both linear momentum and angular momentum",
            "Linear momentum, angular momentum, and kinetic energy"
          ],
          correctAnswer: 2,
          explanation: "Since the surface is frictionless and horizontal, there are no external forces acting on the disk-rod system. Therefore, $\\text{linear momentum}$ is conserved:\n\n$$\\vec{p}_i = \\vec{p}_f$$\n\nSimilarly, there are no external torques acting on the system, so $\\text{angular momentum}$ is also conserved:\n\n$$L_i = L_f$$\n\nHowever, since the collision type is not specified as elastic, we cannot assume that $\\text{kinetic energy}$ is conserved. Energy may be lost to deformation, sound, or heat."
        }
      ]
    }
  ]
};