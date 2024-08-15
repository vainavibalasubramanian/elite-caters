package com.example.catering.service;

import com.example.catering.dto.UserDTO;
import com.example.catering.entity.User;
import com.example.catering.exception.UserNotFoundException;
import com.example.catering.mapper.UserMapper;
import com.example.catering.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service // Marks this class as a Spring service component
public class UserService {

    @Autowired
    private UserRepository userRepository;         // Repository for User entity

    // Create a new User from a UserDTO and save it to the repository
    public UserDTO createUser(UserDTO userDTO) {
        User user = UserMapper.toEntity(userDTO); // Convert UserDTO to User entity
        user = userRepository.save(user);         // Save the User entity to the database
        return UserMapper.toDTO(user);            // Convert and return the saved User entity as UserDTO
    }

    // Update an existing User identified by its ID with new data from UserDTO
    public UserDTO updateUser(Long id, UserDTO userDTO) throws UserNotFoundException {
        User existingUser = userRepository.findById(id)        // Find the User entity by its ID
                .orElseThrow(() -> new UserNotFoundException("User not found with id: " + id)); // Throw exception if not found

        // Update the fields of the existing User entity with values from UserDTO
        existingUser.setName(userDTO.getName());
        existingUser.setUserName(userDTO.getUserName());
        existingUser.setEmail(userDTO.getEmail());
        existingUser.setPassword(userDTO.getPassword());

        existingUser = userRepository.save(existingUser); // Save the updated User entity
        return UserMapper.toDTO(existingUser);            // Convert and return the updated User entity as UserDTO
    }

    // Delete an existing User identified by its ID
    public void deleteUser(Long id) throws UserNotFoundException {
        User existingUser = userRepository.findById(id)         // Find the User entity by its ID
                .orElseThrow(() -> new UserNotFoundException("User not found with id: " + id)); // Throw exception if not found
        userRepository.delete(existingUser);                   // Delete the User entity from the repository
    }

    // Retrieve a specific User identified by its ID and return as UserDTO
    public UserDTO getUserById(Long id) throws UserNotFoundException {
        User user = userRepository.findById(id)           // Find the User entity by its ID
                .orElseThrow(() -> new UserNotFoundException("User not found with id: " + id)); // Throw exception if not found
        return UserMapper.toDTO(user);                    // Convert and return the User entity as UserDTO
    }

    // Retrieve all Users and return as a list of UserDTOs
    public List<UserDTO> getAllUsers() {
        return userRepository.findAll()        // Retrieve all User entities from the repository
                .stream()                     // Convert the result to a stream
                .map(UserMapper::toDTO)       // Map each User entity to UserDTO
                .collect(Collectors.toList()); // Collect the results into a list
    }
}
