const express = require("express");
const { v4: uuid } = require("uuid");

const app = express();

const server = require("http").createServer(app);

const socket = require("socket.io");
const io = socket(server);

const { joinRoom } = require("./utils");

io.on("connection", (socket) => {
  // this will take care of chat

  socket.on("join-room", (clientData) => {
    joinRoom(clientData.user, clientData.roomId).then((users, status) => {
      console.log(users);
      console.log(status);
      // if (status) {
      //   console.log(users);
      //   socket.join(clientData.roomId);
      //   socket.emit("join-room", users);
      //   socket.to(clientData.roomId).emit("user-join", clientData.user);
      // }
    });
  });
});

const serverPort = process.env.PORT || 8080;
server.listen(serverPort, () =>
  console.log(`server started at port ${serverPort}`)
);
