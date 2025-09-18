"use client";
import React from 'react';
import type { QuestionData } from '@/lib/types';
import MathQuestion from './MathQuestion';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';

type Props = {
  question: QuestionData;
  index: number;
  total: number;
  onAnswerSubmit: (id: number, answer: any, correct: boolean) => void;
  initialAnswer?: any;
};

export default function QuestionSwitcher({ question, index, total, onAnswerSubmit, initialAnswer }: Props){
  if (question.type === 'multiple-choice') {
    return (
      <MultipleChoiceQuestion
        questionData={question}
        questionNumber={index + 1}
        totalQuestions={total}
        onAnswerSubmit={onAnswerSubmit}
        initialAnswer={initialAnswer}
      />
    );
  }

  return (
    <MathQuestion
      questionData={{ ...question, type: 'mathematical-input' }}
      questionNumber={index + 1}
      totalQuestions={total}
      onAnswerSubmit={onAnswerSubmit}
      initialAnswer={initialAnswer}
    />
  );
}


