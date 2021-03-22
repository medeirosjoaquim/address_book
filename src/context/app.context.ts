import React from 'react';
import { IUser } from '../models/user.model';

/*
const UserRow = ({ name: { first, last },
  location,
  picture,
  email,
  dob,
  login,
  phone
}: IUser
*/

type UserDetails = Pick<IUser, 
  'name'    |
  'location'|
  'picture' |
  'email'   |
  'dob'     |
  'login'   |
  'phone'   
>
export interface IMainState {
  showSettings: boolean;
  searchText: string;
  searchKey: string;
  filterNationality: string[];
  userDetails: UserDetails | null
}

type MainState = [IMainState, (value: IMainState) => void];

export const MainContext = React.createContext<MainState>([
  {showSettings: false, filterNationality: [], searchKey: '', searchText: '', userDetails: null},
  (value: IMainState) => {},
]);

