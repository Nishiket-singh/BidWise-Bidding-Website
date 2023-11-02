package com.ecom.Ecom4413.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CatalogueController {
	
	@GetMapping("/catalogue")
	public String displayItems() {
		return "display all available items";
	}
	
	@GetMapping("catalogue/{keyword}")
	public String displaySeachedItems(@PathVariable String keyword) {
		return "Searched items to be displayed" + keyword;
	}
	
	@PostMapping("catalogue/{id}")
	public String selectItemToBid(@PathVariable Integer id) {
		return "Should store id of item to bid for bidding controller";
	}

}
