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
    public BiddingDto getItemAndBiddingDetails(@RequestBody Map<String, Integer> requestBody) {
    	Integer productid = requestBody.get("productid");
    	BiddingDto response = biddingService.getItemAndBiddingDetails(productid);
    	return response;
    }

	@PostMapping("/forwardbid")
	public SubmitBidDto submitForwardBid(@RequestBody Map<String, Integer> requestBody, @RequestHeader("Authorization") String authorizationToken) {
		
		//use users header info that contains authentication token
		Integer productid = requestBody.get("productid");
		if(requestBody.get("bidamount") == null) {
			return new SubmitBidDto("Enter a bid Amount", null, null);
		}
		Integer bidamount = requestBody.get("bidamount");
		
		return biddingService.submitForwardBid(bidamount,productid,authorizationToken);
		
	}
	
	@GetMapping("/getTimeRemaining")
	public String getTimeRemaining() {
		
		return "time left";
	}
	
	@PostMapping("/dutchbid")
	public ResponseDto submitDutchBid(@RequestBody Map<String, Integer> requestBody,@RequestHeader("Authorization") String authorizationToken) {
		// Item has to be deleted after this bid, 
		// store the winner's autharization token
		Integer productid = requestBody.get("productid");
		return biddingService.submitDutchBid(productid,authorizationToken);
	}
	
	@GetMapping("/paynow")
	public String payNow(@RequestBody Map<String, Boolean> requestBody,@RequestHeader("Authorization") String authorizationToken) {
		Boolean expeditedShipment = requestBody.get("expediatedshipment");
	
		return biddingService.payNow(expeditedShipment,authorizationToken);
	
	}
}