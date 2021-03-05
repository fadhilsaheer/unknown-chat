import React, { useEffect } from "react";
import io from "socket.io-client";

import "./App.css";
const server = "http://127.0.0.1:8080";

function App() {
  var socket = io(server, { transports: ["websocket"] });

  return (
    <div>
      <h1>Unknown Chat</h1>
    </div>
  );
}

export default App;
