const express = require('express');
const router = express.Router();
const User = require('../models/user');
const dataService = require('../services/dataService');

// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: 'Not authenticated' });
};

// Get progress for a specific lesson
router.get('/:lessonId', isAuthenticated, async (req, res) => {
  try {
    const { lessonId } = req.params;
    const userId = req.user._id;

    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const lessonProgress = user.progress.find(p => p.lessonId === lessonId);

    if (!lessonProgress) {
      return res.status(404).json({ message: 'No progress found for this lesson' });
    }

    res.json({
      videoIndex: lessonProgress.videoIndex,
      questionIndex: lessonProgress.questionIndex,
      userAnswers: lessonProgress.userAnswers
    });
  } catch (error) {
    console.error('Error fetching progress:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Save/update progress for a specific lesson
router.post('/:lessonId', isAuthenticated, async (req, res) => {
  try {
    const { lessonId } = req.params;
    const { videoIndex, questionIndex, userAnswers } = req.body;
    const userId = req.user._id;

    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const existingProgressIndex = user.progress.findIndex(p => p.lessonId === lessonId);

    const newProgress = {
      lessonId,
      videoIndex,
      questionIndex,
      userAnswers,
      lastUpdated: new Date()
    };

    if (existingProgressIndex !== -1) {
      user.progress[existingProgressIndex] = newProgress;
    } else {
      user.progress.push(newProgress);
    }

    await user.save();

    res.json({
      message: 'Progress saved successfully',
      progress: newProgress
    });
  } catch (error) {
    console.error('Error saving progress:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// In progressRoutes.js
router.get('/course/:courseName', isAuthenticated, async (req, res) => {
  try {
    const { courseName } = req.params;
    const userId = req.user._id;
    
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // Get all lesson progress for lessons in this course
    // We could filter by course if lessons have courseId stored in them
    // For now return all progress and filter on frontend
    
    res.json({
      progress: user.progress
    });
  } catch (error) {
    console.error('Error fetching course progress:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.get('/course/:courseName/problems', isAuthenticated, async (req, res) => {
  try {
    const { courseName } = req.params;
    
    // Get all lessons for this course using the data service
    const lessons = dataService.getLessonsForCourse(courseName);
    
    // Calculate total problems for each lesson
    const problemCounts = lessons.map(lesson => {
      let totalProblems = 0;
      
      // Count problems in each video
      if (lesson.videos) {
        lesson.videos.forEach(video => {
          if (video.questions) {
            totalProblems += video.questions.length;
          }
        });
      }
      
      return {
        lessonId: lesson.id.toString(),
        totalProblems
      };
    });
    
    res.json(problemCounts);
  } catch (error) {
    console.error('Error fetching problem counts:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;