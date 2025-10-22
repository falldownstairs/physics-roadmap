const { GoogleGenerativeAI } = require('@google/generative-ai');

async function validateAnswer(questionText, modelAnswer, userAnswer) {
  try {
    // Initialize inside the function to ensure env variables are loaded
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: process.env.GEMINI_MODEL }); // Use correct model name
    
    const prompt = `You are evaluating an answer to a learning question.

Question: ${questionText}
Model Answer: ${modelAnswer}
User Answer: ${userAnswer}

Evaluate if the answer is correct. Consider:
- Semantic meaning (not exact wording required)
- Key concepts covered
- Factual accuracy

Respond ONLY with valid JSON in this exact format:
{
  "isCorrect": true or false,
  "explanation": "ONE sentence explaining why your answer is correct or incorrect"
}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Extract JSON from response (handle markdown code blocks)
    let jsonText = text.trim();
    if (jsonText.startsWith('```json')) {
      jsonText = jsonText.replace(/```json\n?/g, '').replace(/```\n?/g, '');
    } else if (jsonText.startsWith('```')) {
      jsonText = jsonText.replace(/```\n?/g, '');
    }
    
    const parsedResponse = JSON.parse(jsonText);
    
    return {
      isCorrect: parsedResponse.isCorrect,
      explanation: parsedResponse.explanation
    };
  } catch (error) {
    console.error('Gemini API error:', error);
    throw new Error('Failed to validate answer with AI');
  }
}

module.exports = { validateAnswer };