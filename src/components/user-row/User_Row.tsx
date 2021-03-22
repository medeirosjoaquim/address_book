import React, { useContext, useState } from 'react';
import { MainContext } from '../../context/app.context';

import { IUser } from '../../models/user.model';
import UserCardModal from '../user-card-modal/User_Card_Modal';
import './user-row.scss';


const UserRow = ({ name,
  location,
  picture,
  email,
  dob,
  login,
  phone
}: IUser) => {
  const [showModal, setShowModal] = useState(false)
  const [appContext, setAppContext] = useContext(MainContext);
  const handleModalCallback = (val: any) => {
    setShowModal(false)
  }

  const handleDetails = () => {
    setAppContext({ ...appContext, userDetails: { name, location, dob, login, phone, picture, email } })
    setShowModal(true)
  }

  return (
    <>
      <div className="user-row--container flex-grid"
        onClick={handleDetails} 
        //onClick={() => setShowModal(true)} 
        
        >
        <div className="col-1 avatar">
          <img src={picture.thumbnail} alt="" />
        </div>
        <div className="col-2 user-row--container-info">
          <div className="name--info">
            <span>{name.first + ' ' + name.last}</span>
            <span>{email}</span>
          </div>
          <div className="location--info">
            <div>
              <span>{location.city} - {location.country}</span>
            </div>
          </div>
        </div>
      </div>
      {showModal && <UserCardModal handleShowModal={handleModalCallback} showModal={showModal} />}
    </>
  );
};

export default UserRow;
