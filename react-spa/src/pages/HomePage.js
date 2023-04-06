// HomePage.js
import React from "react";
import { Container } from "react-bootstrap";
import background from "../assets/images/hero-background.webp";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="main" style={{ backgroundImage: `url(${background})` }}>
      {<Container>
        <h1>Mandalorian</h1>
        <h4>welcome to season 3</h4>
        
      </Container>}
    </div>
  );
};

export default HomePage;
