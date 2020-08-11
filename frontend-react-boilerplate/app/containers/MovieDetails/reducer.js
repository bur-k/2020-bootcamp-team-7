/*
 *
 * MovieDetails reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  PULL_MOVIE,
  PULL_MOVIE_ERROR,
  PULL_MOVIE_SUCCESS,
} from './constants';

export const initialState = {
  movie: null,
  loading: false,
  error: false,
  id: null,
};

/* eslint-disable default-case, no-param-reassign */
const movieDetailsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case PULL_MOVIE:
        draft.movie = null;
        draft.loading = true;
        draft.error = false;
        draft.id = action.id;
        break;
      case PULL_MOVIE_SUCCESS:
        draft.movie = action.movie;
        draft.loading = false;
        draft.error = false;
        break;
      case PULL_MOVIE_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
    }
  });

export default movieDetailsReducer;
