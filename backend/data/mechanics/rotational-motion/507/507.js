module.exports = {
  id: "507",
  courseId: "mechanics",
  topicId: "rotational-motion",
  title: "Static Equilibrium",
  estimatedTime: "22 minutes",
  videos: [
    {
      videoId: "oB6cC6LPZ_0",
      videoTitle: "Static Equilibrium Problems",
      questions: [
        {
          type: 'multiple-choice',
          question: "For an object to be in $\\text{static equilibrium}$, which conditions must be satisfied?",
          options: [
            "Net force equals zero only",
            "Net torque equals zero only",
            "Both net force and net torque equal zero",
            "Either net force or net torque equals zero"
          ],
          correctAnswer: 2,
          explanation: "For static equilibrium, both conditions must be met:\n\n$$\\sum F = 0$$\n\nand\n\n$$\\sum \\tau = 0$$\n\nThis ensures no linear acceleration ($a = 0$) and no angular acceleration ($\\alpha = 0$). Structures like bridges require both conditions to remain stationary."
        }
      ]
    },
    {
      videoId: "dbjNX91EQh0",
      videoTitle: "Static Equilibrium Problems (part 2)",
      questions: [
        {
          type: 'math-input',
          question: "A uniform beam of mass $2\\text{ kg}$ and length $8\\text{ m}$ is supported at both ends (points A and B). A $1\\text{ kg}$ mass is placed $3\\text{ m}$ from point A. If the axis is chosen at point A, what is the force $F_B$ (in $\\text{N}$) from support B? Use $g = 10\\text{ m/s}^2$.",
          image: {
            src: 'support_beams.png',
            alt: 'Free body diagram of a beam supported at both ends with weights acting downwards'
          },
          mathAnswer: "13.75",
          answerRange: 0.1,
          explanation: "Choosing the axis at point A means $F_A$ provides no torque. Apply torque equilibrium:\n\n$$\\sum \\tau = 0$$\n\nClockwise torques equal counterclockwise torques:\n\n$$(10\\text{ N})(3\\text{ m}) + (20\\text{ N})(4\\text{ m}) = F_B(8\\text{ m})$$\n\n$$30 + 80 = 8F_B$$\n\n$$F_B = \\frac{110}{8} = 13.75\\text{ N}$$"
        },
        {
          type: 'multiple-choice',
          question: "When solving static equilibrium problems with angled forces, why is it important to use only the perpendicular component of the force when calculating torque?",
          options: [
            "The parallel component is too small to matter",
            "Only the perpendicular component creates rotation about the axis",
            "The parallel component cancels out automatically",
            "Using the full force would give the same answer"
          ],
          correctAnswer: 1,
          explanation: "Torque is defined as:\n\n$$\\tau = F_\\perp \\cdot r$$\n\nwhere $F_\\perp$ is the component of force perpendicular to the lever arm. Only this perpendicular component creates rotation about the axis. The parallel component acts along the lever arm and produces no rotational effect."
        }
      ]
    },
    {
      videoId: "LyxCAhKK--0",
      videoTitle: "Static Equilibrium Problem for Physics of a Person Climbing a Ladder",
      questions: [
        {
          type: 'multiple-choice',
          question: "A ladder leans against a frictionless wall at a $60°$ angle with the horizontal. Which forces act on the ladder?",
          image: {
            src: 'ladder_forces.png',
            alt: 'Free body diagram of a ladder leaning against a wall showing forces: normal force from wall (horizontal), weight of ladder (downward at center), weight of person (downward), normal force from ground (upward), and friction force from ground (horizontal)'
          },
          options: [
            "Weight of ladder, weight of person, normal force from ground only",
            "Weight of ladder, weight of person, normal force from wall, friction from ground, normal force from ground",
            "Weight of ladder, normal force from wall, friction from wall",
            "Weight of ladder, weight of person, friction from wall, friction from ground"
          ],
          correctAnswer: 1,
          explanation: "The complete free body diagram includes:\n\n1. Weight of the ladder (downward at center of mass)\n\n2. Weight of the person (downward at their position)\n\n3. Normal force from the wall (horizontal, pushing away from wall)\n\n4. Normal force from the ground (upward)\n\n5. Friction force from the ground (horizontal, preventing sliding)\n\nSince the wall is frictionless, there is no friction force from the wall."
        },
        {
          type: 'multiple-choice',
          question: "As a firefighter climbs higher up a ladder leaning against a frictionless wall, what happens to the force required from friction at the base?",
          options: [
            "It decreases because the person is farther from the base",
            "It remains constant regardless of position",
            "It increases because the torque from the person's weight increases",
            "It becomes zero at the top of the ladder"
          ],
          correctAnswer: 2,
          explanation: "As the firefighter climbs higher, the torque from their weight about the base pivot point increases because:\n\n$$\\tau = F \\cdot r$$\n\nwhere $r$ (the perpendicular distance) increases. To maintain equilibrium, the opposing torque from the wall's normal force must increase, which requires a larger friction force at the base to balance the horizontal forces. Eventually, if the person climbs too high, the required friction exceeds the maximum static friction ($F_f \\leq \\mu_s F_N$) and the ladder slips."
        }
      ]
    }
  ]
};