# PhysicsRoadmap

Free AP Physics C learning platform covering **Mechanics** and **Electricity & Magnetism** with structured lessons, practice questions, and progress tracking.

## What it does

- Structured roadmap of topics with dependency-based unlock system
- Video lessons + practice problems with MathJax rendering and inline expression evaluation
- Google OAuth login with per-user progress saved to MongoDB
- Separate tracks for AP Physics C: Mechanics and E&M

## Stack

| Layer | Tech |
|-------|------|
| Frontend | Next.js 15, React 19, TypeScript, Tailwind CSS 4 |
| Backend | Node.js / Express 5, Mongoose, Passport.js |
| Auth | Google OAuth 2.0 + express-session + MongoDB session store |
| Deploy | Vercel (frontend + backend via `vercel.json`) |

## Project structure

```
physics-roadmap/
├── frontend/          # Next.js app
│   └── src/
│       ├── app/       # Routes: /, /mechanics, /electricity-magnetism, /about
│       ├── components/
│       │   ├── frontPage/
│       │   ├── roadmap/
│       │   ├── learning/
│       │   └── navbar/
│       ├── contexts/
│       └── lib/
└── backend/           # Express API
    ├── data/
    │   ├── mechanics/         # Lesson content by topic
    │   └── electricity-magnetism/
    ├── models/        # Mongoose schemas
    ├── routes/        # auth, progress
    ├── services/
    └── utils/         # Dependency tree logic
```

## Local setup

### Prerequisites

- Node.js 22+
- MongoDB instance (local or Atlas)
- Google OAuth credentials ([console.cloud.google.com](https://console.cloud.google.com))

