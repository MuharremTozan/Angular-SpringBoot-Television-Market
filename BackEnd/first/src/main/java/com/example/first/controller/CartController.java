package com.example.first.controller;

import com.example.first.services.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/televisions")
public class CartController {
    @Autowired
    private CartService cartService;
}
