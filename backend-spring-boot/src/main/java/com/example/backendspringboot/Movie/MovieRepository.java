package com.example.backendspringboot.Movie;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepository extends MongoRepository<Movie, String> {
    Movie findByTmdbId(@Param("tmdbId") Integer tmdbId);
}
