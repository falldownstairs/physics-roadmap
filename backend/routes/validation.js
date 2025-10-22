const express = require('express');
const router = express.Router();
const { validateAnswer } = require('../services/geminiService');
const { checkRateLimit } = require('../middleware/rateLimiter');

// POST /api/validation/validate-answer
router.post('/validate-answer', checkRateLimit, async (req, res) => {
  try {
    const { questionText, modelAnswer, userAnswer } = req.body;

    // Validate inputs
    if (!questionText || !modelAnswer || !userAnswer) {
      return res.status(400).json({
        message: 'Missing required fields',
        error: 'questionText, modelAnswer, and userAnswer are required'
      });
    }

    if (typeof userAnswer !== 'string' || userAnswer.trim().length === 0) {
      return res.status(400).json({
        message: 'Invalid input',
        error: 'userAnswer must be a non-empty string'
      });
    }

    // Validate with Gemini
    const result = await validateAnswer(
      questionText,
      modelAnswer,
      userAnswer.trim()
    );

    // Return result with rate limit info
    res.json({
      ...result,
      rateLimit: {
        remaining: req.apiUsage.remaining,
        limit: req.apiUsage.limit,
        used: req.apiUsage.count
      }
    });
  } catch (error) {
    console.error('Validation error:', error);
    res.status(500).json({
      message: 'Server error',
      error: 'Failed to validate answer. Please try again.'
    });
  }
});

module.exports = router;
