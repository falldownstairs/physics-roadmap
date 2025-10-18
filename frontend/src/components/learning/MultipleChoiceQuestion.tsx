'use client';

import { useState, useEffect } from 'react';
import { MultipleChoiceQuestion as MCQuestion } from '@/lib/types';

interface MultipleChoiceQuestionProps {
  question: MCQuestion;
  onSubmit: (answer: number, isCorrect: boolean) => void;
  disabled: boolean;
  submittedAnswer?: number;
  isCorrect?: boolean;
  isCompleted: boolean;
}

export default function MultipleChoiceQuestion({ 
  question, 
  onSubmit, 
  disabled, 
  submittedAnswer,
  isCorrect,
  isCompleted
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
          <div
            key={index}
            onClick={() => setSelectedAnswer(index)}
            className={`relative flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
              selectedAnswer === index
                ? 'border-blue-600 bg-blue-50'
                : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <span className="text-slate-700">{option}</span>
            {isCompleted && submittedAnswer === index && (
              <div className={`ml-auto flex items-center text-sm font-medium ${
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
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={selectedAnswer === null}
        className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors font-medium cursor-pointer"
      >
        Submit Answer
      </button>
    </div>
  );
}