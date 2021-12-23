const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport")

const GOOGLE_CLIENT_ID = "1055455716720-ta4ldk929mr6vhkm2k755p63rce7ev7v.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

// const GITHUB_CLIENT_ID = " Iv1.f38431c57f71d682"
// const GITHUB_CLIENT_SECRET = "8b8885d62d2654ae66c102eb4343518e57e1c138"

const GITHUB_CLIENT_ID = "168cb5408e3ea8ea78a0"
const GITHUB_CLIENT_SECRET = "726b115b8febe119e9500d9d58ef2ccdd789803b"

passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        return done(null, profile)
      }
    )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
));

  passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
  