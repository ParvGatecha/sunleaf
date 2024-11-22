import React from "react";
import "./App.css";
import rice from "./Assets/Images/rice.webp"
import overview from "./Assets/Images/overview.webp"
import guarchuri from "./Assets/Images/GUARCHURI.webp"
import guarkorma from "./Assets/Images/GUARKORMA.webp"
import guargumpowder from "./Assets/Images/GUARGUMPOWDER.webp"
import guarsplit from "./Assets/Images/GUARSPLIT.webp"
import { Routes, Router, Route, Link } from 'react-router-dom';

import sunleaf from "./Assets/Images/Sunleaf.webp"

function Home() {
  return (
    <div className="main-container" data-aos='fade-in'>
      <div className="hero-section min-vh-100 d-flex flex-column flex-md-row justify-content-around">
        <div className="content d-flex flex-column justify-content-center align-items-center" data-aos="slide-right">
          <h1>
            Welcome to <span className="highlight">Sunleaf International LLP</span>,
          </h1>
          <p>
            A leading exporter of high-quality Guar Gum products. We specialize
            in providing premium Guar Gum solutions to clients worldwide,
            catering to diverse industries and applications.
          </p>
          <div className="buttons overflow-visible">
            <button className="contact-btn m-2"><a href="#contactus" className="text-white">Contact Us</a></button>
            <button className="know-more-btn m-2">Know More</button>
          </div>
        </div>
        <div className="image-container" data-aos="slide-left">
          <img
            src={rice}
            alt="Guar Gum"
            className="hero-image"
          />
        </div>
      </div>
      <div className="hero-section min-vh-100 d-flex flex-column flex-md-row justify-content-around">
        <div className="image-container p-5" data-aos="slide-right">
          <img
            src={overview}
            alt="Guar Gum"
            className="hero-image"
          />
        </div>
        <div className="content fs-5" data-aos="slide-left">
          <h1 className="fw-bold" >
            About Us
          </h1>
          <p>
          At <u><b>Sunleaf International LLP,</b></u> we take immense pride in our reputation as a reliable and trusted exporter of Guar Gum. With years of experience and expertise, we have built strong relationships with both domestic Guar Gum manufacturers and international clients. Our commitment to quality, timely delivery, and customer satisfaction sets us apart in the market.
              <br></br><br></br>
              As an exporter, we take great pride in delivering our Guar Gum products to clients around the globe. Our robust supply chain network ensures timely and efficient delivery, allowing us to cater to the diverse needs of international markets. We prioritize customer satisfaction and strive to build long-term relationships based on trust, reliability, and exceptional service.
          </p>
          <div className="buttons">
            <button className="contact-btn">Read More</button>
          </div>
        </div>
        
      </div>
      <section className="products-section container overflow-visible">
        <h2 data-aos="fade-up">Our Products</h2>
        <p data-aos="fade-up">
          We provide a wide selection of Guar Gum products crafted to meet global standards. 
          Our range includes Guar Gum powder, splits, and tailored formulations for diverse 
          industries like food, pharmaceuticals, cosmetics, textiles, and more.
        </p>
        <div className="products-grid overflow-visible">
          <div className="product-card" data-aos="fade-up">
            <img src={guarchuri} alt="Guar Churi" />
            <h3>Guar Churi</h3>
          </div>
          <div className="product-card" data-aos="fade-up">
            <img src={guargumpowder} alt="Guar Gum Powder" />
            <h3>Guar Gum Powder</h3>
          </div>
          <div className="product-card" data-aos="fade-up">
            <img src={guarkorma} alt="Guar Korma" />
            <h3>Guar Korma</h3>
          </div>
          <div className="product-card" data-aos="fade-up">
            <img src={guarsplit} alt="Guar Split" />
            <h3>Guar Split</h3>
          </div>
        </div>
        <button className="view-industries-btn"><Link className="text-white" to="/industries">View All Industries</Link></button>
      </section>


      <section className="contact-section container" id="contactus" data-aos='fade-in'>
        
        <h2>Contact Us</h2>
        <div className="d-flex flex-column flex-md-row gap-5 overflow-visible">
          <div className="contact-container flex-grow-1" data-aos="slide-right">
            <form className="contact-form">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Phone Number" required />
              <textarea placeholder="Message" rows="4" required></textarea>
              <button type="submit" className="view-industries-btn">Send</button>
            </form>
            
          </div>
          <div className="map-container flex-grow-0" data-aos="slide-left">
            <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7400.9561192465335!2d70.796294!3d21.954608!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDU3JzE2LjYiTiA3MMKwNDcnNTUuOSJF!5e0!3m2!1sen!2sin!4v1732254171752!5m2!1sen!2sin"
                height="450" 
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
        
      </section>

    </div>
  );
}

export default Home;
