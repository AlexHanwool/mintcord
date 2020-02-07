import client from './client';

export const requestLogin = (payload) => {
  const { userEmail, password } = payload;
  return client.post('/auth/login', {
    userEmail, password
  });
}

export const requestRegister = (payload) => {
  const { userEmail, nickname, password } = payload;
  return client.post('/auth/join', {
    userEmail, nickname, password
  });
}

export const requestCheck = () => {
  return client.get('/auth/check');
}

export const requestLogout = () => {
  return client.get('/auth/logout');
}