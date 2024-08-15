package com.example.catering.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.util.Date;

// Lombok annotations to automatically generate boilerplate code
@Data // Generates getters, setters, equals(), hashCode(), and toString() methods
@NoArgsConstructor // Generates a no-arguments constructor
@AllArgsConstructor // Generates a constructor with arguments for all fields
public class CustomOrderDTO {

    private Long id; // Unique identifier for the custom order
    private String vegNonVeg; // Indicates if the order is vegetarian or non-vegetarian
    private String city; // City where the order will be delivered
    private Double breakfastPrice; // Number of items in the order
    private Double lunchPrice; // Date of the order
    private String deliveryAt; // Delivery location or address
    private Double dinnerPrice; // Time of delivery
    private String breakfast; // Breakfast item(s) in the order
    private String lunch; // Lunch item(s) in the order
    private String dinner; // Dinner item(s) in the order
    
    public CustomOrderDTO(Long id, String vegNonVeg, String city, String breakfast, String lunch, String dinner,
            Double breakfastPrice, Double lunchPrice, Double dinnerPrice, String deliveryAt) {
this.id = id;
this.vegNonVeg = vegNonVeg;
this.city = city;
this.breakfast = breakfast;
this.lunch = lunch;
this.dinner = dinner;
this.breakfastPrice = breakfastPrice;
this.lunchPrice = lunchPrice;
this.dinnerPrice = dinnerPrice;
this.deliveryAt = deliveryAt;
}

}
