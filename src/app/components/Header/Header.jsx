import React from "react";
import TypingEffect from "../LavishFeatures/TypingEffect";
import Introduction from "./Introduction";
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
          {/* <Image
            src="images/Group-6.png"
            alt="Header Image"
            width={400}
            height={300}
          /> */}
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
