import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import io from 'socket.io-client';

import "./App.css";

import constants from './utils/consts';
// components

import Landing from "./components/landing/Landing";
import Home from "./components/home/Home";
import Chat from "./components/chat/Chat";

function App() {
  var socket = io(constants.server, { transports: ["websocket"] });
  const [user, setUser] = useState([]);

  let tempUser = {
    name: "john",
    email: "john@gmail.com",
    profile: "https://www.w3schools.com/w3images/streetart2.jpg",
  };

  return (
    <Router>
      {/* landing page  */}
      <Switch>

        {/* landing  */}
        <Route exact path="/">
          <Landing setUser={setUser} />
        </Route>

        {/* home  */}
        <Route exact path="/app">
          <Home socket={socket} userData={user} />
        </Route>

        {/* chat */}
        <Route exact path="/chat/:roomId">
          <Chat socket={socket} user={tempUser} />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
