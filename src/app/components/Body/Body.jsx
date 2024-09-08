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
          title="GeoNotify"
          content={`Developing a location-based reminder application based on users proximity to specified locations using geofencing and geolocation technologies.`}
          imageSrc="images/gdg4.png"
          imageDirection="left"
        />
        <Card
          title="Financial Expense Tracker"
          content={`Developed a financial expense tracker allowing users to input received income and record expenses.
                    The application generates weekly expenditure graphs to visualize spending patterns.
                    Deployed the application on an AWS EC2`}
          imageSrc="images/MacBook-02.png"
          imageDirection="right"
        />
        <div>How I deployed my current portfolio?</div>
        <Card
          title="CI/CD"
          content="Developed and deployed a CI/CD pipeline using GitHub, GitHub Actions, and Vercel."
          imageSrc="images/newCICD.png"
          imageDirection="left"
        />
        <div>How I deployed my previous portfolio?</div>
        <Card
          title="CI/CD"
          content="Developed and deployed a CI/CD pipeline using AWS CodeCommit, CodeBuild, CodeDeploy and S3."
          imageSrc="images/new_cicd.png"
          imageDirection="left"
        />
      </div>
    </div>
  );
}

export default Body;
