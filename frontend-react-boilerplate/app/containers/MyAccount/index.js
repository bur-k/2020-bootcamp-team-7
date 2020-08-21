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
        <div className="profile-container1">
          <div className="card-container1">
            <div className="card-header1" />
            <div className="container-center1">
              <Image
                src={`${user.uphoto}`}
                className="img-custom1 profile-pic1"
                roundedCircle
              />
            </div>
            <div className="card-body1">
              <h3 className="myH3">{}</h3>
              <h4 />
              <p>
                <Link to={`/user/${user.id}`}>Click to see Public Profile</Link>
              </p>
              <hr />
              <p>{user.ubio}</p>
              <hr />
              <Table className="myTable">
                <thead>
                  <tr>
                    <th className="myTh">
                      <b>user name</b>
                    </th>
                    <th className="myTh">
                      <b>e-mail</b>
                    </th>
                    <th className="myTh">
                      <b>following ({user.social.following.length})</b>
                    </th>
                    <th className="myTh">
                      <b>followers ({user.social.followers.length})</b>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{user.uname}</td>
                    <td>{user.uemail}</td>
                    <td>
                      {user.social.following.map(c => (
                        <>
                          <span>
                            <Link to={`/user/${c.id}`}>{c.name}</Link>
                          </span>
                          <br />
                        </>
                      ))}
                    </td>
                    <td>
                      {user.social.followers.map(c => (
                        <>
                          <span>
                            <Link to={`/user/${c.id}`}>{c.name}</Link>
                          </span>
                          <br />
                        </>
                      ))}
                    </td>
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
                  <Form.Label>Bio</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    value={_userBio.bio}
                    onChange={e => {
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

            <h3
              style={{
                marginLeft: '3%',
                marginBottom: '3%',
                fontSize: '30px',
                fontFamily: 'monospace',
              }}
            >
              to watch list({user.toWatchMovies.length})
            </h3>
            <h4 />
            <p />
            <p />
            {user.toWatchMovies.map(c => (
              <>
                <Table>
                  <tbody>
                    <tr>
                      <td>
                        <span>
                          <Link to={`/movie/${c.id}`}>{c.title}</Link>
                        </span>
                      </td>
                      <td>
                        <Link to={`/movie/${c.id}`} title={`${c.title}`}>
                          <Image
                            src={`https://image.tmdb.org/t/p/w500/${
                              c.poster_path
                            }`}
                            className="img-custom1"
                          />
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </>
            ))}
            <hr />
            <hr />

            <h3
              style={{
                marginLeft: '3%',
                marginBottom: '3%',
                fontSize: '30px',
                fontFamily: 'monospace',
              }}
            >
              watched list({user.watchedMovies.length})
            </h3>
            <h4 />
            <p />
            <p>{}</p>
            {user.watchedMovies.map(c => (
              <>
                <Table>
                  <tbody>
                    <tr>
                      <td>
                        <span>
                          <Link to={`/movie/${c.id}`}>{c.title}</Link>
                        </span>
                      </td>
                      <td>
                        <Link to={`/movie/${c.id}`} title={`${c.title}`}>
                          <Image
                            src={`https://image.tmdb.org/t/p/w500/${
                              c.poster_path
                            }`}
                            className="img-custom1"
                          />
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </>
            ))}
          </div>
        </div>
      </>
    );

  return (
    <div style={{ height: '100%' }}>
      <div className="container-center1">{userData}</div>
    </div>
  );
}

MyAccount.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onLoadUser: PropTypes.func,
  onChangeBio: PropTypes.func,
  myAccount: PropTypes.object,
  user: PropTypes.object,
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
