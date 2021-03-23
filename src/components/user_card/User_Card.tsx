import React, { useContext } from 'react';
import {FaTimes} from 'react-icons/fa';
import { MainContext } from '../../context/app.context';

import './user-card.scss';

const UserCard = () => {
  const [appContext] = useContext(MainContext);
  console.log(appContext.userDetails)
  return (
    < div className="user-card--container">
      <FaTimes className="user-card--container-close-btn"/>
      <h1>user card works</h1>
      <div className="user-card--container--info">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default UserCard;
