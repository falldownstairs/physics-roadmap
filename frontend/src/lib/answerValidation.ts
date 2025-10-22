export interface ValidationResult {
  isCorrect: boolean;
  feedback: string;
  confidence: number;
  authenticated: boolean;
  attemptsUsed?: number;
  attemptsRemaining: number;
  limit?: number;
}

export interface UsageStats {
  limit: number;
  used: number;
  remaining: number;
}

/**
 * Validates a word answer using Gemini AI on the backend
 */
export async function validateWordAnswer(
  lessonId: string,
  questionIndex: number,
  userAnswer: string,
  question: string,
  correctAnswer: string
): Promise<ValidationResult> {
  const response = await fetch('http://localhost:3002/api/validate-answer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', // Important for sending cookies
    body: JSON.stringify({
      lessonId,
      questionIndex,
      userAnswer,
      question,
      correctAnswer
    })
  });

  if (response.status === 429) {
    const data = await response.json();
    throw new Error(`Daily limit reached. ${data.resetsIn} until reset.`);
  }

  if (!response.ok) {
    throw new Error(`Validation failed: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Gets the current usage statistics for the authenticated user
 */
export async function getValidationUsage(): Promise<UsageStats> {
  const response = await fetch('http://localhost:3002/api/validate-answer/usage', {
    credentials: 'include'
  });

  if (!response.ok) {
    throw new Error('Failed to fetch usage statistics');
  }

  return response.json();
}