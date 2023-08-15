package com.example.first.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "cart")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "television_id")
    private Television television;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
}
