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
@Table(name = "highestbids")
public class HighestBid {
	
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name = "highestbidamount")
    private Integer highestbidamount;
    
	@ManyToOne(targetEntity = User.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "userid")
    private User user;

	@ManyToOne(targetEntity = Product.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "productid") // make sure in product this is the name
    private Product product;
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getHighestbidamount() {
		return highestbidamount;
	}

	public void setHighestbidamount(Integer highestbidamount) {
		this.highestbidamount = highestbidamount;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public HighestBid(Integer amount, User user,Product product) {
		this.highestbidamount = amount;
		this.product = product;
		this.user = user;
	}
	public HighestBid() {
	}

}	