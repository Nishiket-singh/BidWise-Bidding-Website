package com.yorku.group111.controllers;

import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.yorku.group111.dto.ResponseDto;

@CrossOrigin(origins = "https://frontend-bidding.onrender.com")
@RestController
public class TestController {
	
	@PostMapping("test")
	public String selectProduct() {
		
		
		return "testing";
		
		//return type of product acution type;
	}

}
