const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const path = require('path');

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
    console.log('🔄 Attempting to connect to MongoDB...');
    console.log('   URI exists:', !!process.env.MONGODB_URI);
    console.log('   URI length:', process.env.MONGODB_URI ? process.env.MONGODB_URI.length : 0);
    console.log('   Environment:', process.env.NODE_ENV || 'development');
    console.log('   Vercel:', process.env.VERCEL || 'false');
    
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      socketTimeoutMS: 45000,
    });
    
    console.log('✅ Connected to MongoDB for user authentication');
    console.log('   Host:', mongoose.connection.host);
    console.log('   Database:', mongoose.connection.name);
    return true;
  } catch (error) {
    console.error('❌ MongoDB connection failed - Running without authentication');
    console.error('   Error name:', error.name);
    console.error('   Error message:', error.message);
    console.error('   Error code:', error.code);
    
    // Log more details if it's a connection error
    if (error.reason) {
      console.error('   Reason:', error.reason);
    }
    
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
    mongoUrl: process.env.MONGODB_URI,
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

// Consolidated logging middleware for API routes
const apiLogger = (routeName) => (req, res, next) => {
  console.log(`[${routeName}] ${req.method} ${req.path}`);
  console.log(`[${routeName}] SessionID:`, req.sessionID);
  console.log(`[${routeName}] Authenticated:`, req.isAuthenticated());
  next();
};

app.use('/api/auth', apiLogger('AUTH'));
app.use('/api/progress', apiLogger('PROGRESS'));

// Initialize in-memory data
dataService.initializeData();

// Serve static images - map /images/lessons to the data folder
app.use('/images/lessons', express.static(path.join(__dirname, 'data')));

// Add logging middleware for image requests to help debug
app.use('/images', (req, res, next) => {
  console.log('[STATIC] Image request:', req.path);
  next();
});

// Auth routes
app.use('/api/auth', authRoutes);

// Progress routes
app.use('/api/progress', progressRoutes);

// Validation routes
app.use('/api/validation', validationRoutes);

app.get('/api/health', async (req, res) => {
  const dbConnected = mongoose.connection.readyState === 1;
  
  // Detailed MongoDB connection info
  const connectionInfo = {
    connected: dbConnected,
    state: mongoose.STATES[mongoose.connection.readyState],
    readyState: mongoose.connection.readyState, // 0=disconnected, 1=connected, 2=connecting, 3=disconnecting
    host: mongoose.connection.host || 'N/A',
    port: mongoose.connection.port || 'N/A',
    name: mongoose.connection.name || 'N/A',
  };
  
  // Add error information if available
  if (mongoose.connection._connectionError) {
    connectionInfo.error = mongoose.connection._connectionError.message;
  }
  
  // Environment check
  const envCheck = {
    MONGODB_URI_exists: !!process.env.MONGODB_URI,
    MONGODB_URI_length: process.env.MONGODB_URI ? process.env.MONGODB_URI.length : 0,
    MONGODB_URI_starts_with: process.env.MONGODB_URI ? process.env.MONGODB_URI.substring(0, 20) + '...' : 'N/A',
    SESSION_SECRET_exists: !!process.env.SESSION_SECRET,
    NODE_ENV: process.env.NODE_ENV || 'not set',
    VERCEL: process.env.VERCEL || 'not on vercel',
    VERCEL_ENV: process.env.VERCEL_ENV || 'N/A'
  };
  
  res.json({
    status: 'Server is running!',
    timestamp: new Date().toISOString(),
    environment: envCheck,
    database: connectionInfo,
    mongoose: {
      version: mongoose.version,
      connections: mongoose.connections.length
    }
  });
});

// Debug endpoint to test MongoDB connection on demand
app.get('/api/debug/mongodb', async (req, res) => {
  const results = {
    timestamp: new Date().toISOString(),
    environment: {
      NODE_ENV: process.env.NODE_ENV || 'not set',
      VERCEL: process.env.VERCEL || 'false',
      VERCEL_ENV: process.env.VERCEL_ENV || 'N/A',
      MONGODB_URI_configured: !!process.env.MONGODB_URI,
      MONGODB_URI_format: process.env.MONGODB_URI ? 
        (process.env.MONGODB_URI.startsWith('mongodb+srv://') ? 'mongodb+srv (Atlas)' : 
         process.env.MONGODB_URI.startsWith('mongodb://') ? 'mongodb (standard)' : 'unknown') : 'N/A'
    },
    currentConnection: {
      readyState: mongoose.connection.readyState,
      readyStateString: mongoose.STATES[mongoose.connection.readyState],
      host: mongoose.connection.host || 'N/A',
      port: mongoose.connection.port || 'N/A',
      name: mongoose.connection.name || 'N/A',
    },
    testResults: {}
  };

  // Test connection if not connected
  if (mongoose.connection.readyState !== 1) {
    try {
      results.testResults.status = 'attempting_connection';
      results.testResults.message = 'Attempting to connect to MongoDB...';
      
      await mongoose.connect(process.env.MONGODB_URI, {
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      });
      
      results.testResults.status = 'success';
      results.testResults.message = 'Successfully connected to MongoDB';
      results.currentConnection = {
        readyState: mongoose.connection.readyState,
        readyStateString: mongoose.STATES[mongoose.connection.readyState],
        host: mongoose.connection.host,
        port: mongoose.connection.port,
        name: mongoose.connection.name,
      };
    } catch (error) {
      results.testResults.status = 'failed';
      results.testResults.error = {
        name: error.name,
        message: error.message,
        code: error.code,
        reason: error.reason?.toString() || 'N/A'
      };
    }
  } else {
    results.testResults.status = 'already_connected';
    results.testResults.message = 'MongoDB is already connected';
  }

  res.json(results);
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
  console.log('   Debug:');
  console.log('   - GET /api/debug/mongodb');
  console.log('');
  console.log('📚 Content stored in file-based system');
  console.log('👥 Users stored in MongoDB');
});

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed');
  process.exit(0);
});
