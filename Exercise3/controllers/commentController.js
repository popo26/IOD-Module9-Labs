"use strict";
const Models = require("../models");

const getComments = (res) => {
  Models.Comment.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const createComment = (data, res) => {
  // TRIM VALUES BEFORE CALLING SQL unlike MongoDB's trim
  Models.Comment.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const updateComment = (req, res) => {
  Models.Comment.update(req.body, { where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data }); // REturn value is number of row that was affected- see doc
    })
    .catch((err) => {
      throw err;
    });
};
const deleteComment = (req, res) => {
  Models.Comment.destroy({ where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data }); //return value is number of destroyed row number - see doc
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  getComments,
  createComment,
  updateComment,
  deleteComment,
};
