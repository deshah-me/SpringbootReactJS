package com.example.course.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
@Entity
public class Course {

	@Id
	private long Id;
	private String Name;
	private String Description;
	
	@Override
	public String toString() {
		return "Course [Id=" + Id + ", Name=" + Name + ", Description=" + Description + "]";
	}
	public Course() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Course(long id, String name, String description) {
		super();
		Id = id;
		Name = name;
		Description = description;
	}
	public long getId() {
		return Id;
	}
	public void setId(long id) {
		Id = id;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getDescription() {
		return Description;
	}
	public void setDescription(String description) {
		Description = description;
	}
	
}
