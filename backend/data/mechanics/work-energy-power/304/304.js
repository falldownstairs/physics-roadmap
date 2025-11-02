module.exports = {
  id: "304",
  courseId: "mechanics",
  topicId: "work-energy-power",
  title: "Conservative Forces & Energy",
  estimatedTime: "24 minutes",
  videos: [
    {
      videoId: "j1sDU1fUpHA",
      videoTitle: "Conservative and Non-Conservative Forces",
      questions: [
        {
          type: 'multiple-choice',
          question: "Which of the following is the key characteristic that defines a $\\text{conservative force}$?",
          options: [
            "The force always acts in the direction of motion",
            "The work done by the force when moving an object from point A to point B is independent of the path taken",
            "The force is constant in magnitude and direction",
            "The force always increases the kinetic energy of an object"
          ],
          correctAnswer: 1,
          explanation: "A $\\text{conservative force}$ is defined by the property that the work done in moving an object from point A to point B is $\\text{independent of the path taken}$.\n\nFor example, with gravity, whether you lift an object straight up or take a longer zigzag path to the same height, gravity does the same amount of work. This is in contrast to friction, which does different amounts of work depending on the path length.\n\nExamples of conservative forces include gravity, elastic spring forces, and electrostatic forces. Non-conservative forces include friction and air resistance."
        },
        {
          type: 'multiple-choice',
          question: "A $2\\text{ kg}$ box is moved from point A to point B along two different paths. Path 1: moved $2\\text{ m}$ horizontally, then $3\\text{ m}$ upward. Path 2: moved $4\\text{ m}$ upward, then $2\\text{ m}$ horizontally, then $1\\text{ m}$ downward. If only gravity acts on the box, what can you conclude about the work done by gravity?",
          options: [
            "Path 1 requires more work because it is shorter",
            "Path 2 requires more work because the box goes higher",
            "Both paths result in the same work done by gravity: $-60\\text{ J}$",
            "The work cannot be determined without knowing the speed"
          ],
          correctAnswer: 2,
          explanation: "Since gravity is a $\\text{conservative force}$, the work done depends only on the initial and final positions, not the path taken.\n\nBoth paths start at the same point A and end at point B, which is $3\\text{ m}$ higher. The work done by gravity is:\n\n$$W_g = F_g \\cdot \\Delta y \\cdot \\cos(180^\\circ)$$\n\n$$W_g = (mg)(h)(-1) = (2\\text{ kg})(10\\text{ m/s}^2)(3\\text{ m})(-1)$$\n\n$$W_g = -60\\text{ J}$$\n\nThe negative sign indicates that gravity opposes the upward displacement. The horizontal displacements contribute zero work since gravity is perpendicular to horizontal motion."
        }
      ]
    },
    {
      videoId: "PBDR_7F2BD0",
      videoTitle: "Conservative and Non-Conservative Forces (part 2)",
      questions: [
        {
          type: 'multiple-choice',
          question: "What is a $\\text{closed path}$, and what is the work done by a conservative force over such a path?",
          options: [
            "A path that crosses itself; work is positive",
            "A path that ends where it began; work is always zero",
            "A path that forms a circle; work depends on the radius",
            "A path without any turns; work is maximum"
          ],
          correctAnswer: 1,
          explanation: "A $\\text{closed path}$ is a path that returns to its starting point. For a $\\text{conservative force}$, the work done over any closed path is always zero:\n\n$$W_{\\text{conservative, closed}} = 0$$\n\nThis makes sense because if you return to your starting position, your potential energy hasn't changed. Since $W_c = -\\Delta U$ and $\\Delta U = 0$ for a closed path, the work must be zero.\n\nFor example, if you lift a box up $3\\text{ m}$ and then lower it back down $3\\text{ m}$, the total work done by gravity is:\n\n$$W = (+60\\text{ J}) + (-60\\text{ J}) = 0\\text{ J}$$"
        },
        {
          type: 'math-input',
          question: "A box is pushed around a rectangular closed path on a table with dimensions $2\\text{ m}$ by $3\\text{ m}$. A constant friction force of $2\\text{ N}$ opposes the motion at all times. Calculate the total work done by friction (in $\\text{J}$) for one complete loop around the rectangle.",
          mathAnswer: "-20",
          explanation: "Friction is a $\\text{non-conservative force}$, so work over a closed path is NOT zero.\n\nThe total distance traveled around the rectangle is:\n\n$$d = 2(2\\text{ m}) + 2(3\\text{ m}) = 10\\text{ m}$$\n\nSince friction always opposes motion ($\\theta = 180^\\circ$):\n\n$$W_f = F_f \\cdot d \\cdot \\cos(180^\\circ)$$\n\n$$W_f = (2\\text{ N})(10\\text{ m})(-1) = -20\\text{ J}$$\n\nThis demonstrates that friction is non-conservative: it does negative work over a closed path, dissipating energy as heat."
        }
      ]
    },
    {
      videoId: "izB2cqqr1Is",
      videoTitle: "Work Done By a Conservative Forces",
      questions: [
        {
          type: 'multiple-choice',
          question: "What is the relationship between work done by a conservative force and the change in potential energy?",
          options: [
            "$W_c = \\Delta U$",
            "$W_c = -\\Delta U$",
            "$W_c = \\frac{1}{2}\\Delta U$",
            "$W_c = (\\Delta U)^2$"
          ],
          correctAnswer: 1,
          explanation: "The work done by a $\\text{conservative force}$ is equal to the negative change in potential energy:\n\n$$W_c = -\\Delta U = -(U_f - U_i)$$\n\nFor example, when gravity does positive work (object falls), potential energy decreases, making $\\Delta U$ negative. When gravity does negative work (object rises), potential energy increases, making $\\Delta U$ positive.\n\nExample: A $2\\text{ kg}$ crate is lifted $3\\text{ m}$:\n\nWork by gravity: $W_g = -60\\text{ J}$ (negative, opposes motion)\n\nChange in potential energy: $\\Delta U = mgh = +60\\text{ J}$ (positive, increases)\n\nIndeed, $W_g = -\\Delta U$."
        },
        {
          type: 'multiple-choice',
          question: "On a graph of potential energy $U$ versus position $x$, the conservative force at any point is related to which feature of the graph?",
          options: [
            "The height of the curve: $F = U$",
            "The area under the curve",
            "The negative slope of the curve: $F = -\\frac{dU}{dx}$",
            "The positive slope of the curve: $F = \\frac{dU}{dx}$"
          ],
          correctAnswer: 2,
          explanation: "The conservative force is related to the potential energy by:\n\n$$F = -\\frac{dU}{dx}$$\n\nThis means the force equals the negative derivative (negative slope) of the potential energy curve.\n\n1. Where the slope is steep and negative, the force is large and positive (pointing right)\n\n2. Where the slope is zero (at a minimum or maximum), the force is zero—this is called $\\text{equilibrium}$\n\n3. Where the slope is positive, the force is negative (pointing left)\n\nA minimum in the $U$ vs. $x$ graph represents $\\text{stable equilibrium}$ because the particle would need energy to move away from that point."
        }
      ]
    }
  ]
};