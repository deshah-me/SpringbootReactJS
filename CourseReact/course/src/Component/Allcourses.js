import React, { useState,useEffect } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
const Allcourse =()=>{

    useEffect (() =>{ //component did mount and component did update which means whenever page load this will run 
        //so to avoid we used [] .
document.title="All Courses"
getServer();
}, []);


//function to call server
const getServer =() =>{
    axios.get(`${base_url}/courses`).then(
        (response)=>{
         //for success
         console.log(response.data);
         toast.success("API Loaded....",{position:"top-center"});
         setCourses(response.data);
        },
        (error)=>{
         //for error
         console.log(error);  
         toast.error("Something went wrong....");
         
        }
    );
};

    const [courses,setCourses]=useState({});

    const updateCourseById=(id)=>{
        setCourses(courses.filter((c)=>c.id !== id));
    }
    return(
        <div>
            <h1>All Courses</h1>
            <p>List of courses are as follows:</p>
        { 
        courses.length > 0 ? courses.map((item)=><Course key={item.id} course={item} update={updateCourseById}/>) : "No Course"}
        </div>
    )

}
export default Allcourse;