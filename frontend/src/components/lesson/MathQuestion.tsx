"use client";
import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { loadMathQuill } from '@/lib/math/mathquill';
import { checkEquivalent } from '@/lib/math/equivalence';
import type { MathInputQuestion } from '@/lib/types';

type Props = {
  questionData: MathInputQuestion;
  questionNumber: number;
  totalQuestions: number;
  onAnswerSubmit: (questionId: number, selectedAnswer: string, isCorrect: boolean) => void;
  initialAnswer?: string;
};

export default function MathQuestion({ questionData, questionNumber, totalQuestions, onAnswerSubmit, initialAnswer }: Props){
  const [mathFieldValue, setMathFieldValue] = useState<string>(initialAnswer || '');
  const [showExplanation, setShowExplanation] = useState<boolean>(initialAnswer !== undefined);
  const [isAnswered, setIsAnswered] = useState<boolean>(initialAnswer !== undefined);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const mathFieldRef = useRef<HTMLDivElement>(null);
  const mathFieldInstance = useRef<any>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const MQ = await loadMathQuill();
      if (!mounted || !MQ || !mathFieldRef.current) return;
      mathFieldInstance.current = MQ.MathField(mathFieldRef.current, {
        spaceBehavesLikeTab: true,
        leftRightIntoCmdGoes: 'up',
        restrictMismatchedBrackets: true,
        sumStartsWithNEquals: true,
        supSubsRequireOperand: true,
        charsThatBreakOutOfSupSub: '+-=<>',
        autoSubscriptNumerals: true,
        autoCommands: 'pi theta sqrt sum',
        autoOperatorNames: 'sin cos tan ln log',
        handlers: {
          edit: () => {
            if (mathFieldInstance.current) setMathFieldValue(mathFieldInstance.current.latex());
          }
        }
      });
      if (initialAnswer) mathFieldInstance.current.latex(initialAnswer);
    })();
    return () => { mounted = false; };
  }, [initialAnswer]);

  // equation checking moved to lib/math/equivalence

  const handleSubmit = () => {
    if (isAnswered || !mathFieldValue.trim()) return;
    const correct = checkEquivalent(mathFieldValue, questionData.mathAnswer);
    setIsAnswered(true);
    setShowExplanation(true);
    setIsCorrect(correct);
    onAnswerSubmit(questionData.id, mathFieldValue, correct);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isAnswered && mathFieldValue.trim()) handleSubmit();
  };

  return (
    <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-8">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-black mb-2">Question {questionNumber} of {totalQuestions}</h2>
      </div>
      <div className="mb-8">
        <h3 className="text-lg font-medium text-slate-700 mb-6">{questionData.question}</h3>
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-600 mb-3">Enter your mathematical expression:</label>
          <div className="relative">
            <div ref={mathFieldRef} className="w-full min-h-[60px] p-4 bg-slate-50 border-2 border-slate-300 rounded-xl text-lg font-mono focus-within:border-slate-500 transition-colors" style={{ fontSize: '18px' }} onKeyPress={handleKeyPress} />
            <div className="mt-2 text-xs text-slate-500">Tip: Use / for fractions, ^ for exponents, sqrt() for square roots</div>
          </div>
        </div>
        <button onClick={handleSubmit} disabled={isAnswered || !mathFieldValue.trim()} className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${isAnswered || !mathFieldValue.trim() ? 'bg-slate-300 text-slate-500 cursor-not-allowed' : 'bg-slate-600 text-white hover:bg-slate-700 hover:shadow-lg'}`}>{isAnswered ? 'Submitted' : 'Submit Answer'}</button>
      </div>
      {showExplanation && (
        <div className={`p-4 rounded-xl border ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className={`w-5 h-5 ${isCorrect ? 'text-green-600' : 'text-red-600'}`} />
            <span className={`font-bold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>{isCorrect ? 'Correct!' : 'Incorrect'}</span>
          </div>
          <p className={`text-sm ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>{questionData.explanation}</p>
          {!isCorrect && questionData.mathAnswer && (
            <div className="mt-3 p-3 bg-slate-100 rounded-lg">
              <p className="text-xs text-slate-600 mb-1">Correct answer:</p>
              <div className="bg-white p-2 rounded text-black text-lg font-mono border border-slate-200">{questionData.mathAnswer}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}


