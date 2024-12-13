import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FaReact, FaPython, FaDocker } from "react-icons/fa";
import { RiFileExcel2Fill } from "react-icons/ri";
import { FiFigma } from "react-icons/fi";
import { SiPowerbi, SiJavascript, SiTensorflow } from "react-icons/si";
import { useEffect, useState } from "react";

export default function Filters({ data, setFilteredItems }) {
  const categoriesArr = [
    { id: 1, name: "Python", icon: <FaPython /> },
    { id: 2, name: "TensorFlow", icon: <SiTensorflow /> },
    { id: 3, name: "React", icon: <FaReact /> },
    { id: 4, name: "PowerBI", icon: <SiPowerbi /> },
    { id: 5, name: "Microsoft Excel", icon: <RiFileExcel2Fill /> },
    { id: 6, name: "Javascript", icon: <SiJavascript /> },
    { id: 7, name: "Figma", icon: <FiFigma /> },
  ];

  let defaultFilters = categoriesArr.map((li) => li.name);
  let defaultChecked = categoriesArr.map((li) => li.id);

  const [currFilters, setFilters] = useState(defaultFilters);
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const changeFilters = (event, item) => {
    if (!event.target.checked) {
      removeChecked(item);
    } else {
      addChecked(item);
    }
  };

  function addChecked(item) {
    setFilters((prevFilters) => [...prevFilters, item.name]);
    setIsChecked((prevChecked) => [...prevChecked, item.id]);
  }

  function removeChecked(item) {
    setFilters((prevFilters) =>
      prevFilters.filter((filter) => filter !== item.name)
    );
    setIsChecked((prevChecked) => prevChecked.filter((id) => id !== item.id));
  }

  // Select / deselect all

  function selectAll(event) {
    event.preventDefault();
    setIsChecked(categoriesArr.map((category) => category.id));
    setFilters(categoriesArr.map((category) => category.name));
  }

  function selectNone(event) {
    event.preventDefault();
    setIsChecked([]);
    setFilters([]);
  }

  // Sorting
  const [sortBy, setSortBy] = useState("default");
  const [sortOrder, setSortOrder] = useState("desc");

  const changeSort = (newSort) => {
    console.log("Sorting by " + newSort);
    setSortBy(newSort);
  };

  // Toggle sort
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // useEffect
  useEffect(() => {
    let filteredData = data.filter((item) =>
      currFilters.some((filter) => item.skills.includes(filter))
    );

    if (sortBy === "startyear") {
      filteredData.sort(
        (a, b) =>
          (new Date(a.startDate) - new Date(b.startDate)) *
          (sortOrder === "asc" ? 1 : -1)
      );
    } else if (sortBy === "endyear") {
      filteredData.sort(
        (a, b) =>
          (new Date(a.endDate) - new Date(b.endDate)) *
          (sortOrder === "asc" ? 1 : -1)
      );
    } else if (sortBy === "duration") {
      filteredData.sort(
        (a, b) =>
          (new Date(a.endDate) -
            new Date(a.startDate) -
            (new Date(b.endDate) - new Date(b.startDate))) *
          (sortOrder === "asc" ? 1 : -1)
      );
    } else {
      filteredData.sort(
        (a, b) => (a.id - b.id) * (sortOrder === "asc" ? 1 : -1)
      );
    }

    setFilteredItems(filteredData);
  }, [data, sortBy, sortOrder, currFilters, setFilteredItems]);

  return (
    <div className="filters">
      <div style={{ margin: "0.5rem" }}>
        Filter / Sort <AiFillCaretDown />
      </div>
      <div>
        <select
          onChange={(e) => {
            changeSort(e.target.value);
          }}
          className="custom-button"
          aria-label="Sort By"
        >
          <option value="default">Default sort</option>
          <option value="startyear">Start date</option>
          <option value="endyear">End date</option>
          <option value="duration">Duration</option>
        </select>
        <button className="custom-button" onClick={toggleSortOrder}>
          Order: {sortOrder === "asc" ? "Ascending" : "Descending"}
        </button>
        <button className="custom-button" onClick={(event) => selectAll(event)}>
          Select All
        </button>
        <button
          className="custom-button"
          onClick={(event) => selectNone(event)}
        >
          Deselect All
        </button>
      </div>
      <form>
        <div className="buttons-container">
          {categoriesArr.map((item) => (
            <div className="cat-button">
              <label key={item.id}>
                <input
                  key={item.id}
                  type="checkbox"
                  value="1"
                  name={item.name}
                  id={item.id}
                  checked={isChecked.includes(item.id)}
                  onChange={(event) => changeFilters(event, item)}
                />
                <span>
                  {item.icon} {item.name}
                </span>
              </label>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}
