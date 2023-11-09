package com.yorku.group111.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;




import com.yorku.group111.model.AuthenticationToken;
import com.yorku.group111.model.User;
import com.yorku.group111.repository.TokenRepository;

@Service
public class AuthenticationService {

    @Autowired
    TokenRepository tokenRepository;

    public void saveConfirmationToken(AuthenticationToken authenticationToken) {
        tokenRepository.save(authenticationToken);
    }

    public AuthenticationToken getToken(User user) {
        return tokenRepository.findByUser(user);
    }
}
