import React from "react";
import { AiFillGithub } from "react-icons/ai";

function Card({ title, img, link, desc, skills }) {
  return (
    <div className="project-card">
      <img src={img} alt={"Project screenshot"} />
      <div className="project-card-content">
        <h3>{title}</h3>
        <p>{desc}</p>
        <p>
          <b>Skills:</b> {skills}
        </p>
        <button className="custom-button" href={link} target="_blank">
          <AiFillGithub /> See on github
        </button>
      </div>
    </div>
  );
}

export default Card;
