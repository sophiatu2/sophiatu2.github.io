import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";
import Timeline from "./Timeline";
import self from "../assets/artwork/210613_me.png";
import pdf from "../assets/resume.pdf";

function About() {
  return (
    <Container fluid className="page">
      <h1>About Me</h1>
      <Row className="about-section">
        <Col md={6} className="about-column">
          <p>
            I graduated as a Computer Science-Economics major from Brown
            Unviersity, specializing in AI/ML and cybersecurity.
          </p>
          <p>
            I have experience as a full stack developer, a computer science
            instructor, and investment banking analyst.
          </p>
          <p>
            Now, I am a strategy consultant at EY-Parthenon, specializing in due
            diligence of software-enabled companies.
          </p>
          <p>
            I love outdoor activities, including...
            <ul>
              <li className="about-activity">Skiing/snowboarding</li>
              <li className="about-activity">Scuba diving</li>
              <li className="about-activity">Hiking</li>
            </ul>{" "}
            I'm running my first marathon next year and hoping to run many more.
            I also dabble in art and music in my free time
            <Link to="/art" className="about-link">
              {" "}
              (check it out here)
            </Link>
            .
          </p>
        </Col>
        <Col md={6} className="about-column">
          <img src={self} alt="Self portrait" />
        </Col>
      </Row>
      <h1>Experience</h1>
      <button
        className="custom-button"
        style={{ marginBottom: "0" }}
        href={pdf}
        download
      >
        <AiOutlineDownload />
        &nbsp;Download Resume
      </button>
      <Row className="about-section">
        <Timeline />
      </Row>
    </Container>
  );
}

export default About;
