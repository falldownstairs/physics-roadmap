module.exports = {
  id: "103",
  courseId: "mechanics",
  topicId: "kinematics",
  title: "Projectile Motion",
  estimatedTime: "18 minutes",
  videos: [
    {
      videoId: "Q53HHMMWtf0",
      videoTitle: "Projectile Motion Basics",
      questions: [
    {
      type: 'multiple-choice',
      question: "The fundamental strategy for solving a projectile motion problem is to treat the motion as two independent components. What are these two components?",
      options: [
        "$\\text{Mass and Acceleration}$",
        "$\\text{Time and Distance}$",
        "$\\text{Horizontal and Vertical}$",
        "$\\text{Velocity and Displacement}$"
      ],
      correctAnswer: 2,
      explanation: "Projectile motion is solved by breaking the motion into independent $\\mathbf{x}$ (horizontal) and $\\mathbf{y}$ (vertical) components[cite: 1821]."
    },
    {
      type: 'math-input',
      question: "In the absence of air resistance, what is the value of the $\\text{acceleration}$  of a projectile in the horizontal direction (in $\\text{m/s}^2$)?",
      mathAnswer: "0",
      answerRange: 0.1,
      explanation: "There is $\\text{no acceleration}$ in the horizontal direction in projectile motion, meaning the horizontal velocity is constant."
    },
    {
      type: 'multiple-choice',
      question: "What physical quantity is the same for both the horizontal ($\\mathbf{x}$) and vertical ($\\mathbf{y}$) components of a projectile's motion?",
      options: [
        "$\\text{Initial Velocity}$",
        "$\\text{Acceleration}$",
        "$\\text{Total Time of Flight}$",
        "$\\text{Total Displacement}$"
      ],
      correctAnswer: 2,
      explanation: "The $\\text{time}$ it takes to complete the vertical motion is the exact $\\text{time}$ it has to complete the horizontal motion. [cite_start]The $\\text{time}$ links the two components[cite: 1821]."
    },
    {
      type: 'math-input',
      question: "An object is launched with an initial speed ($v_0$) of $15.0 \\text{ m/s}$ at an angle ($\\theta$) of $40.0^\\circ$ above the horizontal. Calculate the initial vertical velocity ($v_{iy}$) in $\\text{m/s}$.",
      mathAnswer: "9.64",
      answerRange: 0.01,
      explanation: "The initial vertical velocity is found using the sine function: $$v_{iy} = v_0 \\sin(\\theta) = (15.0 \\text{ m/s}) \\sin(40.0^\\circ) \\approx 9.64 \\text{ m/s}$$"
    },
    {
      type: 'math-input',
      question: "An object is launched from the ground and returns to the ground ($\\Delta y = 0 \\text{ m}$) with an initial vertical velocity ($v_{iy}$) of $8.0 \\text{ m/s}$. Calculate the $\\text{total time of flight}$ ($t$) in $\\text{s}$. (Use $g = 9.8 \\text{ m/s}^2$)",
      mathAnswer: "1.63",
      answerRange: 0.01,
      explanation: "Using the equation $\\Delta y = v_{iy}t + \\frac{1}{2}a_y t^2$, where $\\Delta y = 0$ and $a_y = -9.8 \\text{ m/s}^2$: $$0 = v_{iy}t - 4.9t^2 \\implies t(v_{iy} - 4.9t) = 0$$ The time of flight is $t = \\frac{v_{iy}}{4.9} \\cdot 2 = \\frac{2(8.0 \\text{ m/s})}{9.8 \\text{ m/s}^2} \\approx 1.63 \\text{ s}$[cite: 1824]."
    },
    {
      type: 'math-input',
      question: "A projectile has a constant horizontal velocity ($v_{ix}$) of $10.0 \\text{ m/s}$. If the $\\text{total time of flight}$ ($t$) is $1.63 \\text{ s}$, calculate the $\\text{range}$ ($\\Delta x$) in $\\text{m}$.",
      mathAnswer: "16.30",
      answerRange: 0.05,
      explanation: "The $\\text{range}$ is the horizontal $\\text{displacement}$, calculated with the constant horizontal velocity: $$\\Delta x = v_{ix}t = (10.0 \\text{ m/s})(1.63 \\text{ s}) = 16.3 \\text{ m}$$[cite: 1825]."
    },
    {
      type: 'multiple-choice',
      question: "At the point of $\\text{maximum elevation}$ of a projectile, which of the following correctly describes the vertical velocity ($v_y$) and the vertical acceleration ($a_y$)?",
      options: [
        "$$v_y = 0 \\text{ m/s}, a_y = 0 \\text{ m/s}^2$$",
        "$$v_y = 0 \\text{ m/s}, a_y = -9.8 \\text{ m/s}^2$$",
        "$$v_y = v_{iy}, a_y = -9.8 \\text{ m/s}^2$$",
        "$$v_y = v_{iy}, a_y = 0 \\text{ m/s}^2$$"
      ],
      correctAnswer: 1,
      explanation: "At the $\\text{maximum height}$, the object momentarily stops moving vertically, so $v_y = 0$. [cite_start]However, gravity is a constant force, so $a_y$ is still $-9.8 \\text{ m/s}^2$ (or $-g$)[cite: 1526, 1527, 1823]."
    }
  ]
    }
  ]
};
