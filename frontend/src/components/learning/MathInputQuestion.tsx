'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { MathInputQuestion as MIQuestion } from '@/lib/types';
import Mexp from 'math-expression-evaluator';
import QuestionImage from './QuestionImage';

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
  position: 'relative' as const,
};

interface MathInputQuestionProps {
  question: MIQuestion;
  onSubmit: (answer: string, isCorrect: boolean) => void;
  disabled: boolean;
  submittedAnswer?: string;
  isCorrect?: boolean;
  isCompleted: boolean;
}

export default function MathInputQuestion({ question, onSubmit, disabled, submittedAnswer, isCorrect, isCompleted }: MathInputQuestionProps) {
  const [latex, setLatex] = useState(submittedAnswer || '');
  const [isMounted, setIsMounted] = useState(false);
  const [mathField, setMathField] = useState<any>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
        display: flex !important;
        align-items: center !important;
      }
      .mq-root-block {
        width: 100% !important;
        display: flex !important;
        align-items: center !important;
      }
      .mq-focused {
        outline: none !important;
        box-shadow: none !important;
      }
      .mq-math-mode {
        font-size: 1.2em;
        line-height: 1.5;
      }
      .static-math-container {
        display: flex;
        align-items: center;
        min-height: 48px;
      }
      .static-math-container .mq-math-mode {
        font-size: 1.2em;
        line-height: 1.5;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const validateMathAnswer = (userAnswer: string, correctAnswer: string, answerRange?: number): boolean => {
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

      // First check for exact string match
      if (normalizedUser === normalizedCorrect) {
        return true;
      }

      // Try numerical evaluation
      const mexp = new Mexp();
      try {
        const userValue = mexp.eval(normalizedUser);
        const correctValue = mexp.eval(normalizedCorrect);
        
        // If answerRange is provided, check if within range
        if (answerRange !== undefined) {
          return Math.abs(userValue - correctValue) <= answerRange;
        }
        
        // Default tolerance for numerical answers
        return Math.abs(userValue - correctValue) < 0.0001;
      } catch {
        return normalizedUser === normalizedCorrect;
      }
    } catch (error) {
      console.error('Math validation error:', error);
      return false;
    }
  };

  const handleSubmit = async () => {
    if (!latex.trim() || isSubmitting) return;
    
    setIsSubmitting(true);
    const isCorrect = validateMathAnswer(latex, question.mathAnswer, question.answerRange);
    
    // Add 0.25 second delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    onSubmit(latex, isCorrect);
    setIsSubmitting(false);
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
      {question.image && (
        <div className="mb-6">
          <QuestionImage 
            src={question.image.src} 
            alt={question.image.alt}
            className="max-w-2xl mx-auto"
          />
        </div>
      )}

      <div className="space-y-2">
        <div className="relative w-full p-4 border-2 rounded-lg bg-white border-slate-200 focus-within:border-blue-600">
          {!latex && !isFocused && (
            <label 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none select-none"
              style={{ fontSize: '1.2em' }}
            >
              Type your answer here...
            </label>
          )}
          <div style={mathFieldWrapperStyles}>
            <EditableMathFieldComponent
              latex={latex}
              onChange={(mf: any) => setLatex(mf.latex())}
              mathquillDidMount={(mf: any) => {
                setMathField(mf);
                mf.el().addEventListener('focus', () => setIsFocused(true));
                mf.el().addEventListener('blur', () => setIsFocused(false));
              }}
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
          </div>
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
          Use shortcuts: Delta, sqrt, /, ^, _ or type LaTeX commands
        </p>
      </div>
      <button
        onClick={handleSubmit}
        disabled={!latex.trim() || isSubmitting}
        className="mt-2 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-slate-300 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center"
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