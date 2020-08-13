package com.example.backendspringboot.Social;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RequestMapping("/api/social")
@RestController
public class SocialController {
    private final SocialService socialService;

    @Autowired
    public SocialController(SocialService socialService) {
        this.socialService = socialService;
    }




    @GetMapping(value = "/{userId}",produces = "application/json")
    public Social findById(@PathVariable("userId")Social userId) {
        Social user = socialService.findByUserId(userId);
        return user;
    }


    @PostMapping(produces = "application/json")
    public void createSocial(@RequestBody String userId,String name){
       
        socialService.createUser(userId,name);
    }

    @PostMapping(path= "/follow",produces = "application/json")
    public void follow(@RequestParam("userId") Social userId,@RequestParam("followId") Social followId){
         
        socialService.addFollow(userId, followId);

    }

    @PutMapping(value = "/{userId}", produces = "application/json")
    public void unFollow(@RequestParam("userId") Social userId,@RequestParam("followId") Social followId){
        socialService.unFollow(userId, followId);
    }








}