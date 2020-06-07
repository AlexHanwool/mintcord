const express = require('express');
const chalk = require('chalk');

const { isLoggedIn } = require('./routerMiddlewares');
const { User, Chatlog } = require('../../models');

const router = express.Router();

router.get('/chatLogs', isLoggedIn, async (req, res, next) => {
  const { userEmail } = req.user;

  try {
    const exUser = await User.findOne({where: { userEmail }});
    return res.status(200).json();
  }
  catch (error) {
    console.error(error);
    return next(error);
  }
});

module.exports = router;