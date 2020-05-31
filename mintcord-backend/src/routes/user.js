const express = require('express');
const chalk = require('chalk');

const { isLoggedIn } = require('./routerMiddlewares');
const { User } = require('../../models');

const router = express.Router();

router.post('/addFriend', isLoggedIn, async (req, res) => {
  const { userEmail, userId, nickname } = req.user;
  const { targetNick, targetId } = req.body;
  try {
    const targetUser = await User.findOne({where: { nickname: targetNick, userId: targetId }})
    if (!targetUser) {
      console.log(chalk.blue(`${chalk.green('there is no')} ${targetNick}#${targetId}`));
      // status?
      return res.status(200).json({
        result: 'failure',
        message: `${targetNick}#${targetId} is invalid`
      });
    }
    await targetUser.addFollowings(userId);
    const exUser = await User.findOne({where: { userEmail }});
    await exUser.addFollowings(targetId);

    console.log(chalk.blue(`${nickname} ${chalk.green('request relationship with')} ${targetNick}`));
    return res.status(200).json({ result: 'success' }); 
  }
  catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/removeFriend', isLoggedIn, async (req, res) => {
  const { userEmail, nickname, userId } = req.user;
  const { targetNick, targetId } = req.body;
  try {
    await User.findOne({where: { userEmail }})
      .then(user => {
        if (user.hasFollowing(targetId))
          user.removeFollowing(targetId);
      });
    await User.findOne({where: { nickname: targetNick, userId: targetId }})
      .then(targetUser => {
        if(targetUser.hasFollowing(userId))
          targetUser.removeFollowing(userId);
      });
    console.log(chalk.red(`unfollow friendship ${chalk.blue(nickname)} with ${chalk.blue(targetNick)}`));
    return res.status(200).send();
  }
  catch (error) {
    console.error(error);
    return next(error);
  }
});

router.get('/getFriendsList', isLoggedIn, async (req, res) => {
  const { userEmail } = req.user;

  try {
    const exUser = await User.findOne({where: { userEmail }});
    let friendsList = await exUser.getFollowings();

    friendsList = friendsList.map(friend => {
      return {
        nickname: friend.nickname,
        userId: friend.userId
      };
    });

    return res.status(200).json(friendsList);
  }
  catch (error) {
    console.error(error);
    return next(error);
  }
});

module.exports = router;