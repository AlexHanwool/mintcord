import client from './client';

export const requestLogin = () => {

}

export const requestRegister = (payload) => {
  const { userEmail, nickname, password } = payload;
  return client.post('/auth/join', {
    userEmail, nickname, password
  });
}