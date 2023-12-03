"use strict";
const Models = require("../models");

const getPosts = (res) => {
  Models.Post.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const createPost = (data, res) => {
  // TRIM VALUES BEFORE CALLING SQL unlike MongoDB's trim
  Models.Post.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const updatePost = (req, res) => {
  Models.Post.update(req.body, { where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data }); // REturn value is number of row that was affected- see doc
    })
    .catch((err) => {
      throw err;
    });
};
const deletePost = (req, res) => {
  Models.Post.destroy({ where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data }); //return value is number of destroyed row number - see doc
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
};
