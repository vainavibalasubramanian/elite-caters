package com.example.catering.entity;

import jakarta.persistence.*; // Importing JPA annotations for entity and database mapping
import lombok.AllArgsConstructor; // Lombok annotation to generate a constructor with all arguments
import lombok.Data; // Lombok annotation to generate getters, setters, toString, equals, and hashCode methods
import lombok.NoArgsConstructor; // Lombok annotation to generate a no-arguments constructor

@Data // Lombok annotation to automatically generate getters, setters, toString, equals, and hashCode methods
@NoArgsConstructor // Lombok annotation to generate a no-arguments constructor
@AllArgsConstructor // Lombok annotation to generate a constructor with all fields as arguments
@Entity // JPA annotation that marks this class as a JPA entity
@Table(name = "users") // JPA annotation to specify the table name in the database
public class User {

    @Id                                   // JPA annotation that marks this field as the primary key of the entity
    @GeneratedValue(strategy = GenerationType.IDENTITY)    // JPA annotation to specify the primary key generation strategy
    private Long id;                        // Primary key for the User entity

    @Column(name = "name")                  // JPA annotation to specify the column name in the database
    private String name;                    // Name of the user

    @Column(name = "username")              // JPA annotation to specify the column name in the database
    private String userName;                // Username of the user

    @Column(name = "email")                 // JPA annotation to specify the column name in the database
    private String email;                   // Email of the user

    @Column(name = "password")              // JPA annotation to specify the column name in the database
    private String password;                 // Password of the user
}
