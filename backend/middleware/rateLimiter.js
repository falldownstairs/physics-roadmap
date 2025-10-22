const ApiUsage = require('../models/apiUsage');

const DAILY_LIMIT = 10;

/**
 * Rate limiting middleware for Gemini API calls
 * Limits users to DAILY_VALIDATION_LIMIT requests per day (default: 10)
 */
async function checkRateLimit(req, res, next) {
  try {
    // Check if user is authenticated
    if (!req.isAuthenticated()) {
      return res.status(401).json({ 
        message: 'Authentication required',
        error: 'You must be logged in to validate answers'
      });
    }

    const userId = req.user._id;
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

    // Find or create usage record for today
    let usage = await ApiUsage.findOne({ userId, date: today });

    if (!usage) {
      // Create new usage record for today
      usage = new ApiUsage({
        userId,
        date: today,
        validationCount: 0
      });
    }

    // Check if limit exceeded
    if (usage.validationCount >= DAILY_LIMIT) {
      return res.status(429).json({
        message: 'Rate limit exceeded',
        error: `You have reached your daily limit of ${DAILY_LIMIT} validations. Please try again tomorrow.`,
        limit: DAILY_LIMIT,
        remaining: 0,
        resetDate: new Date(new Date(today).getTime() + 24 * 60 * 60 * 1000).toISOString()
      });
    }

    // Increment count
    usage.validationCount += 1;
    await usage.save();

    // Add usage info to request
    req.apiUsage = {
      count: usage.validationCount,
      limit: DAILY_LIMIT,
      remaining: DAILY_LIMIT - usage.validationCount
    };

    next();
  } catch (error) {
    console.error('Rate limiter error:', error);
    res.status(500).json({ 
      message: 'Server error',
      error: 'Failed to check rate limit'
    });
  }
}

module.exports = { checkRateLimit };