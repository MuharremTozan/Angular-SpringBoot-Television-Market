package com.example.first.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;
import lombok.Data;

@Data
@Entity
@Table(name = "television")
public class Television {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "brand_name")
    private String brandName;

    @Column(name = "model_name")
    private String modelName;

    @Column(name = "specs")
    private String specs;

    @Column(name = "screen_size")
    private float screenSize;

    @Column(name = "smart_tv")
    private boolean smartTv;

    @Column(name = "price")
    private double price;

    @Column(name = "production_date")
    private LocalDateTime productionDate;

    @Column(name = "quantity")
    private int quantity;


}



