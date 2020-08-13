package com.example.backendspringboot.Review;

import org.springframework.data.annotation.Id;

public class UserReview {
    @Id
    private String userId;
    private String userName;
    private String reviewTitle;
    private String review;
    private Integer score;

    public UserReview() {
    }

    public UserReview(String userId, String userName, String reviewTitle, String review, Integer score) {
        this.userId = userId;
        this.userName = userName;
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

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
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
