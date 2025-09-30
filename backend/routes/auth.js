const express = require('express');
const passport = require('passport');
const { generateToken } = require('../utils/authUtils');
const User = require('../models/user');

const router = express.Router();

// Google OAuth routes
router.get('/google',
  passport.authenticate('google', { 
    scope: ['profile', 'email'],
    prompt: 'select_account'
  })
);

router.get('/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: '/login' }),
  (req, res) => {
    // Generate JWT token
    const token = generateToken(req.user);
    
    // Return HTML that will close popup and pass token to parent window
    res.send(`
      <html>
        <body>
          <script>
            window.opener.postMessage({ token: '${token}', user: ${JSON.stringify(req.user)} }, '*');
            window.close();
          </script>
        </body>
      </html>
    `);
  }
);

// Get current user
router.get('/user', 
  (req, res) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Not authenticated' });
    }
    res.json(req.user);
  }
);

module.exports = router;