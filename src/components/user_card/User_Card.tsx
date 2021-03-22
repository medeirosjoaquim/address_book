import React, { useContext } from 'react';
import {FaTimes} from 'react-icons/fa';
import { MainContext } from '../../context/app.context';

import './user-card.scss';

const UserCard = () => {
  const [appContext] = useContext(MainContext);
  console.log(appContext.userDetails)
  return (
    < div className="user-card--container">
      <FaTimes style={{float: 'right', fontSize: '1.5rem'}}/>
      <h1>user card works</h1>
      <pre>{JSON.stringify(appContext.userDetails)}</pre>
    </div>
  );
};

export default UserCard;
