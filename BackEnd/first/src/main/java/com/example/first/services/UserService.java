package com.example.first.services;

import com.example.first.model.Response;
import com.example.first.model.User;
import com.example.first.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public Response<User> createUser(User user){
        User existingUserName = userRepository.findByUserName(user.getUserName());
        Response<User> response = new Response<>();

        if(existingUserName != null){
            response.setSuccess(false);
            response.setMessage("This username already taken, please choose another username.");
            response.setData(null);
        }
        else {
            User savedUser = userRepository.save(user);
            response.setSuccess(true);
            response.setMessage(null);
            response.setData(savedUser);
        }

        return response;
    }

    public User loginUser(User user) {
        User loginedUser = userRepository.findByUserNameAndPassword(user.getUserName(), user.getPassword());
        return loginedUser;
    }


}
