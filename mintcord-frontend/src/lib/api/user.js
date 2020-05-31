import client from './client';

export const requestAddFriend = (payload) => {
  return client.post('/user/addFriend', payload);
}

export const requestRemoveFriend = (payload) => {
  return client.post('/user/removeFriend', payload);
}

export const requestFriendsList = () => {
  return client.get('/user/getFriendsList');
}