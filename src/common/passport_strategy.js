const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const loginUser = require('../controller/signUp_controller.js');
const logger = require('./winston_config.js');


function passportConfig(passport) {
  passport.use(new LocalStrategy(
    (async (username, password, done) => {
      try {
        const result = await loginUser.findUserByUsername(username);
        if (!result) {
          done(null, false);
        }
        const hash = result.password;
        const isMatch = await bcrypt.compare(password, hash);
        if (isMatch) {
          return done(null, result);
        }
        return done(null, false);
      } catch (err) {
        return done(err, false);
      }
    }),
  ));

  passport.serializeUser((user, done) => {
    if (!user) {
      done(null, false);
    }
    done(null, user.username);
  });

  passport.deserializeUser(async (username, done) => {
    if (!username) {
      done(null, false);
    } else {
      try {
        done(null, username);
      } catch (err) {
        logger.info(err);
        done(err, username);
      }
    }
  });
}

module.exports = passportConfig;
