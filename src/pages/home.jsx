import React from "react";

import Header from "../components/Header/Header";
import HeroSection from "../components/PagesSection/HeroSection/HeroSection";
import JurisdictionSection from "../components/PagesSection/JurisdictionSection/JurisdictionSection";
import AppealDelaySection from "../components/PagesSection/AppealDelaySection/AppealDelaySection";
import AboutSection from "../components/PagesSection/AboutSection/AboutSection";

import "../styles/home.css";

const heroData = {
  image: "https://www.independent.ie/incoming/6c5a7/37793084.ece/AUTOCROP/w1000/court.jpg",
  title_en: "Criminal Court of Appeal",
  text_en:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis distinctio omnis voluptates enim deserunt eaque hic et quibusdam, maxime laudantium accusamus aliquid quis iusto dolore possimus rem soluta reiciendis ex.  ",
  title_ar: "Criminal Court of Appeal",
  text_ar:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis distinctio omnis voluptates enim deserunt eaque hic et quibusdam, maxime laudantium accusamus aliquid quis iusto dolore possimus rem soluta reiciendis ex.  ",
};

const aboutData = [
  {
    image: "https://thumbs.dreamstime.com/b/court-building-scales-justice-flat-style-vector-illustration-82742671.jpg",
    text_en: "Within every governorate, there is one or more courts of appeal.",
    text_ar: "Within every governorate, there is one or more courts of appeal.",
  },
  {
    image: "https://thumbs.dreamstime.com/b/judges-icon-judges-court-vector-icon-104760674.jpg",
    text_en: "The Court of Appeal consists of 3 judges: a president and two consultants.",
    text_ar: "The Court of Appeal consists of 3 judges: a president and two consultants.",
  },
  {
    image:
      "https://media.istockphoto.com/vectors/isometric-male-judge-in-a-wig-with-a-hammer-law-and-justice-concept-vector-id882272844?k=6&m=882272844&s=612x612&w=0&h=QOiQ0nsybnSVR2OwhGWxJbSVcyY6vV0x0V2JmbEgRyw=",
    text_en: "The public prosecution is represented before the Court of Appeal by the Appellate Public Prosecutor or an Attorney General.",
    text_ar: "The public prosecution is represented before the Court of Appeal by the Appellate Public Prosecutor or an Attorney General.",
  },
];

const Home = (props) => {
  console.log(props.lang);
  return (
    <div className="homepage">
      <Header />

      <section id="hero">
        <HeroSection {...heroData} />
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
