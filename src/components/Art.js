import React from "react";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import bees from "../assets/artwork/Bee Vision 2018 -- Oil on Canvas with Wood Structure -- 28in x 24in.jpg";
import perspective from "../assets/artwork/From Different Perspectives 2017 -- Charcoal on Paper -- 48in x 66in.jpg";
import tiger from "../assets/artwork/Furious 2017 -- Ink on Paper -- 5.5 x 8.5in.jpg";
import telescope from "../assets/artwork/Looking into the Future 2017 -- Pastel and Ink on Paper with Paper Collage -- 18in x 22in.jpg";
import mirror from "../assets/artwork/Mirror Image 2018 -- Pastel, Acrylic, and Watercolor on Paper with Collage -- 24in x 19in.png";
import city from "../assets/artwork/My City 2018 -- Charcoal and Pastel on Paper -- 48in x 24in.jpg";
import phone from "../assets/artwork/Phone Dollhouse 2018 -- Acrylic on Cardboard and Transparent Film with Air-dry Clay -- 9in x 18in.jpeg";
import self from "../assets/artwork/Self Reflection 2018 -- Pastel on Paper -- 19in x 24in.jpg";
import stilllife from "../assets/artwork/Childhood and Adulthood 2017 -- Charcoal and Pastel on Paper -- 24in x 19in.JPG";
import gift from "../assets/artwork/Gift 2018 -- Ink on Paper -- 6in x 8 in.JPG";
import pumpkin from "../assets/artwork/210912 pumpkin.png";
import bokoblin from "../assets/artwork/210809 bokoblin rider.png";
import luci from "../assets/artwork/200629 Luci -- Watercolor.png";
import bonnie from "../assets/artwork/200701 Bonnie -- Watercolor.png";
import expo from "../assets/artwork/200304 procrastination.png";

const artworks = [
  {
    src: city,
    alt: "My City 2018 - Charcoal and Pastel on Paper",
    caption: "My City 2018 - Charcoal and Pastel on Paper - 48in x 24in",
  },
  {
    src: bees,
    alt: "Bee Vision 2018 - Oil on Canvas with Wood Structure",
    caption:
      "Bee Vision 2018 - Oil on Canvas with Wood Structure - 28in x 24in",
  },
  {
    src: pumpkin,
    alt: "Mini pumpkin - Digital",
    caption: "Mini Pumpkin 2021 - Digital - 3600px x 3600px",
  },
  {
    src: bokoblin,
    alt: "Bokoblin Rider - Digital",
    caption: "Bokoblin Rider Dream 2021 - Digital - 2100px x 1500px",
  },
  {
    src: luci,
    alt: "Luci - Watercolor",
    caption: "Luci 2020 - Watercolor 9in x 12in",
  },
  {
    src: bonnie,
    alt: "Bonnie - Watercolor",
    caption: "Bonnie 2020 - Watercolor 9in x 12in",
  },
  {
    src: expo,
    alt: "Inspiration - Digital",
    caption: "Inspiration 2020 - Digital 550px x 550px",
  },
  {
    src: gift,
    alt: "Gift 2018 - Ink on Paper",
    caption: "Gift 2018 - Ink on Paper - 6in x 8 in",
  },
  {
    src: mirror,
    alt: "Mirror Image 2018 - Pastel, Acrylic, and Watercolor on Paper with Collage",
    caption:
      "Mirror Image 2018 - Pastel, Acrylic, and Watercolor on Paper with Collage - 24in x 19in",
  },
  {
    src: phone,
    alt: "Phone Dollhouse 2018 - Acrylic on Cardboard and Transparent Film with Air-dry Clay",
    caption:
      "Phone Dollhouse 2018 - Acrylic on Cardboard and Transparent Film with Air-dry Clay - 9in x 18in",
  },
  {
    src: self,
    alt: "Self Reflection 2018 - Pastel on Paper",
    caption: "Self Reflection 2018 - Pastel on Paper - 19in x 24in",
  },
  {
    src: perspective,
    alt: "From Different Perspectives 2017 - Charcoal on Paper",
    caption:
      "From Different Perspectives 2017 - Charcoal on Paper - 48in x 66in",
  },
  {
    src: stilllife,
    alt: "Childhood and Adulthood 2017 - Charcoal and Pastel on Paper",
    caption:
      "Childhood and Adulthood 2017 - Charcoal and Pastel on Paper - 24in x 19in",
  },
  {
    src: tiger,
    alt: "Furious 2017 - Ink on Paper",
    caption: "Furious 2017 - Ink on Paper - 5.5 x 8.5in",
  },
  {
    src: telescope,
    alt: "Looking into the Future 2017 - Pastel and Ink on Paper with Paper Collage",
    caption:
      "Looking into the Future 2017 - Pastel and Ink on Paper with Paper Collage - 18in x 22in",
  },
];

function Art() {
  const [expandedImg, setExpandedImg] = useState(null);

  const handleCardClick = (index) => {
    setExpandedImg(expandedImg === index ? null : index);
  };

  return (
    <div className="art-page">
      <Row>
        <h1 style={{ marginBottom: "24px" }}>Art Portfolio</h1>
      </Row>
      <Row>
        {artworks.map((artwork, index) => (
          <Col key={index} md={expandedImg === index ? 12 : 6}>
            <div
              className={`art-card ${expandedImg === index ? "expanded" : ""}`}
              onClick={() => handleCardClick(index)}
            >
              <img src={artwork.src} alt={artwork.alt} className="art-image" />
              <div className="art-caption">{artwork.caption}</div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Art;
