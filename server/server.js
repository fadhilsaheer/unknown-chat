const express = require("express");
const { v4: uuid } = require("uuid");

const app = express();

const server = require("http").createServer(app);

const socket = require("socket.io");
const io = socket(server);

const { userJoin } = require("./utils");

io.on("connection", (socket) => {
  // this will take care of chat

  socket.on("join-room", (clientData) => {
    let serverResult = userJoin(clientData.user, clientData.roomId);
    if(serverResult != false){
      socket.emit("join-room", serverResult);
    };
  });
});

const serverPort = process.env.PORT || 8080;
server.listen(serverPort, () =>
  console.log(`server started at port ${serverPort}`)
);
