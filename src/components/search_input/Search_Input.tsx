import React from 'react';
import './search-input.scss';
function SearchInput() {
  return (
    <div className="search-input--container column">
      <input placeholder="Search" id="search-input" />
    </div>
  );
}

export default SearchInput;
