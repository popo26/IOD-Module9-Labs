const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = require("./post");
const userSchema = require("./user");

const commentSchema = new Schema({
  comment: { type: String, required: true, max: 250 },
  date_posted: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  date_updated: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
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

module.exports = mongoose.model("comment", commentSchema); // always singular - e.g, user. Mongoose makes it into plural
