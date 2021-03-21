import React from 'react';
import {IUser} from '../../models/user.model';
import './user-row.scss';
const UserRow = ({name: {first, last}, location, picture}: IUser) => {
  return (
    <div className="user-row--container flex-grid">
      {/* <span>{first}</span>
        <span>{location.city}</span> */}
      <div className="col-1">
        <img className="avatar" src={picture.thumbnail} alt="" />
      </div>
      <div className="col-2">
        <div className="name--info">
          <span>{first + ' ' + last}</span>
        </div>
        <div className="location--info">
          <span>
            {location.city} - {location.country}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserRow;
