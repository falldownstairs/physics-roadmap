const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id).lean();
    if (!user) return done(null, false);
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
          
          // Migrate legacy progress entries that don't have courseId
          if (user.progress && user.progress.length > 0) {
            user.progress.forEach(p => {
              if (!p.courseId) {
                p.courseId = 'mechanics';
              }
            });
          }
          
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