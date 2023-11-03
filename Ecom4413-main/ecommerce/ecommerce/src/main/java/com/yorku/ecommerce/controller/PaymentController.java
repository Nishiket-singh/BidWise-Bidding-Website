package com.yorku.ecommerce.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.yorku.ecommerce.service.PaymentService;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

@RestController
public class PaymentController {
	
	@Autowired
    private PaymentService paymentService;
	
	@GetMapping("/userdetails")
	public String getUserDetails() {
		//return htttpsession objects user attribute and total attribute
		return "user that is making this payment and amount";
	}
	

    @PostMapping("/makepayment")
    public ResponseEntity<String> createPaymentIntent(@RequestBody Map<String, String> requestBody) {
        try {
        	//can create a reqeuest body dto as well
        	String paymentMethodId = requestBody.get("paymentMethodId");
        	Integer amount = 2000; // use actual amount obtained from previous use case
            PaymentIntent intent = paymentService.createPaymentIntent(amount, paymentMethodId, "http://localhost:8080/receipt");
            return ResponseEntity.ok(intent.getClientSecret());
        } catch (StripeException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}