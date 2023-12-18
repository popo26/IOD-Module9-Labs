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

async function updateLike(req, res) {
  myLike.likePut(req, res);
}

async function deleteLike(req, res) {
  myLike.likeDelete(req, res);
}

module.exports = {
  getLikes,
  createLike,
  updateLike,
  deleteLike,
};

// "use strict";
// let Models = require("../models"); //matches index.js

// // const getLikes = (res) => {
// //   //finds all users
// //   Models.Like.find({})
// //     .then((data) => res.send({ result: 200, data: data }))
// //     .catch((err) => {
// //       console.log(err);
// //       res.send({ result: 500, error: err.message });
// //     });
// // };

// async function getLikes(res) {
//   try {
//     const data = await Models.Like.find({});
//     res.send({ result: 200, data: data });
//   } catch (e) {
//     res.send({ result: 500, error: e.message });
//   }
// }

// const createLike = (data, res) => {
//   //creates a new user using JSON data POSTed in request body
//   console.log(data);
//   new Models.Like(data)
//     .save()
//     .then((data) => res.send({ result: 200, data: data }))
//     .catch((err) => {
//       console.log(err);
//       res.send({ result: 500, error: err.message });
//     });
// };

// ////Not working
// // async function createLike(data, res) {
// //   try {
// //     await Models.Like.create({ data });
// //     console.log(newLike)
// //     res.send({ result: 200, data: data });
// //   } catch (e) {
// //     res.send({ result: 500, error: e.message });
// //   }
// // }

// // const updateLike = (req, res) => {
// //   //updates the user matching the ID from the param using
// //   //JSON data POSTed in request body
// //   console.log(req.body);
// //   Models.Like.findByIdAndUpdate(req.params.id, req.body, {
// //     useFindAndModify: false,
// //   })
// //     .then((data) => res.send({ result: 200, data: data })) //return value `data` is the value before the change.
// //     .catch((err) => {
// //       console.log(err);
// //       res.send({ result: 500, error: err.message });
// //     });
// // };

// async function updateLike(req, res) {
//   try {
//     const newLike = Models.Like.findByIdAndUpdate(req.params.id, req.body, {
//       useFindAndModify: false,
//     });
//     await newLike.save();
//     res.send({ result: 200, data: newLike });
//   } catch (e) {
//     res.send({ result: 500, error: e.message });
//   }
// }

// // const deleteLike = (req, res) => {
// //   //deletes the user matching the ID from the param
// //   Models.Like.findByIdAndDelete(req.params.id, req.body, {
// //     useFindAndModify: false,
// //   })
// //     .then((data) => res.send({ result: 200, data: data }))
// //     .catch((err) => {
// //       console.log(err);
// //       res.send({ result: 500, error: err.message });
// //     });
// // };

// async function deleteLike(req, res) {
//   try {
//     const deletedLike = Models.Like.findByIdAndDelete(req.params.id, req.body, {
//       useFindAndModify: false,
//     });
//     res.send({ result: 200, data: deletedLike });
//   } catch (e) {
//     res.send({ result: 500, error: e.message });
//   }
// }

// module.exports = {
//   getLikes,
//   createLike,
//   updateLike,
//   deleteLike,
// };
