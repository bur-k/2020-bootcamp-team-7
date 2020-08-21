package com.example.backendspringboot.Social;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;


@Service

public class SocialService {

    private final SocialRepository socialRepository;


    @Autowired
    SocialService(final SocialRepository followRepository) {
        this.socialRepository = followRepository;
    }

    Social findByUserId(String id) {
        return socialRepository.findByUserId(id);
    }

    public Social createSocial(String id) {
        return socialRepository.insert(new Social(new HashSet<SocialUser>(), new HashSet<SocialUser>(), id));
    }

    Social follow(SocialUser sUser1, SocialUser sUser2) {
        Social social1 = socialRepository.findByUserId(sUser1.getId());
        social1.following.add(sUser2);
        socialRepository.save(social1);
        Social social2 = socialRepository.findByUserId((sUser2.getId()));
        social2.followers.add(sUser1);
        socialRepository.save(social2);
        return social1;
    }

    Social unfollow(SocialUser sUser1, SocialUser sUser2) {
        Social social1 = socialRepository.findByUserId(sUser1.getId());
        social1.following.remove(sUser2);
        socialRepository.save(social1);
        Social social2 = socialRepository.findByUserId((sUser2.getId()));
        social2.followers.remove(sUser1);
        socialRepository.save(social2);
        return social1;
    }




}