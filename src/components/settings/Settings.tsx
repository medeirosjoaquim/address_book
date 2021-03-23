import React, {useContext, useEffect} from 'react';
import {MainContext} from '../../context/app.context';
import './settings.scss';

const Settings = () => {
  const [appContext, setAppContext] = useContext(MainContext);
  const nationalities = ['CH', 'ES', 'FR', 'GB', 'DE', 'BR'];

  const handleCheckbox = (nat: string, checked: boolean) => {
    if (checked) {
      setAppContext({...appContext, filterNationality: [...appContext.filterNationality, nat]});
    } else {
      const natArray = appContext.filterNationality;
      const index = natArray.indexOf(nat);
      if (index >= 0) {
        natArray.splice(index, 1);
        setAppContext({...appContext, filterNationality: natArray});
      }
    }
  };

  return (
    <div
      style={{
        display: appContext.showSettings ? 'block' : 'none',
      }}
      onClick={() => setAppContext({...appContext, showSettings: false})}
      className="settings--container"
    >
      <div className="wrapper">
        <span className="settings--container-title">Settings</span>
        <div className="settings--container-nationalities">
          {nationalities.map(key => (
            <div className="nationality-checkbox" key={key}>
              <input
                style={{marginRight: 12}}
                type="checkbox"
                onChange={e => handleCheckbox(key, e.target.checked)}
                defaultChecked={false}
              />
              <span>{key}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;
