/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useEffect, useState } from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';

// import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import { Dropdown, Image, Nav, Navbar } from 'react-bootstrap';
import firebase from 'firebase/app';
import { StyledFirebaseAuth } from 'react-firebaseui/index';
import styledFirebaseConfig from './styledFirebaseConfig';

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

  return (
    <div>
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
                <NavLink className="nav-link" to="/Discover">
                  Discover{''}
                </NavLink>
              </Nav>
              <Dropdown style={{ marginRight: '3%' }}>
                <Dropdown.Toggle variant="light">
                  <Image
                    style={{ maxHeight: '30px' }}
                    src={firebase.auth().currentUser.photoURL}
                    onError={e => {
                      e.target.onerror = null;
                      e.target.src = { getProfilePhoto };
                    }}
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
                    to="#/sign-out"
                    onClick={() => firebase.auth().signOut()}
                  >
                    Sign Out
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </>
          ) : (
            <StyledFirebaseAuth
              uiConfig={styledFirebaseConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

const HomePage = () => <div>this is homepage</div>;
