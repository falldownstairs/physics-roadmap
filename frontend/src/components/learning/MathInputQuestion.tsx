'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { MathInputQuestion as MIQuestion } from '@/lib/types';
import Mexp from 'math-expression-evaluator';

// Dynamically import MathQuill with no SSR
const EditableMathFieldComponent = dynamic(
  () => import('react-mathquill').then((mod) => {
    mod.addStyles();
    return mod.EditableMathField;
  }),
  { ssr: false }
);

const StaticMathFieldComponent = dynamic(
  () => import('react-mathquill').then((mod) => {
    mod.addStyles();
    return mod.StaticMathField;
  }),
  { ssr: false }
);

const mathFieldStyles = {
  width: '100%',
};

const mathFieldWrapperStyles = {
  width: '100%',
  minHeight: '48px',
  display: 'flex',
  alignItems: 'center',
};

interface MathInputQuestionProps {
  question: MIQuestion;
  onSubmit: (answer: string, isCorrect: boolean) => void;
  disabled: boolean;
  submittedAnswer?: string;
}

export default function MathInputQuestion({ question, onSubmit, disabled, submittedAnswer }: MathInputQuestionProps) {
  const [latex, setLatex] = useState(submittedAnswer || '');
  const [isMounted, setIsMounted] = useState(false);
  
  // Reset when question changes
  useEffect(() => {
    if (submittedAnswer !== undefined) {
      setLatex(submittedAnswer);
    }
  }, [question.question, submittedAnswer]);

  useEffect(() => {
    setIsMounted(true);
    
    const style = document.createElement('style');
    style.innerHTML = `
      .mq-editable-field {
        width: 100% !important;
        min-height: 30px;
        outline: none !important;
        border: none !important;
      }
      .mq-root-block {
        width: 100% !important;
      }
      .mq-focused {
        outline: none !important;
        box-shadow: none !important;
      }
      .mq-math-mode {
        font-size: 1.2em;
      }
      .static-math-container .mq-math-mode {
        font-size: 1.3em;
        padding: 0.5em 0;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const validateMathAnswer = (userAnswer: string, correctAnswer: string): boolean => {
    try {
      const normalizeExpression = (expr: string) => {
        return expr
          .replace(/\s+/g, '')
          .replace(/\\/g, '')
          .replace(/_/g, '')
          .toLowerCase();
      };

      const normalizedUser = normalizeExpression(userAnswer);
      const normalizedCorrect = normalizeExpression(correctAnswer);

      if (normalizedUser === normalizedCorrect) {
        return true;
      }

      const mexp = new Mexp();
      try {
        const userValue = mexp.eval(normalizedUser);
        const correctValue = mexp.eval(normalizedCorrect);
        return Math.abs(userValue - correctValue) < 0.0001;
      } catch {
        return normalizedUser === normalizedCorrect;
      }
    } catch (error) {
      console.error('Math validation error:', error);
      return false;
    }
  };

  const handleSubmit = () => {
    if (!latex.trim()) return;
    const isCorrect = validateMathAnswer(latex, question.mathAnswer);
    onSubmit(latex, isCorrect);
  };

  if (!isMounted) {
    return (
      <div className="space-y-4">
        <div className="w-full p-4 border-2 border-slate-200 rounded-lg bg-slate-50">
          <div className="h-10 animate-pulse bg-slate-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="space-y-2">
        <div className={`w-full p-4 border-2 rounded-lg bg-white ${disabled ? 'border-slate-200 bg-slate-50' : 'border-slate-200 focus-within:border-green-600'}`}>
          <div style={mathFieldWrapperStyles}>
            {!disabled ? (
              <EditableMathFieldComponent
                latex={latex}
                onChange={(mf: any) => setLatex(mf.latex())}
                style={mathFieldStyles}
                config={{
                  spaceBehavesLikeTab: true,
                  leftRightIntoCmdGoes: 'up',
                  restrictMismatchedBrackets: true,
                  supSubsRequireOperand: true,
                  autoCommands: 'pi theta sqrt sum prod alpha beta gamma Delta omega infinity',
                  autoOperatorNames: 'sin cos tan ln log',
                }}
              />
            ) : (
              <div className="static-math-container w-full">
                <StaticMathFieldComponent style={mathFieldStyles}>
                  {latex}
                </StaticMathFieldComponent>
              </div>
            )}
          </div>
        </div>
        {!disabled && (
          <p className="text-sm text-slate-500">
            Use shortcuts: delta, sqrt, /, ^, _ or type LaTeX commands
          </p>
        )}
      </div>
      {!disabled && (
        <button
          onClick={handleSubmit}
          disabled={!latex.trim()}
          className="mt-6 w-full bg-green-600 text-white py-3 px-6 rounded-full hover:bg-green-700 transition-colors font-medium disabled:bg-slate-300 disabled:cursor-not-allowed"
        >
          Submit Answer
        </button>
      )}
    </div>
  );
}