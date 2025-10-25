/**
 * Data Service
 * Provides methods for accessing and managing course and lesson data
 */
const fs = require('fs');
const path = require('path');
const courses = require('../data/courses');

// In-memory data store
const dataStore = {
  courses: new Map(),
  lessons: new Map()
};

// Load lessons from nested folder structure
function loadLessonsFromFolder(courseFolderPath, courseId) {
  // Load all items from course root
  const rootItems = fs.readdirSync(courseFolderPath, { withFileTypes: true });
  
  rootItems.forEach(item => {
    if (item.isDirectory() && !isNaN(item.name)) {
      // This is a numbered folder at root level (e.g., 0/, 1/, 2/)
      const lessonFilePath = path.join(courseFolderPath, item.name, `${item.name}.js`);
      if (fs.existsSync(lessonFilePath)) {
        const lesson = require(lessonFilePath);
        dataStore.lessons.set(lesson.id, lesson);
      }
    } else if (item.isDirectory()) {
      // This is a topic subfolder
      const topicPath = path.join(courseFolderPath, item.name);
      const lessonFolders = fs.readdirSync(topicPath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory());
      
      lessonFolders.forEach(lessonFolder => {
        const lessonFilePath = path.join(topicPath, lessonFolder.name, `${lessonFolder.name}.js`);
        if (fs.existsSync(lessonFilePath)) {
          const lesson = require(lessonFilePath);
          dataStore.lessons.set(lesson.id, lesson);
        }
      });
    }
  });
}

// Initialize the data store
function initializeData() {
  // Load courses into memory
  courses.forEach(course => {
    dataStore.courses.set(course.id, course);
  });
  
  // Load lessons from folder structure
  const dataPath = path.join(__dirname, '../data');
  
  // Load mechanics lessons
  const mechanicsPath = path.join(dataPath, 'mechanics');
  if (fs.existsSync(mechanicsPath)) {
    loadLessonsFromFolder(mechanicsPath, 'mechanics');
  }
  
  // Load electricity-magnetism lessons (when they exist)
  const emPath = path.join(dataPath, 'electricity-magnetism');
  if (fs.existsSync(emPath)) {
    loadLessonsFromFolder(emPath, 'electricity-magnetism');
  }
  
  console.log(`📚 Loaded ${dataStore.courses.size} courses and ${dataStore.lessons.size} lessons into memory`);
}

// Get all courses
function getAllCourses() {
  return Array.from(dataStore.courses.values());
}

// Get course by name/id
function getCourseById(courseId) {
  return dataStore.courses.get(courseId);
}

// Helper function to convert image filename to full URL
function processImageUrl(courseId, topicId, lessonId, imageData) {
  if (!imageData) return undefined;
  
  // Include topicId in the path if it exists
  const url = topicId 
    ? `/images/lessons/${courseId}/${topicId}/${lessonId}/${imageData.src}`
    : `/images/lessons/${courseId}/${lessonId}/${imageData.src}`;
    
  console.log('[DataService] Processing image URL:', {
    courseId,
    topicId,
    lessonId,
    original: imageData.src,
    processed: url
  });
  
  return {
    src: url,
    alt: imageData.alt || ''
  };
}

// Helper function to process question images
function processQuestionImages(courseId, topicId, lessonId, question) {
  const processedQuestion = { ...question };
  
  // Process main question image
  if (question.image) {
    console.log('[DataService] Processing main question image');
    processedQuestion.image = processImageUrl(courseId, topicId, lessonId, question.image);
  }
  
  // Process option images for multiple choice
  if (question.type === 'multiple-choice' && question.optionImages) {
    console.log('[DataService] Processing option images, count:', question.optionImages.length);
    processedQuestion.optionImages = question.optionImages.map((img, idx) => {
      if (img) {
        console.log(`[DataService] Processing option image ${idx}`);
        return processImageUrl(courseId, topicId, lessonId, img);
      }
      return null;
    });
  }
  
  return processedQuestion;
}

// Get lesson by id (modified to process images)
function getLessonById(lessonId) {
  const lesson = dataStore.lessons.get(lessonId);
  if (!lesson) {
    console.log('[DataService] Lesson not found:', lessonId);
    return null;
  }
  
  console.log('[DataService] Found lesson:', lessonId);
  
  // Find which course this lesson belongs to
  let courseId = null;
  for (const [id, course] of dataStore.courses) {
    if (course.lessons.includes(lessonId)) {
      courseId = id;
      break;
    }
  }
  
  if (!courseId) {
    console.log('[DataService] Course not found for lesson:', lessonId);
    return lesson;
  }
  
  // Get topicId from the lesson if it exists
  const topicId = lesson.topicId;
  
  console.log('[DataService] Processing lesson images for course:', courseId, 'topic:', topicId);
  
  // Process all video questions to add full image URLs
  const processedLesson = {
    ...lesson,
    videos: lesson.videos.map((video, videoIdx) => {
      console.log(`[DataService] Processing video ${videoIdx}, questions:`, video.questions.length);
      return {
        ...video,
        questions: video.questions.map((q, qIdx) => {
          console.log(`[DataService] Processing question ${qIdx}, type:`, q.type);
          return processQuestionImages(courseId, topicId, lessonId, q);
        })
      };
    })
  };
  
  console.log('[DataService] Lesson processing complete');
  return processedLesson;
}

// Get lessons for a course
function getLessonsForCourse(courseId) {
  const course = dataStore.courses.get(courseId);
  if (!course) return [];
  
  return course.lessons.map(lessonId => dataStore.lessons.get(lessonId)).filter(Boolean);
}

module.exports = {
  initializeData,
  getAllCourses,
  getCourseById,
  getLessonById,
  getLessonsForCourse
};