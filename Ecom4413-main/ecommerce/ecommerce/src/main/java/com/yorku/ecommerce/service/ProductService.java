package com.yorku.ecommerce.service;

import com.yorku.ecommerce.dto.ProductDto;
import com.yorku.ecommerce.model.Category;
import com.yorku.ecommerce.model.Product;
import com.yorku.ecommerce.repository.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;

    public void createProduct(ProductDto productDto, Category category) {
        Product product = new Product();
        product.setAuctionType(productDto.getAuctionType());
        product.setImageURL(productDto.getImageURL());
        product.setName(productDto.getName());
        product.setTimeRemaining(productDto.getTimeRemaining());
        product.setCurrentBiddingPrice(productDto.getCurrentBiddingPrice());
        productRepository.save(product);
    }

    public ProductDto getProductDto(Product product) {
        ProductDto productDto = new ProductDto();
        productDto.setAuctionType(product.getAuctionType());
        productDto.setImageURL(product.getImageURL());
        productDto.setName(product.getName());
        productDto.setTimeRemaining(product.getTimeRemaining());
        productDto.setCurrentBiddingPrice(product.getCurrentBiddingPrice());
        productDto.setId(product.getId());
        return productDto;
    }

    public List<ProductDto> getAllProducts() {
        List<Product> allProducts = productRepository.findAll();

        List<ProductDto> productDtos = new ArrayList<>();
        for(Product product: allProducts) {
            productDtos.add(getProductDto(product));
        }
        return productDtos;
    }

    public void updateProduct(ProductDto productDto, Integer productId) throws Exception {
        Optional<Product> optionalProduct = productRepository.findById(productId);
        // throw an exception if product does not exists
        if (!optionalProduct.isPresent()) {
            throw new Exception("product not present");
        }
        Product product = optionalProduct.get();
        product.setAuctionType(productDto.getAuctionType());
        product.setImageURL(productDto.getImageURL());
        product.setName(productDto.getName());
        product.setCurrentBiddingPrice(productDto.getCurrentBiddingPrice());
        product.setTimeRemaining(productDto.getTimeRemaining());
        productRepository.save(product);
    }
}
