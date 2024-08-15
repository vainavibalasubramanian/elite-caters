package com.example.catering.service.impl;

import com.example.catering.dto.AdminDTO;
import com.example.catering.entity.Admin;
import com.example.catering.exception.AdminNotFoundException;
import com.example.catering.mapper.AdminMapper;
import com.example.catering.service.AdminService;
import com.example.catering.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service // Marks this class as a Spring service component
public class AdminServiceImpl extends AdminService {

    private final AdminRepository adminRepository; // Repository for Admin entity

    @Autowired
    public AdminServiceImpl(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    // Create a new Admin record
    public AdminDTO createAdmin(AdminDTO adminDTO) {
        Admin admin = AdminMapper.toEntity(adminDTO); // Convert DTO to Entity
        admin = adminRepository.save(admin); // Save entity to the database
        return AdminMapper.toDTO(admin); // Convert saved entity back to DTO
    }

    // Update an existing Admin record
    public AdminDTO updateAdmin(Long id, AdminDTO adminDTO) throws AdminNotFoundException {
        // Find the Admin entity by its ID, throw exception if not found
        Admin existingAdmin = adminRepository.findById(id)
                .orElseThrow(() -> new AdminNotFoundException("Admin not found with id: " + id));

        // Update entity fields with new data
        existingAdmin.setName(adminDTO.getName());
        existingAdmin.setPassword(adminDTO.getPassword());

        existingAdmin = adminRepository.save(existingAdmin); // Save updated entity
        return AdminMapper.toDTO(existingAdmin); // Convert updated entity to DTO
    }

    // Delete an Admin record
    public void deleteAdmin(Long id) throws AdminNotFoundException {
        // Find the Admin entity by its ID, throw exception if not found
        Admin existingAdmin = adminRepository.findById(id)
                .orElseThrow(() -> new AdminNotFoundException("Admin not found with id: " + id));
        adminRepository.delete(existingAdmin); // Delete the entity
    }

    // Get an Admin record by ID
    public AdminDTO getAdminById(Long id) throws AdminNotFoundException {
        // Find the Admin entity by its ID, throw exception if not found
        Admin admin = adminRepository.findById(id)
                .orElseThrow(() -> new AdminNotFoundException("Admin not found with id: " + id));
        return AdminMapper.toDTO(admin); // Convert entity to DTO
    }

    // Get a list of all Admin records
    public List<AdminDTO> getAllAdmins() {
        // Retrieve all entities, convert them to DTOs, and collect into a list
        return adminRepository.findAll().stream()
                .map(AdminMapper::toDTO)
                .collect(Collectors.toList());
    }
}
