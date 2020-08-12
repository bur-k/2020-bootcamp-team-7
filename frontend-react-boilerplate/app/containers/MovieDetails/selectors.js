import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the movieDetails state domain
 */

const selectMovieDetailsDomain = state => state.movieDetails || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MovieDetails
 */

const makeSelectMovieDetails = () =>
  createSelector(
    selectMovieDetailsDomain,
    substate => substate,
  );

const makeSelectMovie = () =>
  createSelector(
    selectMovieDetailsDomain,
    substate => substate.movie,
  );

const makeSelectId = () =>
  createSelector(
    selectMovieDetailsDomain,
    substate => substate.id,
  );

const makeSelectLoading = () =>
  createSelector(
    selectMovieDetailsDomain,
    substate => substate.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectMovieDetailsDomain,
    substate => substate.error,
  );

const makeSelectUserReview = () =>
  createSelector(
    selectMovieDetailsDomain,
    substate => substate.userReview,
  );

const makeSelectReview = () =>
  createSelector(
    selectMovieDetailsDomain,
    substate => substate.review,
  );
export default makeSelectMovieDetails;
export {
  selectMovieDetailsDomain,
  makeSelectMovie,
  makeSelectLoading,
  makeSelectError,
  makeSelectId,
  makeSelectUserReview,
  makeSelectReview,
};
