import { Question } from '@/lib/types';
import { memo } from 'react';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import MathInputQuestion from './MathInputQuestion';
import WordQuestion from './WordQuestion';
import LatexRenderer from './LatexRenderer';

interface QuestionRendererProps {
  question: Question;
  onSubmit: (answer: string | number, isCorrect: boolean) => void;
  disabled: boolean;
  submittedAnswer?: string | number;
  isCorrect?: boolean;
  isCompleted: boolean;
}

function QuestionRenderer({ question, onSubmit, disabled, submittedAnswer, isCorrect, isCompleted }: QuestionRendererProps) {
  switch (question.type) {
    case 'multiple-choice':
      return (
        <>
          <div className="mb-4">
            <LatexRenderer 
              content={question.question}
              className="text-lg font-medium text-slate-800"
            />
          </div>
          <MultipleChoiceQuestion 
            question={question} 
            onSubmit={onSubmit} 
            disabled={disabled} 
            submittedAnswer={submittedAnswer as number}
            isCorrect={isCorrect}
            isCompleted={isCompleted}
          />
        </>
      );
    case 'math-input':
      return (
        <>
          <div className="mb-4">
            <LatexRenderer 
              content={question.question}
              className="text-lg font-medium text-slate-800"
            />
          </div>
          <MathInputQuestion 
            question={question} 
            onSubmit={onSubmit} 
            disabled={disabled} 
            submittedAnswer={submittedAnswer as string}
            isCorrect={isCorrect}
            isCompleted={isCompleted}
          />
        </>
      );
    case 'word-question':
      return (
        <>
          <div className="mb-4">
            <LatexRenderer 
              content={question.question}
              className="text-lg font-medium text-slate-800"
            />
          </div>
          <WordQuestion 
            question={question} 
            onSubmit={onSubmit} 
            disabled={disabled} 
            submittedAnswer={submittedAnswer as string}
            isCorrect={isCorrect}
            isCompleted={isCompleted}
          />
        </>
      );
    default:
      return <div>Unknown question type</div>;
  }
}

// Memoize QuestionRenderer - only re-render if question content or completion status changes
export default memo(QuestionRenderer, (prevProps, nextProps) => {
  return (
    prevProps.question.question === nextProps.question.question &&
    prevProps.submittedAnswer === nextProps.submittedAnswer &&
    prevProps.isCorrect === nextProps.isCorrect &&
    prevProps.isCompleted === nextProps.isCompleted &&
    prevProps.disabled === nextProps.disabled
  );
});