module.exports = {
  id: "302",
  courseId: "electricity-magnetism",
  topicId: "electric-potential",
  title: "Path Integrals & ΔV",
  estimatedTime: "25 minutes",
  videos: [
    {
      videoId: "rnwykMcZOhM",
      videoTitle: "Electric Potential and the Work Done by Electric Forces",
      questions: [
        {
          type: 'multiple-choice',
          question: "When a positive charge moves from point A to point B in an electric field, the work done $W$ by the electric force is related to the change in electric potential by:",
          options: [
            "$W = q(V_B - V_A) = q\\Delta V$",
            "$W = -q(V_B - V_A) = -q\\Delta V$",
            "$W = E \\cdot d$ only",
            "$W$ depends on the path taken"
          ],
          correctAnswer: 1,
          explanation: "The work-energy theorem for electric forces:\n\n$$W_{\\text{electric}} = -\\Delta U = -(U_B - U_A)$$\n\nSince $U = qV$:\n\n$$W = -(qV_B - qV_A) = -q(V_B - V_A) = -q\\Delta V$$\n\nKey insight:\n- If $\\Delta V > 0$ (moving to higher potential), $W < 0$ for positive charge (field does negative work)\n- If $\\Delta V < 0$ (moving to lower potential), $W > 0$ for positive charge (field does positive work)\n\n$W$ is $\\text{path-independent}$ (conservative force)."
        },
        {
          type: 'math-input',
          question: "An electron ($q = -1.6 \\times 10^{-19}$ C) moves from a point at 100 V to a point at 50 V. Calculate the work done (in $10^{-18}$ J) by the electric force.",
          mathAnswer: "8",
          answerRange: 0.5,
          explanation: "Using $W = -q\\Delta V$:\n\n$$W = -q(V_B - V_A) = -(-1.6 \\times 10^{-19})(50 - 100)$$\n\n$$W = -(-1.6 \\times 10^{-19})(-50)$$\n\n$$W = -(8.0 \\times 10^{-18}) = -8.0 \\times 10^{-18} \\text{ J}$$\n\nWait! The electron has $\\text{negative}$ charge, so:\n\n$$W = 8.0 \\times 10^{-18} \\text{ J}$$\n\nPositive work: the field accelerates the electron toward higher $V$."
        }
      ]
    },
    {
      videoId: "bG2aQUD8xt0",
      videoTitle: "Calculating the Change in Electric Potential",
      questions: [
        {
          type: 'multiple-choice',
          question: "The potential difference $\\Delta V$ between two points in a uniform electric field $\\vec{E}$ can be calculated using:",
          options: [
            "$\\Delta V = E \\cdot d$ where $d$ is any path length",
            "$\\Delta V = -E \\cdot d$ where $d$ is displacement along the field",
            "$\\Delta V = -\\int \\vec{E} \\cdot d\\vec{l}$ (integral along the path)",
            "$\\Delta V = kQ/r$"
          ],
          correctAnswer: 2,
          explanation: "General relationship between $E$ and $V$:\n\n$$\\Delta V = V_B - V_A = -\\int_A^B \\vec{E} \\cdot d\\vec{l}$$\n\nFor $\\text{uniform field}$ along a straight path:\n\n$$\\Delta V = -Ed$$\n\nwhere $d$ is displacement $\\text{in the direction of}$ $\\vec{E}$.\n\nNote the $\\text{negative sign}$: \n- Moving in direction of $\\vec{E}$ → potential decreases\n- Moving opposite to $\\vec{E}$ → potential increases"
        },
        {
          type: 'math-input',
          question: "A uniform electric field has magnitude 500 N/C pointing downward. Calculate the potential difference (in volts) between a point at height $h = 0$ and a point at height $h = 0.20$ m.",
          mathAnswer: "100",
          answerRange: 2,
          explanation: "For uniform field, $\\Delta V = -\\vec{E} \\cdot \\vec{d}$\n\nField points downward (-y), displacement is upward (+y):\n\n$$\\Delta V = V_{\\text{top}} - V_{\\text{bottom}} = -E \\cdot (-d) = Ed$$\n\n$$\\Delta V = (500)(0.20) = 100 \\text{ V}$$\n\nThe upper point is at $\\text{higher}$ potential (field points toward lower $V$)."
        }
      ]
    },
    {
      videoId: "tTUluxXl3dk",
      videoTitle: "Relationship Between the Electric Field and the Electric Potential",
      questions: [
        {
          type: 'multiple-choice',
          question: "The electric field $\\vec{E}$ is related to the electric potential $V$ by:",
          options: [
            "$\\vec{E} = \\nabla V$ (gradient of $V$)",
            "$\\vec{E} = -\\nabla V$ (negative gradient of $V$)",
            "$E = dV/dr$ (derivative of $V$)",
            "$\\vec{E} = \\int V \\, d\\vec{r}$"
          ],
          correctAnswer: 1,
          explanation: "The electric field is the $\\text{negative gradient}$ of potential:\n\n$$\\vec{E} = -\\nabla V = -\\left(\\frac{\\partial V}{\\partial x}\\hat{i} + \\frac{\\partial V}{\\partial y}\\hat{j} + \\frac{\\partial V}{\\partial z}\\hat{k}\\right)$$\n\nIn one dimension:\n\n$$E_x = -\\frac{dV}{dx}$$\n\nKey insights:\n- $\\vec{E}$ points in direction of $\\text{steepest decrease}$ in $V$\n- Perpendicular to equipotential surfaces\n- Large $|\\vec{E}|$ where $V$ changes rapidly"
        }
      ]
    },
    {
      videoId: "_P3Y9TEQc0c",
      videoTitle: "Calculating the Electric Field from the Electric Potential",
      questions: [
        {
          type: 'multiple-choice',
          question: "Given $V(x) = 200 - 50x$ volts (where $x$ is in meters), the electric field component $E_x$ is:",
          options: [
            "$E_x = -50$ V/m",
            "$E_x = 50$ V/m = 50 N/C",
            "$E_x = 200$ N/C",
            "$E_x = 0$ (constant potential)"
          ],
          correctAnswer: 1,
          explanation: "Using $E_x = -\\frac{dV}{dx}$:\n\nGiven: $V(x) = 200 - 50x$\n\n$$\\frac{dV}{dx} = -50 \\text{ V/m}$$\n\n$$E_x = -(-50) = 50 \\text{ N/C}$$\n\nThe electric field points in the $+x$ direction (toward decreasing potential).\n\nNote: V/m and N/C are equivalent units for electric field."
        },
        {
          type: 'math-input',
          question: "The electric potential varies as $V(r) = \\frac{36}{r}$ volts where $r$ is in meters. Calculate the magnitude of the electric field (in N/C) at $r = 2.0$ m.",
          mathAnswer: "9",
          answerRange: 0.5,
          explanation: "For spherical symmetry, $E_r = -\\frac{dV}{dr}$:\n\n$$V(r) = \\frac{36}{r}$$\n\n$$\\frac{dV}{dr} = -\\frac{36}{r^2}$$\n\n$$E_r = -\\left(-\\frac{36}{r^2}\\right) = \\frac{36}{r^2}$$\n\nAt $r = 2.0$ m:\n\n$$E = \\frac{36}{(2.0)^2} = \\frac{36}{4} = 9 \\text{ N/C}$$"
        }
      ]
    }
  ]
};
