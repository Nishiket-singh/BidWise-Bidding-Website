package com.yorku.group111.dto;

public class SubmitBidDto {
	
    private String status;
	private Integer currentprice;
	private String highestbidder;
	
	public SubmitBidDto(String status, Integer currentprice, String highestbidder) {
		this.status = status;
		this.currentprice = currentprice;
		this.highestbidder = highestbidder;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Integer getCurrentprice() {
		return currentprice;
	}
	public void setCurrentprice(Integer currentprice) {
		this.currentprice = currentprice;
	}
	public String getHighestbidder() {
		return highestbidder;
	}
	public void setHighestbidder(String highestbidder) {
		this.highestbidder = highestbidder;
	}
	
}
