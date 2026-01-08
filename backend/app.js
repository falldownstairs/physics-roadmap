const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const path = require('path');

require('dotenv').config();
require('./config/passport');

const dataService = require('./services/dataService');
const authRoutes = require('./routes/auth');
const progressRoutes = require('./routes/progressRoutes');
const validationRoutes = require('./routes/validation');

const app = express();
const PORT = 3002;

// Database connection
(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 20000,
      socketTimeoutMS: 45000,
    });
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
  }
})();

// CORS configuration
const allowedOrigins = process.env.NODE_ENV === 'production'
  ? ['https://www.physicsroadmap.com', 'https://physicsroadmap.com']
  : ['http://localhost:3000', 'http://localhost:3001', 'http://127.0.0.1:3000'];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) callback(null, true);
    else callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
  exposedHeaders: ['Set-Cookie']
}));

app.use(express.json());
app.set('trust proxy', 1);

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-session-secret',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ 
    mongoUrl: process.env.MONGODB_URI, 
    touchAfter: 24 * 3600 
  }),
  cookie: {
    maxAge: 14 * 24 * 60 * 60 * 1000,
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    // Explicitly set domain for production to help with Safari
    ...(process.env.NODE_ENV === 'production' && {
      domain: undefined // Let browser infer - important for Safari
    })
  },
  // Important: name the session cookie explicitly
  name: 'physics.sid'
}));

app.use(passport.initialize());
app.use(passport.session());

// Initialize data and static files
dataService.initializeData();
app.use('/images/lessons', express.static(path.join(__dirname, 'data')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/validation', validationRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

// Get all courses
app.get('/api/courses', (req, res) => {
  try {
    res.json(dataService.getAllCourses());
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get lesson by course and ID
app.get('/api/:courseName/:lessonId', (req, res) => {
  try {
    const { courseName, lessonId } = req.params;
    const course = dataService.getCourseById(courseName);
    if (!course) return res.status(404).json({ message: 'Course not found' });
    
    const lesson = dataService.getLessonById(lessonId, courseName);
    if (!lesson) return res.status(404).json({ message: 'Lesson not found' });
    
    res.json(lesson);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  process.exit(0);
});
