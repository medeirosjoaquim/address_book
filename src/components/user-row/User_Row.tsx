import React, {useContext, useState} from 'react';
import {MainContext} from '../../context/app.context';

import {IUser} from '../../models/user.model';
import UserCardModal from '../user-card-modal/User_Card_Modal';
import './user-row.scss';

const UserRow = ({name, location, picture, email, dob, login, phone, nat}: IUser) => {
  const [showModal, setShowModal] = useState(false);
  const [appContext, setAppContext] = useContext(MainContext);
  const handleModalCallback = (val: any) => {
    setShowModal(false);
  };

  const handleDetails = () => {
    setAppContext({...appContext, userDetails: {name, location, nat, dob, login, phone, picture, email}});
    setShowModal(true);
  };

  return (
    <>
      <div className="user-row--container flex-grid" onClick={handleDetails}>
        <div className="avatar">
          <img src={picture.thumbnail} alt={name.first + ' ' + name.last + ' ' + 'profile picture'} />
        </div>
        <div className="col-2 user-row--container-info">
          <div className="name--info">
            <div data-testid="user-name">{name.first + ' ' + name.last}</div>
          </div>
          <div className="mail--info mb-1">
            <div>{email}</div>
          </div>
          <div className="location--info">
            <div>
              <span>{location.city} -</span>
              <span data-testid="user-row-country">{location.country}</span>
            </div>
          </div>
        </div>
      </div>
      {showModal && <UserCardModal handleShowModal={handleModalCallback} showModal={showModal} />}
    </>
  );
};

export default UserRow;
