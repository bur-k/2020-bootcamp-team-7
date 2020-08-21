package com.example.backendspringboot.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    User createUser(User user) {
        user.setWatchList(new HashSet<Integer>());
        user.setWatchedList(new HashSet<Integer>());
        return userRepository.insert(user);
    }

    public User findUserByUserId(String id) {
        return userRepository.findUserByUserId(id);
    }

    List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User save(User user) {
        return userRepository.save(user);
    }

}
