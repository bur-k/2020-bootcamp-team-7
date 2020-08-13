package com.example.backendspringboot.User;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<User,Integer > {
    //void checkUser(String id,User user);

}
