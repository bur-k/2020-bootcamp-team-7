import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { PULL_USER } from './constants';
import { makeSelectUserId } from './selectors';
import request from '../../utils/request';
import { pullUserError, pullUserSuccess } from './actions';

// Individual exports for testing
export default function* userDetailsSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(PULL_USER, getUserDetails);
}

function* getUserDetails() {
  const _id = yield select(makeSelectUserId());
  const url = `http://localhost:8080/api/users/${_id}`;
  const options = { method: 'GET' };
  try {
    const user = yield call(request, url, options);
    yield put(pullUserSuccess(user));
  } catch (error) {
    yield put(pullUserError(error));
  }
}
