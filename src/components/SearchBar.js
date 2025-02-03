import React from "react";

function SearchBar({ handleInputChange, handleSearch, input }) {
  return (
    <>
      <input
        value={input}
        onChange={handleInputChange}
        placeholder="Enter City"
      />
      <button onClick={handleSearch}>Search</button>
    </>
  );
}

export default SearchBar;
