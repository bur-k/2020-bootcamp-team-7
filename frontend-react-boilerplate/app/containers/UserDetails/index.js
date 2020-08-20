/**
 *
 * UserDetails
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import makeSelectUserDetails, { makeSelectUserId } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { pullUser } from './actions';
import request from '../../utils/request';

export function UserDetails({ onPageLoadPullUser, userDetails }) {
  useInjectReducer({ key: 'userDetails', reducer });
  useInjectSaga({ key: 'userDetails', saga });

  const { id } = useParams();
  useEffect(() => {
    onPageLoadPullUser(id);
  }, []);

  const user =
    userDetails.user === null ? null : (
      <>
        <br />
        <span>{userDetails.user.id}</span>
        <br />
        <span>{userDetails.user.uname}</span>
        <br />
        <span>{userDetails.user.uemail}</span>
        <br />
        <span>{userDetails.user.uphoto}</span>
        <br />
        <Button
          onClick={() => {
            const options = {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            };
            request(
              `http://localhost:8080/api/social/follow/${userDetails.user.id}`,
              options,
            );
          }}
        >
          Follow
        </Button>
        <Button
          onClick={() => {
            const options = {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            };
            request(
              `http://localhost:8080/api/social/unfollow/${
                userDetails.user.id
              }`,
              options,
            );
          }}
        >
          Unfollow
        </Button>
      </>
    );

  return (
    <div>
      <Helmet>
        <title>UserDetails</title>
        <meta name="description" content="Description of UserDetails" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      {user}
    </div>
  );
}

UserDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onPageLoadPullUser: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  userDetails: makeSelectUserDetails(),
  id: makeSelectUserId(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onPageLoadPullUser: _id => dispatch(pullUser(_id)),
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
