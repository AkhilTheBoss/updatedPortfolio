import React from "react";
import TypingEffect from "../LavishFeatures/TypingEffect";
import Introduction from "./Introduction";
// import Image from "next/image"; // Import Image from Next.js if you're using Next.js
import "./Header.css";

function Header() {
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="header-left">
          <TypingEffect />
          <Introduction />
        </div>
        <div className="header-right">
          {/* Use Next.js Image component if applicable */}
          {/* <Image
            src="images/Group-6.png"
            alt="Header Image"
            width={400}
            height={300}
          /> */}
          {/* If not using Next.js Image, use regular img tag */}
          <img
            src="images/Group-6.png"
            alt="Header Image"
            className="header-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
