import React from "react";

import "./CircularCard.css";

const CircularCard = (props) => {
  return (
    <div className="circular-card">
      <div className="half-circle" style={{ borderColor: props.color || "inherit" }}></div>
      <div className="circular-card__text">{props.text_en}</div>
    </div>
  );
};

export default CircularCard;
