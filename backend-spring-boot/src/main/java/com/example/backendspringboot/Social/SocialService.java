package com.example.backendspringboot.Follow;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class FollowService {

    private final FollowRepository followRepository;
    

    @Autowired
    FollowService(final FollowRepository followRepository) {
        this.followRepository = followRepository;
    }

    
    List<Follow> getAllFollow(Follow follow) {
        
       
       return followRepository.getAllFollow(follow.getUserId());
    }

    Follow findUserFollowId(String userId) {

        return followRepository.findByFollowId(userId);
    }


    Follow addFollower(final Follow follow) {
        return followRepository.insert(follow);
    }

    Follow removeFollower(final Follow follow) {
        return followRepository.remove(follow);
    }

    Follow addFollow(final Follow follow){
        return followRepository.insert(follow);
    }
    Follow unFollow(final Follow follow){
        return followRepository.remove(follow);
    }




    

    
}