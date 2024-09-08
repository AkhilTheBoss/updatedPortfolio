import React from "react";
import "./Card.css";

const Card = ({ title, tools, content, imageSrc, imageDirection }) => {
  return (
    <div className="card">
      <div
        className={`card-content ${
          imageDirection === "right" ? "reverse" : ""
        }`}
      >
        <img src={imageSrc} alt={title} className="card-image" />
        <div className="text-content">
          <div className="text-title">
            <h3>{title}</h3>
            <span className="tools"> | {tools} </span>
          </div>
          <div className="text-points">
            <ul>
              {content.split("\n").map((point, index) => {
                return <li key={index}>{point}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
