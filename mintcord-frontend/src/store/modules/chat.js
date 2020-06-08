import { createAction, handleActions } from 'redux-actions';

import { createRequestActionTypes } from 'lib/createRequestSaga';

// action types
export const CONNECT_SOCKET = 'chat/CONNECT_SOCKET';
export const SEND_MESSAGE = 'chat/SEND_MESSAGE';
export const RECEIVE_MESSAGE = 'chat/RECEIVE_MESSAGE';
export const [GET_CHAT_LOGS, GET_CHAT_LOGS_SUCCESS, GET_CHAT_LOGS_FAILURE] = 
  createRequestActionTypes('chat/GET_CHAT_LOGS');

// action creators
export const connectSocket = createAction(CONNECT_SOCKET);
export const sendMessage = createAction(SEND_MESSAGE);
export const receiveMessage = createAction(RECEIVE_MESSAGE);
export const getChatLogs = createAction(GET_CHAT_LOGS);

const initialState = { 
  // count: 0,
  
};

// reducer
export default handleActions({
  [GET_CHAT_LOGS_SUCCESS]: (state, action) => {
    const { friendId, chatlogs } = action.payload;
    // console.log(action.payload);
    return {
      ...state,
      [friendId]: chatlogs
    };
  },
  [RECEIVE_MESSAGE]: (state, action) => {
    const { senderId } = action.payload;
    let newChatLogs;
    // console.log(action.payload);
    if (state[senderId]) {
      newChatLogs = state[senderId].slice();
      newChatLogs.push(action.payload);
    }
    else {
      newChatLogs = [action.payload];
    }

    return {
      ...state,
      [senderId]: newChatLogs
    };
  },
}, initialState);