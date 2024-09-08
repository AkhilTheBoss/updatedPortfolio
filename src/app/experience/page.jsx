"use client";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card.jsx";
import "./page.css";

function Page() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            entry.target.classList.remove("out-of-view");
          } else {
            entry.target.classList.add("out-of-view");
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: [0.9] }
    );

    const cards = document.querySelectorAll(".box1");
    cards.forEach((card) => observer.observe(card));

    return () => {
      if (cards) {
        cards.forEach((card) => observer.unobserve(card));
      }
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="experience-wrapper">
        <div className="section">
          <h2>Education</h2>
          <div className="box1">
            <img src="images/ucd.png" alt="Description" className="box-image" />
            <div className="content">
              <h4>Bachelor of Science in Computer Science</h4>
              <h5>University of California, Davis</h5>
              <h5>2020 — 2024</h5>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Experience</h2>
          <div className="box1">
            <img
              src="images/gdsc.png"
              alt="Description"
              className="box-image"
            />
            <div className="content">
              <h4>Google Developer Student Club</h4>
              <h5>Software Developer</h5>
              <h5>Nov 2023 - Present</h5>
            </div>
          </div>
          <div className="box1">
            <img
              src="images/include.jpeg"
              alt="Description"
              className="box-image"
            />
            <div className="content">
              <h4>#Include Club</h4>
              <h5>Software Developer</h5>
              <h5>Nov 2023 - Feb 2024</h5>
            </div>
          </div>
          <div className="box1">
            <img
              src="images/asucd.png"
              alt="Description"
              className="box-image"
            />
            <div className="content">
              <h4>ASUCD Pantry</h4>
              <h5>Software Developer</h5>
              <h5>Mar 2024 - June 2024</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
