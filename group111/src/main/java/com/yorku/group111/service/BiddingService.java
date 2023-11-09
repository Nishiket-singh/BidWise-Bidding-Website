package com.yorku.group111.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yorku.group111.dto.BiddingDto;
import com.yorku.group111.model.Bid;
import com.yorku.group111.model.HighestBid;
import com.yorku.group111.model.Product;
import com.yorku.group111.model.User;
import com.yorku.group111.repository.BidRepository;
import com.yorku.group111.repository.HighestBidRepository;
import com.yorku.group111.repository.ProductRepository;
import com.yorku.group111.repository.TokenRepository;



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
	
	public BiddingDto getItemAndForwardBiddingDetails() {
		Integer productid = 2; // to come from catalogue controller selected by the user through httpSession
		
		//Get product info using product repository.
		Product product = productRepository.getReferenceById(productid); // change this method when changing the spring version.deprecated probably 
		
		//Get highest bid info using highestbidRepo
		HighestBid highestbid = highestbidRepository.findByProduct(product); // highest bid should never be null by our logic
		
		String highestBidderName = null;
		if(highestbid.getUser() != null) {
			highestBidderName = highestbid.getUser().getFirstName();
		}
		// change these to actual product info when product table fully implemented
		BiddingDto biddingDto = new BiddingDto( product.getName(),product.getDescription(), product.getShippingtime(), highestbid.getHighestbidamount(), highestBidderName);
		
		return biddingDto;
	}
	
	
	public String submitForwardBid(Integer bidamount, String authorizationToken) {
		Integer productid = 2; // to come from catalogue controller selected by the user through httpSession
		
		authorizationToken = authorizationToken.split(" ")[1];
		Integer userid = tokenRepository.findByToken(authorizationToken).getUser().getId();
		
		// check if this is higher than bids for this item
		HighestBid currentHighestBid = highestbidRepository.findByUser(new User(userid));
		
		
		Integer currentHighestBidAmount = currentHighestBid.getHighestbidamount();
		if(bidamount > currentHighestBidAmount) {
			// save the bid in bids table since this is an acceptable bid
			Bid bid = new Bid(bidamount, new User(userid), new Product(productid)); 
			bidRepository.save(bid);
				
			// update the highest bid table
			currentHighestBid.setHighestbidamount(bidamount);
			highestbidRepository.save(currentHighestBid);
		}
		else {
			return "Enter a higher bid";
		}
	
	
		
		return "Bid sumbitted";
		
	}
	
	public BiddingDto getItemAndDutchBiddingDetails() {
		Integer productid = 2; // to come from catalogue controller selected by the user through httpSession
		
		//Get product info using product repository.
		Product product = productRepository.getReferenceById(productid); // change this method when changing the spring version.deprecated probably 
		
		// change these to actual product info when product table fully implemented and price also comes from product table since dutch bidding
		BiddingDto biddingDto = new BiddingDto( product.getName(), product.getDescription(), product.getShippingtime(), Integer.valueOf(product.getInitialprice()), null); 
		
		return biddingDto;
	}
}
