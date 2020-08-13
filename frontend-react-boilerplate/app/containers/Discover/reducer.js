/*
 *
 * Discover reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  PULL_DISCOVER,
  PULL_DISCOVER_SUCCESS,
  PULL_DISCOVER_ERROR,
} from './constants';

export const initialState = {
  movies: null,
  loading: false,
  error: false,
  page: 1,
};

/* eslint-disable default-case, no-param-reassign */
const discoverReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case PULL_DISCOVER:
        draft.loading = true;
        draft.error = false;
        draft.movies = null;
        draft.page = action.page;
        break;
      case PULL_DISCOVER_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.movies = action.movies;
        break;
      case PULL_DISCOVER_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
    }
  });

export default discoverReducer;
