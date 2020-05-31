import { createAction, handleActions } from 'redux-actions';

import { createRequestActionTypes } from 'lib/createRequestSaga';

// action types
export const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = 
  createRequestActionTypes('user/CHECK');
const INITIALIZE_USER = 'user/INITIALIZE_USER';
export const ADD_FRIEND = 'user/ADD_FRIEND';
export const [REMOVE_FRIEND, REMOVE_FRIEND_SUCCESS, REMOVE_FRIEND_FAILURE] = 
  createRequestActionTypes('user/REMOVE_FRIEND');
export const [GET_FRIENDS_LIST, GET_FRIENDS_LIST_SUCCESS, GET_FRIENDS_LIST_FAILURE] = 
  createRequestActionTypes('user/GET_FRIENDS_LIST');

// action creators
export const check = createAction(CHECK);
export const initializeUser = createAction(INITIALIZE_USER);
export const addFriend = createAction(ADD_FRIEND);
export const removeFriend = createAction(REMOVE_FRIEND);
export const getFriendsList = createAction(GET_FRIENDS_LIST);

// initial state
const initialState = {
  user: null,
  isChecked: false, // toggle once at initial check
  checkError: null,
  friendsList: [],
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
  },
  [GET_FRIENDS_LIST_SUCCESS]: (state, action) => {
    const friendsList = action.payload;
    return {
      ...state,
      friendsList
    };
  }
}, initialState);