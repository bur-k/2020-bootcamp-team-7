/*
 *
 * Account actions
 *
 */

import {
  DEFAULT_ACTION,
  PULL_ACCOUNT,
  PULL_ACCOUNT_SUCCESS,
  PULL_ACCOUNT_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function pullAccount() {
  return {
    type: PULL_ACCOUNT,
  };
}
export function pullAccountSuccess(user) {
  return {
    type: PULL_ACCOUNT_SUCCESS,
    user,
  };
}
export function pullAccountError(error) {
  return {
    type: PULL_ACCOUNT_ERROR,
    error,
  };
}
