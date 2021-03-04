const express = require("express");
const app = express();

const server = require("http").createServer(app);

const socketIo = require("socket.io");
const io = socketIo(server);

// socket io connection

io.on("connection", (socket) => {});

// listening server on port
const serverPort = process.env.PORT || 5000;
server.listen(serverPort, () =>
  console.log(`Server started at http://localhost:${serverPort}`)
);
