package com.example.catering.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// Lombok annotations to automatically generate boilerplate code
@Data // Generates getters, setters, equals(), hashCode(), and toString() methods
@NoArgsConstructor // Generates a no-arguments constructor
@AllArgsConstructor // Generates a constructor with arguments for all fields
public class AdminDTO {

    private Long id; // Unique identifier for the admin
    private String name; // Name of the admin
    private String password; // Password for the admin account

}
