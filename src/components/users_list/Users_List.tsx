import React from 'react';
import './users-list.scss';
import { useFetch } from '../../hooks/useFetch';
import { baseUrl } from '../../consts/baseUrl';
import { IUser } from '../../models/user.model';
import UserRow from '../user-row/user-row';

// TODO: use react-virtualized to render list

const UsersList = () => {

  //TODO get nat from state
  const { status, data } = 
    useFetch<{info: {}, results: IUser[]}>(baseUrl(), {params: { nat: '' }})  
    
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
