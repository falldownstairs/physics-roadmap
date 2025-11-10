const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    
    // Check if profile picture needs refreshing (older than 12 hours)
    const twelveHoursAgo = new Date(Date.now() - 12 * 60 * 60 * 1000);
    if (user.profilePictureUpdatedAt && user.profilePictureUpdatedAt < twelveHoursAgo) {
      // Profile picture URL is potentially stale, clear it
      user.profilePicture = undefined;
    }
    
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });
        
        const profileData = {
          email: profile.emails[0].value,
          displayName: profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          profilePicture: profile.photos[0].value,
          profilePictureUpdatedAt: new Date() // Track when we last updated the URL
        };
        
        if (user) {
          // Update existing user with fresh profile picture URL
          Object.assign(user, profileData);
          await user.save();
          return done(null, user);
        }
        
        // Create new user
        user = new User({
          googleId: profile.id,
          ...profileData
        });
        
        await user.save();
        done(null, user);
      } catch (err) {
        done(err, null);
      }
    }
  )
);

module.exports = passport;