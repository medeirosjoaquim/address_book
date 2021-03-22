import React, {useCallback, useContext, useEffect} from 'react';
import SearchComponent from '../search_component/Search_Component';
import './navbar.scss';

import {FaCog} from 'react-icons/fa';
import {MainContext} from '../../context/app.context';

const Navbar = () => {
  const [appContext, setAppContext] = useContext(MainContext);

  return (
    <div className="navbar--container row">
      <SearchComponent />
      <div className="app-overlay"  
      style={{display: appContext.showSettings ? 'block' : 'none',}}
      onClick={() => setAppContext({...appContext, showSettings: false})}></div>
      <div
        className="navbar--container-settings-btn"
        onClick={() => setAppContext({...appContext, showSettings: !appContext.showSettings})}>
        <FaCog id="cog-icon" style={{color: !appContext.showSettings ? '#99cbeb' : '#bf1140'}} />
      </div>
    </div>
  );
};

export default Navbar;
