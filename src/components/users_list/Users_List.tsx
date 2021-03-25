import React, { useContext, useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

import './users-list.scss';
import { baseUrl } from '../../consts/baseUrl';
import UserRow from '../user-row/User_Row';
import { MainContext } from '../../context/app.context';
import { filterNationality, filterSearch } from '../../helpers/filters.helpers';
import { useKeyPress } from '../../hooks/useKeypress';
import axios from 'axios';

// TODO: use react-virtualized to render list

const UsersList = () => {
  const [appContext, _] = useContext(MainContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(baseUrl)
      .then(response =>  setData(response.data))
      .catch(err => { console.log(err)});
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

  if (data?.results) {
    let users = filterNationality(data?.results, appContext.filterNationality);
    users = filterSearch(users, appContext.searchText, appContext.searchKey);
    return (
      <div className="users-list--container" data-testid="users-list" id="users-list">
        <div className="users-list--container--heading"><h1>Users List</h1></div>
        {users.map(user => (
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
        ))}
        <div className="fab-btn" onClick={() => scrollUp()}>
          <FaArrowUp />
        </div>
      </div>
    );
  } else {
    return (
      <div className="users-list--container" data-testid="users-list" id="users-list">
        <h1>loading...</h1>
      </div>
    );
  }
};

export default UsersList;
