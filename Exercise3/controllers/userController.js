"use strict";
const Models = require("../models");

const getUsers = (res) => {
  Models.User.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const createUser = (data, res) => {
  // TRIM VALUES BEFORE CALLING SQL unlike MongoDB's trim
  Models.User.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const updateUser = (req, res) => {
  Models.User.update(req.body, { where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data }); // REturn value is number of row that was affected- see doc
    })
    .catch((err) => {
      throw err;
    });
};
const deleteUser = (req, res) => {
  Models.User.destroy({ where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data }); //return value is number of destroyed row number - see doc
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
