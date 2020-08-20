package com.example.backendspringboot.User;

import com.example.backendspringboot.util.FirebaseTokenOperations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;

@RestController
@RequestMapping("api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping(produces = "application/json")
    public User createUser(@RequestBody User user) {
        User user1 = userService.findUserByUserId(user.getUserId());
        if (user1 == null)
            user = userService.createUser(user);
        return user;
    }

    @GetMapping(produces = "application/json")
    public User getCurrentUser(@RequestHeader(value = "Authorization") String token) {
        String uid = null;
        try {
            uid = FirebaseTokenOperations.getUid(token.split(" ")[1]);
        } catch (Exception e) {
            return new User();
        }

        return userService.findUserByUserId(uid);
    }

    @GetMapping(value = "/{id}", produces = "application/json")
    public User getUser(@PathVariable String id) {
        User user1 = null;
        try {
            user1 = userService.findUserByUserId(id);
        } catch (Exception e) {
            return new User();
        }

        return user1;
    }

    @PutMapping(value = "newToWatch/{movieId}", produces = "application/json")
    public User setMovieAsToWatch(@RequestHeader(value = "Authorization") String token, @PathVariable Integer movieId) {
        String uid = null;
        try {
            uid = FirebaseTokenOperations.getUid(token.split(" ")[1]);
        } catch (Exception e) {
            return new User();
        }
        User user = userService.findUserByUserId(uid);
        if (user.getWatchList() == null)
            user.setWatchList(new HashSet<Integer>());
        user.getWatchList().add(movieId);
        return userService.save(user);
    }

    @PutMapping(value = "newWatched/{movieId}", produces = "application/json")
    public User setMovieAsWatched(@RequestHeader(value = "Authorization") String token, @PathVariable Integer movieId) {
        String uid = null;
        try {
            uid = FirebaseTokenOperations.getUid(token.split(" ")[1]);
        } catch (Exception e) {
            return new User();
        }
        User user = userService.findUserByUserId(uid);
        if (user.getWatchedList() == null)
            user.setWatchedList(new HashSet<Integer>());
        user.getWatchedList().add(movieId);
        return userService.save(user);
    }

    @PutMapping(value = "/{id}", produces = "application/json")
    public User updateUserAccountBio(@PathVariable String id, @RequestBody String bio) {
        User user1 = getUser(id);
        user1.setBio(bio);
        userService.save(user1);

        return user1;
    }

}
