import client from './client';

export const requestChatLogs = (friendId) => {
  return client.get(`/chat/chatLogs/${friendId}`);
}