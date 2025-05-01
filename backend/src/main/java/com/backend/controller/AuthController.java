package com.backend.controller;

import com.backend.model.User;
import com.backend.model.Role;
import com.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return "Email already in use";
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return "Registered successfully";
    }

    @PostMapping("/login")
    public String login(@RequestBody User loginData) {
        Optional<User> optionalUser = userRepository.findByEmail(loginData.getEmail());
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            if (passwordEncoder.matches(loginData.getPassword(), user.getPassword())) {
                return user.getRole().name();
            }
        }
        return "Invalid credentials";
    }
}