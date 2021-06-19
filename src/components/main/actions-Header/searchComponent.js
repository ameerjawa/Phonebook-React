import React from "react";
import "../../Css/Searchcomponent.css";

function SearchComponent(props) {
  const searchfunction = (name) => {
    props.searchbyname(name);
  };

  return (
    <li>
      <input
        id="searchbar"
        onChange={(e) => searchfunction(e.target.value)}
        className="searchbar"
        placeholder="search"
      />
    </li>
  );
}

export default SearchComponent;
