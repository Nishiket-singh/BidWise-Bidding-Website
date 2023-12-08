package com.yorku.group111.service;

import java.time.Duration;
import java.time.Instant;

import org.springframework.stereotype.Component;

import jakarta.annotation.PostConstruct;

@Component
public class ApplicationStartTime {

    private Instant startTime;

    @PostConstruct
    public void captureStartTime() {
        startTime = Instant.now(); // Capture the start time when the application starts
        System.out.println(startTime);
    }

    public Duration getElapsedTime() {
        Instant currentTime = Instant.now(); // Get the current time
        System.out.println(currentTime);
        return Duration.between(startTime, currentTime); // Calculate the difference
    }
    
    public String getRemainingTime(long totaltime) {
    	Long elapsedInSeconds = this.getElapsedTime().toSeconds();
    	System.out.println(elapsedInSeconds);
    	String time;
    	long timeRemaining = totaltime - elapsedInSeconds;
    	if(timeRemaining<0) {
    		time = String.format("00:00:00");
    	}
    	else {
    		long hours = timeRemaining / 3600; // Extract hours
            long minutes = (timeRemaining % 3600) / 60; // Extract remaining minutes
            long seconds = timeRemaining % 60; // Extract remaining seconds
            time = String.format("%02d:%02d:%02d", hours, minutes, seconds);
    	}
        return time;
    }
    
    public long timeCheck(long totaltime) {
    	return this.getElapsedTime().toSecondsPart();
    }
}
