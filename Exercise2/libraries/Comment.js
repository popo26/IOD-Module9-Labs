let Models = require("../models"); //matches index.js

class Comment{
    constructor(){}

    commentsGet(res){
        Models.Comment.find({})
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
          console.log(err);
          res.send({ result: 500, error: err.message });
        });
    }

    commentPost(data, res){
        new Models.Comment(data)
        .save()
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
          console.log(err);
          res.send({ result: 500, error: err.message });
        });
    }

      //REQ.BODY is empty - not working
    commentPut(req, res){
        Models.Comment.findByIdAndUpdate(req.params.id, req.body, {
            useFindAndModify: false,
          })
            .then((data) => res.send({ result: 200, data: data })) //return value `data` is the value before the change.
            .catch((err) => {
              console.log(err);
              res.send({ result: 500, error: err.message });
            });
    }

    commentDelete(req, res){
        Models.Comment.findByIdAndDelete(req.params.id, req.body, {
            useFindAndModify: false,
          })
            .then((data) => res.send({ result: 200, data: data }))
            .catch((err) => {
              console.log(err);
              res.send({ result: 500, error: err.message });
            });
    }
}

module.exports=Comment;