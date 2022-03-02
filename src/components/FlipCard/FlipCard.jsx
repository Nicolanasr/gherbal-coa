import React from "react";

import "./FlipCard.css";

const FlipCard = (props) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p>{props.front_en}</p>
          <div className="flip-card__arrow"></div>
        </div>
        <div className="flip-card-back">
          <p>{props.back_en}</p>
          <div className="flip-card__line"></div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
