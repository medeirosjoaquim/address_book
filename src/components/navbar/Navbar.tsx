import React from 'react';
import SearchInput from '../search_input/Search_Input';
import './navbar.scss';
const Navbar = () => {
  return (
    <div className="navbar--container">
      <SearchInput />
    </div>
  );
};

export default Navbar;
