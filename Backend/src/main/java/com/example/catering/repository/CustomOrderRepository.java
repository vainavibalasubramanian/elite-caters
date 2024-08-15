package com.example.catering.repository;

import com.example.catering.dto.BreakfastDTO;
import com.example.catering.dto.CustomOrderDTO;
import com.example.catering.dto.DinnerDTO;
import com.example.catering.dto.LunchDTO;
import com.example.catering.entity.CustomOrder;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomOrderRepository extends JpaRepository<CustomOrder, Long> {
	
	@Query("SELECT new com.example.catering.dto.BreakfastDTO(c.breakfast, c.breakfastPrice) FROM CustomOrder c")
	List<BreakfastDTO> findBreakfastDetails();
	
	@Query("SELECT new com.example.catering.dto.LunchDTO(c.lunch, c.lunchPrice) FROM CustomOrder c")
    List<LunchDTO> findLunchDetails();
	
	@Query("SELECT new com.example.catering.dto.DinnerDTO(c.dinner, c.dinnerPrice) FROM CustomOrder c")
    List<DinnerDTO> findDinnerDetails();

	@Query("SELECT new com.example.catering.dto.CustomOrderDTO(c.id, c.vegNonVeg, c.city, c.breakfastPrice, c.lunchPrice, c.deliveryAt, c.dinnerPrice, c.breakfast, c.lunch, c.dinner) " +
		       "FROM CustomOrder c WHERE c.deliveryAt = :deliveryAt")
		List<CustomOrderDTO> findByDeliveryAt(@Param("deliveryAt") String deliveryAt);
	
}
