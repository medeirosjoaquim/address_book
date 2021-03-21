import React from "react"

interface IMainState {
  showSettings: boolean;
  filterNationality: string[];
}

type MainState =  [IMainState, (value: IMainState) => void]

export const MainContext = 
  React
    .createContext<MainState>([{showSettings: false, filterNationality: []},
    (value: IMainState) => {}])
''