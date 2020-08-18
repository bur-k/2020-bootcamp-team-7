import { call, put, select, takeLatest } from 'redux-saga/effects';
import { PULL_ACCOUNT } from './constants';
import request from '../../utils/request';
import { pullAccountError, pullAccountSuccess } from './actions';
import makeSelectUserDetails from './selectors';

function* getUserAccount() {
  const userData = yield select(makeSelectUserDetails());
  const options = { method: 'GET' };
  try {
    const response = yield call(request, url, options);
    if (response) {
      yield put(pullAccountSuccess(response));
    } else {
      yield put(pullAccountError(response));
    }
  } catch (error) {
    yield put(pullAccountError(error));
  }
}

export default function* userDetailsSaga() {
  yield takeLatest(PULL_ACCOUNT, getUserAccount);
}
