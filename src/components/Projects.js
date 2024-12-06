import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import foxBlob from "../assets/foxblob.gif";
import pvdxScreenshot from "../assets/screenshots/pvdx_figma.png";
import redesignScreenshot from "../assets/screenshots/redesign-screenshot.png";
import iterativeScreenshot from "../assets/screenshots/iterativedesign-screenshot.png";
import developmentScreenshot from "../assets/screenshots/development-screenshot.png";
import "../index.css";

function Projects() {
  return (
    <div>
      <div className="parallax">
        <div className="project-header">
          <h1>Projects</h1>
        </div>
      </div>
      <Container className="display">
        <img src={foxBlob} alt="fox blob gif" width="320px" />
        <h2>My Work</h2>
        <ProjectCard
          title="Brown Space Engineering PVDX App"
          img={pvdxScreenshot}
          link="https://github.com/BrownSpaceEngineering/pvdx_webapp"
          desc={
            "Led Ground Software team of Brown Space Engineering to develop a mobile app in React to interface with our cube satellite"
          }
          skills={"React, TypeScript, Expo, Product Management"}
        />
        <ProjectCard
          title="Responsive Redesign"
          img={redesignScreenshot}
          link="https://vibingcat217.github.io/responsive-redesign/"
          desc={
            "A website redesign for Johnny Burrito, a place I frequented during my investment banking internship in Charlotte. I removed unnecessary tabs and redundant links and addressed overall usability and accessibility issues"
          }
          skills={"React, Figma, Balsamiq, UI/UX"}
        />

        <ProjectCard
          title="Iterative Design"
          img={iterativeScreenshot}
          link="https://jumpylemur431.github.io/iterative-design/"
          desc={
            "Interactive interface design for Discz, a music discovery social media platform from Y Combinator. I worked in a group to prototype the app, making sure to align with the original mission and taking inspriation from Tinder and other music apps. We also received critiques on our design and assembled a list of potential changes based on the feedback."
          }
          skills={"Figma, Balsamiq, Product Design"}
        />

        <ProjectCard
          title="Development"
          img={developmentScreenshot}
          caption="Rainbow Six Siege Shop"
          link="https://vibingcat217.github.io/development/"
          desc={
            "An interface mirroring a shopping system that allows Rainbow Six Siege players to calculate how much Renown (in-game currency) they need to purchase their desired operators. Players can filter by various metrics and optimize their Renown spending by carefully choosing which combination of characters they would like to purchase and working towards the total cost."
          }
          skills={"React"}
        />
      </Container>
    </div>
  );
}

export default Projects;
