/**
 * Data Service
 * Provides methods for accessing and managing course and lesson data
 */
const courses = require('../data/courses');
const lessons = require('../data/lessons');

// In-memory data store
const dataStore = {
  courses: new Map(),
  lessons: new Map()
};

// Initialize the data store
function initializeData() {
  // Load courses into memory
  courses.forEach(course => {
    dataStore.courses.set(course.id, course);
  });
  
  // Load lessons into memory
  lessons.forEach(lesson => {
    dataStore.lessons.set(lesson.id, lesson);
  });
  
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

// Get lesson by id
function getLessonById(lessonId) {
  return dataStore.lessons.get(lessonId);
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