const SocketIO = require('socket.io');

module.exports = (server, app, sessionMiddleware) => {
  const io = SocketIO(server, { path: '/socket.io' });

  app.set('io', io);
  io.use((socket, next) => {
    sessionMiddleware(socket.request, socket.request.res, next);
  });
}