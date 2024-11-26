import React from "react";
import "./App.css";
import rice from "./Assets/Images/rice.webp"
import overview from "./Assets/Images/overview.webp"
import guarchuri from "./Assets/Images/GUARCHURI.webp"
import guarkorma from "./Assets/Images/GUARKORMA.webp"
import guargumpowder from "./Assets/Images/GUARGUMPOWDER.webp"
import guarsplit from "./Assets/Images/GUARSPLIT.webp"
import sunleaf from "./Assets/Images/INTERNATIONAL LLP_page-0001.jpg"
import { Routes, Router, Route, Link } from 'react-router-dom';
import Home from "./Home";
import AboutUs from "./AboutUs";
import Industries from "./Industries";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {

  const openLink = (url) => {
    window.open(url, '_blank');
  };
  return (
    <div className="main-container position-relative" data-aos='fade-in'>
      
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container id="navbar">
        <Navbar.Brand><Link to="/"><img src={sunleaf} alt='sunleaf' id="logo"></img></Link></Navbar.Brand>


        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-center"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link className="text-center"><Link to="/about-us">About Us</Link></Nav.Link>
            <Nav.Link className="text-center"><Link to="/">Contact Us</Link></Nav.Link>
            <Nav.Link className="text-center"><Link to="/industries">Industries We Serve</Link></Nav.Link>
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
          <p>&copy; 2023 Sunleaf International LLP</p>
          <div className="footer-details">
            <p>Naman, 15/20 Bhojrajpara, Vrundavan Nagar, Gondal - 360311</p>
            <p>+91 87583 40601 | +91 91065 13214</p>
            <p>info@sunleaf.com</p>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61565181540103&mibextid=LQQJ4d">Facebook</a>
            <a href="https://www.linkedin.com/in/sunleaf-international-llp-bb2499326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">LinkedIn</a>
            <a href="https://www.instagram.com/sunleaf_international?igsh=djFyaHFsaWZoMTk1">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
