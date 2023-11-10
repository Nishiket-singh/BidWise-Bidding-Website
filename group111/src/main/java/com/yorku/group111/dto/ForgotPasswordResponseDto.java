package com.yorku.group111.dto;

public class ForgotPasswordResponseDto {
	 private String status;
	 
	 public ForgotPasswordResponseDto(String status) {
	        this.status = status;
	    }
	 
	 public String getStatus() {
	        return status;
	    }

	 public void setStatus(String status) {
	        this.status = status;
	    }
	 
}
