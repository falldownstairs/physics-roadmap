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

  // Placeholder validation - always returns true and shows model answer
  // TODO: Replace with Gemini API integration
  const validateWordAnswer = (userAnswer: string): boolean => {
    // Temporary: Show as correct and display the model answer in explanation
    return true;
  };

  const handleSubmit = () => {
    if (!userInput.trim()) return;
    const isCorrect = validateWordAnswer(userInput);
    onSubmit(userInput, isCorrect);
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
            className="w-full min-h-[48px] focus:outline-none resize-none bg-transparent"
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
      </div>
      <button
        onClick={handleSubmit}
        disabled={!userInput.trim()}
        className="mt-2 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-slate-300 disabled:cursor-not-allowed cursor-pointer"
      >
        Submit Answer
      </button>
    </div>
  );
}