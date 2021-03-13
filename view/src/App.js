import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import io from "socket.io-client";

import "./App.css";

import constants from "./utils/consts";
// components

import Landing from "./components/landing/Landing";
import Home from "./components/home/Home";
import Chat from "./components/chat/Chat";
import LoginPage from "./components/Login/Login";

function App() {
  var socket = io(constants.server, { transports: ["websocket"] });

  const [user, setUser] = useState([]);

  return (
    <Router>
      {/* landing page  */}
      <Switch>
        {/* landing  */}
        <Route exact path="/">
          <Landing setUser={setUser} />
        </Route>

        {/* for login */}

        <Route exact path="/login">
          <LoginPage user={user} setUser={setUser} />
        </Route>

        {/* home  */}
        <Route exact path="/app">
          <Home socket={socket} userData={user} setUser={setUser} />
        </Route>

        {/* chat */}
        <Route exact path="/chat">
          <Chat socket={socket} user={user} />
        </Route>

        {/* 404 */}
        <Route>
          <Landing setUser={setUser} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
