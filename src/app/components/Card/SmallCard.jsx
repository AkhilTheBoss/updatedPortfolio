// SmallCard.jsx
import React from "react";
import "./SmallCard.css";

const SmallCard = ({ title, content, imageSrc, position }) => {
  return (
    <div className={`small-card ${position}`}>
      <img src={imageSrc} alt={title} className="small-card-image" />
      <div className="small-card-text-content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default SmallCard;
