import React from "react";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import { Container } from "@mui/material";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    navigate(`/${language}`);
    document.dir = i18n.dir();
  };

  return (
    <header className="header">
      <nav>
        <Container style={{ height: "100%" }}>
          <ul className="header__nav">
            <li className="header__logo">
              <Link to={`/${i18n.language}`}>
                <img src="/assets/svg/logoipsum-logo-8.svg" alt="" srcSet="" />
              </Link>
            </li>
            <li className="header__navitem header__language">
              <p style={{ cursor: "pointer" }} onClick={() => changeLanguage(t("header.languageSwitcherLink"))}>
                {t("header.languageSwitcherText")}
              </p>
            </li>
          </ul>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
