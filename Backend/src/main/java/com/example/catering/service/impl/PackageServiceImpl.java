package com.example.catering.service.impl;

import com.example.catering.dto.PackageDTO;
import com.example.catering.entity.Package;
import com.example.catering.mapper.PackageMapper;
import com.example.catering.repository.PackageRepository;
import com.example.catering.service.PackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service // Marks this class as a Spring service component
public class PackageServiceImpl implements PackageService {

	private final PackageRepository packageRepository;
    private final PackageMapper packageMapper;
    private final String uploadDir = "uploads/";

    @Autowired
    public PackageServiceImpl(PackageRepository packageRepository, PackageMapper packageMapper) {
        this.packageRepository = packageRepository;
        this.packageMapper = packageMapper;
    }

    @Override
    public List<PackageDTO> getAllPackages() {
        return packageRepository.findAll()
                .stream()
                .map(packageMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public PackageDTO getPackageById(Long id) {
        Package packageEntity = packageRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Package not found"));
        return packageMapper.toDTO(packageEntity);
    }

    @Override
    public PackageDTO createPackage(PackageDTO packageDTO, MultipartFile file) {
        String fileUrl = saveFile(file);
        Package packageEntity = packageMapper.toEntity(packageDTO);
        packageEntity.setImg(fileUrl);
        packageEntity = packageRepository.save(packageEntity);
        return packageMapper.toDTO(packageEntity);
    }

    @Override
    public PackageDTO updatePackage(Long id, PackageDTO packageDTO, MultipartFile file) {
        Package packageEntity = packageRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Package not found"));

        if (file != null && !file.isEmpty()) {
            String fileUrl = saveFile(file);
            packageEntity.setImg(fileUrl);
        }

        packageMapper.updatePackageFromDto(packageDTO, packageEntity);
        packageEntity = packageRepository.save(packageEntity);
        return packageMapper.toDTO(packageEntity);
    }

    @Override
    public void deletePackage(Long id) {
        packageRepository.deleteById(id);
    }

    private String saveFile(MultipartFile file) {
        try {
            String originalFilename = file.getOriginalFilename();

            Path uploadPath = Paths.get(uploadDir);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            Path filePath = uploadPath.resolve(originalFilename);
            Files.copy(file.getInputStream(), filePath);

            return "/uploads/" + originalFilename;

        } catch (IOException e) {
            throw new RuntimeException("Failed to store file", e);
        }
    }
}
