module.exports = {
  id: "501",
  courseId: "mechanics",
  topicId: "rotational-motion",
  title: "Rotational Kinematics",
  estimatedTime: "20 minutes",
  videos: [
    {
      videoId: "MKhxRE2apWI",
      videoTitle: "Rotational Kinematics",
      questions: [
        {
          type: 'multiple-choice',
          question: "A circle is spinning at $1\\text{ radian per second}$. Approximately how long does it take to complete one full rotation?",
          options: [
            "$1\\text{ second}$",
            "$3.14\\text{ seconds}$",
            "$6.28\\text{ seconds}$",
            "$12.56\\text{ seconds}$"
          ],
          correctAnswer: 2,
          explanation: "One complete rotation corresponds to an angular displacement of $2\\pi\\text{ radians}$. Using the relationship:\n\n$$\\Delta t = \\frac{\\Delta \\theta}{\\omega}$$\n\nwhere $\\omega = 1\\text{ rad/s}$ and $\\Delta \\theta = 2\\pi\\text{ rad}$:\n\n$$\\Delta t = \\frac{2\\pi}{1} \\approx 6.28\\text{ seconds}$$"
        },
        {
          type: 'math-input',
          question: "An object starts from rest with a constant angular acceleration of $\\alpha = 3\\text{ rad/s}^2$. What is its angular velocity $\\omega$ (in $\\text{rad/s}$) after $4\\text{ seconds}$?",
          mathAnswer: "12",
          answerRange: 0.1,
          explanation: "Using the rotational kinematic equation for constant angular acceleration:\n\n$$\\omega_f = \\omega_i + \\alpha t$$\n\nSince the object starts from rest, $\\omega_i = 0$:\n\n$$\\omega_f = 0 + (3\\text{ rad/s}^2)(4\\text{ s}) = 12\\text{ rad/s}$$"
        }
      ]
    },
    {
      videoId: "dby8S6TrUUQ",
      videoTitle: "Rotational Kinematics (part 2)",
      questions: [
        {
          type: 'math-input',
          question: "An object starts from rest ($\\omega_i = 0$) with angular acceleration $\\alpha = 2\\text{ rad/s}^2$ and rotates through one complete revolution. What is $\\omega_f$ (in $\\text{rad/s}$)? Round to two decimal places.",
          mathAnswer: "5.01",
          answerRange: 0.1,
          explanation: "One revolution equals $2\\pi\\text{ radians}$. Using the kinematic equation:\n\n$$\\omega_f^2 = \\omega_i^2 + 2\\alpha\\Delta\\theta$$\n\nSubstituting $\\omega_i = 0$, $\\alpha = 2\\text{ rad/s}^2$, and $\\Delta\\theta = 2\\pi\\text{ rad}$:\n\n$$\\omega_f^2 = 0 + 2(2)(2\\pi) = 8\\pi$$\n\n$$\\omega_f = \\sqrt{8\\pi} \\approx 5.01\\text{ rad/s}$$"
        },
        {
          type: 'multiple-choice',
          question: "A point on a rotating platform is located at distance $r$ from the center. If the platform rotates with angular velocity $\\omega$, what is the tangential speed of the point?",
          options: [
            "$v_t = r/\\omega$",
            "$v_t = \\omega/r$",
            "$v_t = r\\omega$",
            "$v_t = r\\omega^2$"
          ],
          correctAnswer: 2,
          explanation: "The $\\text{bridge equation}$ relating tangential speed to angular velocity is:\n\n$$v_t = r\\omega$$\n\nThis shows that tangential speed increases linearly with distance from the center. At the center ($r = 0$), the tangential speed is zero, while points farther from the center move faster."
        }
      ]
    },
    {
      videoId: "B8adrqrtMjU",
      videoTitle: "Rotational Kinematics (part 3)",
      questions: [
        {
          type: 'multiple-choice',
          question: "A point on a rotating disk experiences both tangential and centripetal acceleration. These two acceleration components are:",
          options: [
            "Parallel to each other",
            "Perpendicular to each other",
            "In opposite directions",
            "Equal in magnitude"
          ],
          correctAnswer: 1,
          explanation: "The tangential acceleration points along the direction of motion (tangent to the circle), while the centripetal acceleration points toward the center of the circle (radially inward).\n\nThese two directions are always $\\text{perpendicular}$ to each other, forming a right angle. This is why the magnitude of total acceleration is:\n\n$$|a| = \\sqrt{a_t^2 + a_c^2}$$"
        },
        {
          type: 'math-input',
          question: "A point on a disk is located $0.5\\text{ m}$ from the center. The disk has angular acceleration $\\alpha = 4\\text{ rad/s}^2$ and angular velocity $\\omega = 6\\text{ rad/s}$. What is the magnitude of the total acceleration (in $\\text{m/s}^2$)?",
          mathAnswer: "18.44",
          answerRange: 0.1,
          explanation: "The total acceleration has two perpendicular components:\n\n1. Tangential acceleration:\n\n$$a_t = r\\alpha = (0.5)(4) = 2\\text{ m/s}^2$$\n\n2. Centripetal acceleration:\n\n$$a_c = r\\omega^2 = (0.5)(6)^2 = 18\\text{ m/s}^2$$\n\nThe magnitude of total acceleration:\n\n$$|a| = \\sqrt{a_t^2 + a_c^2} = \\sqrt{2^2 + 18^2} = \\sqrt{328} \\approx 18.44\\text{ m/s}^2$$"
        }
      ]
    }
  ]
};