import React from 'react';
import './users-list.scss';
import {useFetch} from '../../hooks/useFetch';

const UsersList = () => {
  const res = useFetch('https://dog.ceo/api/breeds/image/random', {});
  if (!res.response) {
    return <div>Loading...</div>;
  }
  const imageUrl = res.response.message;
  return (
    <div>
      <div>
        <div>
          <img height='300' src={imageUrl} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default UsersList;
