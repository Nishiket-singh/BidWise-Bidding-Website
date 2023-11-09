package com.yorku.group111.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.yorku.group111.dto.ProductDto;
import com.yorku.group111.dto.ResponseDto;
import com.yorku.group111.dto.SignupDto;
import com.yorku.group111.model.Order;
import com.yorku.group111.model.Product;
import com.yorku.group111.repository.OrderRepository;
import com.yorku.group111.service.OrderService;
import com.yorku.group111.service.ProductService;
import com.yorku.group111.service.UserService;

public class OrderController{
	
	@PostMapping("/confirm-payment")
	public void confirmPayment(@RequestParam Integer itemId, @RequestParam Integer userId) throws Exception {
		
//		Product product = new Product();
//		p.getProductById(itemId);
		
	    // Retrieve the product and user details using Request Parameters
		//TO-DO for some reason getProductById doesn't work
	}
	

	
	

}
