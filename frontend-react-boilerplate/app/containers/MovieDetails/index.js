/**
 *
 * MovieDetails
 *
 */

import React, { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  Badge,
  Card,
  Col,
  Container,
  Image,
  Row,
  Table,
} from 'react-bootstrap';
import makeSelectMovieDetails, {
  makeSelectError,
  makeSelectId,
  makeSelectLoading,
  makeSelectMovie,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { pullMovie } from './actions';

export function MovieDetails({ movie, loading, error, onLoadMovie }) {
  useInjectReducer({ key: 'movieDetails', reducer });
  useInjectSaga({ key: 'movieDetails', saga });

  const { id } = useParams();
  const _movie =
    movie === null ? null : (
      <>
        <Row>
          <Col xs={12} lg={{ span: 8, offset: 2 }}>
            <Image
              style={{ width: '100%' }}
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              rounded
            />
            <Card.ImgOverlay style={{ textAlign: 'right' }}>
              <Badge pill variant="dark">
                <a
                  style={{ color: 'yellow' }}
                  href={`https://www.imdb.com/title/${movie.imdb_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  IMDb
                </a>
              </Badge>
            </Card.ImgOverlay>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={{ span: 8, offset: 2 }}>
            <Table striped bordered hover variant="dark">
              <tbody>
                <tr>
                  <td>Title</td>
                  <td>
                    {movie.title} ({new Date(movie.release_date).getFullYear()})
                  </td>
                </tr>
                <tr>
                  <td>Duration</td>
                  <td>
                    {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
                  </td>
                </tr>
                <tr>
                  <td>Genres</td>
                  <td>{movie.genres.map(g => g.name).join(', ')}</td>
                </tr>
                <tr>
                  <td style={{ whiteSpace: 'nowrap' }}>Overview</td>
                  <td>{movie.overview}</td>
                </tr>
                <tr>
                  <td>Tagline</td>
                  <td>{movie.tagline}</td>
                </tr>
                <tr>
                  <td>Cast</td>
                  <td>
                    <div
                      className="overflow-auto"
                      style={{ maxHeight: '250px' }}
                    >
                      {movie.credits.cast.map(c => (
                        <>
                          <span>
                            <b>{c.name}</b> as <em>{c.character}</em>
                          </span>
                          <br />
                        </>
                      ))}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Crew</td>
                  <td>
                    <div
                      className="overflow-auto"
                      style={{ maxHeight: '250px' }}
                    >
                      {movie.credits.crew.map(c => (
                        <>
                          <span>
                            <b>{c.name}</b> as <em>{c.job}</em>
                          </span>
                          <br />
                        </>
                      ))}
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </>
    );

  useEffect(() => {
    onLoadMovie(id);
  }, []);

  return (
    <div>
      <Container style={{}} fluid>
        {_movie}
      </Container>
    </div>
  );
}

MovieDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
  movie: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  onLoadMovie: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  movieDetails: makeSelectMovieDetails(),
  movie: makeSelectMovie(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  id: makeSelectId(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onLoadMovie: id => {
      dispatch(pullMovie(id));
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
)(MovieDetails);
