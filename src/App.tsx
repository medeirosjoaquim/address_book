import React from "react";
import {Helmet} from "react-helmet";
import Navbar from "./components/navbar/Navbar";
import UsersList from "./components/users_list/Users_List";
import './App.scss';
export default function App() {
  return (
    <div className="application--container">
       <Helmet>
                <meta charSet="utf-8" />
                <title>Address book</title>
                <link rel="canonical" href="https://addressbook-jb.herokuapp.com" />
       </Helmet>
       <Navbar/>
       <UsersList/>
    </div>
  );
}
