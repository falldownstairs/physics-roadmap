export interface HealthResponse {
  status: string;
  timestamp: string;
}


// Reusable function to call the backend
export async function checkHealth(): Promise<HealthResponse> {
  const response = await fetch('http://localhost:3001/api/health');

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function fetchLesson(lessonId: string, CourseName: string): Promise<Lesson> {
  try {
    const response = await fetch(`http://localhost:3002/api/${CourseName}/${lessonId}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch lesson: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (err) {
    throw err instanceof Error ? err : new Error('An unknown error occurred');
  }
}

export interface MultipleChoiceQuestion {
  type: 'multiple-choice';
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface MathInputQuestion {
  type: 'math-input';
  question: string;
  mathAnswer: string;
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