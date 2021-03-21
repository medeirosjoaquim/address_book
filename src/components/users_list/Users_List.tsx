import React from 'react';
import './users-list.scss';
import { useFetch } from '../../hooks/useFetch';
import { baseUrl } from '../../consts/baseUrl';
import { IUser } from '../../models/user.model';
import UserRow from '../user-row/user-row';

// TODO: use react-virtualized to render list

const UsersList = () => {

  const { status, data, error } = useFetch<{info: {}, results: IUser[]}>(baseUrl())  

 console.log(status, data, error)
    if (status === 'fetched') {
      return (
        <div className="users-list--container">
          {/* <span>{status}</span> */}
          {data.results.map((user) => 
            <UserRow key={user.login.uuid}
            name={user.name} 
                     location={user.location}
                     picture={user.picture}/>)
          }
  
        </div>
      );  
    } else {
      return (
        <div>loading</div>
      )
    }

  };

export default UsersList;
