package com.example.catering.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

//Lombok annotations to automatically generate boilerplate code
@Data // Generates getters, setters, equals(), hashCode(), and toString() methods
@NoArgsConstructor // Generates a no-arguments constructor
@AllArgsConstructor // Generates a constructor with arguments for all fields
public class PackageDTO {

    private Long id; // Unique identifier for the package
    private String packageName; // Name of the package
    private String packageDescription; // Description of the package
    private Double price; // Price of the package
    private boolean veg; // Indicates if the package is vegetarian
    private double rating; // Rating of the package
    private String img; // URL or path to the package's image
    private Long adminId; // Identifier for the admin who created or manages the package

}
