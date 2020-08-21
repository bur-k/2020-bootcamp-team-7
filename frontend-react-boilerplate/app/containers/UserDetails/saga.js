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
  try {
    const url1 = 'http://localhost:8080/api/users';
    const options = {
      method: 'GET',
    };
    const response1 = yield call(request, url1, options);

    const url2 = `http://localhost:8080/api/movies/watchlist/${response1.id}`;
    const response2 = yield call(request, url2, options);

    const url3 = `http://localhost:8080/api/movies/watchedlist/${response1.id}`;
    const response3 = yield call(request, url3, options);

    const url4 = `http://localhost:8080/api/social/${response1.id}`;
    const response4 = yield call(request, url4, options);

    const responses = {
      ...response1,
      toWatchMovies: response2,
      watchedMovies: response3,
      social: response4,
    };

    yield put(pullUserSuccess(responses));
  } catch (error) {
    yield put(pullUserError(error));
  }
}
