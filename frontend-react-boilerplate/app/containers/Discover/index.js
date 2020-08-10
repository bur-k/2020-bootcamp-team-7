/**
 *
 * Discover
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDiscover from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Discover() {
  useInjectReducer({ key: 'discover', reducer });
  useInjectSaga({ key: 'discover', saga });

  return (
    <div>
      <Helmet>
        <title>Discover</title>
        <meta name="description" content="Description of Discover" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Discover.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  discover: makeSelectDiscover(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
