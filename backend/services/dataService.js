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
  // Load topic node files from course root (0.js through 8.js)
  const rootFiles = fs.readdirSync(courseFolderPath)
    .filter(file => file.endsWith('.js') && !isNaN(file.split('.')[0]));
  
  rootFiles.forEach(file => {
    const lessonPath = path.join(courseFolderPath, file);
    const lesson = require(lessonPath);
    dataStore.lessons.set(lesson.id, lesson);
  });

  // Load lesson files from topic subfolders
  const topicDirs = fs.readdirSync(courseFolderPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory());
  
  topicDirs.forEach(topicDir => {
    const topicPath = path.join(courseFolderPath, topicDir.name);
    const lessonFiles = fs.readdirSync(topicPath)
      .filter(file => file.endsWith('.js'));
    
    lessonFiles.forEach(lessonFile => {
      const lessonPath = path.join(topicPath, lessonFile);
      const lesson = require(lessonPath);
      dataStore.lessons.set(lesson.id, lesson);
    });
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