let Models = require("../models"); //matches index.js

class Post {
  constructor() {}

  postsGet(res) {
    Models.Post.find({})
      .then((data) => res.send({ result: 200, data: data }))
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
  }

  postPost(data, res) {
    new Models.Post(data)
      .save()
      .then((data) => res.send({ result: 200, data: data }))
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
  }

  postPut(req, res) {
    Models.Post.findByIdAndUpdate(req.params.id, req.body, {
      useFindAndModify: false,
    })
      .then((data) => res.send({ result: 200, data: data })) //return value `data` is the value before the change.
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
  }

  postDelete(req, res) {
    Models.Post.findByIdAndDelete(req.params.id, req.body, {
      useFindAndModify: false,
    })
      .then((data) => res.send({ result: 200, data: data }))
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
  }
}

module.exports = Post;
