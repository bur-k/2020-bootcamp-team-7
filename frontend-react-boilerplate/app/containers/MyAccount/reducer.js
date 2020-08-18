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
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR
} from './constants';

export const initialState = {
  user: null,
  //userId: null
};

/* eslint-disable default-case, no-param-reassign */
const accountReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case PULL_ACCOUNT:
        //draft.userId = action.userId;
        draft.getUserData = action.data;
        break;
      case PULL_ACCOUNT_SUCCESS:
        //draft.userData = action.data;
        draft.getUserResponse = action.data;
        break;
      case PULL_ACCOUNT_ERROR:
        //draft.error = action.error;
        draft.getUserError = action.error;
        break;
      case CREATE_USER:
        draft.createUserData = action.data;
        break;
      case CREATE_USER_SUCCESS:
        draft.createUserRespose = action.data;
        break;
      case CREATE_USER_ERROR:
        draft.createUserError = action.error;
        break;
    }
  });

export default accountReducer;
