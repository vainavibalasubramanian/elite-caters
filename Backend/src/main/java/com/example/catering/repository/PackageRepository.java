package com.example.catering.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.catering.entity.Package;

public interface PackageRepository extends JpaRepository<Package, Long> {
}
