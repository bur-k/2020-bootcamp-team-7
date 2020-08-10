package com.example.backendspringboot.Review;

import org.springframework.data.annotation.Id;

public class UserReview {
    @Id
    public String userId;
    public String reviewTitle;
    public String review;
    public Integer score;

    public UserReview() {
    }

    public UserReview(String userId, String reviewTitle, String review, Integer score) {
        this.userId = userId;
        this.reviewTitle = reviewTitle;
        this.review = review;
        this.score = score;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getReviewTitle() {
        return reviewTitle;
    }

    public void setReviewTitle(String reviewTitle) {
        this.reviewTitle = reviewTitle;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }
}
