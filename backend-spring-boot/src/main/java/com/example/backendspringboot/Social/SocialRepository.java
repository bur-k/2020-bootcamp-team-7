package com.example.backendspringboot.Follow;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository

public interface FollowRepository extends MongoRepository<Follow, String> {
    
   public Follow findByFollowId(@Param("followId") String userId);
   public Follow remove(Follow follow);
   public List<Follow> getAllFollow(@Param("userId") String userId);
   public List<Follow> getAllFollowers(@Param("userId") String userId);



}