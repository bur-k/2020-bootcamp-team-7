package com.example.backendspringboot.Social;


import com.example.backendspringboot.User.User;
import com.example.backendspringboot.User.UserService;
import com.example.backendspringboot.util.FirebaseTokenOperations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RequestMapping("/api/social")
@RestController
public class SocialController {
    private final SocialService socialService;
    private final UserService userService;

    @Autowired
    public SocialController(SocialService socialService, UserService userService) {
        this.socialService = socialService;
        this.userService = userService;
    }

    @GetMapping(value = "/{id}", produces = "application/json")
    public Social getSocial(@PathVariable String id) {
        Social social = socialService.findByUserId(id);
        if (social == null)
            return socialService.createSocial(id);
        return social;
    }

    @PostMapping(value = "/follow/{id}", produces = "application/json")
    public Social follow(@PathVariable String id, @RequestHeader(value = "Authorization") String token) {
        String uid = null;
        try {
            uid = FirebaseTokenOperations.getUid(token.split(" ")[1]);
        } catch (Exception e) {
            return new Social();
        }

        if (socialService.findByUserId(uid) == null)
            socialService.createSocial(uid);
        if (socialService.findByUserId(id) == null)
            socialService.createSocial(id);
        User user1 = userService.findUserByUserId(uid);
        User user2 = userService.findUserByUserId(id);
        return socialService.follow(new SocialUser(user1.userId, user1.userDisplayName), new SocialUser(user2.userId, user2.userDisplayName));
    }

    @PostMapping(value = "/unfollow/{id}", produces = "application/json")
    public Social unfollow(@PathVariable String id, @RequestHeader(value = "Authorization") String token) {
        String uid = null;
        try {
            uid = FirebaseTokenOperations.getUid(token.split(" ")[1]);
        } catch (Exception e) {
            return new Social();
        }

        if (socialService.findByUserId(uid) == null)
            socialService.createSocial(uid);
        User user1 = userService.findUserByUserId(uid);
        User user2 = userService.findUserByUserId(id);
        return socialService.unfollow(new SocialUser(user1.userId, user1.userDisplayName), new SocialUser(user2.userId, user2.userDisplayName));
    }

}