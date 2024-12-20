import React from "react";
import { AiFillGithub } from "react-icons/ai";

function ProjectCard({ item }) {
  const skillsList = item.skills.join(", ");

  return (
    <a
      className="link-wrapper"
      href={item.link}
      target="_blank"
      rel="noreferrer"
    >
      <div className="project-card">
        <img src={item.img} alt={"Project screenshot"} />
        <div className="project-card-content">
          <h3>{item.title}</h3>
          {item.desc}
          <p>
            <b>Skills:</b> {skillsList}
          </p>
          <button
            className="custom-button"
            href={item.link}
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub /> See on github
          </button>
          {item.other}
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
