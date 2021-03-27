import React, { useContext, useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

import './users-list.scss';
import { baseUrl } from '../../consts/baseUrl';
import UserRow from '../user-row/User_Row';
import { MainContext } from '../../context/app.context';
import { filterNationality, filterSearch } from '../../helpers/filters.helpers';
import { useKeyPress } from '../../hooks/useKeypress';
import axios from 'axios';
import { IUser } from '../../models/user.model';
import { act } from '@testing-library/react';

// TODO: use react-virtualized to render list

const UsersList = () => {
  type RequestStatus = 'fetching' | 'fetched' | 'error';
  const [appContext, _] = useContext(MainContext);
  const [data, setData] = useState<{ info: {}; results: IUser[] }>(null);
  const [requestStatus, setRequestStatus] = useState<RequestStatus>(null);

  useEffect(() => {
    let mounted = true;
    setRequestStatus('fetching');
    axios
      .get(baseUrl)
      .then(response => {
        if (mounted) {
          setData(response.data);
          setRequestStatus('fetched');
        }
      })
      .catch(() => {
        setRequestStatus('error');
      });
    return () => {
      mounted = false;
    };
  }, []);

  const scrollUp = () => {
    const userListDiv = document.getElementById('users-list');
    userListDiv.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const arrowDown = useKeyPress('ArrowDown');
  const arrowUp = useKeyPress('ArrowUp');

  useEffect(() => {
    if (arrowDown) {
      const userListDiv = document.getElementById('users-list');
      const yPos = userListDiv.scrollTop;
      userListDiv.scrollTo(0, yPos + 500);
    }
    if (arrowUp) {
      const userListDiv = document.getElementById('users-list');
      const yPos = userListDiv.scrollTop;
      userListDiv.scrollTo(0, yPos - 500);
    }
  }, [arrowDown, arrowUp]);
  let users = null;
  if (data) {
    users = filterNationality(data?.results, appContext.filterNationality);
    users = filterSearch(users, appContext.searchText, appContext.searchKey)
      .sort((a, b) => {
        if (a.name.first === b.name.first) {
          return a.name.last > b.name.last ? 1 : -1
        }
        return a.name.first > b.name.first ? 1 : -1
      }
      );
  }

  // if (a.city === b.city) {
  //    Price is only important when cities are the same
  //  return b.price - a.price;
  // }
  return (
    <>
      {requestStatus === 'error' && (
        <div className="users-list--container" data-testid="users-list" id="users-list">
          <h1>There was an error loading the users list. Try again in a few minutes please😊</h1>
        </div>
      )}

      {requestStatus === 'fetched' && (
        <div className="users-list--container" data-testid="users-list" id="users-list">
          <div className="users-list--container--heading">
            <h1>Users List</h1>
          </div>
          { (users.length > 0) ? users.map(user => (
            <UserRow
              key={user.login.uuid}
              name={user.name}
              email={user.email}
              dob={user.dob}
              phone={user.phone}
              login={user.login}
              location={user.location}
              nat={user.nat}
              picture={user.picture}
            />
          )) : <div><h2>No users match your request.</h2></div>}
          <div className="fab-btn" onClick={() => scrollUp()}>
            <FaArrowUp />
          </div>
        </div>
      )}
      {requestStatus === 'fetching' && (
        <div className="users-list--container" data-testid="users-list" id="users-list">
          <h1>Loading users list...</h1>
        </div>
      )}

    </>
  );
};

export default UsersList;
