package com.backend.controller;

import com.backend.model.StudentProfile;
import com.backend.repository.StudentProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

    @Autowired
    private StudentProfileRepository studentProfileRepository;

    @GetMapping("/{id}")
    public Optional<StudentProfile> getStudent(@PathVariable Long id) {
        return studentProfileRepository.findById(id);
    }

    @GetMapping("/all")
    public List<StudentProfile> getAllStudents() {
        return studentProfileRepository.findAll();
    }

    @PostMapping("/update")
    public String updateStudent(@RequestBody StudentProfile profile) {
        studentProfileRepository.save(profile);
        return "Student updated";
    }
}
