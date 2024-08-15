package com.example.catering.service.impl;

import com.example.catering.dto.UserDTO;
import com.example.catering.entity.User;
import com.example.catering.exception.UserNotFoundException;
import com.example.catering.mapper.UserMapper;
import com.example.catering.service.UserService;
import com.example.catering.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service // Marks this class as a Spring service component
public class UserServiceImpl extends UserService {

    private final UserRepository userRepository; // Repository for User entity

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Create a new User record
    public UserDTO createUser(UserDTO userDTO) {
        User user = UserMapper.toEntity(userDTO); // Convert DTO to Entity
        user = userRepository.save(user); // Save entity to the database
        return UserMapper.toDTO(user); // Convert saved entity back to DTO
    }

    // Update an existing User record
    public UserDTO updateUser(Long id, UserDTO userDTO) throws UserNotFoundException {
        // Find the User entity by its ID, throw exception if not found
        User existingUser = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User not found with id: " + id));

        // Update entity fields with new data
        existingUser.setName(userDTO.getName());
        existingUser.setUserName(userDTO.getUserName());
        existingUser.setEmail(userDTO.getEmail());
        existingUser.setPassword(userDTO.getPassword());

        existingUser = userRepository.save(existingUser); // Save updated entity
        return UserMapper.toDTO(existingUser); // Convert updated entity to DTO
    }

    // Delete a User record
    public void deleteUser(Long id) throws UserNotFoundException {
        // Find the User entity by its ID, throw exception if not found
        User existingUser = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User not found with id: " + id));
        userRepository.delete(existingUser); // Delete the entity
    }

    // Get a User record by ID
    public UserDTO getUserById(Long id) throws UserNotFoundException {
        // Find the User entity by its ID, throw exception if not found
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User not found with id: " + id));
        return UserMapper.toDTO(user); // Convert entity to DTO
    }

    // Get a list of all User records
    public List<UserDTO> getAllUsers() {
        // Retrieve all entities, convert them to DTOs, and collect into a list
        return userRepository.findAll().stream()
                .map(UserMapper::toDTO)
                .collect(Collectors.toList());
    }
}
