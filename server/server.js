const express = require("express");
const fetch = require("node-fetch");

const Bluebird = require('bluebird');
fetch.Promise = Bluebird;

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

  socket.on("join-room", ({ roomId, user, roomName }, callback) => {

    socket.emit("message", { user: bot, message: `Welcome ${user.name} to ${roomName} chat server 😊🎉`, type: "text", sender: 'user' });
    socket.broadcast.to(roomId).emit("message", { user: bot, message: `${user.name} has joined the gang 🥳`, type: "text", sender: 'user' });

    socket.join(roomId);

    io.to(roomId).emit("fetchRoomData", roomId);

    callback(socket.id)

  });

  socket.on("disconnect", () => {
    console.log("disconnected");
    
    let id = socket.id
    fetch(`http://localhost:8000/user?socketId=${id}`, {
      method: 'DELETE',
    }).then(()=>{
      console.log("deleted");
    })
    
    // io.to(roomId).emit("message", { user: bot, message: `someone has left from gang 😥`, type: "text", sender: 'user' });

  });

});

const serverPort = process.env.PORT || 8080;
server.listen(serverPort, () =>
  console.log(`server started at port ${serverPort}`)
);
