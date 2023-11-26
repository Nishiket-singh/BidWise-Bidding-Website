package com.yorku.group111.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.yorku.group111.dto.PaymentDetailsDto;
import com.yorku.group111.dto.ResponseDto;
import com.yorku.group111.service.PaymentService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/payment")
public class PaymentController {
	
	@Autowired
    private PaymentService paymentService;
	
	@GetMapping("/userdetails")
	public PaymentDetailsDto getUserDetails() {
		return paymentService.getUserDetails();
	}
	

    @PostMapping("/makepayment")
    public ResponseDto createPaymentIntent(@RequestBody Map<String, String> requestBody) {
        try {
        	//can create a reqeuest body dto as well
        	String paymentMethodId = requestBody.get("paymentMethodId");
        	Integer amount = 2000; // use actual amount obtained from previous use case
            PaymentIntent intent = paymentService.createPaymentIntent(amount, paymentMethodId, "http://localhost:8080/receipt");
            return new ResponseDto("Success", "Payment Made");
        } catch (StripeException e) {
            return new ResponseDto("Failed", e.getMessage());
        }
    }

}
