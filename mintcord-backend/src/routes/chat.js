const express = require('express');
const { Op } = require("sequelize");

const { isLoggedIn } = require('./routerMiddlewares');
const { Chatlog } = require('../../models');

const router = express.Router();

router.get('/chatLogs/:friendId', isLoggedIn, async (req, res, next) => {
  const { userId } = req.user;
  const friendId = req.params.friendId;

  try {
    const chatlogs = await Chatlog.findAll({
      where: {
        [Op.or]: [
          { senderId: userId, receiverId: friendId },
          { senderId: friendId, receiverId: userId }
        ]
      } 
    });

    return res.status(200).json(chatlogs);
  }
  catch (error) {
    console.error(error);
    return next(error);
  }
});

module.exports = router;