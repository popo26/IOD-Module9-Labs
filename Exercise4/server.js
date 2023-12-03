const express = require("express");
require("dotenv").config();
var cors = require('cors')
var app = express()

app.use(cors())

// parse requests of content-type -application / json;
app.use(express.json());



app.get("/", (req, res) => {
  res.json({ message: "Welcome to my Exercise4 (Backend with MVC) application." });
});

let productRoutes = require("./routes/productRoutes");


app.use("/api/products", productRoutes);



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
