package com.example.backendspringboot.config;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import java.io.FileInputStream;
import java.io.IOException;

public class FirebaseAdminConfig {

    public static void init() {

        FileInputStream serviceAccount = null;

        {
            try {
                Resource resource = new ClassPathResource("kimneizlio-firebase-adminsdk.json");
                serviceAccount = new FileInputStream(resource.getFile().getAbsolutePath());
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        FirebaseOptions options = null;

        {
            try {
                options = new FirebaseOptions.Builder()
                        .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                        .setDatabaseUrl("https://kimneizlio.firebaseio.com")
                        .build();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        if (FirebaseApp.getApps().isEmpty())
            FirebaseApp.initializeApp(options);
    }

}
