import React from "react";
import { AiFillGithub } from "react-icons/ai";

function Card({ title, img, link, desc, skills, other }) {
  return (
    <a className="link-wrapper" href={link} target="_blank" rel="noreferrer">
      <div className="project-card">
        <img src={img} alt={"Project screenshot"} />
        <div className="project-card-content">
          <h3>{title}</h3>
          {desc}
          <p>
            <b>Skills:</b> {skills}
          </p>
          <button
            className="custom-button"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub /> See on github
          </button>
          {other}
        </div>
      </div>
    </a>
  );
}

export default Card;
