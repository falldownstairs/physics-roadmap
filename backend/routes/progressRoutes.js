const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
  console.log('Auth check - Session:', req.session);
  console.log('Auth check - User:', req.user);
  console.log('Auth check - isAuthenticated:', req.isAuthenticated());
  
  if (req.isAuthenticated()) {
    return next();
  }
  console.log('User not authenticated - returning 401');
  res.status(401).json({ message: 'Not authenticated' });
};

// Get progress for a specific lesson
router.get('/:lessonId', isAuthenticated, async (req, res) => {
  try {
    const { lessonId } = req.params;
    const userId = req.user._id;

    console.log(`Fetching progress for user ${userId}, lesson ${lessonId}`);

    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Find progress for this specific lesson
    const lessonProgress = user.progress.find(p => p.lessonId === lessonId);

    if (!lessonProgress) {
      console.log('No progress found for this lesson');
      return res.status(404).json({ message: 'No progress found for this lesson' });
    }

    console.log('Progress found:', lessonProgress);
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

    console.log(`Saving progress for user ${userId}, lesson ${lessonId}`, {
      videoIndex,
      questionIndex,
      answersCount: userAnswers?.length
    });

    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Find existing progress for this lesson
    const existingProgressIndex = user.progress.findIndex(p => p.lessonId === lessonId);

    const newProgress = {
      lessonId,
      videoIndex,
      questionIndex,
      userAnswers,
      lastUpdated: new Date()
    };

    if (existingProgressIndex !== -1) {
      // Update existing progress
      user.progress[existingProgressIndex] = newProgress;
      console.log('Updated existing progress');
    } else {
      // Add new progress
      user.progress.push(newProgress);
      console.log('Added new progress');
    }

    await user.save();
    console.log('Progress saved successfully');

    res.json({
      message: 'Progress saved successfully',
      progress: newProgress
    });
  } catch (error) {
    console.error('Error saving progress:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;