import React from 'react';
import { IUser } from '../models/user.model';

type UserDetails = Pick<IUser, 
  'name'    |
  'picture' |
  'location'|
  'email'   |
  'dob'     |
  'login'   |
  'phone'   |
  'nat'     
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

