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
      }
      const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
      res.redirect(frontendUrl);
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
        sameSite: 'lax'
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
        id: req.user.id,
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
