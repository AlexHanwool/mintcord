const SocketIO = require('socket.io');
const chalk = require('chalk');

const { User, Chatlog } = require('../models');

const connectedUsers = {};

module.exports = (server, app, sessionMiddleware) => {
  const io = SocketIO(server, { path: '/socket.io' });

  app.set('io', io);
  io.use((socket, next) => {
    sessionMiddleware(socket.request, socket.request.res, next);
  });

  io.on('connection', (socket) => {
    console.log(chalk.green(`socket connected: ${chalk.blue(socket.client.id)}`));
    // console.log(connectedUsers);

    if (!socket.request.session.passport) {
      console.log(chalk.red('undefined user!'));
      // do not works...
      socket.disconnect(true);
      return;
    }
    const senderId = socket.request.session.passport.user;
    connectedUsers[senderId] = socket.client.id;

    socket.on('chat-msg-client', async (payload) => {
      const { receiverId, message } = payload;

      try {
        await Chatlog.create({
          senderId,
          receiverId,
          messageContent: message
        }).then(chatlog => {
          if (connectedUsers[receiverId]) {
            socket.to(connectedUsers[receiverId]).emit('chat-msg-server', chatlog);
          }
        });
      }
      catch (error) {
        console.error(error);
        return next(error);
      }
    });

    socket.on('disconnect', () => {
      console.log('socket disconnect!');
      delete connectedUsers[senderId];
    })
  });
}