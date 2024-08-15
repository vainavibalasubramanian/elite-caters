package com.example.catering.controller;

import com.example.catering.dto.UserDTO;
import com.example.catering.exception.UserNotFoundException;
import com.example.catering.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController                                 // Marks this class as a RESTful controller
@CrossOrigin(origins = "http://localhost:3000") // Allows cross-origin requests from the specified origin
@RequestMapping("/users")                       // Maps HTTP requests with the /users path to this controller
public class UserController {

    @Autowired // Injects the UserService dependency
    private UserService userService;

    @PostMapping // Maps HTTP POST requests to /users to this method
    public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO userDTO) {
        UserDTO createdUser = userService.createUser(userDTO); // Calls the service to create a new user
        return ResponseEntity.ok(createdUser); // Returns the created user with HTTP 200 OK status
    }

    @PutMapping("/{id}") // Maps HTTP PUT requests to /users/{id} to this method
    public ResponseEntity<UserDTO> updateUser(@PathVariable Long id, @RequestBody UserDTO userDTO) {
        try {
            UserDTO updatedUser = userService.updateUser(id, userDTO); // Calls the service to update an existing user by its ID
            return ResponseEntity.ok(updatedUser); // Returns the updated user with HTTP 200 OK status
        } catch (UserNotFoundException e) {
            return ResponseEntity.notFound().build(); // Returns HTTP 404 Not Found status if the user does not exist
        }
    }

    @DeleteMapping("/{id}") // Maps HTTP DELETE requests to /users/{id} to this method
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        try {
            userService.deleteUser(id);                 // Calls the service to delete a user by its ID
            return ResponseEntity.noContent().build(); // Returns HTTP 204 No Content status on successful deletion
        } catch (UserNotFoundException e) {
            return ResponseEntity.notFound().build(); // Returns HTTP 404 Not Found status if the user does not exist
        }
    }

    @GetMapping("/{id}") // Maps HTTP GET requests to /users/{id} to this method
    public ResponseEntity<UserDTO> getUserById(@PathVariable Long id) {
        try {
            UserDTO userDTO = userService.getUserById(id); // Calls the service to retrieve a user by its ID
            return ResponseEntity.ok(userDTO);          // Returns the user with HTTP 200 OK status
        } catch (UserNotFoundException e) {
            return ResponseEntity.notFound().build(); // Returns HTTP 404 Not Found status if the user does not exist
        }
    }

    @GetMapping // Maps HTTP GET requests to /users to this method
    public ResponseEntity<List<UserDTO>> getAllUsers() {
        List<UserDTO> users = userService.getAllUsers(); // Calls the service to retrieve all users
        return ResponseEntity.ok(users);                // Returns the list of users with HTTP 200 OK status
    }
}
