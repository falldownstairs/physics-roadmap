import { ModuleProgress } from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002';

export async function fetchProgress(courseId: string, lessonId: string): Promise<ModuleProgress | null> {
  try {
    const response = await fetch(`${API_URL}/api/progress/${courseId}/${lessonId}`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 401 || response.status === 404) {
      return null;
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching progress:', error);
    return null;
  }
}

export async function saveProgress(courseId: string, lessonId: string, progress: ModuleProgress): Promise<void> {
  try {
    const response = await fetch(`${API_URL}/api/progress/${courseId}/${lessonId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(progress)
    });

    if (response.status === 401) {
      throw new Error('User not authenticated');
    }

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to save progress: ${response.status} - ${errorText}`);
    }
  } catch (error) {
    console.error('Error saving progress:', error);
    throw error;
  }
}

export async function fetchCourseProgress(courseName: string): Promise<Record<string, ModuleProgress>> {
  try {
    const response = await fetch(`${API_URL}/api/progress/course/${courseName}`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 401) {
      return {};
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Convert the array to an object keyed by lessonId for easier access
    const progressMap: Record<string, ModuleProgress> = {};
    data.progress.forEach((item: any) => {
      progressMap[item.lessonId] = {
        videoIndex: item.videoIndex,
        questionIndex: item.questionIndex,
        userAnswers: item.userAnswers || []
      };
    });
    
    return progressMap;
  } catch (error) {
    console.error('Error fetching course progress:', error);
    return {};
  }
}


export async function fetchTotalProblems(courseName: string): Promise<Record<string, number>> {
  try {
    const response = await fetch(`${API_URL}/api/progress/course/${courseName}/problems`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    const problemsMap: Record<string, number> = {};
    data.forEach((item: any) => {
      problemsMap[item.lessonId] = item.totalProblems;
    });
    
    return problemsMap;
  } catch (error) {
    console.error('Error fetching total problems:', error);
    return {};
  }
}
