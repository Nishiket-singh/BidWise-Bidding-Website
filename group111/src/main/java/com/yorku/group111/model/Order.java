package com.yorku.group111.model;


import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Product product;

    @Embedded
    private User user;


    // Constructors, getters, and setters
    
    public void setProduct(Product product) {
    	this.product = product;
    }
    
    public void setUser(User user) {
    	this.user = user;
    }
    
    
    public Product getProduct() {
    	return product;
    }
    
    public User setUser() {
    	return user;
    }
    

    public Order() {
        
    }

    public Order(Product product, User user) {
        this.product = product;
        this.user = user;
    }
    
}