export async function fetchLesson(lessonId: string, courseName: string): Promise<any> {
  const response = await fetch(`http://localhost:3002/api/${courseName}/${lessonId}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const lesson = await response.json();
  
  // Convert relative image paths to absolute backend URLs
  if (lesson.videos) {
    lesson.videos = lesson.videos.map((video: any) => ({
      ...video,
      questions: video.questions.map((question: any) => {
        const processedQuestion = { ...question };
        
        if (question.image?.src) {
          processedQuestion.image = {
            ...question.image,
            src: `http://localhost:3002${question.image.src}`
          };
        }
        
        if (question.optionImages) {
          processedQuestion.optionImages = question.optionImages.map((img: any) =>
            img ? { ...img, src: `http://localhost:3002${img.src}` } : null
          );
        }
        
        return processedQuestion;
      })
    }));
  }
  
  return lesson;
}
             