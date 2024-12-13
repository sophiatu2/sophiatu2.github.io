import React from "react";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import TimelineCard from "./TimelineCard";
import Filters from "./Filters";

// Logos
import eyp from "../assets/logos/eyp.png";
import inspiritai from "../assets/logos/inspiritai.png";
import bse from "../assets/logos/bse.png";
import wb from "../assets/logos/williamblair.png";
import brown from "../assets/logos/brown.png";
import juni from "../assets/logos/juni.webp";
import playgameworks from "../assets/logos/playgameworks.png";
import aigo from "../assets/logos/aigo.png";
import experienceData from "../assets/experiences.json";

function Timeline() {
  const logos = {
    eyp,
    inspiritai,
    bse,
    wb,
    aigo,
    brown,
    juni,
    playgameworks,
  };

  const experiences = experienceData.map((item) => ({
    ...item,
    logo: logos[item.logo],
  }));

  const [filteredItems, setFilteredItems] = useState(experienceData);

  return (
    <div className="section">
      <div style={{ marginTop: "2rem" }}>
        Filter / Sort <AiFillCaretDown />
      </div>
      <Filters data={experiences} setFilteredItems={setFilteredItems} />
      <div className="timeline">
        {filteredItems.map((item, index) => (
          <TimelineCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
