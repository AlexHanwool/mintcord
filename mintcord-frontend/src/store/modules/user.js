import { createAction, handleActions } from 'redux-actions';

import { createRequestActionTypes } from 'lib/createRequestSaga';

// action types
export const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = 
  createRequestActionTypes('user/CHECK');
const INITIALIZE_USER = 'user/INITIALIZE_USER';

// action creators
export const check = createAction(CHECK);
export const initializeUser = createAction(INITIALIZE_USER);

// initial state
const initialState = {
  user: null,
  isChecked: false, // toggle once at initial check
  checkError: null,
};

// reducer
export default handleActions({
  [CHECK_SUCCESS]: (state, action) => {
    const user = action.payload;
    return {
      ...state,
      user,
      checkError: null
    };
  },
  [CHECK_FAILURE]: (state, action) => {
    const error = action.payload;
    return {
      ...state,
      user: null,
      checkError: error
    };
  },
  [INITIALIZE_USER]: (state, action) => {
    return {
      ...state,
      user: null,
      checkError: null
    };
  }
}, initialState);