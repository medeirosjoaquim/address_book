import React, { useContext } from 'react';
import { MainContext } from '../../context/app.context';



const Settings = () => {
  const [appContext, setAppContext] = useContext(MainContext)
  return (
    <div style={{
      background: 'green',
      height: '8rem', 
      position: 'absolute', 
      display: appContext.showSettings ? 'block' : 'none'}} 
    className="settings--container">
      settings works <pre>{JSON.stringify(appContext.showSettings)}</pre>
    </div>
  );
};

export default Settings;
