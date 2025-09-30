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
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          disabled={disabled}
          placeholder="Type your answer here..."
          rows={4}
          className="w-full p-4 border-2 border-slate-200 rounded-lg focus:border-green-600 focus:outline-none resize-none disabled:bg-slate-100 disabled:cursor-not-allowed"
        />
        <p className="text-sm text-slate-500">
          Write your answer in complete sentences.
        </p>
      </div>
      <button
        onClick={handleSubmit}
        disabled={!userInput.trim() || disabled}
        className="w-full bg-green-600 text-white py-3 px-6 rounded-full hover:bg-green-700 transition-colors font-medium disabled:bg-slate-300 disabled:cursor-not-allowed"
      >
        Submit Answer
      </button>
    </div>
  );
}