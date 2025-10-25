export async function fetchLesson(lessonId: string, courseName: string): Promise<any> {
  console.log('[API] Fetching lesson:', { lessonId, courseName });
  const response = await fetch(`http://localhost:3002/api/${courseName}/${lessonId}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const lesson = await response.json();
  console.log('[API] Raw lesson data received:', lesson);
  
  // Convert relative image paths to absolute backend URLs
  if (lesson.videos) {
    lesson.videos = lesson.videos.map((video: any, videoIdx: number) => ({
      ...video,
      questions: video.questions.map((question: any, qIdx: number) => {
        const processedQuestion = { ...question };
        
        // Process main question image
        if (question.image?.src) {
          const originalSrc = question.image.src;
          processedQuestion.image = {
            ...question.image,
            src: `http://localhost:3002${question.image.src}`
          };
          console.log(`[API] Transformed image for video ${videoIdx}, question ${qIdx}:`, {
            original: originalSrc,
            transformed: processedQuestion.image.src
          });
        }
        
        // Process option images for multiple choice
        if (question.optionImages) {
          processedQuestion.optionImages = question.optionImages.map((img: any, imgIdx: number) => {
            if (img) {
              const originalSrc = img.src;
              const transformed = { ...img, src: `http://localhost:3002${img.src}` };
              console.log(`[API] Transformed option image ${imgIdx} for video ${videoIdx}, question ${qIdx}:`, {
                original: originalSrc,
                transformed: transformed.src
              });
              return transformed;
            }
            return null;
          });
        }
        
        return processedQuestion;
      })
    }));
  }
  
  console.log('[API] Processed lesson data:', lesson);
  return lesson;
}

