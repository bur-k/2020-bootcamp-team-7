import { call, put, select, takeLatest } from 'redux-saga/effects';
import { PULL_ACCOUNT } from './constants';
import request from '../../utils/request';
import { pullAccountError, pullAccountSuccess } from './actions';

// Individual exports for testing
export default function* userDetailsSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(PULL_ACCOUNT, getUser);
}

function* getUser() {
  const url = 'http://localhost:8080/api/users';
  const options = { method: 'GET' };
  try {
    const user = yield call(request, url, options);
    yield put(pullAccountSuccess(user));
  } catch (error) {
    yield put(pullAccountError(error));
  }
}
