const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const serverSocket = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

serverSocket.on("connection", (clientSocket) => {
  console.log("a user connected");

  clientSocket.on("new user", () => {
    serverSocket.emit("new user", { text: "A new user is connected", connectionMsg: true });
  });

  clientSocket.on("chat message", (msg) => {
    console.log("message: " + msg);
    serverSocket.emit("chat message", msg);
    serverSocket.emit("not typing"); // sends to the initiating socket/client, so it doesn't show '(self) is typing'
  });

  clientSocket.on("disconnect", () => {
    console.log("user disconnected");
    serverSocket.emit("user disconnect", { text: "An user is disconnected", connectionMsg: true });
  });

  //Broadcast Who is typing, excluding sender. 
  clientSocket.on("typing", (msg) => {
    //Add “{user} is typing” functionality.
    clientSocket.broadcast.emit("typing", { text: msg.nickname + " is typing..." });
    clientSocket.emit("not typing"); // sends to everyone that no-one is typing right now, so it clears out 'xxx is typing'
  });

   //Broadcast Who is online, excluding sender. -- NOT WORKING
   clientSocket.on("online", () => {
    clientSocket.broadcast.emit("online", { text: msg.nickname + " is online" });
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});








////////////////////ORIGINAL/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

// //Ref:https://socket.io/get-started/chat
// const express = require("express");
// const app = express();
// //socket.io is independent from express.js, and use http. Independent of tool but use http protocol.
// const http = require("http");
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const serverSocket = new Server(server);

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });


// // serverSocket.on("new user", ()=>{
// //     serverSocket.emit("new user", "A new user is connected");
// // })

// // //Broadcast
// // serverSocket.on('connection', (clientSocket) => {
// //   clientSocket.broadcast.emit('hi');
// //   console.log("Broadcast Hi")
// // });



// //like event handler "on"
// serverSocket.on('connection', (clientSocket) => {
//     // this is for backend so this console is printed in this terminal not brower
//     console.log('a user connected');
//     clientSocket.on('disconnect', () => {
//       console.log('user disconnected');
//     });
//     clientSocket.on("chat message", (msg)=> {
//       console.log('message: ' + msg)
//     })

//     //send the message to everyone, including the sender
//     clientSocket.on('chat message', (msg) => {
//       serverSocket.emit('chat message', msg);
//     });
//   });

//   // io.on('connection', (socket) => {
//   //   socket.on('chat message', (msg) => {
//   //     console.log('message: ' + msg);
//   //     io.emit("chat message", msg);
//   //   });
//   // });

// server.listen(3000, () => {
//   console.log("listening on *:3000");
// });
