import React from 'react';
import SearchComponent from '../search_component/Search_Component';
import Settings from '../settings/Settings';
import './navbar.scss';
const Navbar = () => {
  return (
    <div className="navbar--container row">
      <SearchComponent />
      <Settings />
    </div>
  );
};

export default Navbar;
