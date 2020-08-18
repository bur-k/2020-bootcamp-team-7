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
} from './constants';

export const initialState = {
  user: null,
};

/* eslint-disable default-case, no-param-reassign */
const accountReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case PULL_ACCOUNT:
        break;
      case PULL_ACCOUNT_SUCCESS:
        draft.data = action.data;
        break;
      case PULL_ACCOUNT_ERROR:
        break;
    }
  });

export default accountReducer;
