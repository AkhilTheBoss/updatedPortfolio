"use client";
import React, { useEffect, useState } from "react";
import "./TypingEffect.css";

const TypingEffect = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Hi, I am Akhileshwar!";
  const typingSpeed = 150;

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="typing-container">
      <h1 className="typingEffect">{displayedText}</h1>
    </div>
  );
};

export default TypingEffect;
