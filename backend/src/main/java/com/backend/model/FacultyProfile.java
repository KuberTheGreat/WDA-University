package com.backend.model;

import jakarta.persistence.*;

@Entity
public class FacultyProfile {
    @Id
    private Long id;

    private String name;
    private String department;

    @OneToOne
    @MapsId
    @JoinColumn(name = "id")
    private User user;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getDepartment() { return department; }
    public void setDepartment(String department) { this.department = department; }
    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
}