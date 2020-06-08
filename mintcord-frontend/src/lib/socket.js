import socketio from 'socket.io-client';

const connect = () => {
  const socket = socketio.connect('http://localhost:8000');
  
  return new Promise(resolve => {
    socket.on('connect', () => {
      console.log('socket connect');
      resolve(socket);
    });
  })
}

export default connect;