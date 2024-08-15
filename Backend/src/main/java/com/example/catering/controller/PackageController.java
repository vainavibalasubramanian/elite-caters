package com.example.catering.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.catering.service.PackageService;
import com.example.catering.dto.PackageDTO;

import java.util.List;

@RestController // Marks this class as a RESTful controller
@RequestMapping("/packages") // Maps HTTP requests with the /packages path to this controller
@CrossOrigin(origins = "http://localhost:3000") // Allows cross-origin requests from the specified origin
public class PackageController {

	private final PackageService packageService;

    @Autowired
    public PackageController(PackageService packageService) {
        this.packageService = packageService;
    }

    @GetMapping
    public List<PackageDTO> getAllPackages() {
        return packageService.getAllPackages();
    }

    @GetMapping("/{id}")
    public PackageDTO getPackageById(@PathVariable Long id) {
        return packageService.getPackageById(id);
    }

    @PostMapping
    public PackageDTO createPackage(@RequestPart("packageDTO") PackageDTO packageDTO,
                                    @RequestPart("file") MultipartFile file) {
        return packageService.createPackage(packageDTO, file);
    }

    @PutMapping("/{id}")
    public PackageDTO updatePackage(@PathVariable Long id,
                                    @RequestPart("packageDTO") PackageDTO packageDTO,
                                    @RequestPart("file") MultipartFile file) {
        return packageService.updatePackage(id, packageDTO, file);
    }

    @DeleteMapping("/{id}")
    public void deletePackage(@PathVariable Long id) {
        packageService.deletePackage(id);
    }
}
