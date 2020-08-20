package com.example.backendspringboot.Movie;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends MongoRepository<Movie, Integer> {
    Movie findMovieByTmdbMovieId(@Param("tmdbMovieId") Integer tmdbMovieId);
    List<Movie> getMoviesByTmdbMovieIdExists(boolean exists);
    void deleteMoviesByTmdbMovieIdExists(boolean exists);

    @Override
    Iterable<Movie> findAllById(Iterable<Integer> integers);
}
