export interface QuestionImage {
  src: string;
  alt: string;
}

export interface MultipleChoiceQuestion {
  type: 'multiple-choice';
  question: string;
  image?: QuestionImage;
  options: string[];
  optionImages?: (QuestionImage | null)[];
  correctAnswer: number;
  explanation: string;
}

export interface MathInputQuestion {
  type: 'math-input';
  question: string;
  image?: QuestionImage;
  mathAnswer: string;
  answerRange?: number; // Optional: acceptable range for numerical answers
  explanation: string;
}

export interface WordQuestion {
  type: 'word-question';
  question: string;
  answer: string;
  explanation: string;
}

export type Question = MultipleChoiceQuestion | MathInputQuestion | WordQuestion;

export interface Video {
  videoId: string;
  videoTitle: string;
  questions: Question[];
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  estimatedTime: string;
  videos: Video[];
}

export interface UserAnswer {
  videoIndex: number;
  questionIndex: number;
  answer: string | number;
  isCorrect: boolean;
}

export interface ModuleProgress {
  videoIndex: number;
  questionIndex: number;
  userAnswers: UserAnswer[];
}