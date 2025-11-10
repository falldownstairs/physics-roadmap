module.exports = {
  id: "703",
  courseId: "mechanics",
  topicId: "periodic-motion",
  title: "Pendulum Motion",
  estimatedTime: "20 minutes",
  videos: [
    {
      videoId: "qIP58J6WXq0",
      videoTitle: "The Period of a Simple Pendulum",
      questions: [
        {
          type: 'multiple-choice',
          question: "What approximation is essential for deriving the period formula of a simple pendulum?",
          options: [
            "The mass must be negligible",
            "The angle of displacement must be very small",
            "The string must be massless and rigid",
            "Air resistance must be considered"
          ],
          correctAnswer: 1,
          explanation: "The derivation requires that the displacement angle $\\theta$ be very small. This allows us to use the $\\text{small angle approximation}$ where $\\sin\\theta \\approx \\tan\\theta \\approx \\theta$ (in radians), which simplifies the mathematics significantly."
        },
        {
          type: 'math-input',
          question: "For a simple pendulum, express the period ($T$) in terms of length ($L$) and gravitational acceleration ($g$).",
          mathAnswer: "2\\pi\\sqrt{\\frac{L}{g}}",
          explanation: "The period of a simple pendulum is:\n\n$$T = 2\\pi\\sqrt{\\frac{L}{g}}$$\n\nThis is derived by applying Newton's second law to the restoring force and using the small angle approximation. Notice the period is independent of the mass and amplitude (for small angles)."
        },
        {
          type: 'math-input',
          question: "A simple pendulum has a length of $2.0\\text{ m}$. Calculate its period (in seconds) on Earth where $g = 9.8\\text{ m/s}^2$.",
          mathAnswer: "2.84",
          answerRange: 0.1,
          explanation: "Using the period formula:\n\n$$T = 2\\pi\\sqrt{\\frac{L}{g}}$$\n\nSubstituting values:\n\n$$T = 2\\pi\\sqrt{\\frac{2.0\\text{ m}}{9.8\\text{ m/s}^2}} = 2\\pi\\sqrt{0.204} \\approx 2.84\\text{ s}$$"
        }
      ]
    },
    {
      videoId: "l_M2TImYe64",
      videoTitle: "The Period of a Physical Pendulum",
      questions: [
        {
          type: 'multiple-choice',
          question: "What is the key difference between a simple pendulum and a physical pendulum?",
          options: [
            "A physical pendulum has friction while a simple pendulum does not",
            "A physical pendulum has mass distributed over its body while a simple pendulum has all mass at one point",
            "A physical pendulum swings faster than a simple pendulum",
            "A physical pendulum requires larger angles to oscillate"
          ],
          correctAnswer: 1,
          explanation: "A $\\text{physical pendulum}$ has mass distributed throughout its body, whereas a $\\text{simple pendulum}$ treats all mass as concentrated at a single point at distance $L$ from the pivot.\n\nThis difference means we must use rotational inertia $I$ and the distance $d$ from the pivot to the center of mass in our calculations."
        },
        {
          type: 'math-input',
          question: "Express the period ($T$) of a physical pendulum in terms of rotational inertia ($I$), mass ($m$), gravitational acceleration ($g$), and distance from axis to center of mass ($d$).",
          mathAnswer: "2\\pi\\sqrt{\\frac{I}{mgd}}",
          explanation: "The period of a physical pendulum is:\n\n$$T = 2\\pi\\sqrt{\\frac{I}{mgd}}$$\n\nwhere:\n- $I$ is the rotational inertia about the pivot axis\n- $m$ is the total mass\n- $g$ is gravitational acceleration\n- $d$ is the distance between the axis and center of mass\n\nThis formula applies for small angular displacements."
        }
      ]
    },
    {
      videoId: "xzQNxRVJfLE",
      videoTitle: "The Period of a Physical Pendulum (part 2)",
      questions: [
        {
          type: 'multiple-choice',
          question: "A uniform disk of mass $m$ and radius $R$ is suspended from a hole drilled at distance $R/2$ from its center. To find the period, which theorem must be used to calculate the rotational inertia about the pivot?",
          options: [
            "Conservation of energy theorem",
            "Work-energy theorem",
            "Parallel axis theorem",
            "Perpendicular axis theorem"
          ],
          correctAnswer: 2,
          explanation: "The $\\text{parallel axis theorem}$ must be used:\n\n$$I_{\\text{parallel}} = I_{\\text{cm}} + md^2$$\n\nThis relates the rotational inertia about the pivot to the rotational inertia about the center of mass. Since we know $I_{\\text{cm}} = \\frac{1}{2}mR^2$ for a disk, we can find $I$ about the offset pivot axis."
        },
        {
          type: 'math-input',
          question: "A thin uniform rod of length $L$ and mass $m$ is pivoted at one end. Using $I_{\\text{end}} = \\frac{1}{3}mL^2$ and the physical pendulum formula, calculate the period in terms of $L$ and $g$. Express your answer as a coefficient times $\\sqrt{\\frac{L}{g}}$.",
          mathAnswer: "2\\pi\\sqrt{\\frac{2}{3}}\\sqrt{\\frac{L}{g}}",
          explanation: "For a rod pivoted at one end:\n\n1. Rotational inertia: $I = \\frac{1}{3}mL^2$\n\n2. Distance to center of mass: $d = \\frac{L}{2}$\n\n3. Apply the formula:\n\n$$T = 2\\pi\\sqrt{\\frac{I}{mgd}} = 2\\pi\\sqrt{\\frac{\\frac{1}{3}mL^2}{mg\\frac{L}{2}}}$$\n\n$$T = 2\\pi\\sqrt{\\frac{2L}{3g}} = 2\\pi\\sqrt{\\frac{2}{3}}\\sqrt{\\frac{L}{g}}$$\n\nNote: This can also be written as $2\\pi\\sqrt{\\frac{2L}{3g}}$"
        }
      ]
    }
  ]
};