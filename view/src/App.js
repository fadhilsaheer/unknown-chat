import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

// components

import Landing from "./components/landing/Landing";
import Home from "./components/home/Home";
import Chat from "./components/chat/Chat";

function App() {
  // var socket = io(server, { transports: ["websocket"] });
  const [user, setUser] = useState([]);

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
          <Home userData={user} />
        </Route>

        {/* chat */}
        <Route exact path="/chat/:roomId">
          <Home />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
