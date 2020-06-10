import { call, put, takeLatest, take, fork } from 'redux-saga/effects';

import * as authAPI from 'lib/api/auth';
import * as userAPI from 'lib/api/user';
import * as chatAPI from 'lib/api/chat';
import createRequestSaga from 'lib/createRequestSaga';
import connect from 'lib/socket';

import { createSocketChannel } from './createSocketChannel';

import { REGISTER, LOGIN, LOGOUT } from 'store/modules/auth';
import { CHECK, ADD_FRIEND, GET_FRIENDS_LIST, REMOVE_FRIEND } from 'store/modules/user';
import { startLoading, finishLoading } from 'store/modules/loading';
import { CONNECT_SOCKET, SEND_MESSAGE, RECEIVE_MESSAGE, MESSAGE_COMMITTED, GET_CHAT_LOGS } from 'store/modules/chat';

const registerSaga = createRequestSaga(REGISTER, authAPI.requestRegister);
const loginSaga = createRequestSaga(LOGIN, authAPI.requestLogin);
const addFriendSaga = createRequestSaga(ADD_FRIEND, userAPI.requestAddFriend);
const removeFriendSaga = createRequestSaga(REMOVE_FRIEND, userAPI.requestRemoveFriend);
const getFriendsListSaga = createRequestSaga(GET_FRIENDS_LIST, userAPI.requestFriendsList);

function* logoutSaga() {
  try {
    yield call(authAPI.requestLogout);
    // TODO: disconnect socket
  }
  catch (error) {
    console.log(error);
  }
}

function* checkSaga(action) {
  const SUCCESS = `${CHECK}_SUCCESS`;
  const LOGIN_SUCCESS = `${LOGIN}_SUCCESS`;
  const FAILURE = `${CHECK}_FAILURE`;

  yield put(startLoading(CHECK));
  try {
    const response = yield call(authAPI.requestCheck, action.payload);
    yield put({
      type: SUCCESS,
      payload: response.data
    });
    yield put({
      type: LOGIN_SUCCESS
    });
    yield put({
      type: CONNECT_SOCKET
    });
  }
  catch (error) {
    yield put({
      type: FAILURE,
      payload: error,
      error: true
    });
  }
  yield put(finishLoading(CHECK));
}

function* getChatLogsSaga(action) {
  const SUCCESS = `${GET_CHAT_LOGS}_SUCCESS`;
  const FAILURE = `${GET_CHAT_LOGS}_FAILURE`;
  yield put(startLoading(GET_CHAT_LOGS));
  try {
    const response = yield call(chatAPI.requestChatLogs, action.payload);
    const friendId = action.payload;
    yield put({
      type: SUCCESS,
      payload: {
        friendId,
        chatlogs: response.data
      }
    });
  }
  catch (error) {
    yield put({
      type: FAILURE,
      payload: error,
      error: true
    });
  }
  yield put(finishLoading(GET_CHAT_LOGS));
}

function* onMessage(socket, type) {
  const channel = yield call(createSocketChannel, socket, type);

  while (true) {
    try {
      const payload = yield take(channel);
      yield put({ type, payload });
    } 
    catch (error) {
      console.error(error);
    }
  }
}

function* sendMessageSaga(socket, type) {
  while (true) {
    const { payload } = yield take(SEND_MESSAGE);
    socket.emit(type, payload);
  }
}

function* connectSocketSaga() {
  const socket = yield call(connect);
  yield fork(sendMessageSaga, socket, 'chat-msg-client');
  yield fork(onMessage, socket, RECEIVE_MESSAGE);
  yield fork(onMessage, socket, MESSAGE_COMMITTED);
}

export default function* rootSaga() {
  // move this to store configure step?
  
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(LOGOUT, logoutSaga);
  yield takeLatest(ADD_FRIEND, addFriendSaga);
  yield takeLatest(REMOVE_FRIEND, removeFriendSaga);
  yield takeLatest(GET_FRIENDS_LIST, getFriendsListSaga);
  yield takeLatest(GET_CHAT_LOGS, getChatLogsSaga);

  yield takeLatest(CONNECT_SOCKET, connectSocketSaga);
}