'use client';

import { useState, useEffect } from 'react';
import { MultipleChoiceQuestion as MCQuestion } from '@/lib/types';

interface MultipleChoiceQuestionProps {
  question: MCQuestion;
  onSubmit: (answer: number, isCorrect: boolean) => void;
  disabled: boolean;
  submittedAnswer?: number;
}

export default function MultipleChoiceQuestion({ 
  question, 
  onSubmit, 
  disabled, 
  submittedAnswer 
}: MultipleChoiceQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(
    submittedAnswer !== undefined ? submittedAnswer : null
  );
  
  // Update selected answer when submittedAnswer changes
  useEffect(() => {
    if (submittedAnswer !== undefined) {
      setSelectedAnswer(submittedAnswer);
    }
  }, [submittedAnswer]);

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    const isCorrect = selectedAnswer === question.correctAnswer;
    onSubmit(selectedAnswer, isCorrect);
  };

  return (
    <div>
      <div className="space-y-3">
        {question.options?.map((option, index) => (
          <label
            key={index}
            className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
              selectedAnswer === index
                ? 'border-green-600 bg-green-50'
                : 'border-slate-200 hover:border-slate-300'
            } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <input
              type="radio"
              name="mc-option"
              value={index}
              checked={selectedAnswer === index}
              onChange={() => setSelectedAnswer(index)}
              disabled={disabled}
              className="w-4 h-4 text-green-600 focus:ring-green-500"
            />
            <span className="ml-3 text-slate-700">{option}</span>
          </label>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={selectedAnswer === null || disabled}
        className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium"
      >
        Submit Answer
      </button>
    </div>
  );
}