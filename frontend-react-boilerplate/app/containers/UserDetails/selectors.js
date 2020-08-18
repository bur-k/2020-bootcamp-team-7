import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the userDetails state domain
 */

const selectUserDetailsDomain = state => state.userDetails || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by UserDetails
 */

const makeSelectUserDetails = () =>
  createSelector(
    selectUserDetailsDomain,
    substate => substate,
  );

const makeSelectUserId = () =>
  createSelector(
    selectUserDetailsDomain,
    substate => substate.id,
  );

export default makeSelectUserDetails;
export { selectUserDetailsDomain, makeSelectUserId };
