const express = require("express");
const fetch = require("node-fetch");

// const Bluebird = require('bluebird');
// fetch.Promise = Bluebird;

const { v4: uuid } = require("uuid");
const { database } = require("./constants");

const app = express();

const server = require("http").createServer(app);

const socket = require("socket.io");
const { resolve, reject } = require("bluebird");
const io = socket(server);

let bot = {
  name: "UBot",
  profile: "https://www.w3schools.com/w3images/streetart2.jpg",
};

function deleteUser(id) {
  // fetch user using socket id
  // user will have a default database id
  // delete using that database id

  return new Promise((resolve, reject) => {
    fetch(`${database}/users?socketId=${id}`).then((databaseData) => {
      databaseData.json().then((user) => {
        fetch(`${database}/users/${user[0].id}`, {
          method: "DELETE",
        });

        resolve(user[0]); // to send all mates about user
      });
    });
  });
}

io.on("connection", (socket) => {
  // this will take care of chat

  socket.on("join-room", ({ roomId, user, roomName }, callback) => {
    socket.emit("message", {
      user: bot,
      message: `Welcome ${user.name} to ${roomName} chat server 😊🎉`,
      type: "text",
      sender: "user",
    });
    socket.broadcast
      .to(roomId)
      .emit("message", {
        user: bot,
        message: `${user.name} has joined the gang 🥳`,
        type: "text",
        sender: "user",
      });

    socket.join(roomId);

    io.to(roomId).emit("fetchRoomData", roomId);

    callback(socket.id);
  });

  socket.on("disconnect", () => {
    let id = socket.id;

    deleteUser(id).then((user) => {
      io.to(user.room).emit('message', { user: bot, message: `${user.name} has left the gang 😥`, type: 'text', sender: 'user' });
    });
  });
});

const serverPort = process.env.PORT || 8080;
server.listen(serverPort, () =>
  console.log(`server started at port ${serverPort}`)
);
