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
  PUSH_REVIEW,
  PUSH_REVIEW_ERROR,
  PUSH_REVIEW_SUCCESS,
} from './constants';

export const initialState = {
  movie: null,
  loading: false,
  error: false,
  id: null,
  review: null,
  userReview: null,
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
      case PUSH_REVIEW:
        draft.loading = true;
        draft.error = false;
        draft.userReview = action.userReview;
        draft.review = null;
        break;
      case PUSH_REVIEW_SUCCESS:
        draft.userReview = null;
        draft.review = action.review;
        draft.loading = false;
        draft.error = false;
        break;
      case PUSH_REVIEW_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
    }
  });

export default movieDetailsReducer;
