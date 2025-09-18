export type MultipleChoiceQuestion = {
  type: 'multiple-choice';
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

export type MathInputQuestion = {
  type: 'mathematical-input' | 'math-input';
  id: number;
  question: string;
  mathAnswer: string; 
  explanation: string;
};

export type QuestionData = MultipleChoiceQuestion | MathInputQuestion;

export interface Lesson {
  id: string;
  title: string;
  description: string;
  estimatedTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  youtubeVideoId: string;
  videoTitle: string;
  videoDuration: string;
  questions: QuestionData[];
}


