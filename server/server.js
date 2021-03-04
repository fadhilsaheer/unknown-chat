const express = require("express");
const app = express();

const server = require("http").createServer(app);

const { v4: uuid } = require("uuid"); // for getting random id

// socket io connections
const socket = require("socket.io"); // real time data transfer lib
const io = socket(server);

io.on("connection", (socket) => {
  console.log(`user connected ${socket}`);
});

// listening server on port
const serverPort = process.env.PORT || 5000;
server.listen(serverPort, () =>
  console.log(`server started at port ${serverPort}`)
);
