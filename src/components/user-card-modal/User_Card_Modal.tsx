import React from 'react';
import UserCard from '../user_card/User_Card';

import './user-card-modal.scss';

function UserCardModal({showModal = false}) {

  // const handleClose = (e?: MouseEvent) => {
  //   const element = e.target as HTMLElement;
  //   if (element?.classList?.value.includes('overlay')) {
  //     document.removeEventListener('click', handleClose);
  //     setAppContext({...appContext, showSettings: false});
  //   }
  // };

  return <div style={{display: showModal ? 'block' : 'none'}}
  className="user-card-modal--container">
    <UserCard />
  </div>;
}

export default UserCardModal;
