package com.yorku.group111.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.yorku.group111.dto.ProductDto;
import com.yorku.group111.dto.ResponseDto;
import com.yorku.group111.dto.SignupDto;
import com.yorku.group111.model.Order;
import com.yorku.group111.model.Product;
import com.yorku.group111.model.User;
import com.yorku.group111.repository.OrderRepository;
import com.yorku.group111.service.OrderService;
import com.yorku.group111.service.ProductService;
import com.yorku.group111.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class OrderController{
	
	@Autowired
	ProductService productservice;
	
	@Autowired
	OrderService orderservice;
	
	@Autowired
	UserService userservice;
	
	@PostMapping("/confirm-payment")
	public Order confirmPayment(@RequestParam Integer itemid, @RequestParam Integer userid) throws Exception {
		
		Optional<Product> product = productservice.getProductById(itemid);
		Optional<User> user = userservice.GetUserById(userid);
		
		Product product2 = product.get();
		User user2 = user.get();
		
		Order order = orderservice.createOrder(product2, user2);
		
		return order;
	

}
	
	
	
}
