package com.yorku.group111.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.yorku.group111.dto.ForgotPasswordResponseDto;
import com.yorku.group111.dto.ResponseDto;
import com.yorku.group111.dto.SigninDto;
import com.yorku.group111.dto.SigninResponseDto;
import com.yorku.group111.dto.SignupDto;
import com.yorku.group111.service.UserService;


@RequestMapping("user")
@RestController
public class UserController {

    @Autowired
    UserService userService;

    // two apis

    // signup

    @PostMapping("/signup")
    public ResponseDto signup(@RequestBody SignupDto signupDto) {
        return userService.signUp(signupDto);
    }


    // signin

    @PostMapping("/signin")
    public SigninResponseDto signIn(@RequestBody SigninDto signInDto) {
        return userService.signIn(signInDto);
    }

    @PostMapping("/forgotpassword")
    public ForgotPasswordResponseDto forgotPassword(@RequestBody SigninDto signInDto) {
        return userService.ForgotPassword(signInDto);
    }
    

}