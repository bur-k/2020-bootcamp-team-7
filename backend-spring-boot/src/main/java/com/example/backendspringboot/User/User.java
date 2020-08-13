package com.example.backendspringboot.User;

import com.fasterxml.jackson.annotation.JsonProperty;

public class User  {
    public String userId;
    public String bio;
    public String profilePhoto;
    public String birthday;
    public String nationality;

    public User(@JsonProperty("id") String userId, @JsonProperty("bio") String bio, @JsonProperty("photo")String profilePhoto, @JsonProperty("birthday")String birthday, @JsonProperty("nationality")String nationality) {
        this.userId = userId;
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
}
