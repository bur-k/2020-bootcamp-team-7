import { call, put, takeLatest, select } from 'redux-saga/effects';
import { pullDiscoverError, pullDiscoverSuccess } from './actions';
import request from '../../utils/request';
import { PULL_DISCOVER } from './constants';
import { makeSelectPage } from './selectors';

function* getMovies() {
  const page = yield select(makeSelectPage());
  const url = `http://localhost:8080/api/movies/discover/${page}`;
  const options = { method: 'GET' };
  try {
    const movies = yield call(request, url, options);
    yield put(pullDiscoverSuccess(movies));
  } catch (error) {
    yield put(pullDiscoverError(error));
  }
}

export default function* discoverSaga() {
  yield takeLatest(PULL_DISCOVER, getMovies);
}
