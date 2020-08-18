package com.example.backendspringboot.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import com.example.backendspringboot.Movie.Movie;
import com.example.backendspringboot.Review.Review;
import com.example.backendspringboot.Review.UserReview;
import com.example.backendspringboot.util.FirebaseTokenOperations;

import java.util.List;

@RestController
@RequestMapping("api/users")
public class UserController  {

    @Autowired
    private  UserService userService;

    @PostMapping(produces = "application/json")
    public User createUser(@RequestBody User user){
        User user1 = userService.findUserByUserId(user.getUserId());
        if (user1 == null)
        	user = userService.createUser(user);
        return user;
    }
//
//    @GetMapping(produces = "application/json")
//    public List<User> getAllUsers() {
//        return userService.getAllUsers();
//    }
    /*
    @GetMapping(produces = "application/json")
    public User getUser(@RequestHeader(value = "Authorization") String token) {
        String uid = null;
        try {
            uid = FirebaseTokenOperations.getUid(token.split(" ")[1]);
        } catch (Exception e) {
            return new User();
        };
        
        return userService.findUserByUserId(uid);
    }
    */
    
    @GetMapping(value = "/{id}", produces = "application/json")
    public User getUser(@PathVariable String id) {
        return userService.findUserByUserId(id);
    }

}
