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

const makeSelectMovies = () =>
  createSelector(
    selectDiscoverDomain,
    substate => substate.movies,
  );

const makeSelectError = () =>
  createSelector(
    selectDiscoverDomain,
    substate => substate.error,
  );

const makeSelectLoading = () =>
  createSelector(
    selectDiscoverDomain,
    substate => substate.loading,
  );

export default makeSelectDiscover;
export {
  selectDiscoverDomain,
  makeSelectMovies,
  makeSelectLoading,
  makeSelectError,
};
