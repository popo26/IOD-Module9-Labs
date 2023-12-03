const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = require("./user");

const postSchema = new Schema({
  title: { type: String, trim: true, required: true },
  content: { type: String },
  images:[{type:String}],
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userSchema",
    required: true,
  },
});

module.exports = mongoose.model("post", postSchema); // always singular - e.g, user. Mongoose makes it into plural
