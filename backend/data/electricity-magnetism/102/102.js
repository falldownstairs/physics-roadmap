module.exports = {
  id: "102",
  courseId: "electricity-magnetism",
  topicId: "electric-charge-field",
  title: "Coulomb's Law & E Fields",
  estimatedTime: "15 minutes",
  videos: [
    {
      videoId: "iXxkIjJY1DY",
      videoTitle: "Coulomb's Law, The Principle of Superposition, and Electric Fields",
      questions: [
        {
          type: 'math-input',
          question: "Two point charges, $q_1 = +3.0 \\times 10^{-6}$ C and $q_2 = -2.0 \\times 10^{-6}$ C, are separated by a distance of $0.50$ m. Calculate the magnitude of the electrostatic force between them in newtons. (Use $k = 9.0 \\times 10^9 \\, \\text{N}\\cdot\\text{m}^2/\\text{C}^2$)",
          mathAnswer: "0.216",
          answerRange: 0.01,
          explanation: "Using $\\text{Coulomb's Law}$:\n\n$$F = k\\frac{|q_1 q_2|}{r^2}$$\n\nSubstituting the values:\n\n$$F = (9.0 \\times 10^9) \\frac{|(3.0 \\times 10^{-6})(-2.0 \\times 10^{-6})|}{(0.50)^2}$$\n\n$$F = (9.0 \\times 10^9) \\frac{6.0 \\times 10^{-12}}{0.25}$$\n\n$$F = (9.0 \\times 10^9)(2.4 \\times 10^{-11}) = 0.216 \\text{ N}$$\n\nThe force is $\\text{attractive}$ because the charges have opposite signs."
        },
        {
          type: 'multiple-choice',
          question: "Three point charges are arranged in a line. The $\\text{principle of superposition}$ states that the net electric force on one charge due to the other two is:",
          options: [
            "Always zero because forces cancel",
            "The vector sum of the individual forces from each charge",
            "The average of the individual forces from each charge",
            "Equal to the force from the nearest charge only"
          ],
          correctAnswer: 1,
          explanation: "The $\\text{principle of superposition}$ states that when multiple charges exert forces on a single charge, the $\\text{net force}$ is the $\\text{vector sum}$ of all individual forces:\n\n$$\\vec{F}_{\\text{net}} = \\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 + \\cdots$$\n\nEach force is calculated independently using Coulomb's law, then the forces are added as vectors (considering both magnitude and direction)."
        }
      ]
    },
    {
      videoId: "sRSXtQTgncw",
      videoTitle: "Force due to an Electric Field on a Point Charge, Torque due to an Electric Field on a Set of Charges, Information from Electric Field Lines",
      questions: [
        {
          type: 'math-input',
          question: "A charge of $-4.0 \\times 10^{-6}$ C is placed in a uniform electric field of magnitude $500$ N/C directed to the right. Calculate the magnitude of the force (in newtons) experienced by the charge.",
          mathAnswer: "0.002",
          answerRange: 0.0001,
          explanation: "The force on a charge in an electric field is given by:\n\n$$\\vec{F} = q\\vec{E}$$\n\nThe magnitude is:\n\n$$F = |q|E = (4.0 \\times 10^{-6})(500) = 0.002 \\text{ N}$$\n\nThe direction of the force is $\\text{opposite}$ to the field direction (to the left) because the charge is negative."
        },
        {
          type: 'multiple-choice',
          question: "An $\\text{electric dipole}$ (two equal and opposite charges separated by a distance $d$) is placed in a uniform electric field. What is the net force and net torque on the dipole when it is perpendicular to the field?",
          options: [
            "Net force = zero, Net torque = zero",
            "Net force = nonzero, Net torque = zero",
            "Net force = zero, Net torque = maximum",
            "Net force = nonzero, Net torque = maximum"
          ],
          correctAnswer: 2,
          explanation: "For an electric dipole in a uniform field:\n\n**Net Force:** Since the forces on the positive and negative charges are equal in magnitude but opposite in direction, they $\\text{cancel out}$, giving zero net force.\n\n**Net Torque:** When perpendicular to the field, the torque is maximum:\n\n$$\\tau_{\\text{max}} = qEd$$\n\nThe dipole experiences a torque that tries to align it with the field direction."
        }
      ]
    }
  ]
};
