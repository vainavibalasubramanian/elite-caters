package com.example.catering.service;

import com.example.catering.dto.AdminDTO;
import com.example.catering.entity.Admin;
import com.example.catering.exception.AdminNotFoundException;
import com.example.catering.mapper.AdminMapper;
import com.example.catering.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public AdminDTO createAdmin(AdminDTO adminDTO) {
        Admin admin = AdminMapper.toEntity(adminDTO);
        admin = adminRepository.save(admin);
        return AdminMapper.toDTO(admin);
    }

    public AdminDTO updateAdmin(Long id, AdminDTO adminDTO) throws AdminNotFoundException {
        Admin existingAdmin = adminRepository.findById(id)
                .orElseThrow(() -> new AdminNotFoundException("Admin not found with id: " + id));

        existingAdmin.setName(adminDTO.getName());
        existingAdmin.setPassword(adminDTO.getPassword());

        existingAdmin = adminRepository.save(existingAdmin);
        return AdminMapper.toDTO(existingAdmin);
    }

    public void deleteAdmin(Long id) throws AdminNotFoundException {
        Admin existingAdmin = adminRepository.findById(id)
                .orElseThrow(() -> new AdminNotFoundException("Admin not found with id: " + id));
        adminRepository.delete(existingAdmin);
    }

    public AdminDTO getAdminById(Long id) throws AdminNotFoundException {
        Admin admin = adminRepository.findById(id)
                .orElseThrow(() -> new AdminNotFoundException("Admin not found with id: " + id));
        return AdminMapper.toDTO(admin);
    }

    public List<AdminDTO> getAllAdmins() {
        return adminRepository.findAll().stream()
                .map(AdminMapper::toDTO)
                .collect(Collectors.toList());
    }
}
