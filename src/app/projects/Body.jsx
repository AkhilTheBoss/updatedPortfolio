"use client";
import React, { useEffect } from "react";
import Card from "../components/Card/Card.jsx";
import SmallCard from "../components/Card/SmallCard.jsx";
import "./Body.css";

function Body() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            entry.target.classList.remove("out-of-view");
          } else if (
            entry.boundingClientRect.y < 0 ||
            entry.boundingClientRect.y > window.innerHeight / 2
          ) {
            entry.target.classList.add("out-of-view");
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: [0.5] }
    );

    const cards = document.querySelectorAll(
      ".card, .small-card.left, .small-card.right"
    );
    cards.forEach((card) => observer.observe(card));

    return () => {
      if (cards) {
        cards.forEach((card) => observer.unobserve(card));
      }
    };
  }, []);

  return (
    <div className="body-wrapper1">
      <div className="body1">
        <h1 className="title1">Projects</h1>
        <div className="cards-container">
          <Card
            title="Card 1"
            content="This is the first card."
            imageSrc="images/3.png"
            imageDirection="left"
          />
          <Card
            title="Card 2"
            content="This is the second card."
            imageSrc="images/demandPagingMain-2.jpg"
            imageDirection="right"
          />
          <Card
            title="Card 3"
            content="This is the third card."
            imageSrc="images/4.png"
            imageDirection="left"
          />
          <Card
            title="Card 4"
            content="This is the fourth card."
            imageSrc="images/6.png"
            imageDirection="right"
          />
          <div className="small-cards-group">
            <SmallCard
              title="Small Card Left"
              content="This is the left small card."
              imageSrc="images/doc-2.png"
              position="left"
            />
            <SmallCard
              title="Small Card Right"
              content="This is the right small card."
              imageSrc="images/nb.png"
              position="right"
            />
          </div>
          <Card
            title="Card 5"
            content="This is the seventh card."
            imageSrc="images/3316.png"
            imageDirection="left"
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
