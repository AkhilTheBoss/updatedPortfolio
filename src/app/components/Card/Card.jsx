import React from "react";
import "./Card.css";

const Card = ({ title, content, imageSrc, imageDirection }) => {
  return (
    <div className="card">
      <div
        className={`card-content ${
          imageDirection === "right" ? "reverse" : ""
        }`}
      >
        <img src={imageSrc} alt={title} className="card-image" />
        <div className="text-content">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
