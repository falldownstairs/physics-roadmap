'use client';

import { useState } from 'react';
import { WordQuestion as WQuestion } from '@/lib/types';

interface WordQuestionProps {
  question: WQuestion;
  onSubmit: (answer: string, isCorrect: boolean) => void;
  disabled: boolean;
  submittedAnswer?: string;
  isCorrect?: boolean;
  isCompleted: boolean;
}

export default function WordQuestion({ question, onSubmit, disabled, submittedAnswer, isCorrect, isCompleted }: WordQuestionProps) {
  const [userInput, setUserInput] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [explanation, setExplanation] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [rateLimit, setRateLimit] = useState<{ remaining: number; limit: number } | null>(null);

  const validateWordAnswer = async (userAnswer: string): Promise<boolean> => {
    setIsValidating(true);
    setError('');
    setExplanation('');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002'}/api/validation/validate-answer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          questionText: question.question,
          modelAnswer: question.answer,
          userAnswer: userAnswer
        })
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 429) {
          setError(data.error || 'Daily validation limit reached. Please try again tomorrow.');
        } else if (response.status === 401) {
          setError('Please log in to validate your answer.');
        } else {
          setError(data.error || 'Failed to validate answer. Please try again.');
        }
        return false;
      }

      setExplanation(data.explanation);
      setRateLimit(data.rateLimit);
      
      return data.isCorrect;
    } catch (err) {
      console.error('Validation error:', err);
      setError('Network error. Please check your connection and try again.');
      return false;
    } finally {
      setIsValidating(false);
    }
  };

  const handleSubmit = async () => {
    if (!userInput.trim() || isValidating) return;
    const isCorrect = await validateWordAnswer(userInput);
    if (!error) {
      onSubmit(userInput, isCorrect);
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="relative w-full p-4 border-2 border-slate-200 rounded-lg focus-within:border-blue-600 bg-white">
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your answer here..."
            rows={1}
            disabled={isValidating}
            className="w-full min-h-[48px] focus:outline-none resize-none bg-transparent disabled:opacity-50"
          />
          {isCompleted && (
            <div className={`absolute bottom-2 right-2 flex items-center text-sm font-medium ${
              isCorrect ? 'text-green-600' : 'text-red-600'
            }`}>
              {isCorrect ? (
                <>
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Correct
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  Incorrect
                </>
              )}
            </div>
          )}
        </div>
        <p className="text-sm text-slate-500">
          Write your answer in complete sentences.
        </p>
        {rateLimit && (
          <p className="text-xs text-slate-400">
            Validations remaining today: {rateLimit.remaining}/{rateLimit.limit}
          </p>
        )}
      </div>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      {explanation && (
        <div className={`p-4 rounded-lg border ${
          isCorrect ? 'bg-green-50 border-green-200' : 'bg-orange-50 border-orange-200'
        }`}>
          <p className={`text-sm ${
            isCorrect ? 'text-green-700' : 'text-orange-700'
          }`}>
            {explanation}
          </p>
        </div>
      )}

      <button
        onClick={handleSubmit}
        disabled={!userInput.trim() || isValidating}
        className="mt-2 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-slate-300 disabled:cursor-not-allowed cursor-pointer"
      >
        {isValidating ? 'Validating...' : 'Submit Answer'}
      </button>
    </div>
  );
}