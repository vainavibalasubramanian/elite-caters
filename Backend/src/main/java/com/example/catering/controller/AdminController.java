package com.example.catering.controller;

import com.example.catering.dto.AdminDTO;
import com.example.catering.exception.AdminNotFoundException;
import com.example.catering.service.impl.AdminServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // Marks this class as a Spring MVC controller
@CrossOrigin(origins = "http://localhost:3000") // Allows cross-origin requests from the specified origin
@RequestMapping("/api/admins") // Maps HTTP requests to /api/admins to this controller
public class AdminController {

    private final AdminServiceImpl adminService;

    @Autowired // Injects the AdminServiceImpl dependency
    public AdminController(AdminServiceImpl adminService) {
        this.adminService = adminService;
    }

    @PostMapping // Maps HTTP POST requests to /api/admins to this method
    public ResponseEntity<AdminDTO> createAdmin(@RequestBody AdminDTO adminDTO) {
        AdminDTO createdAdmin = adminService.createAdmin(adminDTO); // Calls the service to create a new admin
        return new ResponseEntity<>(createdAdmin, HttpStatus.CREATED); // Returns the created admin with HTTP status 201
    }

    @PutMapping("/{id}") // Maps HTTP PUT requests to /api/admins/{id} to this method
    public ResponseEntity<AdminDTO> updateAdmin(@PathVariable Long id, @RequestBody AdminDTO adminDTO) {
        try {
            AdminDTO updatedAdmin = adminService.updateAdmin(id, adminDTO); // Calls the service to update the admin
            return new ResponseEntity<>(updatedAdmin, HttpStatus.OK); // Returns the updated admin with HTTP status 200
        } catch (AdminNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Returns HTTP status 404 if the admin is not found
        }
    }

    @DeleteMapping("/{id}") // Maps HTTP DELETE requests to /api/admins/{id} to this method
    public ResponseEntity<Void> deleteAdmin(@PathVariable Long id) {
        try {
            adminService.deleteAdmin(id); // Calls the service to delete the admin
            return new ResponseEntity<>(HttpStatus.NO_CONTENT); // Returns HTTP status 204 if the admin is deleted
        } catch (AdminNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Returns HTTP status 404 if the admin is not found
        }
    }

    @GetMapping("/{id}") // Maps HTTP GET requests to /api/admins/{id} to this method
    public ResponseEntity<AdminDTO> getAdminById(@PathVariable Long id) {
        try {
            AdminDTO admin = adminService.getAdminById(id); // Calls the service to get the admin by ID
            return new ResponseEntity<>(admin, HttpStatus.OK); // Returns the admin with HTTP status 200
        } catch (AdminNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Returns HTTP status 404 if the admin is not found
        }
    }

    @GetMapping // Maps HTTP GET requests to /api/admins to this method
    public ResponseEntity<List<AdminDTO>> getAllAdmins() {
        List<AdminDTO> admins = adminService.getAllAdmins(); // Calls the service to get all admins
        return new ResponseEntity<>(admins, HttpStatus.OK); // Returns the list of admins with HTTP status 200
    }
}
