const express = require("express");
const app = express();

const server = require("http").createServer(app);

const { v4: uuid } = require("uuid")

const socketIo = require("socket.io");
const io = socketIo(server);

// helpers

const { getAllRooms, createRoom, joinRoom } = require("./utils/helper");

// socket io connection

io.on("connection", (socket) => {

  // send all rooms when user connects

  socket.on("user-connected", ()=>{
    let rooms = getAllRooms();
    socket.emit("all-room", rooms);
  })

  // create room
  socket.on("create-room", (roomData)=>{
    let id  = uuid();
    roomData.id = id;

    createRoom(roomData);
    socket.emit("room-created", roomData); // send client room data

  })

  // joining room
  socket.on("join-room", (roomId, userData)=>{

    joinRoom(roomId, userData)
    .then((room)=>{
      socket.emit("joined-room", room)
    })
    .catch(()=>{
      socket.emit("failed-join")

    })
  })


});

// listening server on port
const serverPort = process.env.PORT || 5000;
server.listen(serverPort, () =>
  console.log(`Server started at http://localhost:${serverPort}`)
);
