import React from 'react';
import './users-list.scss';
import { useFetch } from '../../hooks/useFetch';
import { baseUrl } from '../../consts/baseUrl';
import { IUser } from '../../models/user.model';


const UsersList = () => {

  const { status, data, error } = useFetch<{info: {}, results: IUser[]}>(baseUrl)  

 console.log(status, data, error)
    if (status === 'fetched') {
      return (
        <div>
          <span>{status}</span>
          {data.results.map((user,i) => 
              <span style={{display: "block"}} key={user.login.uuid}>{i +1}) {user.name.first}</span>
            )
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
