import { Lesson } from "./types";

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

export async function fetchLesson(lessonId: string): Promise<Lesson> {
  try {
    const response = await fetch(`http://localhost:3002/api/ap-physics-1/${lessonId}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch lesson: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (err) {
    throw err instanceof Error ? err : new Error('An unknown error occurred');
  }
}
