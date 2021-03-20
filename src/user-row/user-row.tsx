import React from 'react';
import {IUser} from '../models/user.model';

const UserRow = (user: IUser) => {
  return (
    <div>
      <span>{user.id}</span>
      <span>{user.name}</span>
      <span>{user.cell}</span>
      <span>{user.location.city}</span>
      <img src={user.picture.thumbnail} alt="" />
    </div>
  );
};

export default UserRow;
