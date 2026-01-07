module.exports = {
  id: "101",
  courseId: "electricity-magnetism",
  topicId: "electric-charge-field",
  title: "Charge Basics",
  estimatedTime: "10 minutes",
  videos: [
    {
      videoId: "3xSIA5UVAo8",
      videoTitle: "Types of Charge, Polarization of Charge, and Charging by Induction",
      questions: [
        {
          type: 'multiple-choice',
          question: "Which of the following statements about $\\text{electric charge}$ is correct?",
          options: [
            "Positive charges can be created without creating negative charges",
            "Charge is conserved in all physical processes",
            "Electrons carry positive charge",
            "Protons are lighter than electrons"
          ],
          correctAnswer: 1,
          explanation: "The $\\text{law of conservation of charge}$ states that the total electric charge in an isolated system remains constant. Charge can be transferred from one object to another, but the total amount of charge cannot be created or destroyed.\n\nIn any process, if positive charge appears somewhere, an equal amount of negative charge must appear elsewhere."
        },
        {
          type: 'multiple-choice',
          question: "A neutral metal sphere is brought near a positively charged rod without touching it. What happens to the charges in the metal sphere?",
          // Image description: Side view showing a positively charged rod (labeled +) on the left 
          // and a neutral metal sphere on the right. Diagram should show negative charges (-) 
          // concentrated on the left side of the sphere (nearest the rod) and positive charges (+) 
          // on the right side of the sphere (farthest from the rod).
          options: [
            "All electrons move to the side nearest the rod",
            "All electrons move to the side farthest from the rod",
            "Electrons move to the side nearest the rod, leaving the far side positively charged",
            "Nothing happens because the sphere is neutral"
          ],
          correctAnswer: 2,
          explanation: "This process is called $\\text{polarization}$. When a charged object is brought near a neutral conductor:\n\n1. The free electrons in the conductor are attracted to (or repelled by) the charged object\n2. The electrons redistribute themselves, creating regions of opposite charge\n3. The side nearest the positively charged rod becomes negatively charged (electrons accumulate)\n4. The side farthest from the rod becomes positively charged (deficit of electrons)\n\nThe sphere remains neutral overall, but the charges are $\\text{separated}$ or $\\text{polarized}$."
        }
      ]
    }
  ]
};
