const express = require('express');
const passport = require('passport');
const bcrypt = require('bcryptjs');

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

    User.create({
      userEmail, nickname, password: hash,
    }).then(user => {
      return res.status(200).json({
        userId: user.userId,
        userEmail: user.userEmail,
        nickname: user.nickname
      });
    });
  }
  catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
  console.log('client', req.session.id, 'tries to log in');
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      // console.log('user does not exist');
      return res.status(403).json(info);
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      // return res.redirect('/');
      // return res.status(200).json({
      //   result: "success",
      //   user:{
      //     userId: user.userId,
      //     userEmail: user.userEmail,
      //     nickname: user.nickname
      //   },
      // });
      return res.status(200).json({
        userId: user.userId,
        userEmail: user.userEmail,
        nickname: user.nickname
      });
    });
  })(req, res, next);
});

router.get('/kakao', passport.authenticate('kakao'));

router.get('/kakao/callback', 
  passport.authenticate('kakao', {failureRedirect: '/'}), (req, res) => {
  // res.status(200).redirect('/').json({
  //   result: "success",
  //   user:{
  //     userId: req.user.userId,
  //     userEmail: req.user.userEmail,
  //     nickname: req.user.nickname
  //   },
  // });
  res.redirect('/Lobby');
});

router.get('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.status(200).json({
    message: "logout success",
  })
});

router.get('/check', isLoggedIn, (req, res) => {
  const user = req.user;
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