package com.example.backendspringboot.Social;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository


public interface SocialRepository extends MongoRepository<Social, String> {

    Social findByUserId(String id);
}