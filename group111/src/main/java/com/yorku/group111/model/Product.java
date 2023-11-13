package com.yorku.group111.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "products")
public class Product {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column(name = "name")
    private String name;
    
    @Column(name = "description")
    private String description;
    
    @Column(name = "genre")
    private String genre;
    
    @Column(name = "initialprice")
    private int initialprice;
    
    @Column(name = "totaltime")
    private long totaltime;
    
    @Column(name = "auctiontype")
    private String auctiontype;
    
    @Column(name = "shippingtime")
    private String shippingtime;

    public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getInitialprice() {
		return initialprice;
	}

	public void setInitialprice(int initialPrice) {
		this.initialprice = initialPrice;
	}

	public long getTotaltime() {
		return totaltime;
	}

	public void setTotaltime(long totaltime) {
		this.totaltime = totaltime;
	}

	public String getAuctiontype() {
		return auctiontype;
	}

	public void setAuctiontype(String auctiontype) {
		this.auctiontype = auctiontype;
	}

	public String getShippingtime() {
		return shippingtime;
	}

	public void setShippingtime(String shippingtime) {
		this.shippingtime = shippingtime;
	}

	public Product() {
		
	}
	
	public Product(int id) {
		this.id= id;
	}
	
	public Product(int id, String name, String description, int initialprice, long totaltime, String auctiontype, String shippingtime) {
		this.id= id;
		this.name = name;
		this.description = description;
		this.initialprice = initialprice;
		this.totaltime = totaltime;
		this.auctiontype = auctiontype;
		this.shippingtime = shippingtime;
	}
   
	
}
