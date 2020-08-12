package com.example.backendspringboot.Social;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;



@Repository


public interface SocialRepository extends MongoRepository<Social, String> {
 
 
 
  Social findByUserId(@Param("userId") Social user);







  // public Social findByUserId(@Param("userId") String userId);
 //  public Social remove(@Param("userId")String userId);
 //  public List<Social> getAllSocial(@Param("userId") String userId);
 //  public List<Social> getAllSocialers(@Param("userId") String userId);



}