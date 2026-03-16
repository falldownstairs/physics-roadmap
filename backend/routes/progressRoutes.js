const express = require('express');
const router = express.Router();
const User = require('../models/user');
const dataService = require('../services/dataService');

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ message: 'Not authenticated' });
};

const countProblems = (lesson) => {
  if (!lesson.videos) return 0;
  return lesson.videos.reduce((sum, v) => sum + (v.questions?.length || 0), 0);
};

// Get all progress for a course
router.get('/course/:courseName', isAuthenticated, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    
    const courseProgress = user.progress.filter(p => p.courseId === req.params.courseName);
    res.json({ progress: courseProgress });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get total problems per lesson (PUBLIC - needed for progress bars)
router.get('/course/:courseName/problems', async (req, res) => {
  try {
    const lessons = dataService.getLessonsForCourse(req.params.courseName);
    const problemCounts = lessons.map(lesson => ({
      lessonId: lesson.id.toString(),
      totalProblems: countProblems(lesson)
    }));
    res.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
    res.json(problemCounts);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get completion status for a course
router.get('/course/:courseName/completion', isAuthenticated, async (req, res) => {
  try {
    const { courseName } = req.params;
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    
    const lessons = dataService.getLessonsForCourse(courseName);
    
    const lessonCompletions = {};
    lessons.forEach(lesson => {
      const lessonId = lesson.id.toString();
      const total = countProblems(lesson);
      const progress = user.progress.find(p => p.lessonId === lessonId && p.courseId === courseName);
      const answered = progress?.userAnswers?.length || 0;
      lessonCompletions[lessonId] = { completed: answered === total && total > 0, total, answered };
    });
    
    res.json({ lessonCompletions });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get progress for a specific lesson
router.get('/:courseId/:lessonId', isAuthenticated, async (req, res) => {
  try {
    const { courseId, lessonId } = req.params;
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const progress = user.progress.find(p => p.lessonId === lessonId && p.courseId === courseId);
    if (!progress) return res.status(404).json({ message: 'No progress found' });

    res.json({
      videoIndex: progress.videoIndex,
      questionIndex: progress.questionIndex,
      userAnswers: progress.userAnswers
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Save/update progress for a specific lesson
router.post('/:courseId/:lessonId', isAuthenticated, async (req, res) => {
  try {
    const { courseId, lessonId } = req.params;
    const { videoIndex, questionIndex, userAnswers } = req.body;
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const idx = user.progress.findIndex(p => p.lessonId === lessonId && p.courseId === courseId);
    const newProgress = { lessonId, courseId, videoIndex, questionIndex, userAnswers, lastUpdated: new Date() };

    if (idx !== -1) user.progress[idx] = newProgress;
    else user.progress.push(newProgress);

    await user.save();
    res.json({ message: 'Progress saved', progress: newProgress });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
