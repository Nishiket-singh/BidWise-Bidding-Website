package com.yorku.group111.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


import com.yorku.group111.dto.ForgotPasswordResponseDto;
import com.yorku.group111.dto.ResponseDto;
import com.yorku.group111.dto.SigninDto;
import com.yorku.group111.dto.SigninResponseDto;
import com.yorku.group111.dto.SignupDto;
import com.yorku.group111.service.UserService;
import com.yorku.group111.exceptions.AuthenticationFailException;


@RequestMapping("user")
@CrossOrigin(origins = "https://frontend-bidding.onrender.com/")
@RestController
public class UserController {

    @Autowired
    UserService userService;

    // two apis

    // signup

    @PostMapping("/signup")
    public ResponseDto signup(@RequestBody @Valid SignupDto signupDto){
    	if(signupDto.getFirstname().isBlank() || signupDto.getLastname().isBlank() || signupDto.getEmail().isBlank() || signupDto.getPassword().isBlank() || signupDto.getStreetaddress().isBlank() || signupDto.getPostalcode().isBlank() || signupDto.getCity().isBlank() || signupDto.getCountry().isBlank()) {
    		return userService.error();
    	}
    		
        return userService.signUp(signupDto);
    }


    // signin

    @PostMapping("/signin")

    public SigninResponseDto signIn(@RequestBody @Validated SigninDto signInDto) throws AuthenticationFailException {
    	if(signInDto.getEmail().isBlank() || signInDto.getPassword().isBlank()){
    		return new SigninResponseDto("Try Again", "Empty fields are not allowed ");
       
    	}
    	 return userService.signIn(signInDto);
    }

    @PostMapping("/forgotpassword")
    public ForgotPasswordResponseDto forgotPassword(@RequestBody SigninDto signInDto) throws AuthenticationFailException {
        return userService.ForgotPassword(signInDto);
    }
    

}