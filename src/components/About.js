import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";
import Timeline from "./Timeline";
import pdf from "../assets/resume.pdf";
import brown from "../assets/logos/brown.png";

function About() {
  return (
    <Container fluid className="page">
      <div className="about-section">
        <h1>About Me</h1>
        <p>
          I graduated as a Computer Science-Eocnomics major from Brown
          Unviersity, specializing in AI/ML and cybersecurity. I have experience
          as a full stack developer, a computer science instructor, and
          investment banking analyst. Now, I am a strategy consultant at
          EY-Parthenon, specializing in due diligence of software-enabled
          companies.
        </p>
        <p>
          I love outdoor activities, including skiing, snowboarding, scuba
          diving, and hiking. I'm running my first marathon next year and hoping
          to run many more. I also dabble in art and music in my free time
          <Link to="/art" className="about-link">
            {" "}
            (check it out here)
          </Link>
          .
        </p>
      </div>
      <h1>Experience</h1>
      <button className="custom-button" href={pdf} download>
        <AiOutlineDownload />
        &nbsp;Download Resume
      </button>
      <Timeline />
      <div className="timeline-brown">
        <div className="timeline-content">
          <img src={brown} alt="Company Logo" className="company-logo" />
          <div className="timeline-text">
            <h3>Student</h3>
            <h4>Brown University</h4>
            <p>Sep 2019 - May 2023</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default About;
