"use client";
import React, { useEffect } from "react";
import Card from "../Card/Card";
import "./Body.css"; // Ensure to import the CSS file

function Body() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            entry.target.classList.remove("out-of-view"); // Ensure card is visible
          } else if (
            entry.boundingClientRect.y < 0 ||
            entry.boundingClientRect.y > window.innerHeight / 2
          ) {
            entry.target.classList.add("out-of-view");
            entry.target.classList.remove("in-view"); // Ensure card is not visible
          }
        });
      },
      { threshold: [0.5] } // Trigger at 50% visibility
    );

    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      if (cards) {
        cards.forEach((card) => observer.unobserve(card));
      }
    };
  }, []);

  return (
    <div className="Body-wrapper">
      <div className="cards-container">
        <Card
          title="Card 1"
          content="This is the first card."
          imageSrc="images/gdg4.png"
          imageDirection="left"
        />
        <Card
          title="Card 2"
          content="This is the second card."
          imageSrc="images/MacBook-02.png"
          imageDirection="right"
        />
        <Card title="Card 3" content="This is the third card." />
        {/* Add more cards as needed */}
      </div>
    </div>
  );
}

export default Body;
