package com.yorku.group111.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.yorku.group111.dto.ProductDto;
import com.yorku.group111.dto.ResponseDto;
import com.yorku.group111.model.Product;
import com.yorku.group111.service.ProductService;


@RequestMapping("/products")
@CrossOrigin(origins = "https://frontend-bidding.onrender.com")
@RestController
public class ProductController {
	
	@Autowired
    ProductService productService;
	
	@GetMapping("/allproducts")
	public List<ProductDto> products() {
        return productService.getAllProducts();
    }

//	@GetMapping("/searchproducts")
//	public List<ProductDto> searchProducts(@RequestBody Map<String, String> requestBody){
//		String keyword = requestBody.get("keyword");
//		return productService.getSearchProducts(keyword);
//	}
	
	@GetMapping("/searchproducts")
	public List<ProductDto> searchProducts(@RequestParam String keyword){
	    return productService.getSearchProducts(keyword);
	}

	
	@PostMapping("selectproduct")
	public ResponseDto selectProduct(@RequestBody Map<String, Integer> requestBody) {
		Integer productid = requestBody.get("productid");
		
		return productService.selectProduct(productid);
		
		//return type of product acution type;
	}
	
	@PostMapping("createproduct")
	public ResponseDto createProduct(@RequestBody Product product) {
		return productService.createProduct(product);
	}
	

}
