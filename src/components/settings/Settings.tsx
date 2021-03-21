import React, { useContext, useEffect } from 'react';
import { MainContext } from '../../context/app.context';



const Settings = () => {
  const [appContext, setAppContext] = useContext(MainContext)
  const nationalities = [ 'CH', 'ES', 'FR', 'GB' ]
  
  const handleCheckbox = (nat: string, checked: boolean) => {
    if (checked) {
      setAppContext({...appContext, filterNationality: [...appContext.filterNationality, nat]})
    } else {
      const natArray = appContext.filterNationality;
      const index = natArray.indexOf(nat);
      if (index >= 0) {
        natArray.splice( index, 1 );
        setAppContext({...appContext, filterNationality: natArray})
      }
    }

  }

  return (
    <div style={{
      background: '#3e3e3e',
      height: '16rem', 
      width: '14rem', 
      position: 'absolute', 
      top: 48,
      right: 40,
      padding: '1rem',
      borderRadius: 5,
      opacity: 0.9,
      zIndex: 10,
      display: appContext.showSettings ? 'block' : 'none'}} 
    className="settings--container">
      <div>choose </div>
      {nationalities.map( key => 
        <div key={key}>
        <input type="checkbox" onChange={e => handleCheckbox(key, e.target.checked)} defaultChecked={false}/>  
        <span>{key}</span>
        </div>
      )}
    </div>
  );
};

export default Settings;
