"use strict";
const User = require("./User"); //require the model
const Comment = require("./Comment"); //require the model
const Post = require("./Post"); //require the model
const Like = require("./Like"); //require the model
const User_Post = require("./user_post");



async function init() {
  await User.sync(); //sync the model - link the model(table)
  await Comment.sync(); //sync the model - link the model(table)
  await Post.sync(); //sync the model - link the model(table)
  await Like.sync(); //sync the model - link the model(table)
  await User_Post.sync();

}

init(); //This function actually create the model.

module.exports = {
  User, //export the model
  Comment,
  Post, 
  Like,
  User_Post,
};
