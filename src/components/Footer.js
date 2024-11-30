import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "../index.css";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col xs="6" md="6" classname="footer-name">
          <h3>Sophia Tu 2024</h3>
        </Col>
        <Col xs="6" md="6" className="footer-links">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/sophiatu2"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-color"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/sophiatu/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-color"
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

export default Footer;
