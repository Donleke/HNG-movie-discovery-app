import React from "react";
import { FiSearch } from "react-icons/fi";

function SearchBar() {
  return (
    <form>
      <div className="position-relative">
        <input type="text" placeholder="What do you want to watch?" />

        <div className="position-absolute searchdiv">
          <FiSearch size={20} color="white" />
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
