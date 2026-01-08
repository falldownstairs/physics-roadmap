const express = require('express');
const passport = require('passport');
const router = express.Router();

// Google OAuth routes
router.get('/google',
  passport.authenticate('google', { 
    scope: ['profile', 'email'],
    prompt: 'select_account'
  })
);

router.get('/google/callback',
  passport.authenticate('google', { 
    failureRedirect: process.env.FRONTEND_URL || 'http://localhost:3000',
    session: true
  }),
  (req, res) => {
    console.log('Auth callback - User:', req.user?.email);
    console.log('Auth callback - SessionID:', req.sessionID);
    
    // Ensure session is saved before redirecting
    req.session.save((err) => {
      if (err) {
        console.error('Session save error:', err);
        return res.redirect(process.env.FRONTEND_URL || 'http://localhost:3000');
      }
      
      // For mobile Safari compatibility, redirect with a slight delay using meta refresh
      // This gives the cookie time to be set properly
      const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
      
      // Check if it's likely a mobile browser via user-agent
      const userAgent = req.get('User-Agent') || '';
      const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);
      const isSafari = /Safari/i.test(userAgent) && !/Chrome/i.test(userAgent);
      
      if (isMobile || isSafari) {
        // For Safari/mobile, use a page that ensures cookie is set before redirect
        res.send(`
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <title>Signing in...</title>
              <style>
                body { 
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                  display: flex; 
                  justify-content: center; 
                  align-items: center; 
                  height: 100vh; 
                  margin: 0;
                  background: #f1f5f9;
                }
                .container { text-align: center; }
                .spinner {
                  width: 40px;
                  height: 40px;
                  border: 3px solid #e2e8f0;
                  border-top-color: #3b82f6;
                  border-radius: 50%;
                  animation: spin 1s linear infinite;
                  margin: 0 auto 16px;
                }
                @keyframes spin { to { transform: rotate(360deg); } }
                p { color: #64748b; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="spinner"></div>
                <p>Signing you in...</p>
              </div>
              <script>
                // Small delay to ensure session cookie is properly set
                setTimeout(function() {
                  window.location.replace('${frontendUrl}');
                }, 500);
              </script>
            </body>
          </html>
        `);
      } else {
        // For desktop browsers, direct redirect works fine
        res.redirect(frontendUrl);
      }
    });
  }
);

// Logout route
router.post('/logout', (req, res) => {
  console.log('Logout requested for user:', req.user?.email);
  
  req.logout((err) => {
    if (err) {
      console.error('Logout error:', err);
      return res.status(500).json({ message: 'Logout failed' });
    }
    
    req.session.destroy((err) => {
      if (err) {
        console.error('Session destruction error:', err);
        return res.status(500).json({ message: 'Session destruction failed' });
      }
      
      // Clear the session cookie (matching the name in app.js)
      res.clearCookie('physics.sid', {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax'
      });
      res.json({ message: 'Logged out successfully' });
    });
  });
});

// Get current user
router.get('/user', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({
      isAuthenticated: true,
      user: {
        id: req.user._id,
        email: req.user.email,
        displayName: req.user.displayName,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        profilePicture: req.user.profilePicture
      }
    });
  } else {
    res.json({ isAuthenticated: false, user: null });
  }
});

module.exports = router;