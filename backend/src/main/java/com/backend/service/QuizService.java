package com.backend.service;

import com.backend.model.Quiz;
import com.backend.repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizService {

    @Autowired
    private QuizRepository quizRepository;

    public Quiz createQuiz(Quiz quiz) {
        // You could also add logic here to notify students
        return quizRepository.save(quiz);
        
    }

    public List<Quiz> getAllQuizzes() {
        return quizRepository.findAll();
    }
}
