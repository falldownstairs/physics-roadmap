const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');

require('dotenv').config();
require('./config/passport'); // Import passport configuration

// Import models (only used for user authentication)
const User = require('./models/user');

// Import data service
const dataService = require('./services/dataService');

// Import routes
const authRoutes = require('./routes/auth');
const progressRoutes = require('./routes/progressRoutes');
const validationRoutes = require('./routes/validation');

const app = express();
const PORT = 3002;

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('📚 Connected to MongoDB for user authentication');
    return true;
  } catch (error) {
    console.warn('⚠️  MongoDB connection failed - Running without authentication:', error.message);
    return false;
  }
}

// CORS must come BEFORE session
app.use(cors({
  origin: 'http://localhost:3000', // Your frontend URL
  credentials: true, // Important for cookies/sessions
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Session configuration - AFTER CORS
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-session-secret',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
    touchAfter: 24 * 3600 // lazy session update
  }),
  cookie: {
    maxAge: 14 * 24 * 60 * 60 * 1000, // 14 days in milliseconds
    secure: false, // Set to false for localhost
    httpOnly: true,
    sameSite: 'lax' // Important for cross-origin cookies
  }
}));

// Initialize passport with session support
app.use(passport.initialize());
app.use(passport.session());

// Simplified logging middleware (only log on auth routes)
app.use('/api/auth', (req, res, next) => {
  console.log(`[AUTH] ${req.method} ${req.path}`);
  console.log('[AUTH] SessionID:', req.sessionID);
  console.log('[AUTH] Authenticated:', req.isAuthenticated());
  next();
});

app.use('/api/progress', (req, res, next) => {
  console.log(`[PROGRESS] ${req.method} ${req.path}`);
  console.log('[PROGRESS] SessionID:', req.sessionID);
  console.log('[PROGRESS] Authenticated:', req.isAuthenticated());
  next();
});

// Initialize in-memory data
dataService.initializeData();

// Auth routes
app.use('/api/auth', authRoutes);

// Progress routes
app.use('/api/progress', progressRoutes);

// Validation routes
app.use('/api/validation', validationRoutes);

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

// Add this to appropriate route file


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
  console.log('   Progress:');
  console.log('   - GET /api/progress/:lessonId');
  console.log('   - POST /api/progress/:lessonId');
  console.log('   - GET /api/course/:courseName/problems');
  console.log('   Validation:');
  console.log('   - POST /api/validation/validate-answer');
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
