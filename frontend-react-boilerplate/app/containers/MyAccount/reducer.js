/*
 *
 * Discover reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  PULL_ACCOUNT,
  PULL_ACCOUNT_ERROR,
  PULL_ACCOUNT_SUCCESS,
  UPDATE_BIO,
  UPDATE_BIO_ERROR,
  UPDATE_BIO_SUCCESS,
} from './constants';

export const initialState = {
  data: null,
};

/* eslint-disable default-case, no-param-reassign */
const accountReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case PULL_ACCOUNT:
        draft.data = null;
        break;
      case PULL_ACCOUNT_SUCCESS:
        draft.data = action.data;
        break;
      case PULL_ACCOUNT_ERROR:
        break;
      case UPDATE_BIO:
        draft.data = { ...draft.data, user: action.data };
        break;
      case UPDATE_BIO_SUCCESS:
        draft.data = { ...draft.data, user: action.data };
        break;
      case UPDATE_BIO_ERROR:
        break;
    }
  });

export default accountReducer;
