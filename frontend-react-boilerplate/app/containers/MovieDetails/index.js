/**
 *
 * MovieDetails
 *
 */

import React, { memo, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  Accordion,
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  NavLink,
  Row,
  Spinner,
  Table,
} from 'react-bootstrap';
import makeSelectMovieDetails, {
  makeSelectId,
  makeSelectMovie,
  makeSelectReview,
  makeSelectUserReview,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { pullMovie, pullReview, pushReview } from './actions';

export function MovieDetails({
  movie,
  onLoadMovie,
  review,
  onSubmitReview,
  onLoadReview,
}) {
  useInjectReducer({ key: 'movieDetails', reducer });
  useInjectSaga({ key: 'movieDetails', saga });

  useEffect(() => {
    onLoadMovie(id);
  }, []);

  useEffect(() => {
    onLoadReview(id);
  }, []);

  const [_userReview, setUserReview] = useState({
    review: '',
    reviewTitle: '',
    score: 5,
  });

  const { id } = useParams();
  const reviewList =
    review === null
      ? null
      : review.userReviews.map(rev => (
          <>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>
                <Link to={`/user/${rev.userId}`}>{rev.userName}</Link> :{' '}
                {rev.reviewTitle}
              </Form.Label>
              <Form.Control as="textarea" rows="3" readOnly>
                {rev.review}
              </Form.Control>
            </Form.Group>
            <hr />
          </>
      ));
  const _movie =
    movie === null ? (
      <div className="profile-container1">
        <div className="card-container1">
          <div className="container-center1">
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        </div>
      </div>
    ) : (
      <>
        <Row>
          <Col xs={12} lg={{ span: 8, offset: 2 }}>
            <Image
              style={{ width: '100%' }}
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              rounded
            />
            <Card.ImgOverlay style={{ textAlign: 'right' }}>
              <Badge variant="dark">
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

  return (
    <div>
      <Container style={{}} fluid>
        {_movie}
        <Row>
          <Col xs={12} lg={{ span: 8, offset: 2 }}>
            <Accordion>
              <Card className="bg-dark text-white">
                <Card.Header>
                  <Accordion.Toggle
                    as={NavLink}
                    className="text-white"
                    variant="link"
                    eventKey="0"
                  >
                    Leave a review
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Form
                      onSubmit={e => {
                        e.preventDefault();
                        onSubmitReview(_userReview);
                        setUserReview({
                          review: '',
                          reviewTitle: '',
                          score: 5,
                        });
                      }}
                    >
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Review Title</Form.Label>
                        <Form.Control
                          type="input"
                          placeholder="Title"
                          value={_userReview.reviewTitle}
                          onChange={e => {
                            setUserReview({
                              ..._userReview,
                              reviewTitle: e.target.value,
                            });
                          }}
                          required
                        />
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Review</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows="3"
                          value={_userReview.review}
                          onChange={e => {
                            setUserReview({
                              ..._userReview,
                              review: e.target.value,
                            });
                          }}
                          required
                        />
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Rate Movie</Form.Label>
                        <Form.Control
                          as="select"
                          value={_userReview.score}
                          onChange={e => {
                            setUserReview({
                              ..._userReview,
                              score: e.target.value,
                            });
                          }}
                        >
                          <option>5</option>
                          <option>4</option>
                          <option>3</option>
                          <option>2</option>
                          <option>1</option>
                        </Form.Control>
                      </Form.Group>
                      <Button type="submit">Submit Review</Button>
                    </Form>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="bg-dark text-white">
                <Card.Header>
                  <Accordion.Toggle
                    as={NavLink}
                    className="text-white"
                    variant="link"
                    eventKey="1"
                  >
                    View other users' reviews
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>{reviewList}</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

MovieDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
  movie: PropTypes.object,
  review: PropTypes.object,
  onLoadMovie: PropTypes.func,
  onLoadReview: PropTypes.func,
  onSubmitReview: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  movieDetails: makeSelectMovieDetails(),
  movie: makeSelectMovie(),
  id: makeSelectId(),
  review: makeSelectReview(),
  userReview: makeSelectUserReview(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onLoadMovie: id => {
      dispatch(pullMovie(id));
    },
    onSubmitReview: userReview => {
      dispatch(pushReview(userReview));
    },
    onLoadReview: id => {
      dispatch(pullReview(id));
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
