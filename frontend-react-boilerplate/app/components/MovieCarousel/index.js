/**
 *
 * MovieCarousel
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Carousel, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MovieCarousel({ movies }) {
  return (
    <div style={{ paddingLeft: '10%', paddingRight: '10%' }}>
      <Carousel>
        {movies.map(c => (
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={`https://image.tmdb.org/t/p/original/${c.backdrop_path}`}
            />

            <Carousel.Caption>
              <h3>
                <Link to={`/movie/${c.id}`}>{c.title}</Link>
              </h3>
              <p>{c.tagline}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

MovieCarousel.propTypes = {};

export default memo(MovieCarousel);
