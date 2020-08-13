/**
 *
 * AccountDetails
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectUserDetails, {
  makeSelectUid,
  makeSelectUser,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { pullAccount } from './actions';

export function UserDetails({ onLoadUser }) {
  useInjectReducer({ key: 'userDetails', reducer });
  useInjectSaga({ key: 'userDetails', saga });

  useEffect(() => {
    onLoadUser();
  }, []);
}

UserDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  userDetails: makeSelectUserDetails(),
  user: makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onLoadUser: () => {
      dispatch(pullAccount());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(UserDetails);
