import React from "react";
import { useState } from "react";
import Filter from "./Filter";
import { FaReact, FaPython } from "react-icons/fa";
import { RiFileExcel2Fill } from "react-icons/ri";
import { FiFigma } from "react-icons/fi";
import { SiPowerbi, SiJavascript, SiTensorflow } from "react-icons/si";

export default function TimelineFilter({ data, setFilteredItems }) {
  const categoriesArr = [
    { id: 1, name: "Python", icon: <FaPython /> },
    { id: 2, name: "TensorFlow", icon: <SiTensorflow /> },
    { id: 3, name: "React", icon: <FaReact /> },
    { id: 4, name: "PowerBI", icon: <SiPowerbi /> },
    { id: 5, name: "Microsoft Excel", icon: <RiFileExcel2Fill /> },
    { id: 6, name: "Javascript", icon: <SiJavascript /> },
    { id: 7, name: "Figma", icon: <FiFigma /> },
  ];

  const sortByOptions = [
    { label: "Start Date", value: "startyear" },
    { label: "End Date", value: "endyear" },
    { label: "Duration", value: "duration" },
  ];

  const [sortBy, setSortBy] = useState("startyear");
  const [sortOrder, setSortOrder] = useState("asc");

  const sortByMethod = (filteredData, sortOrder) => {
    // Sorting by start year
    if (sortBy === "startyear") {
      filteredData.sort(
        (a, b) =>
          (new Date(a.startDate) - new Date(b.startDate)) *
          (sortOrder === "asc" ? 1 : -1)
      );
    }
    // Sorting by end year
    if (sortBy === "endyear") {
      filteredData.sort(
        (a, b) =>
          (new Date(a.endDate) - new Date(b.endDate)) *
          (sortOrder === "asc" ? 1 : -1)
      );
    }
    // Sorting by duration (endDate - startDate)
    if (sortBy === "duration") {
      filteredData.sort((a, b) => {
        const durationA = new Date(a.endDate) - new Date(a.startDate);
        const durationB = new Date(b.endDate) - new Date(b.startDate);
        return (durationA - durationB) * (sortOrder === "asc" ? 1 : -1);
      });
    }
  };

  const defaultFilters = categoriesArr.map((li) => li.name);
  const defaultChecked = categoriesArr.map((li) => li.id);

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
