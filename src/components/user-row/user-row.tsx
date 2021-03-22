import React from 'react';
import {IUser} from '../../models/user.model';
import './user-row.scss';
const UserRow = ({name: {first, last},
   location, 
   picture, 
   email,
   dob,
   login,
   phone
}: IUser) => {
  return (
    <div className="user-row--container flex-grid">
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
  );
};

export default UserRow;
