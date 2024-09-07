import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Body from "./Body.jsx";
import "./page.css";

function page() {
  return (
    <>
      <div className="skills-wrapper">
        <Navbar />
        <Body />
      </div>
    </>
  );
}

export default page;
