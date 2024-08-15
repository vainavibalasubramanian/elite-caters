package com.example.catering.controller;

import com.example.catering.dto.BreakfastDTO;
import com.example.catering.dto.CustomOrderDTO;
import com.example.catering.dto.DinnerDTO;
import com.example.catering.dto.LunchDTO;
import com.example.catering.service.CustomOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // Marks this class as a Spring MVC controller
@RequestMapping("/customOrders") // Maps HTTP requests to /customOrders to this controller
@CrossOrigin(origins = "http://localhost:3000") // Allows cross-origin requests from the specified origin
public class CustomOrderController {

    @Autowired // Injects the CustomOrderService dependency
    private CustomOrderService customOrderService;
    
    @Autowired
    public CustomOrderController(CustomOrderService customOrderService) {
        this.customOrderService = customOrderService;
    }

    @PostMapping // Maps HTTP POST requests to /customOrders to this method
    public CustomOrderDTO createCustomOrder(@RequestBody CustomOrderDTO customOrderDTO) {
        return customOrderService.createCustomOrder(customOrderDTO); // Calls the service to create a custom order
    }

    @GetMapping // Maps HTTP GET requests to /customOrders to this method
    public List<CustomOrderDTO> getAllCustomOrders() {
        return customOrderService.getAllCustomOrders(); // Calls the service to get all custom orders
    }

    @GetMapping("/{id}") // Maps HTTP GET requests to /customOrders/{id} to this method
    public CustomOrderDTO getCustomOrderById(@PathVariable Long id) {
        return customOrderService.getCustomOrderById(id); // Calls the service to get a custom order by ID
    }

    @PutMapping("/{id}") // Maps HTTP PUT requests to /customOrders/{id} to this method
    public CustomOrderDTO updateCustomOrder(@PathVariable Long id, @RequestBody CustomOrderDTO customOrderDTO) {
        return customOrderService.updateCustomOrder(id, customOrderDTO); // Calls the service to update a custom order
    }

    @DeleteMapping("/{id}") // Maps HTTP DELETE requests to /customOrders/{id} to this method
    public void deleteCustomOrder(@PathVariable Long id) {
        customOrderService.deleteCustomOrder(id); // Calls the service to delete a custom order
    }
    
    @GetMapping("/breakfast")
    public List<String> getAllBreakfastOrders() {
        return customOrderService.getAllBreakfastOrders();
    }
    @GetMapping("/lunch")
    public List<String> getAllLunchOrders() {
        return customOrderService.getAllLunchOrders();
    }
    @GetMapping("/dinner")
    public List<String> getAllDinnerOrders() {
        return customOrderService.getAllDinnerOrders();
    }
    
    @GetMapping("/breakfastDetails")
    public List<BreakfastDTO> getBreakfastDetails() {
        return customOrderService.getBreakfastDetails();
    }
    
    @GetMapping("/lunchDetails")
    public List<LunchDTO> getLunchDetails() {
        return customOrderService.getLunchDetails();
    }

    @GetMapping("/dinnerDetails")
    public List<DinnerDTO> getDinnerDetails() {
        return customOrderService.getDinnerDetails();
    }
    
    @GetMapping("/filter")
    public List<CustomOrderDTO> filterCustomOrders(@RequestParam(required = false) String vegNonVeg,
                                                   @RequestParam(required = false) String city,
                                                   @RequestParam(required = false) String deliveryAt) {
        return customOrderService.filterCustomOrders(vegNonVeg, city, deliveryAt);
    }
    @GetMapping("/byDeliveryAt")
    public List<CustomOrderDTO> getCustomOrders(@RequestParam(value = "deliveryAt", required = false) String deliveryAt) {
        if (deliveryAt != null) {
            return customOrderService.getCustomOrdersByDeliveryAt(deliveryAt);
        }
        return customOrderService.getAllCustomOrders();
    }

}
