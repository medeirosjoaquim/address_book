import React, { useState } from 'react';
import Modal from 'react-modal';

import { IUser } from '../../models/user.model';
import './user-row.scss';

const modalStyles = {
  content: {

  },
  overlay: {
    zIndex: 2,
    backgroundColor: '#418ef2',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
};

const UserRow = ({ name: { first, last },
  location,
  picture,
  email,
  dob,
  login,
  phone
}: IUser) => {
  const [showModal, setShowModal] = useState(false)
  const handleCloseModal = () => {
    setShowModal(false)
  }
  const handleOpen = () => {
    setShowModal(true)
  }

  return (
    <>
      <div className="user-row--container flex-grid"
        onClick={handleOpen}>
        <div className="col-1 avatar">
          <img src={picture.thumbnail} alt="" />
        </div>
        <div className="col-2 user-row--container-info">
          <div className="name--info">
            <span>{first + ' ' + last + ' - '}</span>
            <span>{email}</span>
          </div>
          <div className="location--info">
            <div>
              {location.city} - {location.country}
            </div>
            <div>
              {location.street.name}, {location.street.number}
            </div>
          </div>
        </div>
      </div>
      <Modal
        className="Modal"
        overlayClassName="Overlay"
        isOpen={showModal}
        shouldCloseOnOverlayClick={true}
        onRequestClose={handleCloseModal}

      >
        <h1>{first}</h1>
        <h1>{login.username}</h1>
      </Modal>
    </>
  );
};

export default UserRow;
