import { createAction, handleActions } from 'redux-actions';

// action types
export const SEND_MESSAGE = 'chat/SEND_MESSAGE';
export const RECEIVE_MESSAGE = 'chat/RECEIVE_MESSAGE';
export const GET_CHAT_LOGS = 'chat/GET_CHAT_LOGS';

// action creators
export const sendMessage = createAction(SEND_MESSAGE);
export const receiveMessage = createAction(RECEIVE_MESSAGE);
export const getChatLogs = createAction(GET_CHAT_LOGS);

const initialState = { 
  count: 0,
  
};

// reducer
export default handleActions({
  [GET_CHAT_LOGS]: (state, action) => ({
    ...state,
    count: state.count+1,
    // [action.payload]: ,
  }),
  [RECEIVE_MESSAGE]: (state, action) => {
    let newChatLogs = state.chatLogs.slice();
    newChatLogs.push(action.payload);

    return {...state, chatLogs: newChatLogs };
  },
}, initialState);