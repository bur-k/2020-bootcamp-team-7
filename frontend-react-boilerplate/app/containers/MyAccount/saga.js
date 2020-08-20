import { call, put, select, takeLatest } from 'redux-saga/effects';
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
  try {
    const url1 = 'http://localhost:8080/api/users';
    const options1 = {
      method: 'GET',
    };
    const response1 = yield call(request, url1, options1);

    const url2 = `http://localhost:8080/api/movies/watchlist/${response1.id}`;
    const options2 = {
      method: 'GET',
    };

    const response2 = yield call(request, url2, options2);
    const responses = { ...response1, movies: response2 };

    yield put(pullAccountSuccess(responses));
  } catch (error) {
    yield put(pullAccountError(error));
  }
}

function* updateUserAccountBio() {
  const user = yield select(makeSelectUser());
  const url = `http://localhost:8080/api/users/${user.data.id}`;

  const options = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: user.data.bio,
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
