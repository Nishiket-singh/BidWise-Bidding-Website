package com.yorku.group111.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yorku.group111.model.Order;

public interface OrderRepository extends JpaRepository<Order, Integer> {
}
