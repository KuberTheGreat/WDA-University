package com.backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Quiz {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String syllabus;

    private LocalDateTime quizDateTime;

    @ManyToOne
    @JoinColumn(name = "faculty_id")
    private FacultyProfile faculty;

    // Constructors
    public Quiz() {}

    public Quiz(String title, String syllabus, LocalDateTime quizDateTime, FacultyProfile faculty) {
        this.title = title;
        this.syllabus = syllabus;
        this.quizDateTime = quizDateTime;
        this.faculty = faculty;
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSyllabus() {
        return syllabus;
    }

    public void setSyllabus(String syllabus) {
        this.syllabus = syllabus;
    }

    public LocalDateTime getQuizDateTime() {
        return quizDateTime;
    }

    public void setQuizDateTime(LocalDateTime quizDateTime) {
        this.quizDateTime = quizDateTime;
    }

    public FacultyProfile getFaculty() {
        return faculty;
    }

    public void setFaculty(FacultyProfile faculty) {
        this.faculty = faculty;
    }
}
