import { createAction, handleActions } from 'redux-actions';

import { createRequestActionTypes } from 'lib/createRequestSaga';

// action types
export const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = 
  createRequestActionTypes('auth/REGISTER');
export const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes('auth/LOGIN');
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

export const register = 
  createAction(REGISTER, ({ userEmail, nickname, password }) => ({
    userEmail, nickname, password
  }));
export const login = 
  createAction(LOGIN, ({ userEmail, password }) => ({
    userEmail, password
  }));
export const initializeForm = createAction(INITIALIZE_FORM);

const initialState = {
  auth: null,
  authError: null,
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
    const error = action.payload.stack;
    return {
      ...state,
      authError: error
    };
  },
  [LOGIN_SUCCESS]: (state, action) => {
    const auth = action.payload;
    return {
      ...state,
      authError: null,
      auth,
    }
  },
  [LOGIN_FAILURE]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      authError: error
    }
  },
  [INITIALIZE_FORM]: (state, action) => {
    return {
      ...state,
      authError: null
    }
  }
}, initialState);