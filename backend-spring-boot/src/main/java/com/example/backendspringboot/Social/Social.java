package com.example.backendspringboot.Social;

import org.springframework.data.annotation.Id;

import java.util.Objects;
import java.util.Set;

public class Social {

    Set<SocialUser> followers;
    Set<SocialUser> following;
    @Id
    String userId;

    public Social() {
    }

    public Social(Set<SocialUser> followers, Set<SocialUser> following, String userId) {
        this.followers = followers;
        this.following = following;
        this.userId = userId;
    }

    public Set<SocialUser> getFollowers() {
        return followers;
    }

    public void setFollowers(Set<SocialUser> followers) {
        this.followers = followers;
    }

    public Set<SocialUser> getFollowing() {
        return following;
    }

    public void setFollowing(Set<SocialUser> following) {
        this.following = following;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Social social = (Social) o;
        return userId.equals(social.userId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId);
    }
}
