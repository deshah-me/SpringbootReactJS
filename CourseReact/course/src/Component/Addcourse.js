import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Container, Form,FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";
const Addcourse = ()=>{

    useEffect (() =>{ //component did mount and component did update which means whenever page load this will run 
        //so to avoid we used [] .
document.title="Add Courses"

}, []);

const [course,setCourse] = useState({});

//Handle Form function
const handleForm=(e)=>{
    postDatatoServer(course);
    console.warn(course);
    e.preventDefault();
}

//Creating function to post data to server
const postDatatoServer=(data)=>{

    axios.post(`${base_url}/courses`, data).then(
        (response)=>{
            console.log("PostData to server"+response.data)
            toast.success("Data added SuccessFully.....");
            setCourse({id:"", name :"", description:""});
        },
        (error)=>{
            console.log(error.data)
        }
    )
};
return(
    <div>
        <h3 className="text-center"><b>Fill Course Deatils</b></h3>
        <Form onSubmit={handleForm}>
            <FormGroup>
                <label for="userId">Course Id</label>
                <Input type="text" placeholder="Enter here" name="id" id="id"
                onChange={(e)=>{
                    setCourse({...course,id:e.target.value})
                }}/>      
            </FormGroup>

            <FormGroup>
                <label for="name">Course Name</label>
                <Input type="text" placeholder="Enter Name" name="name" id="name"
                 onChange={(e)=>{
                    setCourse({...course,name:e.target.value})
                }}/>    
            </FormGroup>

            <FormGroup>
                <label for="description">Course Description</label>
                <Input type="textarea" placeholder="Enter description" name="description" id="description" onChange={(e)=>{
                    setCourse({...course,description:e.target.value})
                }}/>    
            </FormGroup>

            <Container className="text-center">
                <Button color="success" type="submit">Add Course</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button color="warning" type="reset">Clear</Button>
            </Container>
        </Form>
    </div>
)

}
export default Addcourse;