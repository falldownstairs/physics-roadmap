module.exports = {
  id: "704",
  courseId: "mechanics",
  topicId: "periodic-motion",
  title: "Spring Systems",
  estimatedTime: "22 minutes",
  videos: [
    {
      videoId: "u6yQd94FbwU",
      videoTitle: "Harmonic Oscillator with a Crate on Top of a Crate",
      questions: [
        {
          type: 'multiple-choice',
          question: "A mass $m_1$ on a spring has a second mass $m_2$ resting on top of it. The coefficient of static friction between the masses is $\\mu_s$. What determines the maximum acceleration the system can have without $m_2$ slipping?",
          image: {
            src: 'two-mass-spring-system.png',
            alt: 'Two stacked masses on a horizontal spring system'
          },
          options: [
            "The spring constant only",
            "The coefficient of static friction and gravity: $a_{\\text{max}} = \\mu_s g$",
            "The total mass of the system",
            "The amplitude of oscillation"
          ],
          correctAnswer: 1,
          explanation: "For mass $m_2$ not to slip, the maximum frictional force must provide the acceleration:\n\n$$f_{s,\\text{max}} = \\mu_s m_2 g = m_2 a_{\\text{max}}$$\n\nSolving for maximum acceleration:\n\n$$a_{\\text{max}} = \\mu_s g$$\n\nThis is independent of the mass $m_2$ itself. If the system accelerates faster than this, the top mass will slip."
        },
      ]
    },
    {
      videoId: "Py7qnXtMIUA",
      videoTitle: "Springs in Series and Parallel",
      questions: [
        {
          type: 'multiple-choice',
          question: "Two identical springs with spring constant $k$ are connected end-to-end (in series). What is the effective spring constant $k_{\\text{eff}}$ of this combination?",
          options: [
            "$k_{\\text{eff}} = 2k$",
            "$k_{\\text{eff}} = k$",
            "$k_{\\text{eff}} = \\frac{k}{2}$",
            "$k_{\\text{eff}} = \\frac{1}{2k}$"
          ],
          correctAnswer: 2,
          explanation: "For springs in $\\text{series}$, the effective spring constant is found using:\n\n$$\\frac{1}{k_{\\text{eff}}} = \\frac{1}{k_1} + \\frac{1}{k_2}$$\n\nFor two identical springs:\n\n$$\\frac{1}{k_{\\text{eff}}} = \\frac{1}{k} + \\frac{1}{k} = \\frac{2}{k}$$\n\nTherefore:\n\n$$k_{\\text{eff}} = \\frac{k}{2}$$\n\nSprings in series are easier to stretch (smaller effective spring constant) because the same force stretches both springs."
        },
        {
          type: 'math-input',
          question: "Two identical springs with spring constant $k$ are connected side-by-side (in parallel). What is the effective spring constant $k_{\\text{eff}}$ of this combination? Express as a coefficient times $k$.",
          mathAnswer: "2k",
          explanation: "For springs in $\\text{parallel}$, the effective spring constants simply add:\n\n$$k_{\\text{eff}} = k_1 + k_2$$\n\nFor two identical springs:\n\n$$k_{\\text{eff}} = k + k = 2k$$\n\nSprings in parallel are harder to stretch (larger effective spring constant) because both springs resist the applied force together."
        },
        {
          type: 'multiple-choice',
          question: "A spring is cut in half. How does the spring constant of one half ($k'$) compare to the original spring constant ($k$)?",
          options: [
            "$k' = \\frac{k}{2}$",
            "$k' = k$",
            "$k' = 2k$",
            "$k' = 4k$"
          ],
          correctAnswer: 2,
          explanation: "When a spring is cut in half, it has half the number of coils. The same force produces half the stretch:\n\n$$k = \\frac{F}{x}$$\n\nFor the half-spring with half the stretch:\n\n$$k' = \\frac{F}{x/2} = \\frac{2F}{x} = 2k$$\n\nThe spring constant $\\text{doubles}$ when cut in half. Shorter springs are stiffer!"
        }
      ]
    },
    {
      videoId: "3vliHsuURIY",
      videoTitle: "The Equivalence of a Vertical Mass on a Spring to a Horizontal Mass on a Spring",
      questions: [
        {
          type: 'multiple-choice',
          question: "Why do a horizontal mass-spring system and a vertical mass-spring system (both with the same $m$ and $k$) have the same period of oscillation?",
          options: [
            "They have different restoring forces but the same mass",
            "Gravity cancels out in both systems",
            "They have the same restoring force: $F = -kx$ where $x$ is displacement from equilibrium",
            "The vertical system oscillates faster due to gravity"
          ],
          correctAnswer: 2,
          explanation: "Both systems have identical $\\text{restoring forces}$.\n\nFor the horizontal system: $F_{\\text{net}} = -kx$\n\nFor the vertical system at equilibrium: $mg = k\\Delta L$\n\nWhen displaced by additional distance $x$ from equilibrium:\n\n$$F_{\\text{net}} = k(\\Delta L + x) - mg = k\\Delta L + kx - mg$$\n\nSince $k\\Delta L = mg$, these cancel:\n\n$$F_{\\text{net}} = -kx$$\n\nThe restoring forces are identical, so both have period $T = 2\\pi\\sqrt{\\frac{m}{k}}$."
        }
      ]
    }
  ]
};