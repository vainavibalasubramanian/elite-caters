package com.example.catering.mapper;

import com.example.catering.dto.OrderDTO;
import com.example.catering.entity.Order;
import org.springframework.stereotype.Component;

@Component
public class OrderMapper {

    public OrderDTO toDTO(Order order) {
        return new OrderDTO(
                order.getId(),
                order.getAPackage() != null ? order.getAPackage().getId() : null,
                order.getCustomOrder() != null ? order.getCustomOrder().getId() : null,
                order.getAddress(),
                order.getName(),
                order.getPhn(),
                order.getDate(),
                order.getTime(),
                order.getPrice(),
                order.getUser() != null ? order.getUser().getId() : null
        );
    }

    public Order toEntity(OrderDTO orderDTO) {
        Order order = new Order();
        order.setId(orderDTO.getId());
        // Assuming that Package, CustomerOrder, and User are fetched and set here based on IDs
        // For simplicity, null is set in this example. Actual implementation would involve fetching the entities
        order.setAPackage(null); // set the actual package entity based on orderDTO.getPackageId()
        order.setCustomOrder(null); // set the actual customer order entity based on orderDTO.getCustomerOrderId()
        order.setAddress(orderDTO.getAddress());
        order.setName(orderDTO.getName());
        order.setPhn(orderDTO.getPhn());
        order.setDate(orderDTO.getDate());
        order.setTime(orderDTO.getTime());
        order.setPrice(order.getPrice());
        order.setUser(null); // set the actual user entity based on orderDTO.getUserId()
        return order;
    }

    public void updateOrderFromDto(OrderDTO orderDTO, Order order) {
        order.setAPackage(null); // update with actual package entity based on orderDTO.getPackageId()
        order.setCustomOrder(null); // update with actual customer order entity based on orderDTO.getCustomerOrderId()
        order.setAddress(orderDTO.getAddress());
        order.setName(orderDTO.getName());
        order.setPhn(orderDTO.getPhn());
        order.setDate(orderDTO.getDate());
        order.setTime(orderDTO.getTime());
        order.setPrice(order.getPrice());
        order.setUser(null); // update with actual user entity based on orderDTO.getUserId()
    }
}
