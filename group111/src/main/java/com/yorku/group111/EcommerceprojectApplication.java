package com.yorku.group111;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class EcommerceprojectApplication {

	public static void main(String[] args) {
		SpringApplication.run(EcommerceprojectApplication.class, args);
	}

}
