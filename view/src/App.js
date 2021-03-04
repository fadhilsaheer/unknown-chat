import React from "react";
import io from 'socket.io-client'

import "./App.css";

function App() {

  io()

  return (
    <div>
      <h1>Unknown Chat</h1>
    </div>
  );
}

export default App;
