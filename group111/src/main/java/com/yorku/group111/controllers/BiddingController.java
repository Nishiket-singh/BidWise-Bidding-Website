package com.yorku.group111.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.yorku.group111.dto.BiddingDto;
import com.yorku.group111.dto.ResponseDto;
import com.yorku.group111.dto.SubmitBidDto;
import com.yorku.group111.service.BiddingService;


@CrossOrigin(origins = "https://frontend-bidding.onrender.com")
@RequestMapping("bidding")
@RestController
public class BiddingController {
	
	@Autowired
	private BiddingService biddingService;
	
	
	@GetMapping("/productdetails")
	public BiddingDto getItemAndBiddingDetails(@RequestParam("productid") Integer productId) {
	    BiddingDto response = biddingService.getItemAndBiddingDetails(productId);
	    return response;
	}
	
	
	@PostMapping("/forwardbid")
	public SubmitBidDto submitForwardBid(@RequestParam("productid") Integer productId, @RequestParam("bidAmount") Integer bidAmount,@RequestHeader("Authorization") String authorizationToken) {
		
		//use users header info that contains authentication token
		if(bidAmount == null) {
			return new SubmitBidDto("Enter a bid Amount", null, null);
		}

		return biddingService.submitForwardBid(bidAmount,productId,authorizationToken);
		
	}
	
	@GetMapping("/endforwardbid")
	public ResponseDto endForwardBid(@RequestParam("productid") Integer productId) {
		Integer productid = productId;
		return biddingService.endForwardBid(productid);
	}
	
	@GetMapping("/getTimeRemaining")
	public String getTimeRemaining() {
		
		return "time left";
	}
	
	@PostMapping("/dutchbid")
	public ResponseDto submitDutchBid(@RequestParam("productid") Integer productId,@RequestHeader("Authorization") String authorizationToken) {
		// Item has to be deleted after this bid, 
		// store the winner's autharization token
		return biddingService.submitDutchBid(productId,authorizationToken);
	}
	
	@GetMapping("/paynow")
	public ResponseDto payNow(@RequestParam("productid") Integer productId,@RequestParam("expediatedShipment") Integer expediatedShipment,@RequestHeader("Authorization") String authorizationToken) {
		return biddingService.payNow(productId,expediatedShipment,authorizationToken);
	
	}
}