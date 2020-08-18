import { call, put, takeLatest } from 'redux-saga/effects';
import { PULL_ACCOUNT } from './constants';
import request from '../../utils/request';
import { pullAccountError, pullAccountSuccess } from './actions';

function* getUserAccount() {
  const url = 'http://localhost:8080/api/users';
  const options = { method: 'GET' };
  try {
    const response = yield call(request, url, options);
    yield put(pullAccountSuccess(response));
  } catch (error) {
    yield put(pullAccountError(error));
  }
}

export default function* userDetailsSaga() {
  yield takeLatest(PULL_ACCOUNT, getUserAccount);
}
