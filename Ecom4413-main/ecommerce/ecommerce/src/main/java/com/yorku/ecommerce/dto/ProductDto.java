package com.yorku.ecommerce.dto;

import javax.validation.constraints.NotNull;

public class ProductDto {
    // for create it can be optional
    // for update we need the id
    private Integer id;
    private @NotNull String name;
    private @NotNull String imageURL;
    private @NotNull double currentBiddingPrice;
    private @NotNull String auctionType;
    private @NotNull double timeRemaining;


    public ProductDto() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public double getCurrentBiddingPrice() {
        return currentBiddingPrice;
    }

    public void setCurrentBiddingPrice(double currentBiddingPrice) {
        this.currentBiddingPrice = currentBiddingPrice;
    }

    public String getAuctionType() {
        return auctionType;
    }

    public void setAuctionType(String auctionType) {
        this.auctionType = auctionType;
    }

    public double getTimeRemaining() {
        return timeRemaining;
    }

    public void setTimeRemaining(double timeRemaining) {
        this.timeRemaining = timeRemaining;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
