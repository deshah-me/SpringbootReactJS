package com.example.course.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.course.entity.Course;

public interface CourseDao extends JpaRepository<Course, Long>{

}
