import React, { useContext } from 'react';
import './users-list.scss';
import {useFetch} from '../../hooks/useFetch';
import {baseUrl} from '../../consts/baseUrl';
import {IUser} from '../../models/user.model';
import UserRow from '../user-row/user-row';
import { MainContext } from '../../context/app.context';

// TODO: use react-virtualized to render list

const UsersList = () => {
  const [appContext, setAppContext] = useContext(MainContext)
  const {status, data} = useFetch<{info: {}; results: IUser[]}>(baseUrl(), {params: {nat: ''}});
  
  const filterNationality = (users: IUser[], natArray: string[]): IUser[] => {
    if (natArray.length > 0) {
      return users.filter(user => natArray.includes(user.nat))
    } else {
      return users;
    }
  }

  console.log(data)
  if (status === 'fetched') {
    
    const users = filterNationality(data.results,  appContext.filterNationality)
    return (
      <div className="users-list--container">
        {/* <span>{status}</span> */}
        {users.map(user => (
          <UserRow key={user.login.uuid} name={user.name} location={user.location} picture={user.picture} />
        ))}
      </div>
    );
  } else {
    return <div className="users-list--container"><h1>loading...</h1></div>;
  }
};

export default UsersList;
