import React, {useState, Suspense} from 'react';

import {Helmet} from 'react-helmet';
import Navbar from './components/navbar/Navbar';
import UsersList from './components/users_list/Users_List';
import {MainContext} from './context/app.context';

const Settings = React.lazy(() => import('./components/settings/Settings'));

import './App.scss';
export default function App() {
  const [appContext, setAppContext] = useState({
    showSettings: false,
    filterNationality: [],
    searchKey: 'name',
    searchText: '',
  });

  return (
    <MainContext.Provider value={[appContext, setAppContext]}>
      <div className="application--container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Address book</title>
          <link rel="canonical" href="https://addressbook-jb.herokuapp.com" />
        </Helmet>
        <Suspense fallback={<div>Loading...</div>}>
          <Settings />
        </Suspense>
        <Navbar />
        <UsersList />
      </div>
    </MainContext.Provider>
  );
}
