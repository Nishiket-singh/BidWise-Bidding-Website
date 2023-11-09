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
    
    @Column(name = "initialprice")
    private String initialprice;
    
    @Column(name = "totaltime")
    private String totaltime;
    
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

	public String getInitialprice() {
		return initialprice;
	}

	public void setInitialprice(String initialprice) {
		this.initialprice = initialprice;
	}

	public String getTotaltime() {
		return totaltime;
	}

	public void setTotaltime(String totaltime) {
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

	

   
	
}
