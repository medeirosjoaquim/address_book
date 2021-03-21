import React from "react"

export enum Lang {
  CH = 'CH',
  ES = 'ES',
  FR = 'FR',
  GB = 'GB', 
  NONE = ''

}
interface IMainState {
  showSettings: boolean;
  filterLanguage: Lang;
}

type MainState =  [IMainState, (value: IMainState) => void]

export const MainContext = 
  React
    .createContext<MainState>([{showSettings: false, filterLanguage: Lang.NONE},
    (value: IMainState) => {}])
''