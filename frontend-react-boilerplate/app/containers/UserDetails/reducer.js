/*
 *
 * UserDetails reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  PULL_USER,
  PULL_USER_ERROR,
  PULL_USER_SUCCESS,
} from './constants';

export const initialState = {
  user: null,
};

/* eslint-disable default-case, no-param-reassign */
const userDetailsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case PULL_USER:
        draft.user = null;
        draft.id = action.id;
        break;
      case PULL_USER_SUCCESS:
        draft.user = action.user;
        break;
      case PULL_USER_ERROR:
        draft.error = action.error;
        break;
    }
  });

export default userDetailsReducer;
