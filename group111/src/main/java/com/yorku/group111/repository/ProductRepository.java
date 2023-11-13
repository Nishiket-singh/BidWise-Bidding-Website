package com.yorku.group111.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.yorku.group111.dto.ProductDto;
import com.yorku.group111.model.Product;


@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
	
	@Query(value = "SELECT p.* FROM products p WHERE CONCAT(p.name,' ', p.description, ' ', p.auctiontype, ' ', p.genre, ' ') LIKE %?1%",nativeQuery = true)
	public List<Product> search(String keyword);
	
}	