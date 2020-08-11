import { call, put, takeLatest } from 'redux-saga/effects';
import { pullDiscoverError, pullDiscoverSuccess } from './actions';
import request from '../../utils/request';
import { PULL_DISCOVER } from './constants';

function* pullMovies() {
  const url = 'http://localhost:8080/api/movies/discover';
  const options = { method: 'GET' };
  try {
    const movies = yield call(request, url, options);
    yield put(pullDiscoverSuccess(movies));
  } catch (error) {
    yield put(pullDiscoverError(error));
  }
}

export default function* discoverSaga() {
  yield takeLatest(PULL_DISCOVER, pullMovies);
}
