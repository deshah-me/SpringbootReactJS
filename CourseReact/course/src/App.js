import Home from './Component/Home';
import './App.css';
import React from 'react';
import { Container, Row, Col } from "reactstrap";
import {ToastContainer} from "react-toastify";
import Allcourses from './Component/Allcourses';
import Addcourse from './Component/Addcourse';
import Header from './Component/Header';
import Menus from './Component/Menus';
import {BrowserRouter , Routes, Route} from "react-router-dom";


function App() {
  return (
    <div>
       <ToastContainer/>
    <Container>
    <Header/>
    <br/>
      <Row>
        <Col md={4}><Menus/></Col>
        <Col md={8}> 
        
        <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-course" element={<Addcourse />} />
          <Route path="/view-course" element={<Allcourses />} />
          
      </Routes>
    </BrowserRouter>

        </Col>
      </Row>
    </Container>
    
    </div>
  );
}

export default App;