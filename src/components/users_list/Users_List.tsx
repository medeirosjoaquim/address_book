import React, { useContext, useEffect } from 'react';
import './users-list.scss';
import {useFetch} from '../../hooks/useFetch';
import {baseUrl} from '../../consts/baseUrl';
import {IUser} from '../../models/user.model';
import UserRow from '../user-row/user-row';
import { MainContext } from '../../context/app.context';
import { removeDiacritics } from '../../helpers/removeDiacritics';

// TODO: use react-virtualized to render list

const UsersList = () => {
  const [appContext, _] = useContext(MainContext)
  const {status, data} = useFetch<{info: {}; results: IUser[]}>(baseUrl(), {params: {nat: ''}});
  
  const filterNationality = (users: IUser[], natArray: string[]): IUser[] => {
    if (natArray.length > 0) {
      return users.filter(user => natArray.includes(user.nat))
    } else {
      return users;
    }
  }

  const filterSearch = (users: IUser[], searchText: string, searchKey = 'name'): IUser[] => {
    searchText = removeDiacritics(searchText.toLowerCase())
    if (searchText.length < 1) {
      return users
    } else {
      switch (searchKey) {
        case 'name':
          return users.filter(user => removeDiacritics(user.name.first.toLowerCase()).includes(searchText) 
          || removeDiacritics(user.name.last.toLowerCase()).includes(searchText))
        case 'address':
          return users.filter(user => 
            removeDiacritics(user.location.street.name.toLowerCase()).includes(searchText) 
          || removeDiacritics(user.location.city.toLowerCase()).includes(searchText)
          || removeDiacritics(user.location.state.toLowerCase()).includes(searchText)
          || removeDiacritics(user.location.country.toLowerCase()).includes(searchText)
          ) 
        case 'email':
          return users.filter(user => removeDiacritics(user.email.toLowerCase()).includes(searchText))                    
        default:
          break;
      }
      return users.filter( user => user[searchKey as keyof IUser] === searchText)
    }
  }


  if (status === 'fetched') {
    let users = filterNationality(data.results,  appContext.filterNationality)
    users = filterSearch(users, appContext.searchText, appContext.searchKey)
    return (
      <div className="users-list--container">
        {users.map(user => (
          <UserRow key={user.login.uuid} name={user.name} email={user.email} location={user.location} picture={user.picture} />
        ))}
      </div>
    );
  } else {
    return <div className="users-list--container"><h1>loading...</h1></div>;
  }
};

export default UsersList;
