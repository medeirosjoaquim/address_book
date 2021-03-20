import React from 'react';
import './users-list.scss';
import {useFetch} from '../../hooks/useFetch';
import { baseUrl } from '../../consts/baseUrl';

const UsersList = () => {

  const res = useFetch(baseUrl, {});
  
  if (res?.isLoading) {
    return <div>Loading...</div>;
  } else {
    console.log(res);
    return (
      <div>
            {/* <img height='300' src={imageUrl} alt="avatar" /> */}
      </div>
    );  
  }
};

export default UsersList;
