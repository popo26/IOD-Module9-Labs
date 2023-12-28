const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const serverSocket = new Server(server);

let count = 0;
let onlineUsers = [];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

serverSocket.on("connection", (clientSocket) => {
  count++;
  serverSocket.emit("onlineUsers", onlineUsers);

  clientSocket.on("welcome", (msg) => {
    console.log("welcome", msg.nickname);
    onlineUsers.push(msg.nickname);
    console.log("online users", onlineUsers);
    serverSocket.emit("onlineUsers", onlineUsers);
    clientSocket.broadcast.emit("welcome", {
      text: msg.nickname + " just joined👋🏽",
      connectionMsg: true,
    });
  });

  serverSocket.emit("userCount", count);

  clientSocket.on("chat message", (msg) => {
    console.log("message: " + msg.text + " by " + msg.nickname);
    //Don’t send the same message to the user that sent it.
    //Instead, append the message directly as soon as he/she presses enter.
    clientSocket.broadcast.emit("chat message", msg);
    serverSocket.emit("not typing"); // sends to the initiating socket/client, so it doesn't show '(self) is typing'
  });

  clientSocket.on("close browser", (msg) => {
    console.log(msg.nickname + " has left.");
    onlineUsers.splice(onlineUsers.indexOf(msg.nickname), 1);
    console.log("array", onlineUsers);
    clientSocket.broadcast.emit("close browser", {
      text: msg.nickname + " has left.",
      connectionMsg: true,
    });
  });

  clientSocket.on("disconnect", () => {
    count--;
    serverSocket.emit("userCount", count);
    serverSocket.emit("onlineUsers", onlineUsers);
  });

  //Broadcast Who is typing, excluding sender.
  clientSocket.on("typing", (msg) => {
    //Add “{user} is typing” functionality.
    clientSocket.broadcast.emit("typing", {
      text: msg.nickname + " is typing...",
    });
    clientSocket.emit("not typing"); // sends to everyone that no-one is typing right now, so it clears out 'xxx is typing'
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});