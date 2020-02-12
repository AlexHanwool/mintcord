import { createAction, handleActions } from 'redux-actions';

import { createRequestActionTypes } from 'lib/createRequestSaga';

// action types
export const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = 
  createRequestActionTypes('auth/REGISTER');
export const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes('auth/LOGIN');
const INITIALIZE_AUTH = 'auth/INITIALIZE_AUTH';
export const LOGOUT = 'auth/LOGOUT';


export const register = 
  createAction(REGISTER, ({ userEmail, nickname, password }) => ({
    userEmail, nickname, password
  }));
export const login = 
  createAction(LOGIN, ({ userEmail, password }) => ({
    userEmail, password
  }));
export const initializeAuth = createAction(INITIALIZE_AUTH);
export const logout = createAction(LOGOUT);


const initialState = {
  auth: false,
  authError: null,
};

export default handleActions({
  [REGISTER_SUCCESS]: (state, action) => {
    return {
      ...state,
      authError: null,
    };
  },
  [REGISTER_FAILURE]: (state, { payload: error }) => {
    return {
      ...state,
      authError: error
    };
  },
  [LOGIN_SUCCESS]: (state, action) => {
    // const auth = action.payload;
    return {
      ...state,
      authError: null,
      auth: true
    }
  },
  [LOGIN_FAILURE]: (state, action) => {
    const error = action.payload; // same as REGISTER_FAILURE
    return {
      ...state,
      authError: error
    }
  },
  [INITIALIZE_AUTH]: (state, action) => {
    return {
      ...state,
      authError: null,
    }
  },
  [LOGOUT]: (state, action) => {
    return {
      ...state,
      auth: false
    }
  }
}, initialState);