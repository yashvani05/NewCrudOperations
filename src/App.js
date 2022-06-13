import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MyAddContact from "./components/AddContact/MyAddContact";
import MyEditContact from "./components/EditContact/MyEditContact";

import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Route exact path="/" component={() => <MyAddContact />} />
      <Route exact path="/edit/:id" component={() => <MyEditContact />} />
    </div>
  );
};
export default App;
