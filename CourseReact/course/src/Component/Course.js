import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { Card,CardBody,CardSubtitle, CardText, Container, Button } from "reactstrap";
import base_url from "../api/bootapi";

const Course = ({course, update}) => {

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                toast.success("Data Deleted Successfully...");
                update(id);
            },
            (error)=>{
                toast.success("Something Went Wrong....");
            }
        )
    }

return(
    <Card className="text-center">
        <CardBody>
            <CardSubtitle ><b>{course.name}</b></CardSubtitle>
            <CardText>{course.description}</CardText>
            <Container className="text-center">
            <Button color="danger"
            onClick={()=>{deleteCourse(course.id);
            }}
            >Delete</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button color="warning">Update</Button>
            </Container>
        </CardBody>
    </Card>
)}
export default Course;