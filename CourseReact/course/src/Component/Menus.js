import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus = ()=>{
    return(
<ListGroup>
<ListGroupItem tag="a" href="/">Home</ListGroupItem>
<ListGroupItem tag="a" href="/add-course">Add course</ListGroupItem>
<ListGroupItem tag="a" href="/view-course">View Courses</ListGroupItem>
<ListGroupItem tag="a" href="/about">About</ListGroupItem>
<ListGroupItem tag="a" href="/contact-us">Contact us</ListGroupItem>
</ListGroup>


)

}
export default Menus;