package com.example.backendspringboot.Social;



import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class SocialService {

    private final SocialRepository socialRepository;
    

    @Autowired
    SocialService(final SocialRepository followRepository) {
        this.socialRepository = followRepository;
    }

    Social findByUserId(Social user) {
        return socialRepository.findByUserId(user);
    }

    void createUser(String userId,String name) {
        Social user = new Social(userId,name);
        socialRepository.insert(user);
    }
    void addFollow(Social user, Social followId) {
            Set<Social> followList = user.getFollowing();
            followList.add(followId);
            user.setFollowing(followList);         

        
    }
    void unFollow(Social user,Social follow) {
        Set<Social> followList = user.getFollowing();
        followList.remove(follow);
        user.setFollowing(followList);     

    }



    

    
}