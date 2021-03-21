import React, { useContext } from 'react';
import SearchComponent from '../search_component/Search_Component';
import './navbar.scss';

import {FaCog} from 'react-icons/fa';
import { MainContext } from '../../context/app.context';

const Navbar = () => {
  const [appContext, setAppContext] = useContext(MainContext)
  return (
    <div className="navbar--container row">
      <SearchComponent />
      <div className="navbar--container-settings-btn"
        onClick={() => setAppContext({...appContext, showSettings: !appContext.showSettings})}
      ><FaCog /></div>
    </div>
  );
};

export default Navbar;
