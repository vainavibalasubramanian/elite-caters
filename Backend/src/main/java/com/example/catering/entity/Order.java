package com.example.catering.entity;

import com.example.catering.entity.CustomOrder;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date; 

@Entity
@Table(name = "orders")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "package_id")
    private Package aPackage;

    @ManyToOne
    @JoinColumn(name = "customer_order_id")
    private CustomOrder customOrder;

    @Column(name = "address")
    private String address;
    
    @Column(name = "name")
    private String name;
    
    @Column(name = "phn")
    private String phn;

    @Column(name = "date")
    private Date date;

    @Column(name = "time")
    private String time;
    
    @Column(name = "price")
    private Double price;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
