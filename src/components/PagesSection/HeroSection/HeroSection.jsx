import React from "react";

import { Container } from "@mui/material";

import "./HeroSection.css";

const HeroSection = (props) => {
  return (
    <Container>
      <div className="hero-section">
        <div className="hero__image">
          <img src={props.image} alt="criminal court of appeal" />
        </div>
        <div className="hero__body">
          <h1 className="hero__title">{props.title_en}</h1>
          <div className="hero__text">{props.text_en}</div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
