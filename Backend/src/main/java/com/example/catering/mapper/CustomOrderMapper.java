package com.example.catering.mapper;

import com.example.catering.dto.CustomOrderDTO; // DTO class for transferring custom order data
import com.example.catering.entity.CustomOrder; // Entity class representing a custom order
import org.springframework.stereotype.Component;

@Component
public class CustomOrderMapper {

    // Converts a CustomOrder entity to a CustomOrderDTO
    public CustomOrderDTO toDTO(CustomOrder customOrder) {
        return new CustomOrderDTO(
                customOrder.getId(),
                customOrder.getVegNonVeg(),
                customOrder.getCity(),
                customOrder.getBreakfastPrice(),
                customOrder.getLunchPrice(),
                customOrder.getDeliveryAt(),
                customOrder.getDinnerPrice(),
                customOrder.getBreakfast(),
                customOrder.getLunch(),
                customOrder.getDinner()
        );
    }

    // Converts a CustomOrderDTO to a CustomOrder entity
    public CustomOrder toEntity(CustomOrderDTO customOrderDTO) {
        return new CustomOrder(
                customOrderDTO.getId(),
                customOrderDTO.getVegNonVeg(),
                customOrderDTO.getCity(),
                customOrderDTO.getBreakfastPrice(),
                customOrderDTO.getLunchPrice(),
                customOrderDTO.getDeliveryAt(),
                customOrderDTO.getDinnerPrice(),
                customOrderDTO.getBreakfast(),
                customOrderDTO.getLunch(),
                customOrderDTO.getDinner()
        );
    }

    // Updates an existing CustomOrder entity with values from CustomOrderDTO
    public void updateCustomOrderFromDto(CustomOrderDTO customOrderDTO, CustomOrder customOrder) {
        customOrder.setVegNonVeg(customOrderDTO.getVegNonVeg());
        customOrder.setCity(customOrderDTO.getCity());
        customOrder.setBreakfastPrice(customOrderDTO.getBreakfastPrice());
        customOrder.setLunchPrice(customOrderDTO.getLunchPrice());
        customOrder.setDeliveryAt(customOrderDTO.getDeliveryAt());
        customOrder.setDinnerPrice(customOrderDTO.getDinnerPrice());
        customOrder.setBreakfast(customOrderDTO.getBreakfast());
        customOrder.setLunch(customOrderDTO.getLunch());
        customOrder.setDinner(customOrderDTO.getDinner());
    }
}
