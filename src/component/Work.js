import React from "react";
import "./WorkCardStyles.css";
import ProjectCardData from "./WorkData";
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading"> Project </h1>
      <div className="project-container">
        {ProjectCardData.map((items) => {
          return <WorkCard key={items.id} {...items} />;
        })}
      </div>
    </div>
  );
};

export default Work;
