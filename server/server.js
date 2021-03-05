const express = require("express");
const { v4:uuid } = require("uuid");

const app = express();

const server = require("http").createServer(app);

const socket = require("socket.io");
const io = socket(server);

io.on("connection", (socket) => {
  console.log("user connected " + socket.id);
});


const serverPort = process.env.PORT || 8080;
server.listen(serverPort, () => console.log(`server started at port ${serverPort}`));
