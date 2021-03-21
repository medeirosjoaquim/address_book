import React from 'react';
import SearchComponent from '../search_component/Search_Component';
import './navbar.scss';

import {FaCog} from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar--container row">
      <SearchComponent />
      <div className="navbar--container-settings-btn"><FaCog /></div>
    </div>
  );
};

export default Navbar;
