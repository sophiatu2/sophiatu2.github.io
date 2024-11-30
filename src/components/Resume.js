import React from "react";
import { Container, Row } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../assets/resume.pdf";

function Resume() {
  return (
    <Container fluid className="section">
      {/* <Row style={{ justifyContent: "center" }}>
        <button className="custom-button" href={pdf} target="_blank">
          <AiOutlineDownload />
          &nbsp;Download Resume
        </button>
      </Row> */}
    </Container>
  );
}

export default Resume;
