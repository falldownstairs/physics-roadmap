import { useEffect, useState } from 'react';
import LatexRenderer from './LatexRenderer';

interface ExplanationDisplayProps {
  explanation: string;
  isCorrect: boolean;
}

export default function ExplanationDisplay({ explanation, isCorrect }: ExplanationDisplayProps) {
  return (
    <div className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-50 border-2 border-green-200' : 'bg-red-50 border-2 border-red-200'}`}>
      <div className="flex items-start gap-3">
        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${isCorrect ? 'bg-green-600' : 'bg-red-600'}`}>
          {isCorrect ? (
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>
        <div className="flex-1">
          <h4 className={`font-semibold mb-2 ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
            {isCorrect ? 'correct!' : 'not quite...'}
          </h4>
          <LatexRenderer 
            content={explanation}
            className={`${isCorrect ? 'text-green-700' : 'text-red-700'}`}
          />
        </div>
      </div>
    </div>
  );
}