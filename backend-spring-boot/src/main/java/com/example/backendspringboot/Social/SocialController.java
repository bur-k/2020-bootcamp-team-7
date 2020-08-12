package com.example.backendspringboot.Social;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/user/social")


public class SocialController {
    private final SocialService socialService;


    @Autowired
    SocialController(SocialService socialService){
        this.socialService = socialService;
    }


    @PostMapping(value = "/{userID}", produces = "application/json")
    public Social addSocialer(@PathVariable String userId, @RequestBody Social social) {
        social = socialService.addSocialer(social);
        

       if (socialService.findUserSocialId(social.getUserId()) == social) {
            return null;
        } 
        
            return socialService.addSocial(social);
       
    }

    @GetMapping(value = "/{userId}", produces = "application/json")
    public List<Social> getAllSocial(@PathVariable String userId, @RequestBody Social social) {

       if(social == socialService.findUserSocialId(userId)){
          return socialService.getAllSocial(social);
       }
       return socialService.getAllSocial(social);
      
    }

    @DeleteMapping(value = "/{userId}", produces = "application/json")
    public Social unSocial(@PathVariable String userId, @RequestBody Social social) {
        social = socialService.findUserSocialId(social.getUserId());
        if (social != null) {
            return socialService.unSocial(social);
        }
        return null;
    }


    







}