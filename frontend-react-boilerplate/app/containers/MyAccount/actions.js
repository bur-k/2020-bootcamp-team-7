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
  UPDATE_BIO,
  UPDATE_BIO_SUCCESS,
  UPDATE_BIO_ERROR,
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

export function updateBio() {
  return {
    type: UPDATE_BIO,
  };
}
export function updateBioSuccess(data) {
  return {
    type: UPDATE_BIO_SUCCESS,
    data,
  };
}
export function updateBioError(error) {
  return {
    type: UPDATE_BIO_ERROR,
    error,
  };
}