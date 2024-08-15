package com.example.catering.service;

import com.example.catering.dto.BreakfastDTO;
import com.example.catering.dto.CustomOrderDTO; // DTO class representing a Custom Order
import com.example.catering.dto.DinnerDTO;
import com.example.catering.dto.LunchDTO;

import java.util.List; // Import List interface for handling collections

// Service interface for managing custom orders
public interface CustomOrderService {

    // Retrieve all custom orders as a list of CustomOrderDTOs
    List<CustomOrderDTO> getAllCustomOrders();

    // Retrieve a specific custom order by its ID
    CustomOrderDTO getCustomOrderById(Long id);

    // Create a new custom order from the given CustomOrderDTO
    CustomOrderDTO createCustomOrder(CustomOrderDTO customOrderDTO);

    // Update an existing custom order identified by its ID with new data from CustomOrderDTO
    CustomOrderDTO updateCustomOrder(Long id, CustomOrderDTO customOrderDTO);

    // Delete an existing custom order identified by its ID
    void deleteCustomOrder(Long id);
    
    // Retrieve a list of available breakfast options
    List<String> getAllBreakfastOrders();
    
    // Retrieve a list of available lunch options
    List<String> getAllLunchOrders();
    
    // Retrieve a list of available dinner options
    List<String> getAllDinnerOrders();
    
    List<BreakfastDTO> getBreakfastDetails();
    
    List<LunchDTO> getLunchDetails();
    
    List<DinnerDTO> getDinnerDetails();
   
    List<CustomOrderDTO> filterCustomOrders(String vegNonVeg, String city, String deliveryAt);
    List<CustomOrderDTO> getCustomOrdersByDeliveryAt(String deliveryAt);
    

   

   
    
}