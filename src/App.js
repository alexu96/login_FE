import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/store";

import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import HomePage from "./components/pages/HomePage";
import GetFile from "./components/pages/GetFile.js";

import "./App.css";
import { Redirect } from "react-router-dom";

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/home" component={HomePage} />
          <Route exact path="/get-file/:userId" component={GetFile} />
          {<Redirect exact from='/' to="/home"/> }
        </div>
      </Router>
    </Provider>
  );
}
