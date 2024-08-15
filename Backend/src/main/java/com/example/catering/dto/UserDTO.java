package com.example.catering.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// Lombok annotations to automatically generate boilerplate code
@Data // Generates getters, setters, equals(), hashCode(), and toString() methods
@NoArgsConstructor // Generates a no-arguments constructor
@AllArgsConstructor // Generates a constructor with arguments for all fields
public class UserDTO {

    private Long id; // Unique identifier for the user
    private String name; // Full name of the user
    private String userName; // Username of the user
    private String email; // Email address of the user
    private String password; // Password for the user account

}
