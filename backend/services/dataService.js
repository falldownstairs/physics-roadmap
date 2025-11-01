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
  
  const url = topicId 
    ? `/images/lessons/${courseId}/${topicId}/${lessonId}/${imageData.src}`
    : `/images/lessons/${courseId}/${lessonId}/${imageData.src}`;
  
  return {
    src: url,
    alt: imageData.alt || ''
  };
}

// Helper function to process question images
function processQuestionImages(courseId, topicId, lessonId, question) {
  const processedQuestion = { ...question };
  
  if (question.image) {
    processedQuestion.image = processImageUrl(courseId, topicId, lessonId, question.image);
  }
  
  if (question.type === 'multiple-choice' && question.optionImages) {
    processedQuestion.optionImages = question.optionImages.map(img => 
      img ? processImageUrl(courseId, topicId, lessonId, img) : null
    );
  }
  
  return processedQuestion;
}

// Get lesson by id (modified to process images)
function getLessonById(lessonId) {
  const lesson = dataStore.lessons.get(lessonId);
  if (!lesson) return null;
  
  let courseId = null;
  for (const [id, course] of dataStore.courses) {
    if (course.lessons.includes(lessonId)) {
      courseId = id;
      break;
    }
  }
  
  if (!courseId) return lesson;
  
  const topicId = lesson.topicId;
  
  const processedLesson = {
    ...lesson,
    videos: lesson.videos.map(video => ({
      ...video,
      questions: video.questions.map(q => processQuestionImages(courseId, topicId, lessonId, q))
    }))
  };
  
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