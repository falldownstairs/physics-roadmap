module.exports = {
  id: "701",
  courseId: "mechanics",
  topicId: "periodic-motion",
  title: "SHM Kinematics & Graphs",
  estimatedTime: "20 minutes",
  videos: [
    {
      videoId: "roLo5v7k7zM",
      videoTitle: "The Kinematics of Harmonic Motion (part 1): An Introduction into Harmonic Motion",
      questions: [
        {
          type: 'math-input',
          question: "For an object in $\\text{simple harmonic motion}$ with amplitude $A$ and angular frequency $\\omega$, write the position function $x(t)$ if the object starts at maximum displacement at time $t = 0$.",
          mathAnswer: "A\\cos(\\omega t)",
          explanation: "When the object starts at maximum displacement (at $x = A$ when $t = 0$), the position function is:\n\n$$x(t) = A\\cos(\\omega t)$$\n\nThis is because $\\cos(0) = 1$, giving $x(0) = A$, which matches the initial condition."
        },
        {
          type: 'multiple-choice',
          question: "An object oscillates in simple harmonic motion with amplitude $A = 0.5\\text{ m}$ and angular frequency $\\omega = 4\\text{ rad/s}$. What is the maximum speed of the object?",
          options: ["$0.5\\text{ m/s}$", "$2\\text{ m/s}$", "$4\\text{ m/s}$", "$8\\text{ m/s}$"],
          correctAnswer: 1,
          explanation: "The maximum speed in simple harmonic motion is:\n\n$$v_{\\text{max}} = A\\omega$$\n\nSubstituting the values:\n\n$$v_{\\text{max}} = (0.5\\text{ m})(4\\text{ rad/s}) = 2\\text{ m/s}$$"
        }
      ]
    },
    {
      videoId: "9nk6pvSFuIo",
      videoTitle: "The Kinematics of Harmonic Motion (part 2)",
      questions: [
        {
          type: 'multiple-choice',
          question: "If an object in simple harmonic motion starts at equilibrium and moves in the positive direction at $t = 0$, which function correctly describes its position?",
          options: ["$x(t) = A\\cos(\\omega t)$", "$x(t) = A\\sin(\\omega t)$", "$x(t) = -A\\sin(\\omega t)$", "$x(t) = -A\\cos(\\omega t)$"],
          correctAnswer: 1,
          explanation: "When starting at $\\text{equilibrium}$ ($x = 0$) and moving in the positive direction, the position is:\n\n$$x(t) = A\\sin(\\omega t)$$\n\nThis satisfies the initial conditions because $\\sin(0) = 0$ (starts at equilibrium) and the derivative $v(t) = A\\omega\\cos(\\omega t)$ is positive at $t = 0$ since $\\cos(0) = 1$."
        },
        {
          type: 'math-input',
          question: "An object in simple harmonic motion has amplitude $A = 3\\text{ m}$ and angular frequency $\\omega = 2\\text{ rad/s}$. Calculate the magnitude of the maximum acceleration (in $\\text{m/s}^2$).",
          mathAnswer: "12",
          answerRange: 0.5,
          explanation: "The maximum acceleration in simple harmonic motion is:\n\n$$a_{\\text{max}} = A\\omega^2$$\n\nSubstituting the values:\n\n$$a_{\\text{max}} = (3\\text{ m})(2\\text{ rad/s})^2 = 3 \\times 4 = 12\\text{ m/s}^2$$"
        }
      ]
    },
    {
      videoId: "oQnrGz81Eo0",
      videoTitle: "The Kinematics of Harmonic Motion (part 3)",
      questions: [
        {
          type: 'multiple-choice',
          question: "An object oscillates with a period of $T = 0.5\\text{ s}$. What is its frequency?",
          options: ["$0.25\\text{ Hz}$", "$0.5\\text{ Hz}$", "$2\\text{ Hz}$", "$4\\text{ Hz}$"],
          correctAnswer: 2,
          explanation: "The relationship between $\\text{frequency}$ ($f$) and $\\text{period}$ ($T$) is:\n\n$$f = \\frac{1}{T}$$\n\nSubstituting:\n\n$$f = \\frac{1}{0.5\\text{ s}} = 2\\text{ Hz}$$\n\nThis means the object completes 2 cycles per second."
        },
        {
          type: 'math-input',
          question: "A system oscillates with a frequency of $f = 5\\text{ Hz}$. Calculate the angular frequency $\\omega$ (in $\\text{rad/s}$). Use $\\pi \\approx 3.14$.",
          mathAnswer: "31.4",
          answerRange: 1,
          explanation: "The $\\text{angular frequency}$ is related to frequency by:\n\n$$\\omega = 2\\pi f$$\n\nSubstituting:\n\n$$\\omega = 2\\pi(5\\text{ Hz}) = 10\\pi\\text{ rad/s} \\approx 31.4\\text{ rad/s}$$"
        }
      ]
    }
  ]
};