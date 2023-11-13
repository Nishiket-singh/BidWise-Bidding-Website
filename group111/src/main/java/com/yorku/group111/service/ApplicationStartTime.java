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
    }

    public Duration getElapsedTime() {
        Instant currentTime = Instant.now(); // Get the current time
        return Duration.between(startTime, currentTime); // Calculate the difference
    }
    
    public String getRemainingTime(long totaltime) {
    	long elapsed = this.getElapsedTime().toSecondsPart();
    	Duration duration = Duration.ofSeconds(totaltime - elapsed);
    	long hours = duration.toHours(); // Extract hours
        long minutes = duration.toMinutesPart(); // Extract remaining minutes
        long seconds = duration.toSecondsPart(); // Extract remaining seconds
        String time = String.format("%02d:%02d:%02d", hours, minutes, seconds);
        return time;
    }
    
    public long timeCheck(long totaltime) {
    	return this.getElapsedTime().toSecondsPart();
    }
}
