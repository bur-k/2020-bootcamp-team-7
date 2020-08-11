/*
 *
 * Discover actions
 *
 */

import {
  DEFAULT_ACTION,
  PULL_DISCOVER,
  PULL_DISCOVER_SUCCESS,
  PULL_DISCOVER_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function pullDiscover() {
  return {
    type: PULL_DISCOVER,
  };
}
export function pullDiscoverSuccess(movies) {
  return {
    type: PULL_DISCOVER_SUCCESS,
    movies,
  };
}
export function pullDiscoverError(error) {
  return {
    type: PULL_DISCOVER_ERROR,
    error,
  };
}
