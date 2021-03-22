import React, { useEffect } from 'react';
import UserCard from '../user_card/User_Card';

import './user-card-modal.scss';

type IProps = {
  showModal: boolean;
  handleShowModal: (val: boolean) => void;
}

function UserCardModal({handleShowModal = () => false, showModal = false }: IProps) {
  const handleClickToClose = (e?: MouseEvent) => {
    const element = e.target as HTMLElement;
    console.log(element?.classList.value)
    if (element?.classList?.value.includes('user-card--container')
    || element?.classList?.value.includes('user-card-modal--container')) {
      document.removeEventListener('click', handleClickToClose);
      handleShowModal(false);
    }
  };

useEffect(() => {
 if (showModal) {
   document.addEventListener('click', e => handleClickToClose(e))
 }
 return () => {
   //cleanup
 }
}, [showModal])
  return <div style={{display: showModal ? 'block' : 'none'}}
  className="user-card-modal--container">
    <UserCard />
    <button onClick={() => handleShowModal(false)}>close</button>
  </div>;
}

export default UserCardModal;
