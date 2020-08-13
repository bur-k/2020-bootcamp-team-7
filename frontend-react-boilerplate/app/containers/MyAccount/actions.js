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
  export function pullAccount(uid) {
    return {
      type: PULL_ACCOUNT,
      uid,
    };
  }
  export function pullAccountSuccess(uid) {
    return {
      type: PULL_ACCOUNT_SUCCESS,
      uid,
    };
  }
  export function pullAccountError(error) {
    return {
      type: PULL_ACCOUNT_ERROR,
      error,
    };
  }
  