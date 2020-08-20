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
import { Button, Image, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import makeSelectUserDetails, { makeSelectUserId } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { pullUser } from './actions';
import request from '../../utils/request';
import './style.css';

export function UserDetails({ onPageLoadPullUser, userDetails }) {
  useInjectReducer({ key: 'userDetails', reducer });
  useInjectSaga({ key: 'userDetails', saga });

  const { id } = useParams();

  useEffect(() => {
    onPageLoadPullUser(id);
  }, []);

  console.log();
    const user =
    userDetails.user === null ? null : (
      <>
        <Helmet>
          <title>Public Account</title>
          <meta name="description" content="Description of UserDetails" />
        </Helmet>
        <br />
        <div className="profile-container">
          <div className="card-container">
            <div className="card-header" />
            <div className="container-center">
              <Image
                src={`${userDetails.user.uphoto}`}
                className="img-custom profile-pic"
                roundedCircle
              />
            </div>
            <div className="card-body">
              <h3>{}</h3>
              <h4 />
              <p>
              </p>
              <hr></hr>
              <p>{userDetails.user.ubio}</p>
              <hr></hr>
              <Table>
                <thead>
                  <tr>
                    <th>
                      <b>user name</b>
                    </th>
                    <th>
                      <b>e-mail</b>
                    </th>
                    <th>
                      <b>following ({userDetails.user.social.following.length})</b>
                    </th>
                    <th>
                      <b>followers ({userDetails.user.social.followers.length})</b>
                    </th>
                    <th>
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
                    </th>
                    <th>
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
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{userDetails.user.uname}</td>
                    <td>{userDetails.user.uemail}</td>
                    <td>
                    {userDetails.user.social.following.map(c => (
                        <>
                          <span>
                            <Link to={`/user/${c.id}`}>{c.name}</Link>
                          </span>
                          <br />
                        </>
                      ))}
                    </td>
                    <td>
                    {userDetails.user.social.followers.map(c => (
                        <>
                          <span>
                            <Link to={`/user/${c.id}`}>{c.name}</Link>
                          </span>
                          <br />
                        </>
                      ))}
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <h3 style={{ marginLeft: '3%', marginBottom: '3%', fontSize: '30px', fontFamily: 'monospace' }}>to watch list({userDetails.user.toWatchMovies.length})</h3>
              <h4 />
              <p>
              </p>
              <p></p>
                    {userDetails.user.toWatchMovies.map(c => (
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
                              src={`https://image.tmdb.org/t/p/w500/${c.poster_path}`}
                              className="img-custom"
                          />  
                          </Link>
                    </td>
                  </tr>
                </tbody>
              </Table>
                          
                        </>
                      ))}
            <hr></hr>
            <hr></hr>

            <h3 style={{ marginLeft: '3%', marginBottom: '3%', fontSize: '30px', fontFamily: 'monospace' }}>watched list({userDetails.user.watchedMovies.length})</h3>
              <h4 />
              <p>
                
              </p>
              <p>{}</p>
                    {userDetails.user.watchedMovies.map(c => (
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
                              src={`https://image.tmdb.org/t/p/w500/${c.poster_path}`}
                              className="img-custom"
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
    <div>
      <Helmet>
        <title>UserDetails</title>
        <meta name="description" content="Description of UserDetails" />
      </Helmet>
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