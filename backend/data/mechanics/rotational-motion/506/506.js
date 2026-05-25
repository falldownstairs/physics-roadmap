module.exports = {
  id: "506",
  courseId: "mechanics",
  topicId: "rotational-motion",
  title: "Torque & Cross Product",
  estimatedTime: "20 minutes",
  videos: [
    {
      videoId: "MDSr51e5GFw",
      videoTitle: "Torque",
      questions: [
        {
          type: 'multiple-choice',
          question: "Which of the following factors does NOT affect the magnitude of torque?",
          options: [
            "The magnitude of the applied force",
            "The distance from the axis of rotation to where the force is applied",
            "The angular velocity of the object",
            "The angle between the force vector and the lever arm"
          ],
          correctAnswer: 2,
          explanation: "Torque depends on three factors:\n\n$$\\tau = rF\\sin\\theta$$\n\nwhere:\n\n1. $F$ is the magnitude of the applied force\n\n2. $r$ is the distance from the axis to the point where force is applied (lever arm)\n\n3. $\\theta$ is the angle between $\\vec{r}$ and $\\vec{F}$\n\nThe $\\text{angular velocity}$ does NOT affect torque. Torque causes changes in angular velocity (angular acceleration), but the existing angular velocity doesn't affect how much torque is produced. This is analogous to how force doesn't depend on an object's current velocity."
        },
        {
          type: 'math-input',
          question: "A force of $8\\text{ N}$ is applied to a wrench at a distance of $0.25\\text{ m}$ from the bolt. The force makes an angle of $30^\\circ$ with the wrench handle. Calculate the magnitude of the torque (in $\\text{N}\\cdot\\text{m}$).",
          image: {
            src: 'wrench_torque_diagram.png',
            alt: 'Wrench with force applied at an angle showing lever arm and force vectors'
          },
          mathAnswer: "1",
          answerRange: 0.05,
          explanation: "The torque is given by the cross product formula:\n\n$$\\tau = rF\\sin\\theta$$\n\nwhere $\\theta$ is the angle between the force and the lever arm.\n\nSubstituting the values:\n\n$$\\tau = (0.25\\text{ m})(8\\text{ N})\\sin(30^\\circ)$$\n\n$$\\tau = (0.25)(8)(0.5) = 1\\text{ N}\\cdot\\text{m}$$\n\nAlternatively, you could find the perpendicular component of force: $F_\\perp = F\\sin\\theta = 8\\sin(30^\\circ) = 4\\text{ N}$, then multiply by the lever arm: $\\tau = (0.25)(4) = 1\\text{ N}\\cdot\\text{m}$."
        }
      ]
    },
    {
      videoId: "m207JTcu9wk",
      videoTitle: "Torque and Cross Product (part 2)",
      questions: [
        {
          type: 'multiple-choice',
          question: "What is the $\\text{effective lever arm}$ (also called the moment arm)?",
          options: [
            "The total distance from the axis of rotation to where the force is applied",
            "The perpendicular distance from the axis of rotation to the line of action of the force",
            "The component of the force perpendicular to the lever arm",
            "The angle between the force and the lever arm"
          ],
          correctAnswer: 1,
          explanation: "The $\\text{effective lever arm}$ (or moment arm) is the perpendicular distance from the axis of rotation to the $\\text{line of action}$ of the force.\n\nThis is expressed as:\n\n$$r_\\perp = r\\sin\\theta$$\n\nUsing the effective lever arm simplifies torque calculations:\n\n$$\\tau = r_\\perp F$$\n\nThis is often easier than calculating the perpendicular component of force. Both methods give the same result:\n\n$$\\tau = rF\\sin\\theta = r_\\perp F = rF_\\perp$$\n\nKey point: If the line of action passes through the axis of rotation, the effective lever arm is zero, so the torque is zero."
        },
        {
          type: 'multiple-choice',
          question: "A uniform meter stick of mass $0.5\\text{ kg}$ is held horizontally at one end and released. At the instant of release, what is the magnitude of the torque due to gravity about the pivot point?",
          options: [
            "$0\\text{ N}\\cdot\\text{m}$",
            "$1.25\\text{ N}\\cdot\\text{m}$",
            "$2.5\\text{ N}\\cdot\\text{m}$",
            "$5\\text{ N}\\cdot\\text{m}$"
          ],
          correctAnswer: 2,
          explanation: "For a uniform meter stick, the center of mass is at the midpoint, $0.5\\text{ m}$ from either end.\n\nThe weight acts at the center of mass:\n\n$$F_g = mg = (0.5\\text{ kg})(10\\text{ m/s}^2) = 5\\text{ N}$$\n\nThe lever arm from the pivot to the center of mass is $r = 0.5\\text{ m}$.\n\nAt the instant of release (horizontal position), gravity is perpendicular to the lever arm ($\\theta = 90^\\circ$):\n\n$$\\tau = rF\\sin(90^\\circ) = (0.5\\text{ m})(5\\text{ N})(1)$$\n\n$$\\tau = 2.5\\text{ N}\\cdot\\text{m}$$\n\nAs the stick falls, this torque decreases and becomes zero when the stick is vertical."
        }
      ]
    },
    {
      videoId: "lwn7hoI5ULc",
      videoTitle: "Torque and Cross Product (part 3)",
      questions: [
        {
          type: 'multiple-choice',
          question: "A meter stick pivoted at one end is released from a horizontal position. At what position during its fall is the torque due to gravity equal to zero?",
          options: [
            "At the horizontal position (initial release)",
            "At $45^\\circ$ below horizontal",
            "At the vertical position (straight down)",
            "The torque is never zero during the fall"
          ],
          correctAnswer: 2,
          explanation: "The torque due to gravity is:\n\n$$\\tau = rF\\sin\\theta$$\n\nwhere $\\theta$ is the angle between the lever arm and the force.\n\n1. At horizontal position: gravity is perpendicular to the lever arm, so $\\tau = rF\\sin(90^\\circ) = rF$ (maximum)\n\n2. At some angle: $\\tau = rF\\sin\\theta$ (decreasing as stick falls)\n\n3. At vertical position: gravity is parallel to the lever arm, so $\\theta = 0^\\circ$ and $\\tau = rF\\sin(0^\\circ) = 0$\n\nWhen vertical, the line of action of gravity passes through the pivot point, giving zero effective lever arm and zero torque. However, the stick is moving fastest at this point due to the torque applied earlier."
        },
        {
          type: 'math-input',
          question: "Two forces act on a wheel with two different radii fused together. A force of $10\\text{ N}$ pulls tangentially on the outer radius of $0.3\\text{ m}$, and another force of $10\\text{ N}$ pulls tangentially on the inner radius of $0.1\\text{ m}$ in the same rotational direction. What is the magnitude of the net torque (in $\\text{N}\\cdot\\text{m}$)?",
          image: {
            src: 'wheel_force_diagram.png',
            alt: 'Wheel with forces applied at different radii'
          },
          mathAnswer: "4",
          answerRange: 0.1,
          explanation: "When strings or forces act tangentially on a wheel, they are always perpendicular to the radius, making torque calculations simple:\n\n$$\\tau = rF$$\n\nFor the outer radius:\n\n$$\\tau_1 = r_1 F_1 = (0.3\\text{ m})(10\\text{ N}) = 3\\text{ N}\\cdot\\text{m}$$\n\nFor the inner radius (same direction):\n\n$$\\tau_2 = r_2 F_2 = (0.1\\text{ m})(10\\text{ N}) = 1\\text{ N}\\cdot\\text{m}$$\n\nSince both forces rotate the wheel in the same direction, the torques add:\n\n$$\\tau_{\\text{net}} = \\tau_1 + \\tau_2 = 3 + 1 = 4\\text{ N}\\cdot\\text{m}$$\n\nIf the forces caused rotation in opposite directions, we would subtract the torques."
        }
      ]
    }
  ]
};
