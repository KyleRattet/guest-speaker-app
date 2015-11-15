var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;

var models = require('../models/index');

var GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID
var GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET

passport.use(new GitHubStrategy({
  clientID: GITHUB_CLIENT_ID || "blah",
  clientSecret: GITHUB_CLIENT_SECRET || "blah",
  callbackURL: "http://127.0.0.1:3000/auth/github/callback" || "blah"
},
function(accessToken, refreshToken, profile, done) {
  models.User.create({
    email: profile._json.email
  }).then(function(user) {
    return done(null, user);
  });
}));

// serialize and deserialize user (passport)
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  models.User.findOne({
    where: {id:user.id}
  }).then(function(user) {
    return done(null, user);
  });
});

module.exports = passport;
