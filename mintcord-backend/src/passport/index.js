const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const { User } = require('../../models');

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.userId);
  });
  passport.deserializeUser(async (userId, done) => {
    try {
      const user = await User.findOne({ where: { userId } });
      await done(null, user);
    }
    catch (error) {
      done(err);
    }
  });

  local(passport);
  kakao(passport);
}
