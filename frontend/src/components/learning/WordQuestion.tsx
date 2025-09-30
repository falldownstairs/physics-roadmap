'use client';

import { useState } from 'react';
import { WordQuestion as WQuestion } from '@/lib/types';

interface WordQuestionProps {
  question: WQuestion;
  onSubmit: (answer: string, isCorrect: boolean) => void;
  disabled: boolean;
  submittedAnswer?: string;
}

export default function WordQuestion({ question, onSubmit, disabled }: WordQuestionProps) {
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
        <div className="w-full p-4 border-2 border-slate-200 rounded-lg focus-within:border-blue-600 bg-white">
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            disabled={disabled}
            placeholder="Type your answer here..."
            rows={1}
            className="w-full min-h-[48px] focus:outline-none resize-none disabled:cursor-not-allowed bg-transparent"
          />
        </div>
        <p className="text-sm text-slate-500">
          Write your answer in complete sentences.
        </p>
      </div>
      {!disabled && (
        <button
          onClick={handleSubmit}
          disabled={!userInput.trim()}
          className="mt-2 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-slate-300 disabled:cursor-not-allowed"
        >
          Submit Answer
        </button>
      )}
    </div>
  );
}