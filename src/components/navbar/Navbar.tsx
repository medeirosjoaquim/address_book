import React, { useContext } from 'react';
import SearchComponent from '../search_component/Search_Component';
import './navbar.scss';

import {FaCog} from 'react-icons/fa';
import { MainContext } from '../../context/app.context';

const Navbar = () => {

  const [appContext, setAppContext] = useContext(MainContext)

  const handleClose = (e?: MouseEvent) => {
    const element = e.target as HTMLElement
    if (element?.classList?.value.includes('overlay')) {
      document.removeEventListener('click', handleClose);
      setAppContext({...appContext, showSettings: false});
    }
  }

  return (
    <div className="navbar--container row">
      <SearchComponent />
      <div className="navbar--container-settings-btn"
        onClick={ () => {document.addEventListener('click', e => handleClose(e) ), setAppContext({...appContext, showSettings: !appContext.showSettings})}}
      ><FaCog id="cog-icon" style={{color: !appContext.showSettings ? '#99cbeb' : '#bf1140'}}/></div>
    </div>
  );
};

export default Navbar;
