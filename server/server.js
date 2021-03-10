const express = require("express");
const { v4: uuid } = require("uuid");

const app = express();

const server = require("http").createServer(app);

const socket = require("socket.io");
const io = socket(server);


let bot = {
  name: "UBot",
  profile: 'https://www.w3schools.com/w3images/streetart2.jpg'
}

io.on("connection", (socket) => {
  // this will take care of chat

  socket.on("join-room", ({ roomId, user, roomName }) => {

    socket.emit("message", { user: bot, message: `Welcome ${user.name} to ${roomName} chat server 😊🎉`, type: "text" });
    socket.broadcast.to(roomId).emit("message", { user: bot, message: `${user.name} has joined the gang 🥳` });

    socket.join(roomId);

    io.to(roomId).emit("fetchRoomData", roomId);

  });

});

const serverPort = process.env.PORT || 8080;
server.listen(serverPort, () =>
  console.log(`server started at port ${serverPort}`)
);
