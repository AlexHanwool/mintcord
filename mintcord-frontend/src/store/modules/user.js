import { createAction, handleActions } from 'redux-actions';

import { createRequestActionTypes } from 'lib/createRequestSaga';

// action types
export const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = 
  createRequestActionTypes('user/CHECK');
export const LOGOUT = createAction('user/LOGOUT');

// action creators
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);

// initial state
const initialState = {
  user: null,
  checkError: null,
};

// reducer
export default handleActions({
  [CHECK_SUCCESS]: (state, action) => {
    const user = action.payload;
    return {
      ...state,
      user
    };
  },
  [CHECK_FAILURE]: (state, action) => {
    return {
      ...state,
      user: null
    };
  },
}, initialState);