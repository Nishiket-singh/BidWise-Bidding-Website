package com.yorku.group111.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yorku.group111.dto.ProductDto;
import com.yorku.group111.service.ProductService;



@RestController
public class ProductController {
	
	@Autowired
    ProductService productService;
	
	@GetMapping("/products")
	public List<ProductDto> products() {
        return productService.getAllProducts();
    }

	@GetMapping("/searchproducts")
	public List<ProductDto> searchProducts(@RequestBody Map<String, String> requestBody){
		String keyword = requestBody.get("keyword");
		return productService.getSearchProducts(keyword);
	}
	
	@PostMapping("selectproduct")
	public void selectProduct(@RequestBody Map<String, Integer> requestBody) {
		Integer productid = requestBody.get("productid");
		
		productService.selectProduct(productid);
		
		//return type of product acution type;
	}
	

}