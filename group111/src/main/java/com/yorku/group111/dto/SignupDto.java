package com.yorku.group111.dto;

import javax.validation.constraints.NotNull;



public class SignupDto {
	
	@NotNull(message = "firstname shouldn't be null")
	private String firstname;
    private String lastname;
    @NotNull(message = "email shouldn't be null")
    private String email;
    @NotNull(message = "password shouldn't be null")
    private String password;
    private String streetaddress;
    private String postalcode;
    private String city;
    private String country;

    public SignupDto(String firstname, String lastname,  String email, String password, String streetaddress, String postalcode, String city,String country ) {
    	this.firstname = firstname;
    	this.lastname = lastname;
    	this.email = email;
        this.password = password;
        this.streetaddress = streetaddress;
        this.postalcode = postalcode;
        this.city = city;
        this.country = country;
        
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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
}
