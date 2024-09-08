// SmallCard.jsx
import React from "react";
import "./SmallCard.css";

const SmallCard = ({ title, content, imageSrc, position }) => {
  return (
    <div className={`small-card ${position}`}>
      <img src={imageSrc} alt={title} className="small-card-image" />
      <div className="small-card-text-content">
        <div className="small-card-text-title">
          <h3>{title}</h3>
        </div>
        <div className="small-card-text-points">
          <ul>
            {content.split("\n").map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
