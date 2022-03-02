import React, { useEffect } from "react";

import { useTranslation } from "react-i18next";

import { useLocation } from "react-router-dom";

import Header from "../components/Header/Header";
import HeroSection from "../components/PagesSection/HeroSection/HeroSection";
import JurisdictionSection from "../components/PagesSection/JurisdictionSection/JurisdictionSection";
import AppealDelaySection from "../components/PagesSection/AppealDelaySection/AppealDelaySection";
import AboutSection from "../components/PagesSection/AboutSection/AboutSection";

import "../styles/home.css";

const Home = (props) => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (location.pathname.startsWith("/ar")) {
      i18n.changeLanguage("ar");
      document.dir = "rtl";
      document.body.classList.add("ar");
    } else {
      i18n.changeLanguage("en");
      document.dir = "ltr";
      document.body.classList.remove("ar");
    }
  }, [location, i18n]);

  const aboutData = t("about", { returnObjects: true });

  return (
    <div className="homepage">
      <Header />

      <section id="hero">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection data={aboutData} />
      </section>

      <section id="jurisdiction">
        <JurisdictionSection />
      </section>

      <section id="delay-of-appeal">
        <AppealDelaySection />
      </section>
    </div>
  );
};

export default Home;
