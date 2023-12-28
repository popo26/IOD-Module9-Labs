"use strict";
const User = require("../libraries/User");
const myUser = new User();

const getUsers = (res) => {
  // //finds all users
  myUser.usersGet(res);
};
const createUser = (data, res) => {
  //creates a new user using JSON data POSTed in request body
  console.log(data);
  myUser.userPost(data, res);
};

//Not working
const updateUser = (req, res) => {
  //updates the user matching the ID from the param using
  //JSON data POSTed in request body
  console.log("Req Body in Controller", req.body);
  myUser.userPut(req, res);
};

//Not working
const deleteUser = (req, res) => {
  //deletes the user matching the ID from the param
  myUser.userDelete(req, res);
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};