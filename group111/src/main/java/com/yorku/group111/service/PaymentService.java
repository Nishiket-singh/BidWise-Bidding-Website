package com.yorku.group111.service;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.yorku.group111.dto.PaymentDetailsDto;
import com.yorku.group111.model.User;
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
	
	
	public PaymentDetailsDto getUserDetails(Integer productid) {
		HashMap<Integer, Integer> prodToWinner = (HashMap<Integer, Integer>) servletContext.getAttribute("prodTowinner");
		Integer winnerId = prodToWinner.get(productid);
		User user = userRepository.getReferenceById(winnerId);
		Integer expediatedShipment = (Integer) servletContext.getAttribute("expdetiatedshipment");
		Integer total = (Integer) servletContext.getAttribute("total"); 
		if(expediatedShipment == 1) {
			total = total + 10;
		}
		PaymentDetailsDto paymentDetails = new PaymentDetailsDto(user.getFirstName(), user.getLastName(), 
				user.getStreetaddress(), user.getPostalcode(),user.getCity(), user.getCountry(),total);
		return paymentDetails;	
	}
	
	public PaymentIntent createPaymentIntent(Integer amount, String paymentMethodId,String returnURL) throws StripeException {
		Stripe.apiKey = stripeApiKey;
		HashMap<String, Object> params = new HashMap<String, Object>();
		params.put("amount", amount);
        params.put("currency", "cad");
        params.put("confirm", "true");
        params.put("payment_method",paymentMethodId);
        params.put("return_url", returnURL);
		PaymentIntent intent = PaymentIntent.create(params);
		
		
		return intent;
	}

}