const mongoose = require('mongoose');

const apiUsageSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: String, // Format: YYYY-MM-DD
    required: true
  },
  validationCount: {
    type: Number,
    default: 0
  },
  lastReset: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Compound index for efficient lookups
apiUsageSchema.index({ userId: 1, date: 1 }, { unique: true });

module.exports = mongoose.model('ApiUsage', apiUsageSchema);