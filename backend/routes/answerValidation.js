const express = require('express');
const router = express.Router();
const geminiService = require('../services/geminiService');
const ApiUsage = require('../models/apiUsage');
const { checkDailyLimit } = require('../middleware/rateLimiter');

/**
 * POST /api/validate-answer
 * Validates a word-based answer using Gemini AI
 */
router.post('/validate-answer', checkDailyLimit, async (req, res) => {
  try {
    const { lessonId, questionIndex, userAnswer, question, correctAnswer } = req.body;
    
    // Validate request body
    if (!userAnswer || !question || !correctAnswer) {
      return res.status(400).json({
        error: 'Missing required fields: userAnswer, question, correctAnswer'
      });
    }
    
    // If user is not authenticated, return auto-correct with message
    if (!req.isAuthenticated() || !req.user) {
      return res.json({
        isCorrect: true,
        feedback: 'Answer marked as correct. Please sign in for AI validation and progress tracking.',
        confidence: 100,
        authenticated: false,
        attemptsRemaining: parseInt(process.env.DAILY_VALIDATION_LIMIT) || 10
      });
    }
    
    // Validate answer using Gemini
    const validation = await geminiService.validateWordAnswer(
      question,
      correctAnswer,
      userAnswer
    );
    
    // Increment usage counter
    const newCount = await ApiUsage.incrementUsage(
      req.user._id,
      question,
      userAnswer
    );
    
    const limit = parseInt(process.env.DAILY_VALIDATION_LIMIT) || 10;
    
    // Log for monitoring
    console.log(`[VALIDATION] User: ${req.user.email}, Correct: ${validation.isCorrect}, Remaining: ${limit - newCount}`);
    
    res.json({
      ...validation,
      authenticated: true,
      attemptsUsed: newCount,
      attemptsRemaining: limit - newCount,
      limit
    });
    
  } catch (error) {
    console.error('Answer validation error:', error);
    
    res.status(500).json({
      error: 'Failed to validate answer',
      message: error.message,
      isCorrect: false,
      feedback: 'Validation failed - please try again'
    });
  }
});

/**
 * GET /api/validate-answer/usage
 * Get current usage statistics for authenticated user
 */
router.get('/validate-answer/usage', async (req, res) => {
  try {
    if (!req.isAuthenticated() || !req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }
    
    const limit = parseInt(process.env.DAILY_VALIDATION_LIMIT) || 10;
    const used = await ApiUsage.getTodayUsage(req.user._id);
    
    res.json({
      limit,
      used,
      remaining: limit - used
    });
  } catch (error) {
    console.error('Usage check error:', error);
    res.status(500).json({ error: 'Failed to get usage statistics' });
  }
});

module.exports = router;