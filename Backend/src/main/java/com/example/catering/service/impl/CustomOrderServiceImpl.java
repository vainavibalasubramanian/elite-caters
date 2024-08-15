package com.example.catering.service.impl;

import com.example.catering.dto.BreakfastDTO;
import com.example.catering.dto.CustomOrderDTO;
import com.example.catering.dto.DinnerDTO;
import com.example.catering.dto.LunchDTO;
import com.example.catering.entity.CustomOrder;
import com.example.catering.mapper.CustomOrderMapper;
import com.example.catering.repository.CustomOrderRepository;
import com.example.catering.service.CustomOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service // Marks this class as a Spring service component
public class CustomOrderServiceImpl implements CustomOrderService {

    @Autowired
    private CustomOrderRepository customOrderRepository; // Repository for CustomOrder entity

    @Autowired
    private CustomOrderMapper customOrderMapper; // Mapper for converting between CustomOrder entity and DTO

    @Override
    // Retrieve all CustomOrder records and convert them to DTOs
    public List<CustomOrderDTO> getAllCustomOrders() {
        return customOrderRepository.findAll() // Find all CustomOrder entities
                .stream() // Convert the result to a stream
                .map(customOrderMapper::toDTO) // Map each CustomOrder entity to a CustomOrderDTO
                .collect(Collectors.toList()); // Collect the results into a list
    }

    @Override
    // Retrieve a specific CustomOrder record by its ID and convert it to DTO
    public CustomOrderDTO getCustomOrderById(Long id) {
        CustomOrder customOrder = customOrderRepository.findById(id) // Find the CustomOrder entity by its ID
                .orElseThrow(() -> new RuntimeException("Custom order not found")); // Throw an exception if not found
        return customOrderMapper.toDTO(customOrder); // Convert the CustomOrder entity to a CustomOrderDTO
    }

    @Override
    // Create a new CustomOrder record from a CustomOrderDTO
    public CustomOrderDTO createCustomOrder(CustomOrderDTO customOrderDTO) {
        CustomOrder customOrder = customOrderMapper.toEntity(customOrderDTO); // Convert DTO to Entity
        customOrder = customOrderRepository.save(customOrder); // Save the entity to the database
        return customOrderMapper.toDTO(customOrder); // Convert the saved entity back to DTO
    }

    @Override
    // Update an existing CustomOrder record
    public CustomOrderDTO updateCustomOrder(Long id, CustomOrderDTO customOrderDTO) {
        CustomOrder customOrder = customOrderRepository.findById(id) // Find the CustomOrder entity by its ID
                .orElseThrow(() -> new RuntimeException("Custom order not found")); // Throw an exception if not found
        customOrderMapper.updateCustomOrderFromDto(customOrderDTO, customOrder); // Update the entity with new data from DTO
        customOrder = customOrderRepository.save(customOrder); // Save the updated entity
        return customOrderMapper.toDTO(customOrder); // Convert the updated entity to DTO
    }

    @Override
    // Delete a CustomOrder record by its ID
    public void deleteCustomOrder(Long id) {
        customOrderRepository.deleteById(id); // Delete the CustomOrder entity by its ID
    }
 
    
    public List<String> getAllBreakfastOrders() {
        return customOrderRepository.findAll() // Find all CustomOrder entities
                .stream()
                .filter(order -> order.getBreakfast() != null && !order.getBreakfast().isEmpty()) // Filter only breakfast items
                .map(CustomOrder::getBreakfast) // Map to the breakfast field
                .collect(Collectors.toList()); // Collect the results into a list
    }
    public List<String> getAllLunchOrders() {
        return customOrderRepository.findAll() // Find all CustomOrder entities
                .stream()
                .filter(order -> order.getLunch() != null && !order.getLunch().isEmpty()) // Filter only breakfast items
                .map(CustomOrder::getLunch) // Map to the breakfast field
                .collect(Collectors.toList()); // Collect the results into a list
    }
    
    public List<String> getAllDinnerOrders() {
        return customOrderRepository.findAll() // Find all CustomOrder entities
                .stream()
                .filter(order -> order.getDinner() != null && !order.getDinner().isEmpty()) // Filter only breakfast items
                .map(CustomOrder::getDinner) // Map to the breakfast field
                .collect(Collectors.toList()); // Collect the results into a list
    }
    
    public List<BreakfastDTO> getBreakfastDetails() {
        return customOrderRepository.findBreakfastDetails();
    }
    
    public List<LunchDTO> getLunchDetails() {
    	return customOrderRepository.findLunchDetails();

    }

    public List<DinnerDTO> getDinnerDetails() {
        return customOrderRepository.findAll()
                .stream()
                .filter(order -> order.getDinner() != null && !order.getDinner().isEmpty())
                .map(order -> new DinnerDTO(order.getDinner(), order.getDinnerPrice()))
                .collect(Collectors.toList());
    }
    
    @Override
    public List<CustomOrderDTO> filterCustomOrders(String vegNonVeg, String city, String deliveryAt) {
        return customOrderRepository.findAll().stream()
            .filter(order -> (vegNonVeg == null || order.getVegNonVeg().equalsIgnoreCase(vegNonVeg)) &&
                             (city == null || order.getCity().equalsIgnoreCase(city)) &&
                             (deliveryAt == null || order.getDeliveryAt().equalsIgnoreCase(deliveryAt)))
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }

    private CustomOrderDTO convertToDTO(CustomOrder customOrder) {
        return new CustomOrderDTO(customOrder.getId(), customOrder.getVegNonVeg(), customOrder.getCity(), 
                                  customOrder.getBreakfast(), customOrder.getLunch(), customOrder.getDinner(), 
                                  customOrder.getBreakfastPrice(), customOrder.getLunchPrice(), customOrder.getDinnerPrice(),
                                  customOrder.getDeliveryAt());
    }
    public List<CustomOrderDTO> getCustomOrdersByDeliveryAt(String deliveryAt) {
        return customOrderRepository.findByDeliveryAt(deliveryAt);
    }

    

}
