// server
const jsonServer = require("json-server");
const server = jsonServer.create();

const path = require("path");
const router = jsonServer.router(path.join(__dirname, "/db.json"));

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("/api", router);
server.use(router);

// listening server on port
const SERVER_PORT = process.env.PORT || 8000;
server.listen(SERVER_PORT, () =>
  console.log(`[INFO] DATABASE SERVER STARTED AT PORT ${SERVER_PORT}`)
);
