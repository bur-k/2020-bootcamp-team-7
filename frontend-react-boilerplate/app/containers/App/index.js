/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useEffect, useState } from 'react';
import { Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Discover from 'containers/Discover/Loadable';
import MyAccount from 'containers/MyAccount/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import { Dropdown, Image, Nav, Navbar } from 'react-bootstrap';
import firebase from 'firebase/app';
import { StyledFirebaseAuth } from 'react-firebaseui/index';
import styledFirebaseConfig from './styledFirebaseConfig';
import MovieDetails from '../MovieDetails';
import request from '../../utils/request';

export default function App() {
  const [isSignedIn, setSignedIn] = useState(false);

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(firebaseUser => {
        setSignedIn(!!firebaseUser);
      });

    return () => {
      unregisterAuthObserver();
    };
  }, []);

  const getProfilePhoto = () => firebase.auth().currentUser.photoURL;
  const routes = isSignedIn ? (
    <Switch>
      <Route path="/movie/:id" component={MovieDetails} />
      <Route path="/discover" component={Discover} />
      <Route path="/myAccount" component={MyAccount} />
      <Redirect exact from="/" to="/discover" />
      <Route component={NotFoundPage} />
    </Switch>
  ) : (
    <HomePage />
  );

  return (
    <div style={{ height: '100%' }}>
      <Navbar className="sticky-top" bg="dark" variant="dark">
        <NavLink className="navbar-brand" style={{ marginLeft: '3%' }} to="/">
          my-app
        </NavLink>
        <Navbar.Collapse className="justify-content-end">
          {isSignedIn ? (
            <>
              <Nav
                style={{
                  marginRight: '3%',
                  minHeight: '72px',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <NavLink className="nav-link" to="/discover">
                  Discover{''}
                </NavLink>
              </Nav>
              <Dropdown style={{ marginRight: '3%' }}>
                <Dropdown.Toggle variant="light">
                  <Image
                    style={{ maxHeight: '30px' }}
                    src={getProfilePhoto()}
                    rounded
                  />{' '}
                  <span>{firebase.auth().currentUser.displayName}</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Link className="dropdown-item" to="/myAccount">
                    My Account
                  </Link>
                  <Dropdown.Divider />
                  <Link
                    className="dropdown-item"
                    to="#"
                    onClick={() => firebase.auth().signOut()}
                  >
                    Sign Out
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </>
          ) : (
            <StyledFirebaseAuth
              uiConfig={{
                ...styledFirebaseConfig,
                callbacks: {
                  signInSuccessWithAuthResult: e => {
                    if (e.additionalUserInfo.isNewUser) {
                      const userData = {
                        id: e.user.uid,
                        uname: e.additionalUserInfo.profile.name,
                        uemail: e.additionalUserInfo.profile.email,
                        uphoto: e.additionalUserInfo.profile.picture,
                      };

                      const options = {
                        method: 'POST',
                        headers: {
                          Accept: 'application/json',
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ ...userData }),
                      };

                      request('http://localhost:8080/api/users', options);
                    }
                  },
                },
              }}
              firebaseAuth={firebase.auth()}
            />
          )}
        </Navbar.Collapse>
      </Navbar>
      {routes}
    </div>
  );
}
