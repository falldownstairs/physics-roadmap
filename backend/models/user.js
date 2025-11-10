const mongoose = require('mongoose');

const userAnswerSchema = new mongoose.Schema({
  videoIndex: Number,
  questionIndex: Number,
  answer: mongoose.Schema.Types.Mixed, // Can store string or number
  isCorrect: Boolean
}, { _id: false });

const progressSchema = new mongoose.Schema({
  lessonId: {
    type: String,
    required: true
  },
  videoIndex: {
    type: Number,
    default: 0
  },
  questionIndex: {
    type: Number, 
    default: 0
  },
  userAnswers: [userAnswerSchema],
  lastUpdated: {
    type: Date,
    default: Date.now
  }
}, { _id: false });

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    unique: true,
    sparse: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  displayName: String,
  firstName: String,
  lastName: String,
  profilePicture: String,
  profilePictureUpdatedAt: {
    type: Date,
    default: Date.now
  },
  progress: [progressSchema],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);