import React from "react";
import "./App.css";
import rice from "./Assets/Images/rice.webp"
import overview from "./Assets/Images/overview.webp"
import guarchuri from "./Assets/Images/GUARCHURI.webp"
import guarkorma from "./Assets/Images/GUARKORMA.webp"
import guargumpowder from "./Assets/Images/GUARGUMPOWDER.webp"
import guarsplit from "./Assets/Images/GUARSPLIT.webp"
import sunleaf from "./Assets/Images/Sunleaf.webp"
import { Routes, Router, Route, Link } from 'react-router-dom';
import Home from "./Home";
import AboutUs from "./AboutUs";
import Industries from "./Industries";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return (
    <div className="main-container" data-aos='fade-in'>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container id="navbar">
        <Navbar.Brand><Link to="/"><img src={sunleaf} alt='sunleaf'></img></Link></Navbar.Brand>


        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/about-us">About Us</Link></Nav.Link>
            <Nav.Link><Link to="/">Contact Us</Link></Nav.Link>
            <Nav.Link><Link to="/industries">InDustries We Serve</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/industries" element={<Industries />} />
        </Routes>

      <footer className="footer-section">
        <div className="footer-container">
          <h3>Sunleaf International LLP</h3>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About us</a>
            <a href="#contact">Contact Us</a>
            <a href="#industries">Industries we Serve</a>
          </div>
          <p>&copy; 2023 Sunleaf International LLP</p>
          <div className="footer-details">
            <p>Naman, 15/20 Bhojrajpara, Vrundavan Nagar, Gondal - 360311</p>
            <p>+91 87583 40601 | +91 91065 13214</p>
            <p>info@sunleaf.com</p>
          </div>
          <div className="social-icons">
            <a href="#facebook">Facebook</a>
            <a href="#linkedin">LinkedIn</a>
            <a href="#instagram">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
