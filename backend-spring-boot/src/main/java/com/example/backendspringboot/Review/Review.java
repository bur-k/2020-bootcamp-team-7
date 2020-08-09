package com.example.backendspringboot.Review;

import org.springframework.data.annotation.Id;

import java.util.List;

public class Review {
    @Id
    public Integer tmdbMovieId;
    public List<UserReview> userReviews;

    public Review() {
    }

    public Review(Integer tmdbMovieId, List<UserReview> userReviews) {
        this.tmdbMovieId = tmdbMovieId;
        this.userReviews = userReviews;
    }

    public Integer getTmdbMovieId() {
        return tmdbMovieId;
    }

    public void setTmdbMovieId(Integer tmdbMovieId) {
        this.tmdbMovieId = tmdbMovieId;
    }

    public List<UserReview> getUserReviews() {
        return userReviews;
    }

    public void setUserReviews(List<UserReview> userReviews) {
        this.userReviews = userReviews;
    }
}
