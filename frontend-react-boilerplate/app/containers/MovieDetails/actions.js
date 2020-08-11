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
