import { createAction, handleActions } from 'redux-actions';

// action types
export const SEND_MESSAGE = 'chat/SEND_MESSAGE';
export const RECEIVE_MESSAGE = 'chat/RECEIVE_MESSAGE';

// action creators
export const sendMessage = createAction(SEND_MESSAGE);
export const receiveMessage = createAction(RECEIVE_MESSAGE);

const initialState = {
  chatLogs: [
    { sender: 'system', message: 'hello, mint chat!' }
  ],
  users: [],
};

// reducer
export default handleActions({
  [SEND_MESSAGE]: (state, action) => {
    return state;
  },
  [RECEIVE_MESSAGE]: (state, action) => {
    let newChatLogs = state.chatLogs.slice();
    newChatLogs.push(action.payload);

    return {...state, chatLogs: newChatLogs };
  },
}, initialState);