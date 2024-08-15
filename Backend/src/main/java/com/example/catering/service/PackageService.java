package com.example.catering.service;

import com.example.catering.dto.PackageDTO;
import com.example.catering.entity.Package;
import com.example.catering.mapper.PackageMapper;
import com.example.catering.repository.PackageRepository;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Paths;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service // Marks this class as a Spring service component
public interface PackageService {

    List<PackageDTO> getAllPackages();

    PackageDTO getPackageById(Long id);

    PackageDTO createPackage(PackageDTO packageDTO, MultipartFile file);

    PackageDTO updatePackage(Long id, PackageDTO packageDTO, MultipartFile file);

    void deletePackage(Long id);
}
