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
import { Button, Form, Image, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import makeSelectMyAccount, { makeSelectUser } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { pullAccount, updateBio } from './actions';
import './style.css';

export function MyAccount({ onLoadUser, user, onChangeBio }) {
  useInjectReducer({ key: 'myAccount', reducer });
  useInjectSaga({ key: 'myAccount', saga });

  useEffect(() => {
    onLoadUser();
  }, []);

  const [_userBio, setUserBio] = useState({
    bio: user === null ? '' : user.ubio,
    id: '',
  });

  const userData =
    user === null ? null : (
      <>
        <Helmet>
          <title>My Account</title>
          <meta name="description" content="Description of UserDetails" />
        </Helmet>
        <div className="profile-container">
          <div className="card-container">
            <div className="card-header" />
            <div className="container-center">
              <Image
                src={`${user.uphoto}`}
                className="img-custom profile-pic"
                roundedCircle
              />
            </div>
            <div className="card-body">
              <h3>{}</h3>
              <h4 />
              <p>
                <Link to={`/user/${user.id}`}>Click to see Public Profile</Link>
              </p>
              <p>{}</p>

              <Table>
                <thead>
                  <tr>
                    <th>
                      <b>user name:</b>
                    </th>
                    <th>
                      <b>user e-mail:</b>
                    </th>
                    <th>FOLLOWERS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{user.uname}</td>
                    <td>{user.uemail}</td>
                    <td>{}</td>
                  </tr>
                </tbody>
              </Table>
              <Form
                onSubmit={e => {
                  e.preventDefault();
                  onChangeBio(_userBio);
                }}
              >
                <Form.Group>
                  <Form.Label>BIO</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    value={_userBio.bio}
                    onChange={e => {
                      console.log(user);
                      setUserBio({
                        bio: e.target.value,
                        id: user.id,
                      });
                    }}
                    required
                  />
                </Form.Group>

                <Button type="submit">Update Bio</Button>
              </Form>
            </div>
          </div>
        </div>
      </>
    );

  return (
    <div style={{ height: '100%' }}>
      <div className="container-center">{userData}</div>
    </div>
  );
}

MyAccount.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onLoadUser: PropTypes.func,
  onChangeBio: PropTypes.func,
  myAccount: PropTypes.func,
  user: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  myAccount: makeSelectMyAccount(),
  user: makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onLoadUser: data => {
      dispatch(pullAccount(data));
    },
    onChangeBio: _userBio => {
      dispatch(updateBio(_userBio));
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
)(MyAccount);
