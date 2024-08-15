package com.example.catering.service;

import com.example.catering.dto.OrderDTO; // DTO class representing an Order

import java.util.List; // Import List interface for handling collections

// Service interface for managing orders
public interface OrderService {

    // Retrieve all orders as a list of OrderDTOs
    List<OrderDTO> getAllOrders();
    

    // Retrieve a specific order by its ID
    OrderDTO getOrderById(Long id);
    

    // Create a new order from the given OrderDTO
    OrderDTO createOrder(OrderDTO orderDTO);
    

    // Update an existing order identified by its ID with new data from OrderDTO
    OrderDTO updateOrder(Long id, OrderDTO orderDTO);

    
    // Delete an existing order identified by its ID
    void deleteOrder(Long id);
}
