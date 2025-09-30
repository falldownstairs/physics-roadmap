const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
require('dotenv').config();
require('./config/passport'); // Import passport configuration

// Import models (only used for user authentication)
const User = require('./models/user');

// Import data service
const dataService = require('./services/dataService');

// Import routes
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 3002;

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('📚 Connected to MongoDB for user authentication');
    return true;
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    return false;
  }
}

app.use(cors());
app.use(express.json());

// Initialize passport
app.use(passport.initialize());

// Initialize in-memory data
dataService.initializeData();

// Auth routes
app.use('/api/auth', authRoutes);

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
    const courses = dataService.getAllCourses();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get all registered users (for admin/tracking purposes)
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find().select('-googleId'); // Exclude sensitive googleId
    res.json({
      total: users.length,
      users: users
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get lesson through course
app.get('/api/:courseName/:lessonId', async (req, res) => {
  try {
    const { courseName, lessonId } = req.params;
    
    // Get course from in-memory data
    const course = dataService.getCourseById(courseName);
    
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    
    // Find lesson using the lesson id
    const lesson = dataService.getLessonById(lessonId);
    
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
  console.log(`📁 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log('📍 Available endpoints:');
  console.log('   Content:');
  console.log('   - GET /api/health');
  console.log('   - GET /api/courses');
  console.log('   - GET /api/:courseName/:lessonId');
  console.log('   Authentication:');
  console.log('   - GET /api/auth/google');
  console.log('   - GET /api/auth/google/callback');
  console.log('   - GET /api/auth/user');
  console.log('   Admin:');
  console.log('   - GET /api/users');
  console.log('');
  console.log('📚 Content stored in file-based system');
  console.log('👥 Users stored in MongoDB');
});

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed');
  process.exit(0);
});
