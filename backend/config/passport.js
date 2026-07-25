const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const prisma = require('../lib/prisma');

const frontendUrl = process.env.FRONTEND_URL?.replace(/\/$/, '');
const callbackURL = frontendUrl
  ? `${frontendUrl}/api/auth/google/callback`
  : '/api/auth/google/callback';

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
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
      callbackURL,
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;
        if (!email) return done(new Error('Google profile did not include an email address'), null);

        const profileData = {
          email,
          displayName: profile.displayName,
          firstName: profile.name?.givenName,
          lastName: profile.name?.familyName,
          profilePicture: profile.photos?.[0]?.value,
          profilePictureUpdatedAt: new Date()
        };

        const existingUser =
          (await prisma.user.findUnique({ where: { googleId: profile.id } })) ??
          (await prisma.user.findUnique({ where: { email } }));

        if (existingUser) {
          const user = await prisma.user.update({
            where: { id: existingUser.id },
            data: {
              ...profileData,
              googleId: existingUser.googleId || profile.id,
            },
          });

          return done(null, user);
        }

        const user = await prisma.user.create({
          data: {
            googleId: profile.id,
            ...profileData,
          },
        });

        done(null, user);
      } catch (err) {
        done(err, null);
      }
    }
  )
);

module.exports = passport;
