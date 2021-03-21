import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './components/navbar/Navbar';
import UsersList from './components/users_list/Users_List';
import { MainContext } from './context/app.context';
import './App.scss';
import Settings from './components/settings/Settings';
export default function App() {
  const [appContext, setAppContext] = useState({ showSettings: false, filterNationality: [] })

  return (
    <MainContext.Provider value={[appContext, setAppContext]}>
      <div className="application--container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Address book</title>
          <link rel="canonical" href="https://addressbook-jb.herokuapp.com" />
        </Helmet>
        <Settings />
        <Navbar />
        <UsersList />
      </div>
    </MainContext.Provider>
  );
}
