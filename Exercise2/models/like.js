const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = require("./post");
const userSchema = require("./user");

const likeSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userSchema",
    required: true,
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "postSchema",
    required: true,
  },
});

module.exports = mongoose.model("like", likeSchema); // always singular - e.g, user. Mongoose makes it into plural
