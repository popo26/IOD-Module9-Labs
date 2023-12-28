let Models = require("../models"); //matches index.js

class User {
  constructor() {}

  usersGet(res) {
    //finds all users
    Models.User.find({})
      .then((data) => res.send({ result: 200, data: data }))
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
  }

  userPost(data, res) {
    new Models.User(data)
      .save()
      .then((data) => res.send({ result: 200, data: data }))
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
  }

  //REQ.BODY is empty - not working
  userPut(req, res) {
    console.log("param id", req.params.id);
    console.log("req body in Library", req.body);

    Models.User.findByIdAndUpdate(req.params.id, req.body, {
      useFindAndModify: false,
    })
      .then((data) => res.send({ result: 200, data: data })) //return value `data` is the value before the change.
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
  }

  userDelete(req, res) {
    Models.User.findByIdAndDelete(req.params.id, req.body, {
      useFindAndModify: false,
    })
      .then((data) => res.send({ result: 200, data: data }))
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
  }
}

module.exports = User;