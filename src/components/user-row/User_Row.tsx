import React, { useState } from 'react';

import { IUser } from '../../models/user.model';
import UserCardModal from '../user-card-modal/User_Card_Modal';
import './user-row.scss';


const UserRow = ({ name: { first, last },
  location,
  picture,
  email,
  dob,
  login,
  phone
}: IUser) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="user-row--container flex-grid" 
      onClick={() => setShowModal(true)} >
        <div className="col-1 avatar">
          <img src={picture.thumbnail} alt="" />
        </div>
        <div className="col-2 user-row--container-info">
          <div className="name--info">
            <span>{first + ' ' + last + ' - '}</span>
            <span>{email}</span>
          </div>
          <div className="location--info">
            <div>
              {location.city} - {location.country}
            </div>
            <div>
              {location.street.name}, {location.street.number}
            </div>
          </div>
        </div>
      </div>
      <UserCardModal showModal={showModal} />
    </>
  );
};

export default UserRow;
