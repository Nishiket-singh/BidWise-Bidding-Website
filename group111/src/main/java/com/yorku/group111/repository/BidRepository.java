package com.yorku.group111.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yorku.group111.model.Bid;

@Repository
public interface BidRepository extends JpaRepository<Bid, Integer>{
	

}
