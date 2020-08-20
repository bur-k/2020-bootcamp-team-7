import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the userDetails state domain
 */

const selectMyAccountDomain = state => state.myAccount || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MyAccount
 */

const makeSelectMyAccount = () =>
  createSelector(
    selectMyAccountDomain,
    substate => substate,
  );

const makeSelectUser = () =>
  createSelector(
    selectMyAccountDomain,
    substate => substate.data,
  );

export default makeSelectMyAccount;
export { selectMyAccountDomain, makeSelectUser };
