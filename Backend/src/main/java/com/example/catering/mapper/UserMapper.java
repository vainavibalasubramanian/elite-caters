package com.example.catering.mapper;

import com.example.catering.dto.UserDTO; // DTO class for transferring user data
import com.example.catering.entity.User; // Entity class representing a user in the database

public class UserMapper {

    // Converts a User entity to a UserDTO
	
    public static UserDTO toDTO(User user) {
        return new UserDTO(
                user.getId(),              // Map entity ID to DTO ID
                user.getName(),            // Map entity name to DTO name
                user.getUserName(),        // Map entity username to DTO username
                user.getEmail(),           // Map entity email to DTO email
                user.getPassword()         // Map entity password to DTO password
        );
    }

    // Converts a UserDTO to a User entity
    
    public static User toEntity(UserDTO userDTO) {
        return new User(
                userDTO.getId(),           // Map DTO ID to entity ID
                userDTO.getName(),         // Map DTO name to entity name
                userDTO.getUserName(),     // Map DTO username to entity username
                userDTO.getEmail(),        // Map DTO email to entity email
                userDTO.getPassword()      // Map DTO password to entity password
        );
    }
}
