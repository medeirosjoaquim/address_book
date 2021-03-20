import React from 'react';
import './users-list.scss';
import {useFetch} from '../../hooks/useFetch';

const UsersList = () => {
  const res = useFetch('https://dog.ceo/api/breeds/image/random', {});
  if (!res.response) {
    return <div>Loading...</div>;
  }
  const dogName = res.response.status;
  const imageUrl = res.response.message;

  return (
    <div>
      <div>
        <h3>{dogName}</h3>
        <div>
          <img src={imageUrl} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default UsersList;
