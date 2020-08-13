package com.example.backendspringboot.User;

import com.example.backendspringboot.Movie.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/api/v1/user")
@RestController
public class UserController  {

    @Autowired
    private  UserService userService;

    @PostMapping(produces = "application/json")
    public void createUser(@RequestBody User user){
        userService.createUser(user);
    }

    @GetMapping(produces = "application/json")
    public List<User> getAllUser() {
        return userService.getAllUser();
    }

}
