package com.yorku.group111.model;


import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(targetEntity = User.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "userid")
    private User user;
    
    @ManyToOne(targetEntity = Product.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "productid")
    private Product product;


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