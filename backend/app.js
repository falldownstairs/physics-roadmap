const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Import models
const Lesson = require('./models/lesson');
const Course = require('./models/course');

const app = express();
const PORT = 3002;

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('📚 Connected to MongoDB');
    return true;
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    return false;
  }
}

app.use(cors());
app.use(express.json());

app.get('/api/health', async (req, res) => {
  const dbConnected = mongoose.connection.readyState === 1;
  res.json({
    status: 'Server is running!',
    timestamp: new Date().toISOString(),
    database: {
      connected: dbConnected,
      state: mongoose.STATES[mongoose.connection.readyState]
    }
  });
});

// Get all courses
app.get('/api/courses', async (req, res) => {
  try {
    const courses = await Course.find().populate('lessons');
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get lesson through course
app.get('/api/:courseName/:lessonId', async (req, res) => {
  try {
    const { courseName, lessonId } = req.params;
    
    // Find course by name directly (no conversion needed)
    const course = await Course.findOne({ name: courseName }).populate('lessons');
    
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    
    // Find lesson in the course using custom id field
    const lesson = course.lessons.find(lesson => lesson.id === lessonId);
    
    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }
    
    res.json(lesson);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.listen(PORT, async () => {
  await connectToDatabase();
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log('📍 Available endpoints:');
  console.log('- GET /api/health');
  console.log('- GET /api/courses');
  console.log('- GET /api/:courseName/:lessonId');
});

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed');
  process.exit(0);
});
