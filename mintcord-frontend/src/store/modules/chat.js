import { createAction, handleActions } from 'redux-actions';

import { createRequestActionTypes } from 'lib/createRequestSaga';

// action types
export const SEND_MESSAGE = 'chat/SEND_MESSAGE';
export const RECEIVE_MESSAGE = 'chat/RECEIVE_MESSAGE';
export const [GET_CHAT_LOGS, GET_CHAT_LOGS_SUCCESS, GET_CHAT_LOGS_FAILURE] = 
  createRequestActionTypes('chat/GET_CHAT_LOGS');

// action creators
export const sendMessage = createAction(SEND_MESSAGE);
export const receiveMessage = createAction(RECEIVE_MESSAGE);
export const getChatLogs = createAction(GET_CHAT_LOGS);

const initialState = { 
  // count: 0,
  
};

// reducer
export default handleActions({
  [GET_CHAT_LOGS]: (state, action) => ({
    ...state,
    // [action.payload]: ,
  }),
  [RECEIVE_MESSAGE]: (state, action) => {
    let newChatLogs = state.chatLogs.slice();
    newChatLogs.push(action.payload);

    return {...state, chatLogs: newChatLogs };
  },
}, initialState);