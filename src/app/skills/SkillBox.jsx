import React from "react";
import Image from "next/image";
import "./SkillBox.css";

function SkillBox({ imageSrc, title, skills, icon, bottomIcons }) {
  return (
    <div className="box">
      <div className="skill-icon-container">
        {icon ? (
          <div className="icons">{icon}</div>
        ) : (
          <Image
            src={imageSrc}
            alt={title}
            width={40}
            height={20}
            className="skill-icon"
          />
        )}
      </div>
      <div className="skill-title">{title}</div>
      <div className="skills-list">
        <p className="skills">{skills}</p>
      </div>
      <div className="bottom-icons">{bottomIcons}</div>
    </div>
  );
}

export default SkillBox;
