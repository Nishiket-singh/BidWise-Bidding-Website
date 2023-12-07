package com.yorku.group111.model;


import jakarta.persistence.Column;
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
    private Integer id;

    @ManyToOne(targetEntity = User.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "userid")
    private User user;
    
    @ManyToOne(targetEntity = Product.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "productid")
    private Product product;
    
    @Column(name = "total",nullable = false)
    private Integer total;


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
    
    public User getUser() {
    	return user;
    }
    

    public Integer getTotal() {
		return total;
	}

	public void setTotal(Integer total) {
		this.total = total;
	}

	public Order() {
        
    }

    public Order(Product product, User user, Integer total) {
        this.product = product;
        this.user = user;
        this.total = total;
    }
    
}