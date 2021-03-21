import React from 'react';
import {IUser} from '../models/user.model';

const UserRow = ({name: {first}  , location, picture}: IUser) => {
  return (
    <div>
      <span>{first}</span>
      <span>{location.city}</span>
      <img src={picture.thumbnail} alt="" />
    </div>
  );
};

export default UserRow;
