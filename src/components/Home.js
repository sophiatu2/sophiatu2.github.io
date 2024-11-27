import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import foxblob from "../assets/foxblob.gif";
import "../index.css";
import "./Home.css";

function Home() {
  return (
    <Container className="section">
      <Row>
        <Col md={8} className="title">
          <h1>Hi :)</h1>
          <p className="home-body">
            WOoooooOOOOOOoOOOoOo
            <br />
            WOOOOOOOOAOAOOAOAHAHAHHHHh
            <br />
            BRRRRRrrrrrrrrrr
          </p>
        </Col>
        <Col md={4} className="avatar">
          <img src={foxblob} className="img-fluid" alt="fox gif" />
        </Col>
      </Row>
      <Row>
        <Col md={12} className="title">
          <h1>Feel free to connect</h1>
          <ul className="home-social">
            <li className="social-icons">
              <a
                href="https://github.com/sophiatu2"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-color home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/sophiatu/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-color home-social-icons"
              >
                <AiFillLinkedin />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
