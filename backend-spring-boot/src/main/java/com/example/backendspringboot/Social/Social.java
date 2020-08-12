package com.example.backendspringboot.Social;

import java.util.List;


public class Social {

     

    private List<Social> followers;
    private List<Social> follows;
    private String name;
    private String userId;

    public Social(String name, String userId,List<Social> followers,List<Social> follows) {
        this.followers = followers;
        this.follows = follows;
        this.name = name;
        this.userId = userId;
    }

    public List<Social> getFollowers() {
        return this.followers;
    }

    public void setFollowers(List<Social> followers) {
        this.followers = followers;
    }

    public List<Social> getFollows() {
        return this.follows;
    }

    public void setFollows(List<Social> follows) {
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
