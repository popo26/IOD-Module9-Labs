const express = require("express");
const app = express();
const bodyParser = require("body-parser")
require("dotenv").config();

// parse requests of content-type -application / json;
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

let dbConnect = require("./dbConnect");

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my Exercise2 application." });
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
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
