const express = require("express");
const { v4:uuid } = require("uuid");

const app = express();

const server = require("http").createServer(app);

const socket = require("socket.io");
const io = socket(server);

const { getAllRooms, joinRoom } = require("./utils/helper");

io.on("connection", (socket) => {

  // giving all available chats
  socket.on("all-chats", () => {
    let rooms = getAllRooms();
    socket.emit("all-chats", rooms);
  })

  // user join
  socket.on("user-join", (clientData)=>{
    joinRoom(clientData.roomId, clientData.user).then((room)=>{
      
      socket.join(room.id)
      socket.emit("join-room", {room: room, status: true})

    }).catch(()=>{

      socket.emit("join-room", {status: false})

    })
  })

});


const serverPort = process.env.PORT || 8080;
server.listen(serverPort, () => console.log(`server started at port ${serverPort}`));
