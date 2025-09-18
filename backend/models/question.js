const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['math-input', 'multiple-choice']
  },
  question: {
    type: String,
    required: true
  },
  mathAnswer: String,
  options: [String],
  correctAnswer: Number,
  explanation: {
    type: String,
    required: true
  }
});

module.exports = QuestionSchema;