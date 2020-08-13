package com.example.backendspringboot.User;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<User,String > {
    User findUserByUserId(@Param("id") String id);
    List<User> getUserByUserIdExists(boolean exists);
}
