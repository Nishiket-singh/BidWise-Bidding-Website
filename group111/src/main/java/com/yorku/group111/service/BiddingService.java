package com.yorku.group111.service;


import java.util.HashMap;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yorku.group111.dto.BiddingDto;
import com.yorku.group111.dto.ResponseDto;
import com.yorku.group111.dto.SubmitBidDto;
import com.yorku.group111.model.Bid;
import com.yorku.group111.model.HighestBid;
import com.yorku.group111.model.Product;
import com.yorku.group111.model.User;
import com.yorku.group111.repository.BidRepository;
import com.yorku.group111.repository.HighestBidRepository;
import com.yorku.group111.repository.ProductRepository;
import com.yorku.group111.repository.TokenRepository;

import jakarta.servlet.ServletContext;




@Service
public class BiddingService {

	@Autowired
	private BidRepository bidRepository;
	
	@Autowired
	private TokenRepository tokenRepository;
	
	@Autowired 
	private ProductRepository productRepository;
	
	@Autowired
	private HighestBidRepository highestbidRepository;
	
	
	@Autowired
	private ServletContext servletContext;
	
    @Autowired
    ApplicationStartTime timer;

	public BiddingDto getItemAndBiddingDetails(Integer productid) {
		//Get product info using product repository.
		Product product = productRepository.getReferenceById(productid); 
		long totaltime = product.getTotaltime();
    	String time = timer.getRemainingTime(totaltime);
		BiddingDto biddingDto;
		//check for product bidding type
		if(product.getAuctiontype().equals("Forward")){
			//Get highest bid info using highestbidRepo
			HighestBid highestbid = highestbidRepository.findByProduct(product); // highest bid should never be null by our logic
			
			String highestBidderName = null; // if first bid, user is null
			if(highestbid.getUser() != null) {
				highestBidderName = highestbid.getUser().getFirstName();
			}
			// 
			biddingDto = new BiddingDto( product.getName(),product.getDescription(), product.getShippingtime(), highestbid.getHighestbidamount(), highestBidderName, time);
		}
		else {
			biddingDto = new BiddingDto( product.getName(), product.getDescription(), product.getShippingtime(), Integer.valueOf(product.getInitialprice()), null, null);
		}
		
		return biddingDto;
	}
	
	
	public SubmitBidDto submitForwardBid(Integer bidamount,Integer productid ,String authorizationToken) {
		
		authorizationToken = authorizationToken.split(" ")[1];
		User user= tokenRepository.findByToken(authorizationToken).getUser(); // id of user who is making the bid
		
		// check if this is higher than bids for this item
		HighestBid currentHighestBid = highestbidRepository.findByProduct(new Product(productid)); // will never be null
		
		
		Integer currentHighestBidAmount = currentHighestBid.getHighestbidamount();
		if(bidamount > currentHighestBidAmount) {
			// save the bid in bids table since this is an acceptable bid
			Bid bid = new Bid(bidamount, user, new Product(productid)); 
			bidRepository.save(bid);
				
			// update the highest bid table
			currentHighestBid.setHighestbidamount(bidamount);
			currentHighestBid.setUser(user);
		
			highestbidRepository.save(currentHighestBid);
			return new SubmitBidDto("Success", currentHighestBid.getHighestbidamount(), currentHighestBid.getUser().getFirstName());
		}
		else {
			String highestBidderName = null; // if first bid, user is null
			if(currentHighestBid.getUser() != null) {
				highestBidderName = currentHighestBid.getUser().getFirstName();
			}
			return new SubmitBidDto("Failed", currentHighestBidAmount, highestBidderName); 
		}
		
	}
	public ResponseDto endForwardBid(Integer productid) {
		HighestBid highestBid = highestbidRepository.findByProduct(new Product(productid));
		User user = highestBid.getUser();
		Integer shippingPrice = Integer.parseInt(productRepository.getReferenceById(productid).getShippingtime());
		Integer total = highestBid.getHighestbidamount() + shippingPrice;
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
		servletContext.setAttribute("total", total);
		return new ResponseDto("Success", "Won by: " + user.getFirstName());
		
	}
	public String getTimeRemaining() {
	
		return "time remaining";
	}
	public ResponseDto submitDutchBid(Integer productid,String authorizationToken ) {
		authorizationToken = authorizationToken.split(" ")[1];
		User user = tokenRepository.findByToken(authorizationToken).getUser();
		Product prod = productRepository.getReferenceById(productid);
		Integer total = prod.getInitialprice() + Integer.parseInt(prod.getShippingtime());
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
		servletContext.setAttribute("total", total);
		return new ResponseDto("Success", "Won by: " + user.getFirstName());
	}
	
	public ResponseDto payNow(Integer productid,Integer expediatedShipment,String authorizationToken) {
		authorizationToken = authorizationToken.split(" ")[1];
		// check if this is the user that won
		HashMap<Integer, Integer> prodToWinner = (HashMap<Integer, Integer>) servletContext.getAttribute("prodTowinner");
		Integer winnerId = prodToWinner.get(productid);
		String winnerToken = tokenRepository.findByUser(new User(winnerId)).getToken();
		
		servletContext.setAttribute("expdetiatedshipment", expediatedShipment);
		if(authorizationToken.equals(winnerToken)) {
			return new ResponseDto("Success", "Procees with Payment");
		}
		return new ResponseDto("Failed", "The item has been auctioned");
	}
	
}
