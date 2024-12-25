import React, { useState, useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";

export default function Filter({
  data,
  setFilteredItems,
  categoriesArr,
  defaultFilters,
  defaultChecked,
  sortByOptions,
  sortByMethod,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
}) {
  const [currFilters, setFilters] = useState(defaultFilters);
  const [isChecked, setIsChecked] = useState(defaultChecked);

  // Handles changes in filter categories
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

  // Select / deselect all filters
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

  // Sorting options
  const changeSort = (newSort) => {
    setSortBy(newSort);
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Filter and Sort Logic with useEffect
  useEffect(() => {
    let filteredData = data.filter((item) =>
      currFilters.some((filter) => item.skills.includes(filter))
    );

    // Sorting logic
    if (sortBy === "year") {
      filteredData.sort(
        (a, b) =>
          (new Date(a.year) - new Date(b.year)) * (sortOrder === "asc" ? 1 : -1)
      );
    } else if (sortByMethod) {
      // Custom sorting based on sortByMethod
      sortByMethod(filteredData, sortOrder);
    }

    setFilteredItems(filteredData);
  }, [data, sortBy, sortOrder, currFilters, setFilteredItems, sortByMethod]);

  return (
    <div className="filters">
      <div style={{ marginTop: "1rem" }}>
        Filter / Sort <AiFillCaretDown />
      </div>
      <form>
        <div className="buttons-container">
          {categoriesArr.map((item) => (
            <div className="cat-button" key={item.id}>
              <label>
                <input
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
      <div className="buttons-container">
        <select
          onChange={(e) => changeSort(e.target.value)}
          className="filter-button"
          aria-label="Sort By"
        >
          {sortByOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <button className="filter-button" onClick={toggleSortOrder}>
          Order: {sortOrder === "asc" ? "Ascending" : "Descending"}
        </button>
        <button className="filter-button" onClick={selectAll}>
          Select All
        </button>
        <button className="filter-button" onClick={selectNone}>
          Deselect All
        </button>
      </div>
    </div>
  );
}
