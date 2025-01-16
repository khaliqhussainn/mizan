import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./Sidebar.css";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <div className="input-group">
        <span className="input-left-element">
          <BsSearch color="gray" />
        </span>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="What are you looking for?"
          className="search-input"
        />
      </div>
    </div>
  );
}

export default SearchBar;
