import React from 'react'
import { CSSProperties } from 'styled-components';


export const userCardStyles = (
  show: boolean,
): CSSProperties => ({
  display: show ? 'none' : 'block',
  width:  1280,
  height: 75,
  zIndex: 10,
  position: 'relative',
  top: 0,
  left: 0,
})



const UserCard = () => {

  return (
    <>
      <h1>test</h1>
    </>
  )
}

export default UserCard
