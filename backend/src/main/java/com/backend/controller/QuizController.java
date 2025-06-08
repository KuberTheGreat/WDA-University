package com.backend.controller;

import com.backend.model.Quiz;
import com.backend.model.FacultyProfile;
import com.backend.repository.FacultyProfileRepository;
import com.backend.repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/quizzes")
@CrossOrigin(origins = "http://localhost:3000")
public class QuizController {

    @Autowired
    private QuizRepository quizRepository;

    @Autowired
    private FacultyProfileRepository facultyProfileRepository;

    @PostMapping("/create")
    public Quiz createQuiz(@RequestBody Quiz quiz, @RequestParam Long facultyId) {
        FacultyProfile faculty = facultyProfileRepository.findById(facultyId)
                .orElseThrow(() -> new RuntimeException("Faculty not found"));
        quiz.setFaculty(faculty);
        return quizRepository.save(quiz);
    }

    @GetMapping("/all")
    public List<Quiz> getAllQuizzes() {
        return quizRepository.findAll();
    }

    @GetMapping("/faculty/{id}")
    public List<Quiz> getQuizzesByFaculty(@PathVariable Long id) {
        return quizRepository.findByFacultyId(id);
    }
}
