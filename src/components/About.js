import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";
import { FaReact, FaPython, FaDocker } from "react-icons/fa";
import { RiFileExcel2Fill } from "react-icons/ri";
import { SiPowerbi, SiMysql } from "react-icons/si";
import Timeline from "./Timeline";
import pdf from "../assets/resume.pdf";

function About() {
  return (
    <Container fluid className="page">
      <Row className="about-section">
        <Col md={6} className="about-column">
          <h1>About Me</h1>
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
          <h1>Skills</h1>
          <Row className="skills-section">
            <Col xs={4} md={3} className="skill-block">
              <FaPython className="skill-icon" />
              Python
            </Col>
            <Col xs={4} md={3} className="skill-block">
              <SiMysql className="skill-icon" />
              MySQL
            </Col>
            <Col xs={4} md={3} className="skill-block">
              <FaReact className="skill-icon" />
              React
            </Col>
            <Col xs={4} md={3} className="skill-block">
              <FaDocker className="skill-icon" />
              Docker
            </Col>
            <Col xs={4} md={3} className="skill-block">
              <RiFileExcel2Fill className="skill-icon" />
              Excel
            </Col>
            <Col xs={4} md={3} className="skill-block">
              <SiPowerbi className="skill-icon" />
              PowerBI
            </Col>
          </Row>
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
