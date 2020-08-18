/*
 *
 * UserDetails actions
 *
 */

import {
  DEFAULT_ACTION,
  PULL_USER,
  PULL_USER_ERROR,
  PULL_USER_SUCCESS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function pullUser(id) {
  return {
    type: PULL_USER,
    id,
  };
}

export function pullUserSuccess(user) {
  return {
    type: PULL_USER_SUCCESS,
    user,
  };
}

export function pullUserError(error) {
  return {
    type: PULL_USER_ERROR,
    error,
  };
}
