import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { FaTimes } from 'react-icons/fa';
import { MainContext } from '../../context/app.context';

import './user-card.scss';

const UserCard = () => {
  const [appContext] = useContext(MainContext);
  const { name, picture, location, email, dob, login, phone, nat } = appContext.userDetails;
  return (
    <div className="user-card--container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${name.title}. ${name.first} ${name.last}`}</title>
      </Helmet>
      <FaTimes className="user-card--container-close-btn" />
      <div className="user-card--container-info">
        <div className="user-card--container-info--avatar avatar">          <img src={picture.large} alt={name.first + ' ' + name.last + ' ' + 'profile picture'} /></div>
        <div className="user-card--container-info--title">{`${name.title}. ${name.first} ${name.last}`}</div>
        <div className="info txt-center mb-2 bold">👤 {login.username}</div>
        <div className="info txt-center"><span className="font-sm">✉️</span> {email}</div>
        <div className="info txt-center"><span className="font-sm">📞</span> {phone}</div>

        <div className="location mt-2  py-1">
          <div className="info txt-center">{location.city} - {location.state} - {location.country}{' '}
          </div>
          <div className="info txt-center">
            {location.street.name},{location.street.number}
          </div>
          <div className="info txt-center">
            <span className="bold">Postal code:</span> {location.postcode}
          </div>
        </div>
        <div className="info txt-center">
          <span className="bold">Age:</span> {dob.age}
        </div>
        <div className="info txt-center"><span className="bold">Nationality:</span> {nat}</div>
      </div>
    </div>
  );
};

export default UserCard;
