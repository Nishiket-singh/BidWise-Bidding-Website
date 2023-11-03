package com.yorku.ecommerce.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("bidding")
@RestController
public class BiddingController {
	
	
	@GetMapping("/itemdetails") // used by both forward and dutch bidding.
	public String getItemDetails() {
		// Maybe id stored in httpSession by last use case when user selects item to bid
		return "use id of item stored in last use case to return details";
	}
	

}