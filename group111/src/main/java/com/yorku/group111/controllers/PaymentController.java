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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.yorku.group111.dto.PaymentDetailsDto;
import com.yorku.group111.dto.ReceiptDto;
import com.yorku.group111.dto.ResponseDto;
import com.yorku.group111.service.PaymentService;


@RestController
@CrossOrigin(origins = "https://frontend-bidding.onrender.com")
@RequestMapping("/payment")
public class PaymentController {
	
	@Autowired
    private PaymentService paymentService;
	
	@GetMapping("/userdetails")
	public PaymentDetailsDto getUserDetails(@RequestParam("productid") Integer productId) {
		return paymentService.getUserDetails(productId);
	}
	

    @PostMapping("/makepayment")
    public ResponseDto createPaymentIntent() {
        try {	
            PaymentIntent intent = paymentService.createPaymentIntent();
            return new ResponseDto("Success", intent.getClientSecret());
        } catch (StripeException e) {
            return new ResponseDto("Failed", e.getMessage());
        }
    }
    
    @GetMapping("/receiptdetails")
    public ReceiptDto createReceipt() {
    	
    	return paymentService.createOrder();
    }

}
