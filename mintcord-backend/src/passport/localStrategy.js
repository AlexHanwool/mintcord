const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

const { User } = require('../../models');

module.exports = (passport) => {
  passport.use(new LocalStrategy({
    usernameField: 'userEmail',
    passwordField: 'password',
  }, async (userEmail, password, done) => {
    try {
      const exUser = await User.findOne({ where: { userEmail } });
      if (exUser) {
        const result = await bcrypt.compare(password, exUser.password);
        if (result)
          done(null, exUser);
        else
          done(null, false, { message: 'password incorrect' });
      }
      else {
        done(null, false, { message: 'please register first' });
      }
    }
    catch (error) {
      console.error(error);
      done(error);
    }
  }));
}