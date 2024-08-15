package com.example.catering.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.util.Date;

// Lombok annotations to automatically generate boilerplate code
@Data // Generates getters, setters, equals(), hashCode(), and toString() methods
@NoArgsConstructor // Generates a no-arguments constructor
@AllArgsConstructor // Generates a constructor with arguments for all fields
public class OrderDTO {

    private Long id; // Unique identifier for the order
    private Long packageId; // Identifier for the associated package
    private Long customerOrderId; // Identifier for the associated customer order
    private String address; // Delivery address for the order
    private String name; 
    private String phn; 
    private Date date; // Date when the order is placed or to be delivered
    private String time;// Time when the order is to be delivered
    private Double price;
    private Long userId; // Identifier for the user placing the order

}
