import { eventChannel, buffers } from 'redux-saga';

const defaultMatcher = () => true;

export const createSocketChannel = (socket, eventType, buffer, matcher) => (
  eventChannel(emit => {
    const emitter = message => emit(message);

    socket.on(eventType, emitter);
    return function unsubscribe() {
      socket.off(eventType, emitter);
    }
  }, buffer || buffers.none(), matcher || defaultMatcher)
)

export function closeChannel(channel) {
  if (channel) {
    channel.close();
  }
}