"use strict";
const Like = require("../libraries/Like");
const myLike = new Like();

async function getLikes(res) {
  myLike.likesGet(res);
}

const createLike = (data, res) => {
  //creates a new user using JSON data POSTed in request body
  console.log(data);
  myLike.likePost(data, res);
};

//No need
// async function updateLike(req, res) {
//   myLike.likePut(req, res);
// }

async function deleteLike(req, res) {
  myLike.likeDelete(req, res);
}

module.exports = {
  getLikes,
  createLike,
  deleteLike,
};
