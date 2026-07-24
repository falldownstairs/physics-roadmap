const express = require('express');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const PgStore = require('connect-pg-simple')(session);
const path = require('path');

require('dotenv').config();
require('dotenv').config({ path: '.env.local', override: false, quiet: true });
require('./config/passport');

const prisma = require('./lib/prisma');
const pgPool = require('./lib/postgresSession');
const dataService = require('./services/dataService');
const authRoutes = require('./routes/auth');
const progressRoutes = require('./routes/progressRoutes');

const app = express();
const PORT = process.env.PORT || 3002;

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
  store: new PgStore({
    pool: pgPool,
    tableName: 'sessions',
    createTableIfMissing: false,
  }),
  cookie: {
    maxAge: 14 * 24 * 60 * 60 * 1000,
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'lax',
  },
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

// Health check
app.get('/api/health', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: 'ok', database: 'connected' });
  } catch (error) {
    res.status(503).json({ status: 'error', database: 'disconnected', error: error.message });
  }
});

// Get all courses
app.get('/api/courses', (req, res) => {
  try {
    res.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
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
    
    res.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
    res.json(lesson);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  await pgPool.end();
  process.exit(0);
});
