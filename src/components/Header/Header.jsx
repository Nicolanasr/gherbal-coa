import React from "react";

import { Container } from "@mui/material";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Container style={{ height: "100%" }}>
          <ul className="header__nav">
            <li className="header__logo">
              <Link to={"/"}>
                <img src="/assets/svg/logoipsum-logo-8.svg" alt="" srcSet="" />
              </Link>
            </li>
            <li className="header__navitem">
              <Link to={"#about"}>About</Link>
            </li>
            <li className="header__navitem">
              <Link to={"#contact-us"}>Contact</Link>
            </li>
            <li className="header__navitem header__language">
              <Link to={"/ar"}>{"Arabic"}</Link>
            </li>
          </ul>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
