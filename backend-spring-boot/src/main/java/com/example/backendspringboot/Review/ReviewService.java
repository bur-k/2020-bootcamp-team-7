package com.example.backendspringboot.Review;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {
    private final ReviewRepository reviewRepository;

    @Autowired
    ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    Review findByTmdbMovieId(Integer tmdbMovieId) {
        return reviewRepository.findByTmdbMovieId(tmdbMovieId);
    }

    Review createReview(Review review) {
        return reviewRepository.insert(review);
    }

    Review addNewUserReview(Review review, UserReview userReview) {
        // TODO update code when auth is implemented and get userId from Authorization header
        review.userReviews.removeIf(userReview1 -> userReview1.getUserId().equals(userReview.getUserId()));
        review.userReviews.add(userReview);
        return reviewRepository.save(review);
    }

    Review deleteUserReview(Review review, String token) {
        // TODO update code when auth is implemented and get userId from Authorization header
        int size = review.userReviews.size();
        review.userReviews.removeIf(userReview -> userReview.getUserId().equals(token));
        if (size != review.userReviews.size())
            return reviewRepository.save(review);
        return review;
    }
}
