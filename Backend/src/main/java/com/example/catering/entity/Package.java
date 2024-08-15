package com.example.catering.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "packages")
public class Package {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "package_name")
    private String packageName;

    @Column(name = "package_description")
    private String packageDescription;

    @Column(name = "price")
    private Double price;

    @Column(name = "veg")
    private boolean veg;

    @Column(name = "rating")
    private Double rating;

    @Column(name = "img")
    private String img;

    @Column(name = "admin_id")
    private Long adminId;
}
