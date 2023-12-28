"use strict";
const Comment = require("../libraries/Comment")
const myComment = new Comment();

const getComments = (res) => {
  //finds all users
  myComment.commentsGet(res);
};
const createComment = (data, res) => {
  //creates a new user using JSON data POSTed in request body
  console.log(data);
  myComment.commentPost(data, res)
};

const updateComment = (req, res) => {
  //updates the user matching the ID from the param using
  //JSON data POSTed in request body
  console.log(req.body);
  myComment.commentPut(req, res)
};
const deleteComment = (req, res) => {
  //deletes the user matching the ID from the param
  myComment.commentDelete(req, res)
};

module.exports = {
  getComments,
  createComment,
  updateComment,
  deleteComment,
};


