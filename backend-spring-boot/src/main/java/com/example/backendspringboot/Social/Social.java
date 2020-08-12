package com.example.backendspringboot.Social;

import java.util.Set;


public class Social {

     

    private Set<Social> followers;
    private Set<Social> following;
    private String name;
    private String userId;

    public Social(String name, String userId,Set<Social> followers,Set<Social> following) {
        this.followers = followers;
        this.following = following;
        this.name = name;
        this.userId = userId;
    }
    public Social(String name, String userId){
        this(name, userId, null, null);

    }

    public Set<Social> getFollowers() {
        return this.followers;
    }

    public void setFollowers(Set<Social> followers) {
        this.followers = followers;
    }

    public Set<Social> getFollowing() {
        return this.following;
    }

    public void setFollowing(Set<Social> following) {
        this.following = following;
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
