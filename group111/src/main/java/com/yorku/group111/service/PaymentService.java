package com.yorku.group111.service;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

@Service
public class PaymentService {
	
	@Value("${stripe.apiKey}")
	private String stripeApiKey;
	
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