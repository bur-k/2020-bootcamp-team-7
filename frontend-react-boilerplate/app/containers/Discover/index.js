/**
 *
 * Discover
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Col, Container, Row } from 'react-bootstrap';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDiscover, {
  makeSelectError,
  makeSelectLoading,
  makeSelectMovies,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { pullDiscover } from './actions';
import MovieCard from './MovieCard';

export function Discover({ movies, loading, error, onLoadDiscover }) {
  useInjectReducer({ key: 'discover', reducer });
  useInjectSaga({ key: 'discover', saga });

  // eslint-disable-next-line prefer-const
  const movieCols =
    movies === null
      ? null
      : movies.results.map(m => (
        <Col
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          style={{ marginBottom: '10px' }}
        >
          <MovieCard movie={m} />
        </Col>
      ));

  useEffect(() => {
    onLoadDiscover();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Discover</title>
        <meta name="description" content="Description of Discover" />
      </Helmet>
      <Container fluid>
        <Row>{movieCols}</Row>
      </Container>
    </div>
  );
}

Discover.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  movies: PropTypes.object,
  onLoadDiscover: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  discover: makeSelectDiscover(),
  movies: makeSelectMovies(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onLoadDiscover: () => dispatch(pullDiscover()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Discover);
