

export async function fetchLesson(lessonId: string, courseName: string): Promise<any> {
  const response = await fetch(`http://localhost:3002/api/${courseName}/${lessonId}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

