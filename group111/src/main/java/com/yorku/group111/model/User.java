package com.yorku.group111.model;

import org.springframework.lang.NonNull;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NonNull
    private Integer id;

    @Column(name = "firstname",nullable = false)
    @NonNull
    private String firstName;

    @Column(name = "lastname",nullable = false)
    @NonNull
    private String lastName;

    @Column(name = "email",nullable = false, unique = true)
    @NonNull
    private String email;

    @Column(name = "password",nullable = false)
    @NonNull
    private String password;
    
    @Column(name = "streetaddress",nullable = false)
    @NonNull
    private String streetaddress;

    @Column(name = "postalcode",nullable = false)
    @NonNull
    private String postalcode;
    
    @Column(name = "city",nullable = false)
    @NonNull
    private String city;
    
    @Column(name = "country",nullable = false)
    @NonNull
    private String country;
    
    
    
    
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
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

	public User(String firstName, String lastName, String email, String password, String streetaddress, String postalcode, String city, String country ) {
    	this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.streetaddress = streetaddress;
        this.postalcode = postalcode;
        this.city = city;
        this.country = country;
    }
	
	public User(String email, String password) {
		this.email = email;
		this.password = password;
	}

    public User() {
    }
    
    public User(Integer id) {
    	this.id = id;
    }
}
