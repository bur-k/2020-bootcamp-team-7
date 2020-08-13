package com.example.backendspringboot.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;
    private User user;

   // @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    User createUser(User user){
        return  userRepository.insert(user);
    }

    List<User> getAllUser() {
        return userRepository.findAll();
    }


}
