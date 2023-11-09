package com.yorku.group111.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yorku.group111.model.Product;


@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
	
	//List<Product> findByItemNameContainingIgnoreCaseOrDescriptionContainingIgnoreCase(String itemName, String description);
}
