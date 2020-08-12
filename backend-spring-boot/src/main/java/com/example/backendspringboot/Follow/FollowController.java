package com.example.backendspringboot.Follow;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/user/follow")


public class FollowController {
    private final FollowService followService;


    @Autowired
    FollowController(FollowService followService){
        this.followService = followService;
    }


    @PostMapping(value = "/{userID}", produces = "application/json")
    public Follow addFollower(@PathVariable String userId, @RequestBody Follow follow) {
        follow = followService.addFollower(follow);
        if (followService.getAllFollow.next().equals(userId)) {
            return null;
        }
            return followService.addFollow(follow);
       
    }

    @GetMapping(value = "/{userId}", produces = "application/json")
    public List<Follow> getAllFollow(@PathVariable String userId) {
        return followService.getAllFollow();
    }

    @DeleteMapping(value = "/{userId}", produces = "application/json")
    public Follow unFollow(@PathVariable String userId, @RequestBody Follow follow) {
        follow = followService.findUserFollowId(follow);
        if (follow != null) {
            return followService.unFollow(follow);
        }
        return null;
    }


    







}