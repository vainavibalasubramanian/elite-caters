package com.example.catering.mapper;

import com.example.catering.dto.PackageDTO; // DTO class for transferring package data
import com.example.catering.entity.Package; // Entity class representing a package
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface PackageMapper {

    // Converts a Package entity to a PackageDTO
    @Mapping(target = "rating", expression = "java(packageEntity.getRating() != null ? packageEntity.getRating() : 0.0)")
    PackageDTO toDTO(Package packageEntity);

    // Converts a PackageDTO to a Package entity
    Package toEntity(PackageDTO packageDTO);

    // Updates an existing Package entity with values from PackageDTO
    @Mapping(target = "id", ignore = true) // Ignore the ID field to prevent altering the existing entity's ID
    void updatePackageFromDto(PackageDTO packageDTO, @MappingTarget Package packageEntity);
}
