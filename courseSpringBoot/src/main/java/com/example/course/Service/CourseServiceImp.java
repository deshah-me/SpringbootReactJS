package com.example.course.Service;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.course.Dao.CourseDao;
import com.example.course.entity.Course;

@Service
public class CourseServiceImp implements CourseService{

	//List <Course> list;
	@Autowired
	private CourseDao courseDao;
	
	public CourseServiceImp() {
//		list =new ArrayList();
//		list.add(new Course(1,"Java","This is a java course"));
//		list.add(new Course(2,"React","This is a React course"));
	}
	
	@Override
	public List<Course> getCourses() {
		return courseDao.findAll();
	}


	@Override
	public Course getCourses(long courseId) {
//		Course c=null;
//		for(Course course:list)
//		{
//			if(course.getId()==courseId) {
//				c=course;
//				break;
//			}
//		}
		return courseDao.getOne(courseId);
		
	}

	@Override
	public Course addCourse(Course course) {
//		list.add(course);
		courseDao.save(course);
		return course;
	}

	@Override
	public Course updateCourse(Course course) {
//		list.forEach(e->{
//			if(e.getId()==course.getId()) {
//				e.setName(course.getName());
//				e.setDescription(course.getDescription());
//			}
//			
//		});
		courseDao.save(course);
		return course;
	}

	@Override
	public void deleteCourse(long parseLong) {
		// TODO Auto-generated method stub
//		list=this.list.stream().filter(e->e.getId()!=parseLong).collect(Collectors.toList());
		 Course entity=courseDao.getOne(parseLong);
		courseDao.delete(entity);
	}


}
