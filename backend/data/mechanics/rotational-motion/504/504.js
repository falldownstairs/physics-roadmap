module.exports = {
  id: "504",
  courseId: "mechanics",
  topicId: "rotational-motion",
  title: "Rotational Inertia",
  estimatedTime: "35 minutes",
  videos: [
    {
      videoId: "mfyti74lWBw",
      videoTitle: "Rotational Inertia or Moment of Inertia",
      questions: [
        {
          type: 'multiple-choice',
          question: "What is the formula for $\\text{rotational inertia}$ of a system of point masses?",
          options: [
            "$I = m_1r_1 + m_2r_2 + m_3r_3 + ...$",
            "$I = m_1r_1^2 + m_2r_2^2 + m_3r_3^2 + ...$",
            "$I = (m_1 + m_2 + m_3)r^2$",
            "$I = m(r_1 + r_2 + r_3)^2$"
          ],
          correctAnswer: 1,
          explanation: "Rotational inertia (also called moment of inertia) depends on both the mass and the square of the distance from the axis:\n\n$$I = \\sum m_ir_i^2 = m_1r_1^2 + m_2r_2^2 + m_3r_3^2 + ...$$\n\nThe $r^2$ term is crucial because rotational inertia depends more strongly on distance than on mass. Moving mass farther from the axis increases rotational inertia significantly."
        }
      ]
    },
    {
      videoId: "yJ3RX_zXn2Y",
      videoTitle: "Rotational Inertia for a Long Slender Rod",
      questions: [
        {
          type: 'multiple-choice',
          question: "What is the rotational inertia of a uniform slender rod of mass $m$ and length $L$ about an axis through its center?",
          options: [
            "$I = \\frac{1}{2}mL^2$",
            "$I = \\frac{1}{3}mL^2$",
            "$I = \\frac{1}{12}mL^2$",
            "$I = mL^2$"
          ],
          correctAnswer: 2,
          explanation: "For a uniform slender rod rotating about its center, the rotational inertia is:\n\n$$I = \\frac{1}{12}mL^2$$\n\nThis is derived by integrating $\\int r^2\\,dm$ from $-L/2$ to $L/2$, where $dm = \\frac{m}{L}dr$ is the linear mass density. The result shows that the rotational inertia about the center is relatively small compared to rotation about other axes."
        }
      ]
    },
    {
      videoId: "XGv3GQvvuac",
      videoTitle: "Rotational Inertia for a Solid Disk",
      questions: [
        {
          type: 'multiple-choice',
          question: "What is the rotational inertia of a uniform solid disk of mass $m$ and radius $R$ about an axis through its center?",
          options: [
            "$I = mR^2$",
            "$I = \\frac{1}{2}mR^2$",
            "$I = \\frac{1}{3}mR^2$",
            "$I = \\frac{2}{5}mR^2$"
          ],
          correctAnswer: 1,
          explanation: "For a uniform solid disk rotating about its center, the rotational inertia is:\n\n$$I = \\frac{1}{2}mR^2$$\n\nThis is derived by integrating thin rings from $r = 0$ to $r = R$, where each ring has $dI = r^2\\,dm$. The factor of $\\frac{1}{2}$ comes from the mass distribution across the disk. Note that for a hollow hoop, all mass is at radius $R$, giving $I = mR^2$."
        }
      ]
    },
    {
      videoId: "VPV9KSuFmRg",
      videoTitle: "Rotational Inertia for a Solid Cylinder",
      questions: [
        {
          type: 'multiple-choice',
          question: "How does the rotational inertia of a solid cylinder about its central axis compare to that of a solid disk of the same mass and radius?",
          options: [
            "The cylinder has greater rotational inertia",
            "The disk has greater rotational inertia",
            "They have the same rotational inertia",
            "It depends on the height of the cylinder"
          ],
          correctAnswer: 2,
          explanation: "Both a solid cylinder and a solid disk have the same rotational inertia formula about their central axes:\n\n$$I = \\frac{1}{2}mR^2$$\n\nDuring the derivation, the height $H$ of the cylinder cancels out, showing that rotational inertia about the central axis is independent of the cylinder's length. This makes sense because all the mass rotates at the same distances from the axis regardless of the cylinder's height."
        }
      ]
    },
    {
      videoId: "6Vbm1ZN6DGY",
      videoTitle: "Rotational Inertia for a Slender Rod of NON-UNIFORM mass density",
      questions: [
        {
          type: 'multiple-choice',
          question: "When calculating rotational inertia for an object with non-uniform mass density, what additional information is required compared to uniform density?",
          options: [
            "The total mass must be known more precisely",
            "The mass density function as a function of position must be specified",
            "The shape must be perfectly symmetric",
            "No additional information is needed"
          ],
          correctAnswer: 1,
          explanation: "For non-uniform mass density, you need to know how the density varies with position. This is expressed as a $\\text{mass density function}$, such as:\n\n$$\\lambda(r) = Cr^2$$\n\nwhere $\\lambda$ is the linear mass density and $r$ is position. This function replaces the constant $\\frac{m}{L}$ used for uniform density. The integral $\\int r^2\\,dm$ must then use $dm = \\lambda(r)\\,dr$ to account for the varying density."
        }
      ]
    },
    {
      videoId: "Z0xMz1mjuqw",
      videoTitle: "Rotational Inertia for a Solid Cylinder of NON-UNIFORM mass density",
      questions: [
        {
          type: 'multiple-choice',
          question: "For a disk with surface mass density $\\sigma = Cr^2$ (where $C$ is a constant), how does the rotational inertia compare to a uniform disk of the same total mass and radius?",
          options: [
            "The non-uniform disk has less rotational inertia",
            "They have the same rotational inertia",
            "The non-uniform disk has greater rotational inertia",
            "It depends on the value of $C$"
          ],
          correctAnswer: 2,
          explanation: "With density $\\sigma = Cr^2$, more mass is concentrated near the outer edge of the disk. Since rotational inertia depends on $r^2$, having more mass farther from the axis increases $I$ significantly.\n\nThe calculation gives:\n\n$$I = \\frac{\\pi CR^6}{3}$$\n\nThis is greater than the uniform disk result of $I = \\frac{1}{2}mR^2$ when comparing equal total masses, because the mass distribution favors larger radii."
        }
      ]
    },
    {
      videoId: "tfrzMczTv8g",
      videoTitle: "The Parallel-Axis Theorem",
      questions: [
        {
          type: 'multiple-choice',
          question: "A uniform rod of mass $4\\text{ kg}$ and length $2\\text{ m}$ can rotate about its center (axis 1) or about one end (axis 2). If $I_1 = \\frac{1}{12}mL^2$ about the center, what is $I_2$ about the end using the parallel-axis theorem?",
          options: [
            "$I_2 = 2.67\\text{ kg·m}^2$",
            "$I_2 = 5.33\\text{ kg·m}^2$",
            "$I_2 = 8.00\\text{ kg·m}^2$",
            "$I_2 = 16.0\\text{ kg·m}^2$"
          ],
          correctAnswer: 1,
          explanation: "The parallel-axis theorem states:\n\n$$I_{parallel} = I_{cm} + Md^2$$\n\nwhere $d$ is the distance between the two parallel axes.\n\n1. Calculate $I_{cm}$:\n\n$$I_1 = \\frac{1}{12}(4)(2)^2 = \\frac{16}{12} = 1.33\\text{ kg·m}^2$$\n\n2. The distance between center and end is $d = L/2 = 1\\text{ m}$\n\n3. Apply the theorem:\n\n$$I_2 = 1.33 + (4)(1)^2 = 1.33 + 4 = 5.33\\text{ kg·m}^2$$\n\nAlternatively, $I_2 = \\frac{1}{3}mL^2 = \\frac{1}{3}(4)(4) = 5.33\\text{ kg·m}^2$"
        }
      ]
    }
  ]
};