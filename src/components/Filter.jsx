import React from "react";

const Filter = ({ search, setSearch }) => {
  return (
    <div>
      <label htmlFor="site-search">Search your robot:</label>
      <input
        type="search"
        id="site-search"
        name="q"
        placeholder="Type the name of your robot"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      ></input>{" "}
    </div>
  );
};

export default Filter;
