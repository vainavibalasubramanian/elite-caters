package com.example.catering.mapper;

import com.example.catering.dto.AdminDTO;
import com.example.catering.entity.Admin;

public class AdminMapper {

    public static AdminDTO toDTO(Admin admin) {
        return new AdminDTO(
                admin.getId(),
                admin.getName(),
                admin.getPassword()
        );
    }

    public static Admin toEntity(AdminDTO adminDTO) {
        return new Admin(
                adminDTO.getId(),
                adminDTO.getName(),
                adminDTO.getPassword()
        );
    }
}
