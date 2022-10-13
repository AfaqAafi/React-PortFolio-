import React from "react";
import "./WorkCardStyles.css";

const WorkCard = ({ imgsrc, title, text }) => {
  return (
    <div className="project-card">
      <img src={imgsrc} alt={title} />
      <h2 className="project-title">{title}</h2>
      <div className="pro-details">
        <p>{text}</p>
        <div className="pro-btns">
          <button className="btn">View</button>
          <button className="btn">Source</button>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
