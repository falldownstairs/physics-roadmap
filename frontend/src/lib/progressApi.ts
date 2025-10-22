import { ModuleProgress } from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002';

export async function fetchProgress(lessonId: string): Promise<ModuleProgress | null> {
  try {
    console.log('Fetching progress for lesson:', lessonId);
    const response = await fetch(`${API_URL}/api/progress/${lessonId}`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 401) {
      console.log('User not authenticated - 401');
      return null;
    }

    if (response.status === 404) {
      console.log('No progress found for lesson:', lessonId);
      return null;
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Progress fetched:', data);
    return data;
  } catch (error) {
    console.error('Error fetching progress:', error);
    return null;
  }
}

export async function saveProgress(lessonId: string, progress: ModuleProgress): Promise<void> {
  try {
    console.log('Saving progress to API:', { lessonId, progress });
    const response = await fetch(`${API_URL}/api/progress/${lessonId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(progress)
    });

    if (response.status === 401) {
      console.error('Save progress failed: User not authenticated');
      throw new Error('User not authenticated');
    }

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Save progress failed:', response.status, errorText);
      throw new Error(`Failed to save progress: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    console.log('Progress saved response:', result);
  } catch (error) {
    console.error('Error saving progress:', error);
    throw error;
  }
}

export async function fetchCourseProgress(courseName: string): Promise<Record<string, ModuleProgress>> {
  try {
    console.log('Fetching all progress for course:', courseName);
    const response = await fetch(`${API_URL}/api/progress/course/${courseName}`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 401) {
      console.log('User not authenticated - 401');
      return {};
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Course progress fetched:', data);
    
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
    console.log('Fetching total problems for course:', courseName);
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
    console.log('Total problems fetched:', data);
    
    // Convert to a map for easier access
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
