import { createAction, handleActions } from 'redux-actions';

import { createRequestActionTypes } from 'lib/createRequestSaga';

// action types
export const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = 
  createRequestActionTypes('auth/REGISTER');
export const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes('auth/LOGIN');

export const register = 
  createAction(REGISTER, ({ userEmail, nickname, password }) => ({
    userEmail, nickname, password
  }));

const initialState = {
  registerForm: {
    userEmail: '',
    nickname: '',
    password: '',
  },
};

export default handleActions({
  [REGISTER_SUCCESS]: (state, action) => {
    const auth = action.payload;
    return {
      ...state,
      authError: null,
      auth
    };
  },
  [REGISTER_FAILURE]: (state, action) => {
    return {
      ...state,
      
    };
  },
}, initialState);