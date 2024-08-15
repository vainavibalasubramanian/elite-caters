package com.example.catering.service.impl;

import com.example.catering.dto.OrderDTO;
import com.example.catering.entity.Order;
import com.example.catering.mapper.OrderMapper;
import com.example.catering.repository.OrderRepository;
import com.example.catering.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service // Marks this class as a Spring service component
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository; // Repository for Order entity

    @Autowired
    private OrderMapper orderMapper; // Mapper for converting between Order entity and DTO

    @Override
    // Retrieve all Order records and convert them to DTOs
    public List<OrderDTO> getAllOrders() {
        return orderRepository.findAll() // Find all Order entities
                .stream() // Convert the result to a stream
                .map(orderMapper::toDTO) // Map each Order entity to an OrderDTO
                .collect(Collectors.toList()); // Collect the results into a list
    }

    @Override
    // Retrieve a specific Order record by its ID and convert it to DTO
    public OrderDTO getOrderById(Long id) {
        Order order = orderRepository.findById(id) // Find the Order entity by its ID
                .orElseThrow(() -> new RuntimeException("Order not found")); // Throw an exception if not found
        return orderMapper.toDTO(order); // Convert the Order entity to an OrderDTO
    }

    @Override
    // Create a new Order record from an OrderDTO
    public OrderDTO createOrder(OrderDTO orderDTO) {
        Order order = orderMapper.toEntity(orderDTO); // Convert DTO to Entity
        order = orderRepository.save(order); // Save the entity to the database
        return orderMapper.toDTO(order); // Convert the saved entity back to DTO
    }

    @Override
    // Update an existing Order record
    public OrderDTO updateOrder(Long id, OrderDTO orderDTO) {
        Order order = orderRepository.findById(id) // Find the Order entity by its ID
                .orElseThrow(() -> new RuntimeException("Order not found")); // Throw an exception if not found
        orderMapper.updateOrderFromDto(orderDTO, order); // Update the entity with new data from DTO
        order = orderRepository.save(order); // Save the updated entity
        return orderMapper.toDTO(order); // Convert the updated entity to DTO
    }

    @Override
    // Delete an Order record by its ID
    public void deleteOrder(Long id) {
        orderRepository.deleteById(id); // Delete the Order entity by its ID
    }
    
}
