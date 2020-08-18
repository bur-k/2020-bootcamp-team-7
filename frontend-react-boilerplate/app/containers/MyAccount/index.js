/**
 *
 * AccountDetails
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Card, FormControl, Image, InputGroup } from 'react-bootstrap';
import makeSelectUserDetails from './selectors';
import reducer from './reducer';
import saga from './saga';
import { pullAccount } from './actions';
import './style.css';

export function UserDetails({ onLoadUser }) {
  useInjectReducer({ key: 'userDetails', reducer });
  useInjectSaga({ key: 'userDetails', saga });

  useEffect(() => {
    onLoadUser(global);
  }, []);

  return (
    <div style={{ height: '100%' }}>
      <div className="container-center">
        <Image
          className="profile-pic"
          variant="top"
          src={`${onLoadUser.profilePhoto}`}
          style={{ width: '30%', height: '30%' }}
        />
      </div>
      <Card
        style={{
          width: '80%',
          height: '100%',
          marginRight: 'auto',
          marginLeft: 'auto',
          marginTop: '-10%',
          zIndex: '-1',
        }}
      >
        <Card.Body>
          <div style={{ width: '30%', height: '70%', zIndex: '0' }}>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>BIO</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl as="textarea" aria-label="With textarea">
                hello
              </FormControl>
            </InputGroup>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

UserDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object,
  onLoadUser: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  userDetails: makeSelectUserDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onLoadUser: data => {
      dispatch(pullAccount(data));
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
