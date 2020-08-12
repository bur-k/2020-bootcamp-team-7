/*
 *
 * MovieDetails actions
 *
 */

import {
  DEFAULT_ACTION,
  PULL_MOVIE,
  PULL_MOVIE_SUCCESS,
  PULL_MOVIE_ERROR,
  PUSH_REVIEW,
  PUSH_REVIEW_SUCCESS,
  PUSH_REVIEW_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function pullMovie(id) {
  return {
    type: PULL_MOVIE,
    id,
  };
}

export function pullMovieSuccess(movie) {
  return {
    type: PULL_MOVIE_SUCCESS,
    movie,
  };
}

export function pullMovieError(error) {
  return {
    type: PULL_MOVIE_ERROR,
    error,
  };
}

export function pushReview(userReview) {
  return {
    type: PUSH_REVIEW,
    userReview,
  };
}
export function pushReviewSuccess(review) {
  return {
    type: PUSH_REVIEW_SUCCESS,
    review,
  };
}
export function pushReviewError(error) {
  return {
    type: PUSH_REVIEW_ERROR,
    error,
  };
}
