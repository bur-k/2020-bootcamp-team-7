/**
 *
 * MovieCard
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import request from '../../utils/request';

function MovieCard(props) {
  const [isShowButtonToWatch, setIsShowButtonToWatch] = useState(false);
  const [isShowButtonWatched, setIsShowButtonWatched] = useState(false);

  return (
    <Card style={{ height: '100%' }}>
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
      />
      <Card.Body
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Card.Title style={{ textAlign: 'center' }}>
          <Link to={`/movie/${props.movie.id}`}>{props.movie.title}</Link>
        </Card.Title>
      </Card.Body>
      <Card.Footer>
        <ButtonGroup style={{ width: '100%' }}>
          <Button
            variant="primary"
            disabled={isShowButtonToWatch}
            onClick={() => {
              const options = {
                method: 'PUT',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
              };
              request(
                `http://localhost:8080/api/users/newToWatch/${props.movie.id}`,
                options,
              );
              setIsShowButtonToWatch(true);
            }}
          >
            Add to Watchlist
          </Button>
          <Button
            variant="secondary"
            disabled={isShowButtonWatched}
            onClick={() => {
              const options = {
                method: 'PUT',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
              };
              request(
                `http://localhost:8080/api/users/newWatched/${props.movie.id}`,
                options,
              );
              setIsShowButtonWatched(true);
            }}
          >
            Mark as Watched
          </Button>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  );
}

MovieCard.propTypes = {};

export default memo(MovieCard);
