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
import com.yorku.group111.model.Product;
import com.yorku.group111.repository.ProductRepository;
import com.yorku.group111.service.ProductService;



@RestController
public class ProductController {
	
	@Autowired
    ProductService productService;
	
	@GetMapping("/products")
	public List<ProductDto> items(ProductDto productDto) {
        return productService.getAllProducts();
    }

	@PostMapping("selectproduct")
	public void selectProduct(@RequestBody Map<String, Integer> requestBody) {
		Integer productid = requestBody.get("productid");
		productService.selectProduct(productid);
	}

}
