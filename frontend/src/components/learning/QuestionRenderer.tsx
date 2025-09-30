import { Question } from '@/lib/types';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import MathInputQuestion from './MathInputQuestion';
import WordQuestion from './WordQuestion';
import LatexRenderer from './LatexRenderer';

interface QuestionRendererProps {
  question: Question;
  onSubmit: (answer: string | number, isCorrect: boolean) => void;
  disabled: boolean;
  submittedAnswer?: string | number; 
}

export default function QuestionRenderer({ question, onSubmit, disabled, submittedAnswer }: QuestionRendererProps) {
  // Render question text with LaTeX support
  const QuestionText = () => (
    <div className="mb-4">
      <LatexRenderer 
        content={question.question}
        className="text-lg font-medium text-slate-800"
      />
    </div>
  );

  switch (question.type) {
    case 'multiple-choice':
      return (
        <>
          <QuestionText />
          <MultipleChoiceQuestion 
            question={question} 
            onSubmit={onSubmit} 
            disabled={disabled} 
            submittedAnswer={submittedAnswer as number} 
          />
        </>
      );
    case 'math-input':
      return (
        <>
          <QuestionText />
          <MathInputQuestion 
            question={question} 
            onSubmit={onSubmit} 
            disabled={disabled} 
            submittedAnswer={submittedAnswer as string} 
          />
        </>
      );
    case 'word-question':
      return (
        <>
          <QuestionText />
          <WordQuestion 
            question={question} 
            onSubmit={onSubmit} 
            disabled={disabled} 
            submittedAnswer={submittedAnswer as string} 
          />
        </>
      );
    default:
      return <div>Unknown question type</div>;
  }
}