/**
 *
 * Discover
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Button } from 'react-bootstrap';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDiscover, {
  makeSelectError,
  makeSelectLoading,
  makeSelectMovies,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { pullDiscover } from './actions';

export function Discover({ dispatch, movies, loading, error, onLoadDiscover }) {
  useInjectReducer({ key: 'discover', reducer });
  useInjectSaga({ key: 'discover', saga });

  return (
    <div>
      <Helmet>
        <title>Discover</title>
        <meta name="description" content="Description of Discover" />
      </Helmet>
      <Button
        onClick={() => {
          dispatch(pullDiscover());
          // console.log('nalskjdnhalskcdhnşaslkdıjfh');
        }}
      >
        Click me!
      </Button>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Discover.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  movies: PropTypes.object,
  onLoadDiscover: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  discover: makeSelectDiscover(),
  movies: makeSelectMovies(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onLoadDiscover: () => dispatch(pullDiscover()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Discover);
