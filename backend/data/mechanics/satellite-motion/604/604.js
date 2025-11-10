module.exports = {
  id: "604",
  courseId: "mechanics",
  topicId: "satellite-motion",
  title: "Elliptical Orbits & Conservation",
  estimatedTime: "18 minutes",
  videos: [
    {
      videoId: "sY4Y4AjfhGU",
      videoTitle: "Elliptical Orbits and the Conservation of Energy",
      questions: [
        {
          type: 'multiple-choice',
          question: "As a planet moves from its farthest point to its closest point in an elliptical orbit around the Sun, which of the following correctly describes the changes in its speed and kinetic energy?",
          options: [
            "Speed decreases and kinetic energy decreases",
            "Speed increases and kinetic energy increases",
            "Speed remains constant and kinetic energy remains constant",
            "Speed increases but kinetic energy decreases"
          ],
          correctAnswer: 1,
          explanation: "As the planet falls toward the Sun, it gains speed (similar to an object falling toward Earth). Since kinetic energy is given by $KE = \\frac{1}{2}mv^2$, an increase in speed results in an increase in kinetic energy. The planet gains kinetic energy as it loses gravitational potential energy, conserving total mechanical energy."
        },
        {
          type: 'math-input',
          question: "Write the formula for the total mechanical energy of a satellite in orbit, where $m$ is the satellite's mass, $M$ is the mass of the central body, $v$ is the orbital speed, $r$ is the distance from the center, and $G$ is the gravitational constant.",
          mathAnswer: "\\frac{1}{2}mv^2 - \\frac{GMm}{r}",
          explanation: "The total mechanical energy is the sum of kinetic and gravitational potential energy:\n\n$$E = KE + PE = \\frac{1}{2}mv^2 - \\frac{GMm}{r}$$\n\nNote that gravitational potential energy is negative and given by $U_g = -\\frac{GMm}{r}$, not $mgh$, since we need the absolute gravitational potential energy for orbital mechanics."
        }
      ]
    },
    {
      videoId: "BLdlfWT7UN0",
      videoTitle: "Elliptical Orbits and the Conservation of Angular Momentum",
      questions: [
        {
          type: 'multiple-choice',
          question: "Why is angular momentum conserved for a satellite in an elliptical orbit around a planet?",
          options: [
            "Because the gravitational force is constant throughout the orbit",
            "Because the satellite moves at constant speed",
            "Because the gravitational force produces zero net torque on the satellite",
            "Because the satellite's mass remains constant"
          ],
          correctAnswer: 2,
          explanation: "Angular momentum is conserved when the net torque is zero ($\\tau = 0$). The gravitational force always points toward the center of the planet, parallel to the lever arm vector $\\vec{r}$. Since torque is $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$, and the force is parallel to $\\vec{r}$, the torque is zero throughout the orbit."
        },
        {
          type: 'math-input',
          question: "A satellite is at its closest approach (perihelion) to the Sun at distance $r_A = 2.0 \\times 10^{11} \\text{ m}$ with speed $v_A = 3.5 \\times 10^4 \\text{ m/s}$. At its farthest point (aphelion), it is at distance $r_B = 5.0 \\times 10^{11} \\text{ m}$. Calculate the speed at aphelion in $\\text{m/s}$ (in scientific notation as a decimal, e.g., $1.4 \\times 10^4$ as $14000$).",
          mathAnswer: "14000",
          answerRange: 500,
          explanation: "Using conservation of angular momentum at perihelion and aphelion (where velocity is perpendicular to the radius vector):\n\n$$L_A = L_B$$\n\n$$m v_A r_A = m v_B r_B$$\n\nThe mass cancels, giving:\n\n$$v_B = \\frac{r_A v_A}{r_B} = \\frac{(2.0 \\times 10^{11})(3.5 \\times 10^4)}{5.0 \\times 10^{11}}$$\n\n$$v_B = 1.4 \\times 10^4 \\text{ m/s} = 14000 \\text{ m/s}$$\n\nNotice that at the greater distance, the satellite moves more slowly, consistent with Kepler's second law."
        }
      ]
    }
  ]
};