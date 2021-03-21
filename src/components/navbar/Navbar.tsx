import React from 'react';
import SearchInput from '../search_input/Search_Input';
import Settings from '../settings/Settings';
import './navbar.scss';
const Navbar = () => {
  return (
    <div className="navbar--container row">
      <SearchInput />
      <Settings/>
    </div>
  );
};

export default Navbar;
