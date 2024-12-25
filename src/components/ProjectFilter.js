import React from "react";
import { useState } from "react";
import Filter from "./Filter";
import { FaReact, FaPython } from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";
import { FiFigma } from "react-icons/fi";
import { PiHeadCircuit } from "react-icons/pi";
import {
  SiJavascript,
  SiTensorflow,
  SiFlask,
  SiTypescript,
  SiGooglecloud,
} from "react-icons/si";

export default function ProjectFilter({ data, setFilteredItems }) {
  const categoriesArr = [
    { id: 1, name: "Python", icon: <FaPython /> },
    { id: 2, name: "TensorFlow", icon: <SiTensorflow /> },
    { id: 3, name: "React", icon: <FaReact /> },
    { id: 4, name: "Javascript", icon: <SiJavascript /> },
    { id: 5, name: "Figma", icon: <FiFigma /> },
    { id: 6, name: "Flask", icon: <SiFlask /> },
    { id: 7, name: "TypeScript", icon: <SiTypescript /> },
    { id: 8, name: "Google Cloud Platform", icon: <SiGooglecloud /> },
    { id: 9, name: "AI/ML", icon: <PiHeadCircuit /> },
    { id: 10, name: "UI/UX", icon: <FaChalkboardUser /> },
  ];

  const sortByOptions = [{ label: "Year", value: "year" }];

  const sortByMethod = (filteredData, sortOrder) => {
    filteredData.sort(
      (a, b) =>
        (new Date(a.year) - new Date(b.year)) * (sortOrder === "asc" ? 1 : -1)
    );
  };

  const defaultFilters = categoriesArr.map((li) => li.name);
  const defaultChecked = categoriesArr.map((li) => li.id);
  const [sortBy, setSortBy] = useState(sortByOptions[0]?.value || "default");
  const [sortOrder, setSortOrder] = useState("desc");

  return (
    <Filter
      data={data}
      setFilteredItems={setFilteredItems}
      categoriesArr={categoriesArr}
      defaultFilters={defaultFilters}
      defaultChecked={defaultChecked}
      sortByOptions={sortByOptions}
      sortByMethod={sortByMethod}
      sortBy={sortBy}
      setSortBy={setSortBy}
      sortOrder={sortOrder}
      setSortOrder={setSortOrder}
    />
  );
}
