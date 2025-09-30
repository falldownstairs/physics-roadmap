# Backend File Structure

This backend uses a hybrid approach:
- **User authentication**: MongoDB (for persistent user data)
- **Course content**: File-based (for easy content management)

## Directory Structure

```
/backend
├── config/
│   └── passport.js           # Passport Google OAuth configuration
├── data/                     # Course and lesson content (file-based)
│   ├── courses.js           # Course definitions and metadata
│   └── lessons.js           # Lesson content with questions
├── models/
│   └── user.js              # User model for MongoDB (authentication only)
├── routes/
│   └── auth.js              # Authentication routes
├── scripts/
│   └── clear-lessons.js     # Utility to clear old MongoDB course/lesson data
├── services/
│   └── dataService.js       # In-memory data management for courses/lessons
├── utils/
│   └── authUtils.js         # JWT token utilities
├── app.js                   # Main application file
└── package.json             # Dependencies and scripts
```

## Key Features

### File-Based Content Management
- Courses and lessons are stored in JavaScript files
- Easy to edit and version control
- Fast in-memory access via dataService
- No database queries needed for content

### MongoDB User Authentication
- User data persists in MongoDB
- Google OAuth integration
- JWT token-based sessions

## Scripts

- `npm run dev` - Start development server with nodemon
- `npm run start` - Start production server
- `npm run clear-lessons` - Remove old course/lesson data from MongoDB

## API Endpoints

### Content
- `GET /api/courses` - List all courses
- `GET /api/:courseName/:lessonId` - Get specific lesson

### Authentication
- `GET /api/auth/google` - Initiate Google OAuth
- `GET /api/auth/google/callback` - OAuth callback
- `GET /api/auth/user` - Get current user

### Admin
- `GET /api/users` - List all registered users
- `GET /api/health` - Server health check

## Adding Content

To add new courses or lessons:

1. Edit `/data/courses.js` to add course metadata
2. Edit `/data/lessons.js` to add lesson content
3. Restart the server to reload data into memory

Example course structure:
```javascript
{
  id: "course-id",
  name: "Course Name", 
  description: "Course description",
  lessons: ["lesson1", "lesson2"]
}
```

Example lesson structure:
```javascript
{
  id: "lesson1",
  title: "Lesson Title",
  description: "Lesson description",
  estimatedTime: "20 minutes",
  difficulty: "Beginner",
  youtubeVideoId: "VIDEO_ID",
  questions: [...]
}
```