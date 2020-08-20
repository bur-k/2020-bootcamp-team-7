package com.example.backendspringboot.User;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonProperty;

import org.springframework.data.annotation.Id;

public class User  {
    @Id
    @JsonProperty("id")
    public String userId;

    @JsonProperty("uname") 
    public String userDisplayName;

    @JsonProperty("uemail") 
    public String userEmail;

    @JsonProperty("ubio") 
    public String bio;

    @JsonProperty("uphoto")
    public String profilePhoto;

    @JsonProperty("ubirthday")
    public String birthday;

    @JsonProperty("unationality")
    public String nationality;

    public List<Integer> watchList;
    public List<Integer> watchedList;

    public User() {}

    public User(String userId, String userDisplayName, String userEmail, String bio, String profilePhoto, String birthday, String nationality) {
        this.userId = userId;
        this.userDisplayName = userDisplayName;
        this.userEmail = userEmail;
        this.bio = bio;
        this.profilePhoto = profilePhoto;
        this.birthday = birthday;
        this.nationality = nationality;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public void setUserDisplayName(String userDisplayName) {
        this.userDisplayName = userDisplayName;
    }

    public String getUserDisplayName() {
        return userDisplayName;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getProfilePhoto() {
        return profilePhoto;
    }

    public void setProfilePhoto(String profilePhoto) {
        this.profilePhoto = profilePhoto;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public List<Integer> getWatchList() {
        return watchList;
    }

    public void setWatchList(List<Integer> watchList) {
        this.watchList = watchList;
    }

    public List<Integer> getWatchedList() {
        return watchedList;
    }

    public void setWatchedList(List<Integer> watchedList) {
        this.watchedList = watchedList;
    }
}
