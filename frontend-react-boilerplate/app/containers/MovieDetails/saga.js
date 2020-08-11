import { call, put, select, takeLatest } from 'redux-saga/effects';
import { PULL_MOVIE } from './constants';
import { makeSelectId } from './selectors';
import request from '../../utils/request';
import { pullMovieError, pullMovieSuccess } from './actions';

// Individual exports for testing
export default function* movieDetailsSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(PULL_MOVIE, getMovie);
}

function* getMovie() {
  const id = yield select(makeSelectId());
  const url = `http://localhost:8080/api/movies/${id}`;
  const options = { method: 'GET' };
  try {
    const movie = yield call(request, url, options);
    yield put(pullMovieSuccess(movie));
  } catch (error) {
    yield put(pullMovieError(error));
  }
}
