package com.ecom.Ecom4413.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
	
	
	@GetMapping("/")
	public String homepage() {
		return "homepage";
	}
	
	@GetMapping("/signin")
	public String signin() {
		return "Signing in";
	}
	
	@GetMapping("/signup")
	public String signup() {
		return "Signing up";
	}
	

}
