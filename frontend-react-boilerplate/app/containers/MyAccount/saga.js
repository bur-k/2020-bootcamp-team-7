import { call, put, select, takeLatest } from 'redux-saga/effects';
import { PULL_MOVIE, PULL_REVIEW, PUSH_REVIEW } from './constants';
import { makeSelectId, makeSelectUserReview } from './selectors';
import request from '../../utils/request';
import {
  pullAccountError,
  pullAccountSuccess,
} from './actions';

// Individual exports for testing
export default function* userDetailsSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(PULL_ACCOUNT, getUser);
}

function* getUser() {
  const uid = yield select(makeSelectId());
  const url = `http://localhost:8080/account/${uid}`;
  const options = { method: 'GET' };
  try {
    const user = yield call(request, url, options);
    yield put(pullAccountSuccess(user));
  } catch (error) {
    yield put(pullAccountError(error));
  }
}

