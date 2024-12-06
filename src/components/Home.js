import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import foxblob from "../assets/foxblob.gif";
import me from "../assets/artwork/210613_me.png";
import pvdx from "../assets/screenshots/pvdx_figma.png";
import city from "../assets/artwork/My City 2018 -- Charcoal and Pastel on Paper -- 48in x 24in.jpg";
import "../index.css";

function Home() {
  return (
    <Container className="page">
      <Row className="section">
        <Col md={8}>
          <h1>Hi, I'm Sophia :)</h1>
          <p className="home-body">
            Welcome to my website!
            <br />
            <br />
            Explore to your heart's content
          </p>
        </Col>
        <Col md={4} className="avatar">
          <img src={foxblob} className="img-fluid" alt="fox gif" />
        </Col>
      </Row>
      <div className="button-container">
        <Link to="/about" className="image-link">
          <button
            class="image-button"
            style={{ backgroundImage: `url(${me})` }}
          >
            <span>About Me</span>
          </button>
        </Link>
        <Link to="/projects" className="image-link">
          <button
            href="/projects"
            class="image-button"
            style={{
              backgroundImage: `url(${pvdx})`,
            }}
          >
            <span>Projects</span>
          </button>
        </Link>
        <Link to="/art" className="image-link">
          <button
            href="/art"
            class="image-button"
            style={{
              backgroundImage: `url(${city.replace(/ /g, "%20")})`,
            }}
          >
            <span>Art</span>
          </button>
        </Link>
      </div>
      <Row className="section">
        <Col md={12}>
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
