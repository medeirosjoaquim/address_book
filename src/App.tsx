import React from "react";
import {Helmet} from "react-helmet";

export default function App() {
  return (
    <div className="application--container">
       <Helmet>
                <meta charSet="utf-8" />
                <title>Address book</title>
                <link rel="canonical" href="https://addressbook-jb.herokuapp.com" />
       </Helmet>
      <h1>hello, world!</h1>
    </div>
  );
}
