const mongoose = require('mongoose');
const QuestionSchema = require('./question');

const LessonSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  estimatedTime: String,
  difficulty: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced']
  },
  youtubeVideoId: String,
  videoTitle: String,
  videoDuration: String,
  questions: [QuestionSchema]
});

const Lesson = mongoose.model('Lesson', LessonSchema);
module.exports = Lesson;