package com.yorku.group111.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yorku.group111.model.HighestBid;
import com.yorku.group111.model.Product;
import com.yorku.group111.model.User;



@Repository
public interface HighestBidRepository extends JpaRepository<HighestBid, Integer>{

	HighestBid findByProduct(Product product);
	HighestBid findByUser(User user);
}
