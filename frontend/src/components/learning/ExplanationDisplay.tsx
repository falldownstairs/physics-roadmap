import { useState } from 'react';
import LatexRenderer from './LatexRenderer';

interface ExplanationDisplayProps {
  explanation: string;
  isCorrect?: boolean;
  isCompleted: boolean;
}

export default function ExplanationDisplay({ explanation, isCorrect, isCompleted }: ExplanationDisplayProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Split by double newlines for paragraphs
  const paragraphs = explanation.split('\n\n').filter(p => p.trim());

  return (
    <div className="mt-4 space-y-3">
      {/* Explanation Toggle - always shown */}
      <div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          {isOpen ? 'Hide Explanation' : 'View Explanation'}
          <svg 
            className={`ml-1 w-4 h-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isOpen && (
          <div className="mt-3 bg-blue-50 p-4 rounded-md space-y-4">
            {paragraphs.map((paragraph, index) => {
              // Split by single newlines for line breaks within paragraphs
              const lines = paragraph.split('\n').filter(l => l.trim());
              
              return (
                <div key={index} className="space-y-2">
                  {lines.map((line, lineIndex) => (
                    <div key={lineIndex}>
                      <LatexRenderer 
                        content={line}
                        className="block"
                      />
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}