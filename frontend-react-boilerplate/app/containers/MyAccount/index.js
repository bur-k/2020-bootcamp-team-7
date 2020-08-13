/**
 *
 * AccountDetails
 *
 */

import React, { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  Accordion,
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  NavLink,
  Row,
  Table,
} from 'react-bootstrap';
import makeSelectUserDetails, {
  makeSelectUid,
  makeSelectUser,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { pullMovie, pullReview, pushReview } from './actions';

export function UserDetails({
  user,
}) {
  useInjectReducer({ key: 'userDetails', reducer });
  useInjectSaga({ key: 'userDetails', saga });

  useEffect(() => {
    onLoadUser(uid);
  }, []);

}

UserDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  userDetails: makeSelectUserDetails(),
  user: makeSelectUser(),
  uid: makeSelectUid(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onLoadUser: uid => {
      dispatch(pullUser(uid));
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
