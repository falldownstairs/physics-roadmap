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

export async function fetchLesson(lessonId: string, courseName: string): Promise<any> {
  const response = await fetch(`http://localhost:3002/api/${courseName}/${lessonId}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

