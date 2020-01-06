const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const { User } = require('../../models');

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.userId);
  });
  passport.deserializeUser((userId, done) => {
    User.findOne({ where: { userId } })
      .then(user => done(null, user))
      .catch(err => done(err));
  });

  local(passport);
  kakao(passport);
}
