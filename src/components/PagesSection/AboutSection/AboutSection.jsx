import React from "react";

import { Container } from "@mui/material";

import "./AboutSection.css";
import TextIconCard from "../../TextIconCard/TextIconCard";

const AboutSection = (props) => {
  return (
    <Container>
      <div className="about-section">
        {props.data.map((item, index) => {
          return (
            <div className="about__card-wrapper" key={`${item.text}-${index}`}>
              <TextIconCard {...item} />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default AboutSection;
