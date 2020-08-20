import { call, put, takeLatest, select } from 'redux-saga/effects';
import { PULL_ACCOUNT, UPDATE_BIO } from './constants';
import request from '../../utils/request';
import {
  pullAccountError,
  pullAccountSuccess,
  updateBioError,
  updateBioSuccess,
} from './actions';
import makeSelectUser from './selectors';

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
  const user = yield select(makeSelectUser());
  const userId = user.data.id;
  const userBio = user.data.bio;
  const url = `http://localhost:8080/api/users/${user.data.id}`;
  const body = {
    id: userId,
    ubio: userBio,
  };
  const options = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
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
