module.exports = {
  id: "505",
  courseId: "mechanics",
  topicId: "rotational-motion",
  title: "Rotational Dynamics",
  estimatedTime: "24 minutes",
  videos: [
    {
      videoId: "PuLx-vC08ks",
      videoTitle: "Rotational Dynamics (Newton's Second Law in Rotational Motion)",
      questions: [
        {
          type: 'multiple-choice',
          question: "Newton's second law for rotational motion states that $\\text{angular acceleration}$ ($\\alpha$) equals the net torque divided by which quantity?",
          options: ["Mass", "Radius", "Rotational inertia", "Linear acceleration"],
          correctAnswer: 2,
          explanation: "Newton's second law for rotation is given by:\n\n$$\\alpha = \\frac{\\sum \\tau}{I}$$\n\nwhere $\\alpha$ is the $\\text{angular acceleration}$, $\\sum \\tau$ is the $\\text{net torque}$, and $I$ is the $\\text{rotational inertia}$. This is analogous to the linear form $a = F/m$, where rotational inertia plays the role of mass in rotational motion."
        },
        {
          type: 'math-input',
          question: "A uniform cylinder of mass $2 \\text{ kg}$ and radius $1 \\text{ m}$ has a string wrapped around it. The string is pulled with a force of $10 \\text{ N}$ tangent to the cylinder's edge. Calculate the angular acceleration (in $\\text{rad/s}^2$) of the cylinder. The rotational inertia of a cylinder is $I = \\frac{1}{2}MR^2$.",
          mathAnswer: "10",
          explanation: "Using Newton's second law for rotation:\n\n$$\\alpha = \\frac{\\tau}{I}$$\n\nThe torque is:\n\n$$\\tau = FR = (10 \\text{ N})(1 \\text{ m}) = 10 \\text{ N}\\cdot\\text{m}$$\n\nThe rotational inertia is:\n\n$$I = \\frac{1}{2}MR^2 = \\frac{1}{2}(2 \\text{ kg})(1 \\text{ m})^2 = 1 \\text{ kg}\\cdot\\text{m}^2$$\n\nTherefore:\n\n$$\\alpha = \\frac{10 \\text{ N}\\cdot\\text{m}}{1 \\text{ kg}\\cdot\\text{m}^2} = 10 \\text{ rad/s}^2$$"
        }
      ]
    },
    {
      videoId: "1K2FmLGgSRQ",
      videoTitle: "Rotational Dynamics (part 2)",
      questions: [
        {
          type: 'multiple-choice',
          question: "A solid sphere rolls down an inclined plane without slipping. Which force provides the torque that causes the sphere to rotate?",
          options: ["Gravitational force", "Normal force", "Frictional force", "Air resistance"],
          correctAnswer: 2,
          explanation: "The $\\text{frictional force}$ is the only force that provides torque to cause rotation.\n\nThe $\\text{gravitational force}$ acts through the center of mass and provides no torque about the center. The $\\text{normal force}$ also acts through the center of mass, perpendicular to the surface, and provides no torque.\n\nOnly the frictional force, acting at the point of contact and tangent to the surface, creates the torque:\n\n$$\\tau = F_f R$$\n\nwhere $F_f$ is the friction force and $R$ is the radius of the sphere."
        },
        {
          type: 'math-input',
          question: "A solid sphere with rotational inertia $I = \\frac{2}{5}MR^2$ rolls down an incline at angle $\\theta = 30°$. What is the linear acceleration of its center of mass (in terms of $g$)? Express your answer as a decimal coefficient times $g$ (e.g., if $a = 0.5g$, enter $0.5$).",
          mathAnswer: "0.357",
          answerRange: 0.01,
          explanation: "For a rolling sphere without slipping, we apply both Newton's second law and the rotational equation.\n\n1. Translational motion:\n\n$$Ma = Mg\\sin\\theta - F_f$$\n\n2. Rotational motion:\n\n$$\\alpha = \\frac{F_f R}{I} = \\frac{F_f R}{\\frac{2}{5}MR^2}$$\n\nUsing the rolling condition $a = \\alpha R$:\n\n$$a = \\frac{F_f R^2}{\\frac{2}{5}MR^2} = \\frac{5F_f}{2M}$$\n\nSubstituting back:\n\n$$Ma = Mg\\sin\\theta - \\frac{2Ma}{5}$$\n\n$$\\frac{7Ma}{5} = Mg\\sin\\theta$$\n\n$$a = \\frac{5g\\sin\\theta}{7} = \\frac{5g\\sin(30°)}{7} = \\frac{5g(0.5)}{7} \\approx 0.357g$$"
        }
      ]
    },
    {
      videoId: "h6Q0LqZ1FjY",
      videoTitle: "Rotational Dynamics (part 3)",
      questions: [
        {
          type: 'multiple-choice',
          question: "A solid cylinder of mass $M$ and radius $R$ is mounted on a frictionless axle. A bucket of mass $M$ hangs from a string wrapped around the cylinder. When released, why is the tension in the string less than $Mg$?",
          options: [
            "The string is elastic and stretches",
            "The bucket accelerates downward, so net force must be less than $Mg$",
            "Friction reduces the tension",
            "The cylinder's weight cancels some of the bucket's weight"
          ],
          correctAnswer: 1,
          explanation: "When the bucket is accelerating downward, applying Newton's second law:\n\n$$Ma = Mg - T$$\n\nSince the acceleration $a$ is positive (downward), we can rearrange:\n\n$$T = Mg - Ma = M(g - a)$$\n\nBecause $a > 0$, the tension must be:\n\n$$T < Mg$$\n\nThe tension is less than the weight because there must be a net downward force to produce the downward acceleration. If $T = Mg$, the bucket would remain at rest or move at constant velocity."
        },
        {
          type: 'math-input',
          question: "A cylinder with rotational inertia $I = \\frac{1}{2}MR^2$ and mass $M$ is connected to a hanging bucket of mass $M$ via a string. When released, what is the acceleration of the bucket (in terms of $g$)? Express your answer as a decimal coefficient times $g$ (e.g., if $a = 0.5g$, enter $0.667$).",
          mathAnswer: "0.667",
          answerRange: 0.01,
          explanation: "We need to apply Newton's laws to both the bucket and the cylinder.\n\n1. For the bucket:\n\n$$Ma = Mg - T$$\n\n2. For the cylinder:\n\n$$\\alpha = \\frac{TR}{I} = \\frac{TR}{\\frac{1}{2}MR^2}$$\n\n3. Bridge equation (rolling without slipping):\n\n$$a = \\alpha R$$\n\nSubstituting:\n\n$$\\frac{a}{R} = \\frac{TR}{\\frac{1}{2}MR^2}$$\n\nSolving for $T$:\n\n$$T = \\frac{Ma}{2}$$\n\nSubstituting into the bucket equation:\n\n$$Ma = Mg - \\frac{Ma}{2}$$\n\n$$\\frac{3Ma}{2} = Mg$$\n\n$$a = \\frac{2g}{3} \\approx 0.667g$$"
        }
      ]
    }
  ]
};