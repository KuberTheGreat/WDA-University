package com.backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String subject;
    private String syllabus;
    private LocalDateTime dateTime;

    // Add facultyId if needed to associate with faculty

    // Getters and Setters
}
