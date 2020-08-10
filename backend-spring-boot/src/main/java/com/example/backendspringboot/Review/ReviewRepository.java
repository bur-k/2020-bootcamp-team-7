package com.example.backendspringboot.Review;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends MongoRepository<Review, Integer> {

    Review findByTmdbMovieId(@Param("tmdbMovieId") Integer tmdbMovieId);
}
