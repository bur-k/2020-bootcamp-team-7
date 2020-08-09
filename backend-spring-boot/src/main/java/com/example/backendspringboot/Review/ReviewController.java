package com.example.backendspringboot.Review;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/reviews")
public class ReviewController {
    private final ReviewService reviewService;

    @Autowired
    ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @PostMapping(value = "/{tmdbMovieId}", produces = "application/json")
    public Review createMovieReview(@PathVariable Integer tmdbMovieId, @RequestBody UserReview userReview) {
        Review review = reviewService.findByTmdbMovieId(tmdbMovieId);
        if (review == null)
            return reviewService.createReview(new Review(tmdbMovieId, List.of(userReview)));
        return reviewService.addNewUserReview(review, userReview);
    }

    @GetMapping(value = "/{tmdbMovieId}", produces = "application/json")
    public Review readMovieReview(@PathVariable Integer tmdbMovieId) {
        return reviewService.findByTmdbMovieId(tmdbMovieId);
    }

    @DeleteMapping(value = "/{tmdbMovieId}", produces = "application/json")
    public Review deleteMovieReview(@PathVariable Integer tmdbMovieId, @RequestHeader(value = "Authorization") String token) {
        Review review = reviewService.findByTmdbMovieId(tmdbMovieId);
        if (review != null) {
            return reviewService.deleteUserReview(review, token);
        }
        return new Review();
    }


}
