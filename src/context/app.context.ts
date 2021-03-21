import React from "react"

interface IMainState {
  showSettings: boolean;
  searchText: string;
  searchKey: string;
  filterNationality: string[];
}

type MainState =  [IMainState, (value: IMainState) => void]

export const MainContext = 
  React
    .createContext<MainState>([{showSettings: false,
       filterNationality: [], 
       searchKey: '', 
       searchText: ''},
    (value: IMainState) => {}])
''