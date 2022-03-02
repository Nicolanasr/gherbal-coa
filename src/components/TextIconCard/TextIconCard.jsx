import React from "react";

import "./TextIconCard.css";

const TextIconCard = (props) => {
  return (
    <div className="text-icon-card">
      <div className="text-icon-card__image">
        <img src={props.image} alt={props.image} srcSet="" />
      </div>
      <div className="text-icon-card__body">{props.text}</div>
    </div>
  );
};

export default TextIconCard;
