/*
 *
 * Discover reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  PULL_ACCOUNT,
  PULL_ACCOUNT_SUCCESS,
  PULL_ACCOUNT_ERROR,
} from './constants';

export const initialState = {
  uid: null,
  user: null,
};

/* eslint-disable default-case, no-param-reassign */
const accountReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case PULL_ACCOUNT:
        draft.id = action.id;
        break;
      case PULL_ACCOUNT_SUCCESS:
        draft.user = action.user;
        break;
      case PULL_ACCOUNT_ERROR:
        draft.error = action.error;
        break;
    }
  });

export default accountReducer;
