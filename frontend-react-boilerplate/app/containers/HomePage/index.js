/**
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import backgroundImage from '../../images/homepage-background.jpg';

export function HomePage() {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  return (
    <div>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Description of HomePage" />
      </Helmet>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: '100% 100%',
          position: 'fixed',
          width: '100%',
        }}
      >
        <Container>
          <Row>
            <Col lg={{ offset: 3, span: 6 }}>
              <Card
                className="text-center"
                style={{ marginTop: '50%', marginBottom: '50%' }}
                bg="dark"
                text="white"
              >
                <Card.Body>
                  <Card.Title>Discover, Watch and Review!</Card.Title>
                  <Card.Text>
                    Find movies to watch, get updates from your friends and do
                    not forget to leave a review.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                  <Button
                    onClick={() => {
                      document
                        .querySelector(
                          '#firebaseui_container > div > div.firebaseui-card-content > form > ul > li > button',
                        )
                        .click();
                    }}
                  >
                    {' '}
                    Get Started!
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
