package com.example.catering.controller;

import com.example.catering.dto.OrderDTO;
import com.example.catering.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // Indicates that this class is a Spring MVC controller
@RequestMapping("/orders") // Maps HTTP requests to /orders to this controller
@CrossOrigin(origins = "http://localhost:3000") // Allows cross-origin requests from the specified origin
public class OrderController {

    @Autowired // Injects the OrderService dependency
    private OrderService orderService;

    @PostMapping // Maps HTTP POST requests to /orders to this method
    public OrderDTO createOrder(@RequestBody OrderDTO orderDTO) {
        return orderService.createOrder(orderDTO); // Calls the service to create a new order
    }

    @GetMapping // Maps HTTP GET requests to /orders to this method
    public List<OrderDTO> getAllOrders() {
        return orderService.getAllOrders(); // Calls the service to retrieve all orders
    }

    @GetMapping("/{id}") // Maps HTTP GET requests to /orders/{id} to this method
    public OrderDTO getOrderById(@PathVariable Long id) {
        return orderService.getOrderById(id); // Calls the service to retrieve an order by its ID
    }

    @PutMapping("/{id}") // Maps HTTP PUT requests to /orders/{id} to this method
    public OrderDTO updateOrder(@PathVariable Long id, @RequestBody OrderDTO orderDTO) {
        return orderService.updateOrder(id, orderDTO); // Calls the service to update an existing order
    }

    @DeleteMapping("/{id}") // Maps HTTP DELETE requests to /orders/{id} to this method
    public void deleteOrder(@PathVariable Long id) {
        orderService.deleteOrder(id); // Calls the service to delete an order by its ID
    }
}
