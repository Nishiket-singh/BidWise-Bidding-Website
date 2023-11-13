package com.yorku.group111.dto;

public class PaymentDetailsDto {

	private String firstname;
    private String lastname;
    private String streetaddress;
    private String postalcode;
    private String city;
    private String country;
    private Integer total;
    public PaymentDetailsDto(String firstname, String lastname, String streetaddress, String postalcode, String city,String country,Integer total ) {
    	this.firstname = firstname;
    	this.lastname = lastname;
        this.streetaddress = streetaddress;
        this.postalcode = postalcode;
        this.city = city;
        this.country = country;  
        this.total = total;
    }
    
    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

	public String getStreetaddress() {
		return streetaddress;
	}

	public void setStreetaddress(String streetaddress) {
		this.streetaddress = streetaddress;
	}

	public String getPostalcode() {
		return postalcode;
	}

	public void setPostalcode(String postalcode) {
		this.postalcode = postalcode;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public Integer getTotal() {
		return total;
	}

	public void setTotal(Integer total) {
		this.total = total;
	}
	
}
