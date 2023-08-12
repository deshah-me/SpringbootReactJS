import React from 'react';
import {Form,Button} from "reactstrap";
import { useEffect } from 'react';

const Home = () =>{
  useEffect (() =>{ //component did mount and component did update which means whenever page load this will run 
    //so to avoid we used [] .
document.title="All Home";
},[]);
    return(
    <div className='center'>
      
      <Form>
        <h1>Hello, world!</h1>
        <p className='center'>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button bsStyle="primary">Learn more</Button>
        </p>
      </Form>
    </div>
    )
}

export default Home