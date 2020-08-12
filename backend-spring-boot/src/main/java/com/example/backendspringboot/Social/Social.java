package com.example.backendspringboot.Follow;

import java.util.List;


public class Follow {

     

    private List<Follow> followers;
    private List<Follow> follows;
    private String name;
    private String userId;

    public Follow(String name, String userId,List<Follow> followers,List<Follow> follows) {
        this.followers = followers;
        this.follows = follows;
        this.name = name;
        this.userId = userId;
    }

    public List<Follow> getFollowers() {
        return this.followers;
    }

    public void setFollowers(List<Follow> followers) {
        this.followers = followers;
    }

    public List<Follow> getFollows() {
        return this.follows;
    }

    public void setFollows(List<Follow> follows) {
        this.follows = follows;
    }


    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    
    public String getUserId() {
        return this.userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }



   
}
