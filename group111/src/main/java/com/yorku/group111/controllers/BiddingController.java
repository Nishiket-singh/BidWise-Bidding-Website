package com.yorku.group111.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yorku.group111.dto.BiddingDto;
import com.yorku.group111.dto.ResponseDto;
import com.yorku.group111.dto.SubmitBidDto;
import com.yorku.group111.service.BiddingService;



@RequestMapping("bidding")
@RestController
public class BiddingController {
	
	@Autowired
	private BiddingService biddingService;
	
    @GetMapping("/productdetails")
    public BiddingDto getItemAndBiddingDetails() {
    	BiddingDto response = biddingService.getItemAndBiddingDetails();
    	return response;
    }

	@PostMapping("/forwardbid")
	public SubmitBidDto submitForwardBid(@RequestBody Map<String, Integer> requestBody, @RequestHeader("Authorization") String authorizationToken) {
		
		//use users header info that contains authentication token
		Integer bidamount = requestBody.get("bidamount");
		return biddingService.submitForwardBid(bidamount, authorizationToken);
		
	}
	
	@PostMapping("/dutchbid")
	public ResponseDto submitDutchBid(@RequestHeader("Authorization") String authorizationToken) {
		// Item has to be deleted after this bid, 
		// store the winner's autharization token
		
		return biddingService.submitDutchBid(authorizationToken);
	}
	
	@GetMapping("/paynow")
	public String payNow(@RequestBody Map<String, Boolean> requestBody,@RequestHeader("Authorization") String authorizationToken) {
		Boolean expeditedShipment = requestBody.get("expediatedshipment");
	
		return biddingService.payNow(expeditedShipment,authorizationToken);
	
	}
}