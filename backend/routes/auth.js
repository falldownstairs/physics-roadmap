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
    failureRedirect: 'http://localhost:3000',
    session: true
  }),
  (req, res) => {
    console.log('Auth callback - User:', req.user);
    console.log('Auth callback - Session:', req.session);
    
    // Ensure session is saved before redirecting
    req.session.save((err) => {
      if (err) {
        console.error('Session save error:', err);
        return res.redirect('http://localhost:3000');
      }
      
      // Redirect back to frontend
      res.redirect('http://localhost:3000');
    });
  }
);

// Logout route
router.post('/logout', (req, res) => {
  console.log('Logout requested for user:', req.user);
  
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
      
      res.clearCookie('connect.sid');
      res.json({ message: 'Logged out successfully' });
    });
  });
});

// Get current user
router.get('/user', (req, res) => {
  console.log('User endpoint - Authenticated:', req.isAuthenticated());
  console.log('User endpoint - User:', req.user);
  console.log('User endpoint - Session:', req.session);
  console.log('User endpoint - SessionID:', req.sessionID);
  
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