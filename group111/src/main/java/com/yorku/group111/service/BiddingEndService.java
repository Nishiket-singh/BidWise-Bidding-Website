package com.yorku.group111.service;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.yorku.group111.model.HighestBid;
import com.yorku.group111.model.Product;
import com.yorku.group111.model.User;
import com.yorku.group111.repository.HighestBidRepository;
import com.yorku.group111.repository.ProductRepository;

import jakarta.mail.MessagingException;
import jakarta.servlet.ServletContext;


@Component
public class BiddingEndService {
    @Autowired
    ProductRepository productRepository;
    
    @Autowired
    HighestBidRepository highestBidRepository;
    
    @Autowired
    ApplicationStartTime timer;
	
	@Autowired
	private ServletContext servletContext;
	
    @Autowired
    private EmailService emailService;
	
	@Scheduled(fixedRate = 60000)
	public void checkForwardBidEnd() {
		List<Product> allProducts = productRepository.findAll();
		for(Product product: allProducts) {
            // get remaining time for each product
			long totaltime = product.getTotaltime();
        	long time = timer.getRemainingTimeInSec(totaltime);
        	if (time < 0){
        		this.endForwarBidding(product.getId());
        	}
        }
		System.out.println("Check");
	}
	
	public void endForwarBidding(Integer productid) {
		HighestBid highestBid = highestBidRepository.findByProduct(new Product(productid));
		User user = highestBid.getUser();
		//Integer shippingPrice = Integer.parseInt(productRepository.getReferenceById(productid).getShippingtime());
		Integer total = highestBid.getHighestbidamount(); //+ shippingPrice;
		
		if(servletContext.getAttribute("prodTowinner") == null) {
			HashMap<Integer, Integer> prodToWinner = new HashMap<Integer, Integer>();
			prodToWinner.put(productid, user.getId());
			servletContext.setAttribute("prodTowinner", prodToWinner);
		}
		else {
			HashMap<Integer, Integer> prodToWinner = (HashMap<Integer, Integer>) servletContext.getAttribute("prodTowinner");
			prodToWinner.put(productid, user.getId());
			servletContext.setAttribute("prodTowinner", prodToWinner);
		}
		// set the total attribute as well for payment
		
		//call the method to send email with winners email
		this.sendEmail(user.getEmail(), "Slow Rush"); //set to prod.getName
	
	}
	
	public void sendEmail(String email, String prodName) {
		String subject = "Congratulations! You have won the bid at Bidwise.";
		String content = "Hi there,\n";
		content += "You have won you the bid for " + prodName + ". Click the following link to head over to our website and proceed with paymeny.";
		// add the link with productid and authorization token of the user.
		try {
			emailService.sendEmail(email, subject, content);
			System.out.println("Email sent successfully.");
		} catch (MessagingException | UnsupportedEncodingException e) {
			System.out.println("Failed to send email. Error: " + e.getMessage());
		}
	}
}