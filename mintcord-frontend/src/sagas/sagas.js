import { takeLatest } from 'redux-saga/effects';

import { REGISTER, LOGIN } from 'store/modules/auth';
import { CHECK } from 'store/modules/user';
import * as authAPI from 'lib/api/auth';
import createRequestSaga from 'lib/createRequestSaga';

const registerSaga = createRequestSaga(REGISTER, authAPI.requestRegister);
const checkSaga = createRequestSaga(CHECK, authAPI.requestCheck);
const loginSaga = createRequestSaga(LOGIN, authAPI.requestLogin);

export default function* rootSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(LOGIN, loginSaga);
}