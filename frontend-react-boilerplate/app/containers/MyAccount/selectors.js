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
 * Default selector used by MyAccount
 */

const makeSelectUserDetails = () =>
  createSelector(
    selectUserDetailsDomain,
    substate => substate,
  );

const makeSelectUser = () =>
  createSelector(
    selectUserDetailsDomain,
    substate => substate.user,
  );

const makeSelectUid = () =>
  createSelector(
    selectUserDetailsDomain,
    substate => substate.uid,
  );

export default makeSelectUserDetails;
export {
  selectUserDetailsDomain,
  makeSelectUser,
  makeSelectUid,
};
