package com.backend.controller;

import com.backend.model.FacultyProfile;
import com.backend.repository.FacultyProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/faculty")
@CrossOrigin(origins = "http://localhost:3000")
public class FacultyController {

    @Autowired
    private FacultyProfileRepository facultyProfileRepository;

    @GetMapping("/all")
    public List<FacultyProfile> getAllFaculty() {
        return facultyProfileRepository.findAll();
    }

    @PostMapping("/add")
    public String addFaculty(@RequestBody FacultyProfile profile) {
        facultyProfileRepository.save(profile);
        return "Faculty added";
    }
}
