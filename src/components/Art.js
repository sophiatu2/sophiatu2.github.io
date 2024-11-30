import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bees from "../assets/artwork/Bee Vision 2018 -- Oil on Canvas with Wood Structure -- 28in x 24in.jpg";
import news from "../assets/artwork/From Different Perspectives 2017 -- Charcoal on Paper -- 48in x 66in.jpg";
import tiger from "../assets/artwork/Furious 2017 -- Ink on Paper -- 5.5 x 8.5in.jpg";
import telescope from "../assets/artwork/Looking into the Future 2017 -- Pastel and Ink on Paper with Paper Collage -- 18in x 22in.jpg";
import mirror from "../assets/artwork/Mirror Image 2018 -- Pastel, Acrylic, and Watercolor on Paper with Collage -- 24in x 19in.png";
import city from "../assets/artwork/My City 2018 -- Charcoal and Pastel on Paper -- 48in x 24in.jpg";
import phone from "../assets/artwork/Phone Dollhouse 2018 -- Acrylic on Cardboard and Transparent Film with Air-dry Clay -- 9in x 18in.jpeg";
import self from "../assets/artwork/Self Reflection 2018 -- Pastel on Paper -- 19in x 24in.jpg";
import flight from "../assets/artwork/Taking Flight 2017 -- Charcoal on Paper with Origami -- 30in x 30in.jpg";
import stilllife from "../assets/artwork/Childhood and Adulthood 2017 -- Charcoal and Pastel on Paper -- 24in x 19in.JPG";
import gift from "../assets/artwork/Gift 2018 -- Ink on Paper -- 6in x 8 in.JPG";

const artworks = [
  {
    src: bees,
    alt: "Bee Vision 2018 - Oil on Canvas with Wood Structure",
    caption:
      "Bee Vision 2018 -- Oil on Canvas with Wood Structure -- 28in x 24in",
  },
  {
    src: city,
    alt: "My City 2018 - Charcoal and Pastel on Paper",
    caption: "My City 2018 -- Charcoal and Pastel on Paper -- 48in x 24in",
  },
  {
    src: phone,
    alt: "Phone Dollhouse 2018 - Acrylic on Cardboard and Transparent Film with Air-dry Clay",
    caption:
      "Phone Dollhouse 2018 -- Acrylic on Cardboard and Transparent Film with Air-dry Clay -- 9in x 18in",
  },
  {
    src: mirror,
    alt: "Mirror Image 2018 - Pastel, Acrylic, and Watercolor on Paper with Collage",
    caption:
      "Mirror Image 2018 -- Pastel, Acrylic, and Watercolor on Paper with Collage -- 24in x 19in",
  },
  {
    src: self,
    alt: "Self Reflection 2018 - Pastel on Paper",
    caption: "Self Reflection 2018 -- Pastel on Paper -- 19in x 24in",
  },
  {
    src: gift,
    alt: "Gift 2018 - Ink on Paper",
    caption: "Gift 2018 -- Ink on Paper -- 6in x 8 in",
  },
  {
    src: flight,
    alt: "Taking Flight 2017 - Charcoal on Paper with Origami",
    caption:
      "Taking Flight 2017 -- Charcoal on Paper with Origami -- 30in x 30in",
  },
  {
    src: stilllife,
    alt: "Childhood and Adulthood 2017 - Charcoal and Pastel on Paper",
    caption:
      "Childhood and Adulthood 2017 -- Charcoal and Pastel on Paper -- 24in x 19in",
  },
  {
    src: news,
    alt: "From Different Perspectives 2017 - Charcoal on Paper",
    caption:
      "From Different Perspectives 2017 -- Charcoal on Paper -- 48in x 66in",
  },
  {
    src: tiger,
    alt: "Furious 2017 - Ink on Paper",
    caption: "Furious 2017 -- Ink on Paper -- 5.5 x 8.5in",
  },
  {
    src: telescope,
    alt: "Looking into the Future 2017 - Pastel and Ink on Paper with Paper Collage",
    caption:
      "Looking into the Future 2017 -- Pastel and Ink on Paper with Paper Collage -- 18in x 22in",
  },
];

function Art() {
  return (
    <Container className="section">
      <h1 style={{ marginBottom: "24px" }}>Art Portfolio</h1>
      <Row>
        {artworks.map((artwork, index) => (
          <Col key={index} md={4} className="mb-4">
            <div className="art-card">
              <img src={artwork.src} alt={artwork.alt} className="art-image" />
              <div className="art-caption">{artwork.caption}</div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Art;
