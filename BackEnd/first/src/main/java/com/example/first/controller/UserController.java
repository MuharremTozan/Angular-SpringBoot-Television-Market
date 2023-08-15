package com.example.first.controller;

import com.example.first.model.Response;
import com.example.first.model.User;
import com.example.first.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/createUser")
    public ResponseEntity<Response<User>> createUser(@RequestBody User user) {
        Response<User> response = userService.createUser(user);
        return ResponseEntity.ok(response);
    }
    @PostMapping("/loginUser")
    public User loginUser(@RequestBody User user){
        return userService.loginUser(user);
    }
}
