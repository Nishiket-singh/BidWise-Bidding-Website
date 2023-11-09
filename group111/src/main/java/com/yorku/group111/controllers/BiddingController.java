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
import com.yorku.group111.service.BiddingService;



@RequestMapping("bidding")
@RestController
public class BiddingController {
	
	@Autowired
	private BiddingService biddingService;
	
    @GetMapping("/forwardbid")
    public BiddingDto getItemAndForwardBiddingDetails() {
    	BiddingDto response = biddingService.getItemAndForwardBiddingDetails();
    	return response;
    }

	@PostMapping("/forwardbid")
	public String submitForwardBid(@RequestBody Map<String, Integer> requestBody, @RequestHeader("Authorization") String authorizationToken) {
		
		//use users header info that contains authentication token
		Integer bidamount = requestBody.get("bidamount");
		return biddingService.submitForwardBid(bidamount, authorizationToken);
		
	}
	@GetMapping("/dutchbid")
	public BiddingDto getItemAndDutchBiddingDetails() {
		BiddingDto reponse = biddingService.getItemAndDutchBiddingDetails();
		
		return reponse;
	}
	
	@PostMapping("/dutchbid")
	public String submitDutchBid() {
		// Item has to be deleted after this bid, 
		// 
		return "do the dutch thingy here";
	}
}