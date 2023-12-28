const express = require("express");
const app = express();
require("dotenv").config();

// parse requests of content-type -application / json;
app.use(express.json());

let dbConnect = require("./dbConnect");

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my Exercise3 (SQUELIZE) application." });
});

let userRoutes = require("./routes/userRoutes");
let postRoutes = require("./routes/postRoutes");
let commentRoutes = require("./routes/commentRoutes");
let likeRoutes = require("./routes/likeRoutes");

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);


// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
