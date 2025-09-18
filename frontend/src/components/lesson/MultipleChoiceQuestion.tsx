"use client";
import React, { useMemo, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import type { MultipleChoiceQuestion as MCQ } from '@/lib/types';

type Props = {
  questionData: MCQ;
  questionNumber: number;
  totalQuestions: number;
  onAnswerSubmit: (questionId: number, selectedAnswer: number, isCorrect: boolean) => void;
  initialAnswer?: number;
};

export default function MultipleChoiceQuestion({ questionData, questionNumber, totalQuestions, onAnswerSubmit, initialAnswer }: Props){
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(initialAnswer ?? null);
  const [showExplanation, setShowExplanation] = useState<boolean>(initialAnswer !== undefined);
  const [isAnswered, setIsAnswered] = useState<boolean>(initialAnswer !== undefined);

  const handleAnswerSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedAnswer(idx);
    setIsAnswered(true);
    setShowExplanation(true);
    const correct = idx === questionData.correctAnswer;
    onAnswerSubmit(questionData.id, idx, correct);
  };

  const buttonClass = useMemo(() => (idx: number) => {
    const base = "w-full p-4 text-left border-2 rounded-xl transition-all duration-200 ";
    if (!isAnswered) return base + "border-slate-300 bg-slate-50 text-slate-700 hover:border-slate-400 hover:bg-slate-100 hover:shadow-lg";
    if (idx === questionData.correctAnswer) return base + "border-green-300 bg-green-50 text-green-700 shadow-lg";
    if (idx === selectedAnswer && idx !== questionData.correctAnswer) return base + "border-red-300 bg-red-50 text-red-700 shadow-lg";
    return base + "border-slate-200 bg-slate-50 text-slate-500";
  }, [isAnswered, selectedAnswer, questionData.correctAnswer]);

  const isCorrect = selectedAnswer === questionData.correctAnswer;

  return (
    <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-8">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-black mb-2">Question {questionNumber} of {totalQuestions}</h2>
      </div>
      <div className="mb-8">
        <h3 className="text-lg font-medium text-slate-700 mb-6">{questionData.question}</h3>
        <div className="space-y-3">
          {questionData.options.map((option, index) => (
            <button key={index} onClick={() => handleAnswerSelect(index)} disabled={isAnswered} className={buttonClass(index)}>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold">{String.fromCharCode(65 + index)}</div>
                <span className="font-medium">{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
      {showExplanation && (
        <div className={`p-4 rounded-xl border ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className={`w-5 h-5 ${isCorrect ? 'text-green-600' : 'text-red-600'}`} />
            <span className={`font-bold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>{isCorrect ? 'Correct!' : 'Incorrect'}</span>
          </div>
          <p className={`text-sm ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>{questionData.explanation}</p>
        </div>
      )}
    </div>
  );
}


