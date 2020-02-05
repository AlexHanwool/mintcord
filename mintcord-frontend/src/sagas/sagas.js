import { takeLatest } from 'redux-saga/effects';

import { REGISTER } from 'store/modules/auth';
import * as authAPI from 'lib/api/auth';
import createRequestSaga from 'lib/createRequestSaga';

const registerSaga = createRequestSaga(REGISTER, authAPI.requestRegister);

export default function* rootSaga() {
  yield takeLatest(REGISTER, registerSaga);
}