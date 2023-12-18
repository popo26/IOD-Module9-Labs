let Models = require("../models"); //matches index.js

class Like {
  constructor() {}

  async likesGet(res){
    try {
        const data = await Models.Like.find({});
        res.send({ result: 200, data: data });
      } catch (e) {
        res.send({ result: 500, error: e.message });
      }
  }

  likePost(data, res){
    new Models.Like(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
  }

  //No need
//   async likePut(req, res){
//     try {
//         const newLike = Models.Like.findByIdAndUpdate(req.params.id, req.body, {
//           useFindAndModify: false,
//         });
//         await newLike.save();
//         res.send({ result: 200, data: newLike });
//       } catch (e) {
//         res.send({ result: 500, error: e.message });
//       }
//   }

//Not working
  async likeDelete(req, res){
    try {
        const deletedLike = Models.Like.findByIdAndDelete(req.params.id, req.body, {
          useFindAndModify: false,
        });
        res.send({ result: 200, data: deletedLike });
      } catch (e) {
        res.send({ result: 500, error: e.message });
      }
  }


}

module.exports = Like;
