package com.example.backendspringboot.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/users")
@RestController
public class UserController  {

    @Autowired
    private  UserService userService;

    @PostMapping(produces = "application/json")
    public User createUser(@RequestBody User user){
        userService.createUser(user);
        User user1 = userService.findUserByUserId(user.getUserId());
        if (user1 == null)
        user = userService.createUser(user);
        return user;
    }

    @GetMapping(produces = "application/json")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

}
