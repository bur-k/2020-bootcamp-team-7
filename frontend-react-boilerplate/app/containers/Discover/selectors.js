import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the discover state domain
 */

const selectDiscoverDomain = state => state.discover || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Discover
 */

const makeSelectDiscover = () =>
  createSelector(
    selectDiscoverDomain,
    substate => substate,
  );

export default makeSelectDiscover;
export { selectDiscoverDomain };
