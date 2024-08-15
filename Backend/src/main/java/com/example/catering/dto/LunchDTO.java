package com.example.catering.dto;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;


// Lombok annotations to automatically generate boilerplate code
@Data // Generates getters, setters, equals(), hashCode(), and toString() methods
@NoArgsConstructor // Generates a no-arguments constructor
@AllArgsConstructor // Generates a constructor with arguments for all fields

public class LunchDTO {
	private String lunch;
    private double lunchPrice;
   
    
}
