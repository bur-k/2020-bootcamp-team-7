import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

export default function MovieCard(props) {
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
          <Button variant="primary">Add to Watchlist</Button>
          <Button variant="secondary">Mark as Watched</Button>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  );
}
