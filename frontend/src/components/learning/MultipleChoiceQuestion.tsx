'use client';

import { useState, useEffect } from 'react';
import { MultipleChoiceQuestion as MCQuestion } from '@/lib/types';
import QuestionImage from './QuestionImage';
import LatexRenderer from './LatexRenderer';

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
  // Convert submittedAnswer to number if it's a string (from MongoDB Mixed type)
  const normalizedSubmittedAnswer = submittedAnswer !== undefined 
    ? (typeof submittedAnswer === 'string' ? parseInt(submittedAnswer, 10) : submittedAnswer)
    : undefined;
    
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(
    normalizedSubmittedAnswer !== undefined ? normalizedSubmittedAnswer : null
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Update selected answer when submittedAnswer changes
  useEffect(() => {
    if (normalizedSubmittedAnswer !== undefined && normalizedSubmittedAnswer !== selectedAnswer) {
      setSelectedAnswer(normalizedSubmittedAnswer);
    }
  }, [normalizedSubmittedAnswer]);

  const handleSubmit = async () => {
    if (selectedAnswer === null || isSubmitting) return;
    
    setIsSubmitting(true);
    const isCorrect = selectedAnswer === question.correctAnswer;
    
    // Add 0.25 second delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    onSubmit(selectedAnswer, isCorrect);
    setIsSubmitting(false);
  };

  return (
    <div>
      {question.image && (
        <div className="mb-6">
          <QuestionImage 
            src={question.image.src} 
            alt={question.image.alt}
            className="max-w-2xl mx-auto"
          />
        </div>
      )}

      <div className="space-y-3">
        {question.options?.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const showIndicator = isCompleted && normalizedSubmittedAnswer === index;
          
          return (
            <div
              key={index}
              onClick={() => !disabled && setSelectedAnswer(index)}
              className={`relative flex flex-col p-4 border-2 rounded-lg cursor-pointer transition-all ${
                isSelected
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-slate-200 hover:border-slate-300'
              } ${disabled ? 'cursor-not-allowed opacity-75' : ''}`}
            >
              <div className="flex items-center justify-between">
                <LatexRenderer 
                  content={option} 
                  className="text-slate-700"
                />
                {showIndicator && (
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
              
              {question.optionImages?.[index] && (
                <div className="mt-3">
                  <QuestionImage 
                    src={question.optionImages[index].src} 
                    alt={question.optionImages[index].alt}
                    className="max-w-md"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      <button
        onClick={handleSubmit}
        disabled={selectedAnswer === null || disabled || isSubmitting}
        className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors font-medium cursor-pointer flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </>
        ) : (
          'Submit Answer'
        )}
      </button>
    </div>
  );
}