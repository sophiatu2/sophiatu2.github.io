import React from "react";
import TimelineCard from "./TimelineCard";
import eyp from "../assets/logos/eyp.png";
import inspiritai from "../assets/logos/inspiritai.png";
import bse from "../assets/logos/bse.png";
import wb from "../assets/logos/williamblair.png";
import brown from "../assets/logos/brown.png";
import juni from "../assets/logos/juni.webp";
import playgameworks from "../assets/logos/playgameworks.png";
import aigo from "../assets/logos/aigo.png";

function Timeline() {
  const experiences = [
    {
      company: "EY-Parthenon",
      role: "Associate - Software Strategy Group",
      logo: eyp,
      dateRange: "Feb 2024 - Present",
      side: "right",
    },
    {
      company: "Inspirit AI",
      role: "Instructor",
      logo: inspiritai,
      dateRange: "Jul 2023 - Jan 2024",
      side: "left",
    },
    {
      company: "Brown Space Engineering",
      role: "Ground Software Lead",
      logo: bse,
      dateRange: "Sep 2020 - May 2023",
      side: "right",
    },
    {
      company: "William Blair",
      role: "Investment Banking Summer Analyst",
      logo: wb,
      dateRange: "Jun 2022 - Aug 2022",
      side: "left",
    },
    {
      company: "AiGoLearning",
      role: "Teacher",
      logo: aigo,
      dateRange: "Jul 2020 - Jan 2022",
      side: "right",
    },
    {
      company: "Brown University",
      role: "Head Teaching Assistant",
      logo: brown,
      dateRange: "Mar 2021 - Dec 2021",
      side: "left",
    },
    {
      company: "Juni Learning",
      role: "Instructor",
      logo: juni,
      dateRange: "Jan 2021 - Apr 2021",
      side: "right",
    },
    {
      company: "Play Gameworks",
      role: "Full Stack Engineer",
      logo: playgameworks,
      dateRange: "Dec 2020 - Jan 2021",
      side: "left",
    },
  ];

  return (
    <div className="timeline">
      {experiences.map((exp, index) => (
        <TimelineCard key={index} {...exp} />
      ))}
    </div>
  );
}

export default Timeline;
