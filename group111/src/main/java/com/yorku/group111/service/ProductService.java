package com.yorku.group111.service;

import com.yorku.group111.repository.HighestBidRepository;
import com.yorku.group111.repository.ProductRepository;


import jakarta.servlet.http.HttpSession;

import com.yorku.group111.dto.ProductDto;
import com.yorku.group111.dto.ResponseDto;
import com.yorku.group111.model.Product;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;
    
    @Autowired
    HighestBidRepository highestBidRepository;
    
    @Autowired
    HttpSession httpsession;
    
    @Autowired
    ApplicationStartTime timer;

   
    public ProductDto getProductDto(Product product) {
    	
    	if(product.getAuctiontype().equals("Forward")) {
        	long totaltime = product.getTotaltime();
        	String time = timer.getRemainingTime(totaltime);
    		Integer currentPrice = highestBidRepository.findByProduct(product).getHighestbidamount();
    		ProductDto productDto = new ProductDto(product.getName(), currentPrice, product.getAuctiontype(), time);
    		return productDto;
    	}
    	else {
    		 ProductDto productDto = new ProductDto(product.getName(), product.getInitialprice(),product.getAuctiontype(), "Now");
    	     return productDto;
    	}
       
    }
    
    public List<ProductDto> getAllProducts() {
        List<Product> allProducts = productRepository.findAll();

        List<ProductDto> productDtos = new ArrayList<>();
        for(Product product: allProducts) {
            productDtos.add(getProductDto(product));
        }
        return productDtos;
    }
    
    public List<ProductDto> getSearchProducts(String keyword){
    	List<Product> searchProducts = productRepository.search(keyword);
    	List<ProductDto> productDtos = new ArrayList<>();
        for(Product product: searchProducts) {
            productDtos.add(getProductDto(product));
        }
        return productDtos;
    	
    }

    
    public ResponseDto selectProduct(Integer productId) {
    	httpsession.setAttribute("productid", productId );
    	String auctionType = productRepository.getReferenceById(productId).getAuctiontype();
    
    	return new ResponseDto("Success", auctionType);
    }
    
    
    public ResponseDto createProduct(Product product) {
    	productRepository.save(product);
    	return new ResponseDto("Success", "Added to products for auction");
    }
    
    public Optional<Product> getProductById(Integer id) {
    	Optional<Product> product = productRepository.findById(id);
		return product;
    	
    }

    

}
