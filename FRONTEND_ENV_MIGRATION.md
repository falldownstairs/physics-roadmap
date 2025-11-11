# Frontend Backend Integration - Environment Variable Migration

## Summary
All hardcoded `localhost:3002` references in the frontend have been replaced with environment variables to support flexible deployment configurations.

## Changes Made

### Files Updated

1. **`/src/components/learning/WordQuestion.tsx`**
   - Changed: `'http://localhost:3002/api/validation/validate-answer'`
   - To: `` `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002'}/api/validation/validate-answer` ``

2. **`/src/lib/api.ts`**
   - Added: `const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002';`
   - Updated all fetch calls and image URL construction to use `${API_URL}`
   - Changed: Hardcoded URLs in 3 places (fetch, image.src, optionImages)

3. **`/src/lib/answerValidation.ts`**
   - Added: `const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002';`
   - Updated both API calls: `validateWordAnswer()` and `getValidationUsage()`

4. **`/src/lib/progressApi.ts`**
   - Already had: `const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002';`
   - ✅ No changes needed (already using env variable)

5. **`/src/contexts/AuthContext.tsx`**
   - Already using: `` `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002'}/api/auth/user` ``
   - ✅ No changes needed (already using env variable)

6. **`/src/components/navbar/SignInModal.tsx`**
   - Already using: `` `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002'}/api/auth/google` ``
   - ✅ No changes needed (already using env variable)

### Files Created

1. **`.env.example`**
   - Template file showing required environment variables
   - Safe to commit to git

2. **`.env.local`**
   - Local development configuration
   - Points to `http://localhost:3002` by default
   - Already excluded from git via `.gitignore`

## Environment Variable

### Variable Name
`NEXT_PUBLIC_API_URL`

### Purpose
Defines the base URL for backend API calls. The `NEXT_PUBLIC_` prefix makes it available to client-side code in Next.js.

### Configuration

#### Local Development
```bash
NEXT_PUBLIC_API_URL=http://localhost:3002
```

#### Production (Vercel)
```bash
NEXT_PUBLIC_API_URL=https://your-backend.vercel.app
```

## How to Use

### For Local Development
1. The `.env.local` file is already created with the correct value
2. No action needed - defaults to `http://localhost:3002` if not set
3. Start your backend: `cd backend && node app.js`
4. Start your frontend: `cd frontend && npm run dev`

### For Vercel Deployment
1. Go to your Vercel project dashboard
2. Navigate to: **Settings** → **Environment Variables**
3. Add variable:
   - **Name**: `NEXT_PUBLIC_API_URL`
   - **Value**: `https://your-backend.vercel.app` (replace with your actual backend URL)
   - **Environment**: Production, Preview, Development (select as needed)
4. Redeploy your frontend for changes to take effect

## Benefits

✅ **Flexible Deployment**: Easy to switch between local, staging, and production backends
✅ **Security**: No hardcoded URLs in version control
✅ **Team Collaboration**: Each developer can use their own backend URL
✅ **CI/CD Ready**: Different environments can use different backends automatically
✅ **Vercel Compatible**: Ready for deployment to Vercel with zero code changes

## Testing

After setting up the environment variable, test these features:
- [ ] User authentication (Google OAuth)
- [ ] Fetching lesson content
- [ ] Saving progress
- [ ] Word question validation (Gemini AI)
- [ ] Image loading from backend

## Troubleshooting

**Issue**: Frontend can't connect to backend
- **Check**: Console for CORS errors
- **Solution**: Ensure backend CORS is configured to allow your frontend URL

**Issue**: Images not loading
- **Check**: Network tab for 404 errors on image URLs
- **Solution**: Verify `NEXT_PUBLIC_API_URL` doesn't have a trailing slash

**Issue**: Environment variable not updating
- **Check**: Restart Next.js dev server after changing `.env.local`
- **Solution**: Stop (`Ctrl+C`) and restart `npm run dev`

## Notes

- All instances of `localhost:3002` now have a fallback, so development works without any env file
- The `.env.local` file is ignored by git (already in `.gitignore`)
- If you need to add more environment variables in the future, follow this pattern:
  - Use `NEXT_PUBLIC_` prefix for client-side variables
  - Add to `.env.example` for documentation
  - Add to `.env.local` for local development
  - Add to Vercel dashboard for production
