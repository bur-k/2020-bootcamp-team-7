package com.example.backendspringboot.Social;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class SocialService {

    private final SocialRepository socialRepository;
    

    @Autowired
    SocialService(final SocialRepository followRepository) {
        this.socialRepository = followRepository;
    }

    
    List<Social> getAllSocial(Social social) {
        
       
       return socialRepository.getAllSocial(social.getUserId());
    }

    Social findUserSocialId(String userId) {

        return socialRepository.findBySocialId(userId);
    }


    Social addSocialer(final Social social) {
        return socialRepository.insert(social);
    }

    Social removeSocialer(final Social social) {
        return socialRepository.remove(social.getUserId());
    }

    Social addSocial(final Social social){
        return socialRepository.insert(social);
    }
    Social unSocial(final Social social){
        return socialRepository.remove(social.getUserId());
    }




    

    
}