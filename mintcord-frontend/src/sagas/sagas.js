import { call, put, takeLatest } from 'redux-saga/effects';

import { REGISTER, LOGIN, LOGOUT } from 'store/modules/auth';
import { CHECK } from 'store/modules/user';
import * as authAPI from 'lib/api/auth';
import createRequestSaga from 'lib/createRequestSaga';
import { startLoading, finishLoading } from 'store/modules/loading';

const registerSaga = createRequestSaga(REGISTER, authAPI.requestRegister);
// const checkSaga = createRequestSaga(CHECK, authAPI.requestCheck);
const loginSaga = createRequestSaga(LOGIN, authAPI.requestLogin);

function* logoutSaga() {
  try {
    yield call(authAPI.requestLogout);
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

export default function* rootSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}