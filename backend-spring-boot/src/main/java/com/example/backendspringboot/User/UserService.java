package com.example.backendspringboot.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    User createUser(User user){
        return  userRepository.insert(user);
    }

    public User findUserByUserId(String id) {
        return userRepository.findUserByUserId(id);
    }

    List<User> getAllUsers() {
        return userRepository.findAll();
    }


}
