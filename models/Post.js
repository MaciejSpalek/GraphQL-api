const { model, Schema } = require("mongoose");

const postSchema = new Schema({
  author: String,
  description: String,
  createdAt: String,
});

module.exports = model("Post", postSchema);
