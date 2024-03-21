import React from "react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className="flex items-center border-2 p-1 rounded-lg gap-2">
      <FiSearch className="text-lg ml-1" />
      <input className="outline-none" type="text" placeholder="Search for..." />
    </div>
  );
};

export default Search;
