import { call, put, select, takeLatest } from 'redux-saga/effects';
import { PULL_MOVIE, PULL_REVIEW, PUSH_REVIEW } from './constants';
import { makeSelectId, makeSelectUserReview } from './selectors';
import request from '../../utils/request';
import {
  pullMovieError,
  pullMovieSuccess,
  pullReviewError,
  pullReviewSuccess,
  pushReviewError,
  pushReviewSuccess,
} from './actions';

// Individual exports for testing
export default function* movieDetailsSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(PULL_MOVIE, getMovie);
  yield takeLatest(PULL_REVIEW, getReview);
  yield takeLatest(PUSH_REVIEW, postUserReview);
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

function* getReview() {
  const id = yield select(makeSelectId());
  const url = `http://localhost:8080/api/reviews/${id}`;
  const options = { method: 'GET' };
  try {
    const movie = yield call(request, url, options);
    yield put(pullReviewSuccess(movie));
  } catch (error) {
    yield put(pullReviewError());
  }
}

function* postUserReview() {
  const id = yield select(makeSelectId());
  const userReview = yield select(makeSelectUserReview());
  const url = `http://localhost:8080/api/reviews/${id}`;
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...userReview }),
  };
  try {
    const review = yield call(request, url, options);
    yield put(pushReviewSuccess(review));
  } catch (error) {
    yield put(pushReviewError(error));
  }
}
