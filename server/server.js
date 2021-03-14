const express = require("express");

const app = express();

const server = require("http").createServer(app);

const socket = require("socket.io");
const io = socket(server);

const socketHandler = require("./socket");

io.on("connection", (socket) => {
  socketHandler(socket, io);
});

const serverPort = process.env.PORT || 8080;
server.listen(serverPort, () =>
  console.log(`server started at port ${serverPort}`)
);
