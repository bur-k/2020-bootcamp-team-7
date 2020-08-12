package com.example.backendspringboot.util;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;

public class FirebaseOperations {
    public static String getUid(String token) throws FirebaseAuthException {
        return FirebaseAuth.getInstance().verifyIdToken(token, true).getUid();
    }
}
