package com.example.backendspringboot;

import com.example.backendspringboot.config.FirebaseAdminConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendSpringBootApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendSpringBootApplication.class, args);
        FirebaseAdminConfig.init();

    }

}
