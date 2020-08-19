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
import {
  Button,
  Card,
  Form,
  FormControl,
  Image,
  InputGroup,
} from 'react-bootstrap';
import makeSelectUserDetails from './selectors';
import reducer from './reducer';
import saga from './saga';
import { pullAccount, updateBio } from './actions';
import './style.css';

export function UserDetails({ onLoadUser, data, onChangeBio }) {
  useInjectReducer({ key: 'userDetails', reducer });
  useInjectSaga({ key: 'userDetails', saga });

  useEffect(() => {
    onLoadUser();
  }, []);

  const [_userBio, setUserBio] = useState({
    bio: '',
  });

  const userData =
    data.data == null ? null : (
      <Image
        className="profile-pic"
        variant="top"
        src={data.data.uphoto}
        style={{ width: '30%', height: '30%' }}
      />
    );

  return (
    <div style={{ height: '100%' }}>
      <div className="container-center">{userData}</div>
      <Card
        style={{
          width: '80%',
          height: '100%',
          marginRight: 'auto',
          marginLeft: 'auto',
          marginTop: '-10%',
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
            <Form
              onSubmit={e => {
                e.preventDefault();
                onChangeBio(_userBio);
                setUserBio({
                  bio: '',
                });
              }}
            >
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>BIO</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  value={_userBio.bio}
                  onChange={e => {
                    setUserBio({
                      ..._userBio.bio,
                      bio: e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>

              <Button type="submit">Update Bio</Button>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

UserDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.object,
  onLoadUser: PropTypes.func,
  onChangeBio: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectUserDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onLoadUser: data => {
      dispatch(pullAccount(data));
    },
    onChangeBio: data => {
      dispatch(updateBio(data));
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
