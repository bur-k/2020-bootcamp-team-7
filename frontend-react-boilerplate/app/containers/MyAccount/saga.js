import { call, put, takeLatest, select } from 'redux-saga/effects';
import { PULL_ACCOUNT, UPDATE_BIO } from './constants';
import request from '../../utils/request';
import {
  pullAccountError,
  pullAccountSuccess,
  updateBioError,
  updateBioSuccess,
} from './actions';
import makeSelectUserDetails from './selectors';

function* getUserAccount() {
  const url = 'http://localhost:8080/api/users';
  const options = {
    method: 'GET',
  };
  try {
    const response = yield call(request, url, options);
    yield put(pullAccountSuccess(response));
  } catch (error) {
    yield put(pullAccountError(error));
  }
}

function* updateUserAccountBio() {
  const user = yield select(makeSelectUserDetails());
  const body = user.ubio;
  const url = `http://localhost:8080/api/users/${user.id}`;
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...body,
    }),
  };
  try {
    const bio = yield call(request, url, options);
    yield put(updateBioSuccess(bio));
  } catch (error) {
    yield put(updateBioError(error));
  }
}

export default function* userDetailsSaga() {
  yield takeLatest(PULL_ACCOUNT, getUserAccount);
  yield takeLatest(UPDATE_BIO, updateUserAccountBio);
}
