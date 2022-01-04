const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = "1055455716720-ta4ldk929mr6vhkm2k755p63rce7ev7v.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

const GITHUB_CLIENT_ID = "8bbe2b26a11f318d0ad6"
const GITHUB_CLIENT_SECRET = "e77f2b3cf6abe0fef21a9131eaf2dddbf20148fa"


FACEBOOK_APP_ID = "1347023789071511";
FACEBOOK_APP_SECRET = "faae826a08c88578447f700bbab06028";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
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
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});