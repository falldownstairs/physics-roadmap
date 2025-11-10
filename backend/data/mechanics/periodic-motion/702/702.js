module.exports = {
  id: "702",
  courseId: "mechanics",
  topicId: "periodic-motion",
  title: "SHM Dynamics & Energy",
  estimatedTime: "16 minutes",
  videos: [
    {
      videoId: "ED6F8u_sLC4",
      videoTitle: "The Dynamics of Simple Harmonic Motion",
      questions: [
        {
          type: 'multiple-choice',
          question: "For a mass oscillating on a spring, what condition must be satisfied for the motion to be $\\text{simple harmonic}$?",
          options: [
            "The restoring force must be constant",
            "The restoring force must be directly proportional to displacement",
            "The restoring force must increase with the square of displacement",
            "The restoring force must decrease as displacement increases"
          ],
          correctAnswer: 1,
          explanation: "Simple harmonic motion requires that the $\\text{restoring force}$ be directly proportional to the object's displacement from equilibrium, but in the opposite direction:\n\n$$F = -kx$$\n\nThis relationship ensures sinusoidal motion with constant frequency."
        },
        {
          type: 'math-input',
          question: "A $0.5\\text{ kg}$ mass oscillates on a spring with spring constant $k = 80\\text{ N/m}$. Calculate the period of oscillation (in seconds).",
          mathAnswer: "0.496",
          answerRange: 0.05,
          explanation: "The period for a mass-spring system is:\n\n$$T = 2\\pi\\sqrt{\\frac{m}{k}}$$\n\nSubstituting the values:\n\n$$T = 2\\pi\\sqrt{\\frac{0.5\\text{ kg}}{80\\text{ N/m}}} = 2\\pi\\sqrt{0.00625} \\approx 0.496\\text{ s}$$"
        }
      ]
    },
    {
      videoId: "7Kmlio3Jlho",
      videoTitle: "Simple Harmonic Motion and Energy Conservation",
      questions: [
        {
          type: 'multiple-choice',
          question: "For a mass oscillating on a horizontal spring with amplitude $A$, where does maximum kinetic energy occur?",
          options: [
            "At maximum displacement ($x = A$)",
            "At equilibrium position ($x = 0$)",
            "At half the amplitude ($x = A/2$)",
            "At quarter amplitude ($x = A/4$)"
          ],
          correctAnswer: 1,
          explanation: "Maximum $\\text{kinetic energy}$ occurs at the equilibrium position ($x = 0$) where the spring has zero potential energy.\n\nAt this point, all the mechanical energy is kinetic:\n\n$$K_{\\text{max}} = \\frac{1}{2}kA^2$$\n\nConversely, at maximum displacement the velocity is zero and all energy is stored as spring potential energy."
        },
        {
          type: 'math-input',
          question: "A $2.0\\text{ kg}$ mass oscillates on a spring with spring constant $k = 200\\text{ N/m}$ and amplitude $0.15\\text{ m}$. Calculate the maximum speed (in $\\text{m/s}$).",
          mathAnswer: "1.5",
          answerRange: 0.1,
          explanation: "Maximum speed occurs at equilibrium where all energy is kinetic.\n\n1. Using energy conservation:\n\n$$\\frac{1}{2}kA^2 = \\frac{1}{2}mv_{\\text{max}}^2$$\n\n2. Solving for maximum velocity:\n\n$$v_{\\text{max}} = A\\sqrt{\\frac{k}{m}} = A\\omega$$\n\n3. Substituting values:\n\n$$v_{\\text{max}} = 0.15\\text{ m} \\times \\sqrt{\\frac{200\\text{ N/m}}{2.0\\text{ kg}}} = 0.15 \\times 10 = 1.5\\text{ m/s}$$"
        },
        {
          type: 'multiple-choice',
          question: "A harmonic oscillator has total mechanical energy $E$. At what displacement from equilibrium does the kinetic energy equal the potential energy?",
          options: [
            "$x = A$",
            "$x = \\frac{A}{\\sqrt{2}}$",
            "$x = \\frac{A}{2}$",
            "$x = \\frac{A}{4}$"
          ],
          correctAnswer: 1,
          explanation: "When kinetic energy equals potential energy, each must equal half the total energy:\n\n$$K = U = \\frac{E}{2}$$\n\nSince total energy is $E = \\frac{1}{2}kA^2$ and potential energy is $U = \\frac{1}{2}kx^2$:\n\n$$\\frac{1}{2}kx^2 = \\frac{1}{2} \\cdot \\frac{1}{2}kA^2$$\n\nSolving for $x$:\n\n$$x^2 = \\frac{A^2}{2}$$\n\n$$x = \\frac{A}{\\sqrt{2}}$$"
        },
        {
          type: 'math-input',
          question: "A $0.8\\text{ kg}$ mass on a spring with $k = 50\\text{ N/m}$ oscillates with amplitude $0.2\\text{ m}$. Find the speed (in $\\text{m/s}$) when the displacement is $0.1\\text{ m}$.",
          mathAnswer: "1.73",
          answerRange: 0.1,
          explanation: "Using energy conservation:\n\n$$\\frac{1}{2}kA^2 = \\frac{1}{2}kx^2 + \\frac{1}{2}mv^2$$\n\nSolving for velocity:\n\n$$v = \\sqrt{\\frac{k}{m}(A^2 - x^2)}$$\n\nSubstituting values:\n\n$$v = \\sqrt{\\frac{50}{0.8}((0.2)^2 - (0.1)^2)}$$\n\n$$v = \\sqrt{62.5 \\times 0.03} = \\sqrt{1.875} \\approx 1.37\\text{ m/s}$$"
        }
      ]
    }
  ]
};