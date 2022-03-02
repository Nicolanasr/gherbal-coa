import React from "react";

import { Container } from "@mui/material";

import { useTranslation } from "react-i18next";

import "./HeroSection.css";

const HeroSection = (props) => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="hero-section">
        <div className="hero__image">
          <img src={"https://www.independent.ie/incoming/6c5a7/37793084.ece/AUTOCROP/w1000/court.jpg"} alt="criminal court of appeal" />
        </div>
        <div className="hero__body">
          <h1 className="hero__title">{t("hero.title")}</h1>
          <div className="hero__text">{t("hero.text")}</div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
