import { cache } from 'react';

// Server-side (SSR/ISR) fetches go directly to the backend; client-side fetches
// use relative paths that Next.js rewrites proxy to the backend.
const API_URL = typeof window === 'undefined'
  ? (process.env.BACKEND_URL || 'http://localhost:3002')
  : '';

export async function fetchLesson(lessonId: string, courseName: string): Promise<any> {
  const response = await fetch(`${API_URL}/api/${courseName}/${lessonId}`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const lesson = await response.json();
  
  if (lesson.videos) {
    lesson.videos = lesson.videos.map((video: any) => ({
      ...video,
      questions: video.questions.map((question: any) => {
        const processedQuestion = { ...question };
        
        if (question.image?.src) {
          processedQuestion.image = {
            ...question.image,
            src: `${API_URL}${question.image.src}`
          };
        }
        
        if (question.optionImages) {
          processedQuestion.optionImages = question.optionImages.map((img: any) =>
            img ? { ...img, src: `${API_URL}${img.src}` } : null
          );
        }
        
        return processedQuestion;
      })
    }));
  }
  
  return lesson;
}

// Deduplicates fetchLesson calls within a single server render
// (generateMetadata + page component both call this for the same lesson)
export const fetchLessonCached = cache(fetchLesson);
             