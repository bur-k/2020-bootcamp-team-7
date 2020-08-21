/**
 *
 * Discover
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Col, Container, Row, Spinner } from 'react-bootstrap';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import InfiniteScroll from 'react-infinite-scroller';
import makeSelectDiscover, { makeSelectMovies } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { pullDiscover } from './actions';
import MovieCard from '../../components/MovieCard';

export function Discover({ movies, page, onLoadDiscover }) {
  useInjectReducer({ key: 'discover', reducer });
  useInjectSaga({ key: 'discover', saga });

  useEffect(() => {
    onLoadDiscover(_page);
    setPage(_page + 1);
  }, []);

  const [res, setRes] = useState([]);
  const [_page, setPage] = useState(1);

  const _movies = [];

  const loadMore = () => {
    if (movies !== null) {
      movies.results.forEach(m => {
        _movies.push(
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            style={{ margin: '5px 0px', padding: '0px 10px' }}
          >
            <MovieCard movie={m} />
          </Col>,
        );
      });

      onLoadDiscover(_page);
      setRes([...res, ..._movies]);
      setPage(_page + 1);
    }
  };
  return (
    <div>
      <Helmet>
        <title>Discover</title>
        <meta name="description" content="Description of Discover" />
      </Helmet>
      <Container fluid>
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMore}
          hasMore
          loader={
            <div className="loader" key={0}>
              <div className="profile-container1">
                <div className="card-container1">
                  <div className="container-center1">
                    <Spinner animation="border" role="status">
                      <span className="sr-only">Loading...</span>
                    </Spinner>
                  </div>
                </div>
              </div>
            </div>
          }
        >
          <Row>{res}</Row>
        </InfiniteScroll>
      </Container>
    </div>
  );
}

Discover.propTypes = {
  dispatch: PropTypes.func.isRequired,
  movies: PropTypes.object,
  onLoadDiscover: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  discover: makeSelectDiscover(),
  movies: makeSelectMovies(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onLoadDiscover: page => dispatch(pullDiscover(page)),
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
