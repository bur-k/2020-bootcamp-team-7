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
export function pullAccount(data) {
  return {
    type: PULL_ACCOUNT,
    data,
  };
}
export function pullAccountSuccess(data) {
  return {
    type: PULL_ACCOUNT_SUCCESS,
    data,
  };
}
export function pullAccountError(error) {
  return {
    type: PULL_ACCOUNT_ERROR,
    error,
  };
}
