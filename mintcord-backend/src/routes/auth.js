const express = require('express');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const chalk = require('chalk');

const { isLoggedIn, isNotLoggedIn } = require('./routerMiddlewares');
const { User } = require('../../models');

const router = express.Router();

router.post('/join', isNotLoggedIn, async (req, res, next) => {
  const { userEmail, nickname, password } = req.body;
  try {
    const exUser = await User.findOne({ where: { userEmail } });
    if (exUser) {
      return res.status(409).send();  // Conflict
    }
    
    const hash = await bcrypt.hash(password, 8);

    await User.create({
      userEmail, nickname, password: hash,
    }).then(user => {
      console.log(`New user registered: ${user.userEmail}`);
    });
    return res.status(200).send();
  }
  catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
  console.log(chalk.green('client '+req.session.id+' tries to log in'));
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      return res.status(403).json(info);
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      // return res.redirect('/');
      return res.status(200).send();
    });
  })(req, res, next);
});

router.get('/kakao', passport.authenticate('kakao'));

router.get('/kakao/callback', 
  passport.authenticate('kakao', {failureRedirect: '/'}), (req, res) => {
  
  res.redirect('/Lobby');
});

router.post('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  return res.status(200).send();
});

router.get('/check', (req, res) => {
  const user = req.user;
  // TODO: have to check with kakao oauth login
  if (user) {
    return res.status(200).json({
      userId: user.userId,
      userEmail: user.userEmail,
      nickname: user.nickname
    });
  }
  // have to destrory session?
  return res.status(401).send();  // Unauthorized
});

module.exports = router;