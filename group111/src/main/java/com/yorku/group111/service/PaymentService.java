package com.yorku.group111.service;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.yorku.group111.dto.PaymentDetailsDto;
import com.yorku.group111.dto.ReceiptDto;
import com.yorku.group111.model.Order;
import com.yorku.group111.model.Product;
import com.yorku.group111.model.User;
import com.yorku.group111.repository.OrderRepository;
import com.yorku.group111.repository.ProductRepository;
import com.yorku.group111.repository.UserRepository;

import jakarta.servlet.ServletContext;
import jakarta.servlet.http.HttpSession;

@Service
public class PaymentService {
	
	@Value("${stripe.apiKey}")
	private String stripeApiKey;
	
	@Autowired
	private ServletContext servletContext;
	
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private OrderRepository orderRepository;
	
	private Integer winnerId;
	private Integer productId;
	private Integer total;
	
	public PaymentDetailsDto getUserDetails(Integer productId) {
		this.productId = productId;
		HashMap<Integer, Integer> prodToWinner = (HashMap<Integer, Integer>) servletContext.getAttribute("prodTowinner");
		winnerId = prodToWinner.get(productId);
		User user = userRepository.getReferenceById(winnerId);
		Integer expediatedShipment = (Integer) servletContext.getAttribute("expdetiatedshipment");
		total = (Integer) servletContext.getAttribute("total"); 
		if(expediatedShipment == 1) {
			total = total + 10;
		}
		PaymentDetailsDto paymentDetails = new PaymentDetailsDto(user.getFirstName(), user.getLastName(), 
				user.getStreetaddress(), user.getPostalcode(),user.getCity(), user.getCountry(),total);
		return paymentDetails;	
	}
	
	public PaymentIntent createPaymentIntent() throws StripeException {
		Stripe.apiKey = stripeApiKey;
		HashMap<String, Object> params = new HashMap<String, Object>();
		params.put("amount", total * 100);
        params.put("currency", "cad");
		PaymentIntent intent = PaymentIntent.create(params);
		
		
		return intent;
	}
	
	public ReceiptDto createOrder() {
		Order order = new Order(new Product(productId), new User(winnerId), total);
		orderRepository.save(order);
		User user = userRepository.getReferenceById(winnerId);
		Product product = productRepository.getReferenceById(productId);
		
		return new ReceiptDto(user.getFirstName(), user.getLastName(), user.getStreetaddress(), user.getPostalcode(), user.getCity(), user.getCountry(), total, product.getName());
	}

}