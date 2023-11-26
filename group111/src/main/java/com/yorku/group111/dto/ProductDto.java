package com.yorku.group111.dto;

public class ProductDto {
	private int id;
	private String name;
	private int currentPrice;
	private String auctionType;
	private String remaningTime;
	private String imageurl;
	
	public ProductDto(int id,String name, int currentPrice, String auctionType, String remaningTime,String imageurl){
		this.id = id;
		this.name = name;
		this.currentPrice = currentPrice;
		this.auctionType = auctionType;
		this.remaningTime = remaningTime;
		this.imageurl = imageurl;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getCurrentPrice() {
		return currentPrice;
	}

	public void setCurrentPrice(int currentPrice) {
		this.currentPrice = currentPrice;
	}

	public String getAuctionType() {
		return auctionType;
	}

	public void setAuctionType(String auctionType) {
		this.auctionType = auctionType;
	}

	public String getRemaningTime() {
		return remaningTime;
	}

	public void setRemaningTime(String remaningTime) {
		this.remaningTime = remaningTime;
	}
	
	public ProductDto() {
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getImageurl() {
		return imageurl;
	}

	public void setImageurl(String imageurl) {
		this.imageurl = imageurl;
	}
	

}
