package com.example.first.model;

import lombok.Data;

@Data
public class Response <T> {
    private boolean success;
    private T data;
    private String message;
}
