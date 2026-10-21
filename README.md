# PhysicsRoadmap

Free AP Physics C learning platform covering **Mechanics** and **Electricity & Magnetism** with structured lessons, practice questions, and progress tracking.

## What it does

- Interactive course roadmaps with lesson, topic, and course completion tracking
- Video lessons, multiple-choice questions, and math-input practice with MathJax and MathQuill
- Google OAuth login with saved lesson positions and answers in PostgreSQL
- Dedicated course and lesson pages, metadata, structured data, sitemap, and robots configuration

## Stack

| Layer | Tech |
|-------|------|
| Frontend | Next.js 15, React 19, TypeScript, Tailwind CSS 4 |
| Backend | Node.js 22, Express 5, Prisma 7 |
| Database | PostgreSQL with the Neon serverless Prisma adapter |
| Auth | Passport.js Google OAuth 2.0, express-session, connect-pg-simple |
| Deployment | Separate Vercel frontend and backend projects; backend configuration in `backend/vercel.json` |

Next.js proxies browser requests for `/api/*` and `/images/lessons/*` to the Express backend. Server-rendered lesson pages fetch directly from the backend using `BACKEND_URL`.

Course and lesson content lives in JavaScript files and is loaded into memory by the backend. PostgreSQL stores users, progress, answers, and sessions; it does not store lesson content.

## Project structure

```text
physics-roadmap/
├── frontend/
│   ├── public/                    # Icons and static assets
│   ├── next.config.ts             # API and lesson-image proxy rewrites
│   └── src/
│       ├── app/                   # Next.js App Router
│       │   ├── page.tsx           # Home page
│       │   ├── about/
│       │   ├── mechanics/
│       │   │   ├── page.tsx       # Course roadmap
│       │   │   └── lesson/[id]/   # Individual lesson pages
│       │   ├── electricity-magnetism/
│       │   │   ├── page.tsx
│       │   │   └── lesson/[id]/
│       │   ├── sitemap.ts
│       │   └── robots.ts
│       ├── components/
│       │   ├── common/            # Shared modal
│       │   ├── frontPage/
│       │   ├── learning/          # Videos, questions, math input, explanations
│       │   ├── navbar/            # Navigation and auth modals
│       │   ├── roadmap/
│       │   └── seo/               # Structured data and crawlable content
│       ├── contexts/              # Authentication and progress state
│       ├── lib/                   # API clients, types, roadmap data, SEO helpers
│       └── styles/                # MathQuill styling
└── backend/
    ├── app.js                     # Express entry point and public content routes
    ├── config/passport.js         # Google OAuth strategy
    ├── data/
    │   ├── courses.js             # Course definitions and lesson IDs
    │   ├── mechanics/             # <topic>/<lessonId>/<lessonId>.js and images
    │   └── electricity-magnetism/ # <lessonId>/<lessonId>.js and images
    ├── lib/
    │   ├── prisma.js              # Prisma client using the Neon adapter
    │   └── postgresSession.js     # PostgreSQL pool for session storage
    ├── prisma/schema.prisma       # User, Progress, UserAnswer, Session models
    ├── prisma.config.ts           # Prisma CLI configuration
    ├── routes/                    # Authentication and progress endpoints
    ├── services/dataService.js    # Loads lesson files and resolves image URLs
    ├── utils/dependencyTree.js
    └── vercel.json
```

## Local setup

### Prerequisites

- Node.js 22+
- A Neon PostgreSQL database (the runtime uses the Neon serverless adapter)
- Google OAuth client credentials

### Backend

Create `backend/.env`:

```dotenv
DATABASE_URL=postgresql://USER:PASSWORD@HOST/DATABASE?sslmode=require
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
SESSION_SECRET=replace-with-a-random-secret
FRONTEND_URL=http://localhost:3000
PORT=3002
```

Register `http://localhost:3000/api/auth/google/callback` as an authorized redirect URI for the Google OAuth client. The callback goes through the frontend proxy.

From the repository root:

```sh
cd backend
npm ci
npx prisma db push
npm run dev
```

Installation generates the Prisma client. For a new development database, `prisma db push` creates the tables from `prisma/schema.prisma`, including the session table required for sign-in. The repository does not keep migration files.

The backend loads `.env` and then `.env.local` without overriding existing values. Set `DATABASE_URL` in `.env` or the shell so the Prisma CLI and runtime use the same database.

### Frontend

Create `frontend/.env.local`:

```dotenv
BACKEND_URL=http://localhost:3002
```

In a second terminal, from the repository root:

```sh
cd frontend
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). The backend listens on port 3002 by default; `/api/health` checks database connectivity.

## Content and API

Roadmap nodes and connections are defined in `frontend/src/lib/mechanicsContent.ts` and `frontend/src/lib/emContent.ts`. When adding lessons, keep those definitions aligned with `backend/data/courses.js` and the lesson files under `backend/data/`. Restart the backend after changing lesson files.

| Endpoint | Purpose |
|----------|---------|
| `GET /api/health` | Database health check |
| `GET /api/courses` | Course definitions |
| `GET /api/:courseName/:lessonId` | Lesson videos, questions, and image URLs |
| `/api/auth/*` | Google sign-in, callback, current user, and logout |
| `/api/progress/*` | Progress and answers for signed-in users, plus public problem counts |
| `/images/lessons/*` | Static images from `backend/data/` |

## Production

Deploy `frontend/` and `backend/` as separate Vercel projects. Set `BACKEND_URL` on the frontend to the backend's deployed origin. Set the backend variables above with the production database, a strong session secret, and `FRONTEND_URL` pointing to the public frontend origin. Register `<FRONTEND_URL>/api/auth/google/callback` with Google OAuth.

Provision the database schema before serving traffic. Backend installation generates the Prisma client without applying database changes. Build the frontend with `npm run build` and run it locally in production mode with `npm start`; the backend also provides `npm start`.

