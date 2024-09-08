"use client";
import React, { useState } from "react";
import "./Navbar.css";
import Link from "next/link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = (event) => {
    setTooltipVisible(true);
    setTooltipPosition({
      top: event.clientY + 10,
      left: event.clientX + 10,
    });
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <button className="menu-btn" onClick={toggleMenu}>
            &#9776; {/* This is a hamburger icon */}
          </button>
          <h1
            className="logo"
            onClick={handleLogoClick}
            onMouseLeave={handleMouseLeave}
          >
            AK.
          </h1>
          {tooltipVisible && (
            <div
              className="tooltip"
              style={{ top: tooltipPosition.top, left: tooltipPosition.left }}
            >
              I am a recent computer science grad from UC Davis!
            </div>
          )}
          <ul className={isMenuOpen ? "menu-open" : ""}>
            <li>
              <Link href="/" className="menu-item">
                Home
              </Link>
            </li>
            <li>
              <Link href="/skills" className="menu-item">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/experience" className="menu-item">
                Experience
              </Link>
            </li>
            <li>
              <Link href="/projects" className="menu-item">
                Projects
              </Link>
            </li>
            <li>
              <a className="menu-item">Contact Me</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
