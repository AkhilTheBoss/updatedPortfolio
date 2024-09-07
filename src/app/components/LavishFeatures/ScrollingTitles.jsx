"use client";
import React from "react";
import "./ScrollingTitles.css";

const titles = [
  "Software Engineer",
  "Full Stack Developer",
  "Backend Engineer",
  "Cloud Engineer",
  "DevOps Engineer",
  "Site Reliability Engineer",
  "Operating System Engineer",
];

const ScrollingTitles = () => {
  return (
    <div className="scrolling-titles-wrapper">
      <div className="scrolling-titles">
        {titles.map((title, index) => (
          <div className="title" key={index}>
            {title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingTitles;
