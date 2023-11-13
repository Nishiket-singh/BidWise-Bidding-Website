package com.yorku.group111.service;

import com.yorku.group111.repository.ProductRepository;

import jakarta.servlet.http.HttpSession;

import com.yorku.group111.dto.ProductDto;
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
    HttpSession httpsession;
    

    public ProductDto getProductDto(Product product) {
        ProductDto productDto = new ProductDto(product.getName(), product.getInitialprice(),product.getAuctiontype(), product.getShippingtime());
        return productDto;
    }
    
    public Product getProductById(Integer productId) throws Exception {
    	Optional<Product> OptProduct = productRepository.findById(productId);
    	if (!OptProduct.isPresent()) {
          throw new Exception("product not present");
      }
    	Product product = OptProduct.get();
    	return product;
    }
    
    
    

    public List<ProductDto> getAllProducts() {
        List<Product> allProducts = productRepository.findAll();

        List<ProductDto> productDtos = new ArrayList<>();
        for(Product product: allProducts) {
            productDtos.add(getProductDto(product));
        }
        return productDtos;
    }

    // here we should return the product auction type
    public void selectProduct(Integer productId) {
    	httpsession.setAttribute("productid", productId );
    }
    
    
//    public void updateProduct(ProductDto productDto, Integer productId) throws Exception {
//        Optional<Product> optionalProduct = productRepository.findById(productId);
//        // throw an exception if product does not exists
//        if (!optionalProduct.isPresent()) {
//            throw new Exception("product not present");
//        }
//        Product product = optionalProduct.get();
//        product.setAuctionType(productDto.getAuctionType());
//        product.setImageURL(productDto.getImageURL());
//        product.setName(productDto.getName());
//        product.setCurrentBiddingPrice(productDto.getCurrentBiddingPrice());
//        product.setTimeRemaining(productDto.getTimeRemaining());
//        ProductRepository.save(product);
//    }
}
