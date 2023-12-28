"use strict";
// let Models = require("../models"); //matches index.js
const Post = require("../libraries/Post");
const myPost = new Post();

const getPosts = (res) => {
  //finds all users
  myPost.postsGet(res);
};
const createPost = (data, res) => {
  //creates a new user using JSON data POSTed in request body
  console.log(data);
  myPost.postPost(data, res);
};

const updatePost = (req, res) => {
  //updates the user matching the ID from the param using
  //JSON data POSTed in request body
  console.log(req.body);
  myPost.postPut(req, res);
};
const deletePost = (req, res) => {
  //deletes the user matching the ID from the param
  myPost.postDelete(req, res);
};

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
};